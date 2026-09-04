/* English Talk — منطق اصلی اپ */
"use strict";

/* ============ ابزارها ============ */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const Store = {
  KEY: "englishtalk_v1",
  data: null,
  load() {
    try { this.data = JSON.parse(localStorage.getItem(this.KEY)) || {}; } catch (e) { this.data = {}; }
    if (!this.data.done) this.data.done = {};        // {lessonId: {quiz:bool, speak:count}}
    if (!this.data.wordsSeen) this.data.wordsSeen = 0;
    if (!this.data.quizPassed) this.data.quizPassed = 0;
    if (!this.data.lastLesson) this.data.lastLesson = 1;
    if (!this.data.speakOk) this.data.speakOk = 0;
    return this.data;
  },
  save() { try { localStorage.setItem(this.KEY, JSON.stringify(this.data)); } catch (e) {} },
  lessonDone(id) { return this.data.done[id] || (this.data.done[id] = {}); },
  isUnlocked(id) {
    if (id <= 1) return true;
    const prev = this.data.done[id - 1];
    return !!(prev && prev.quiz);
  },
};

const faDigits = (n) => String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

/* ============ متن به گفتار (شنیدن) ============ */
const Speaker = {
  synth: window.speechSynthesis,
  voice: null,
  rate: 0.9,
  init() {
    if (!this.synth) return;
    const pick = () => {
      const vs = this.synth.getVoices();
      this.voice =
        vs.find((v) => /en[-_]GB/i.test(v.lang) && /female|Google/i.test(v.name)) ||
        vs.find((v) => /en[-_]GB/i.test(v.lang)) ||
        vs.find((v) => /^en/i.test(v.lang)) || null;
    };
    pick();
    this.synth.onvoiceschanged = pick;
  },
  speak(text, onEnd) {
    if (!this.synth) { alert("مرورگر شما از پخش صدا پشتیبانی نمی‌کند"); if (onEnd) onEnd(); return; }
    this.synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-GB";
    if (this.voice) u.voice = this.voice;
    u.rate = this.rate;
    u.onend = () => { if (onEnd) onEnd(); };
    u.onerror = () => { if (onEnd) onEnd(); };
    this.synth.speak(u);
  },
  stop() { if (this.synth) this.synth.cancel(); },
};

/* ============ تشخیص گفتار (گفتن) ============ */
const Recognizer = {
  rec: null,
  active: false,
  supported: "webkitSpeechRecognition" in window || "SpeechRecognition" in window,
  init(onResult, onEnd) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.rec = new SR();
    this.rec.lang = "en-US";
    this.rec.interimResults = false;
    this.rec.maxAlternatives = 3;
    this.rec.onresult = (e) => {
      const alts = [];
      for (let i = 0; i < e.results[0].length; i++) alts.push(e.results[0][i].transcript);
      if (onResult) onResult(alts);
    };
    this.rec.onerror = (e) => {
      this.active = false;
      if (onEnd) onEnd(e.error);
    };
    this.rec.onend = () => { this.active = false; if (onEnd) onEnd(null); };
  },
  start() {
    if (this.active) return;
    this.active = true;
    try { this.rec.start(); } catch (e) { this.active = false; }
  },
  stop() { try { this.rec.stop(); } catch (e) {} },
};

/* شباهت دو جمله (ساده و مؤثر: کلمات مشترک + ترتیب) */
function similarity(said, target) {
  const norm = (t) => t.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
  const a = norm(said).split(" ");
  const b = norm(target).split(" ");
  if (!a.length) return 0;
  const pool = [...b];
  let hit = 0;
  for (const w of a) {
    const i = pool.indexOf(w);
    if (i > -1) { hit++; pool.splice(i, 1); }
  }
  const wordScore = hit / b.length;
  const lenPenalty = Math.min(1, b.length / Math.max(a.length, 1));
  return Math.round(wordScore * lenPenalty * 100);
}

/* ============ وضعیت درس جاری ============ */
const LessonState = {
  id: 1,
  lesson: null,
  speakIdx: 0,
  quizIdx: 0,
  quizOk: 0,
};

function currentLessons() { return window.LESSONS || []; }

/* ============ صفحه‌ها و ناوبری ============ */
function showPage(name) {
  $$(".page").forEach((p) => p.classList.remove("active"));
  $("#page-" + name).classList.add("active");
  $$(".tabbar .tb").forEach((b) => b.classList.toggle("on", b.dataset.page === name));
  Speaker.stop();
  if (name === "talk") Talk.renderList();
  if (name === "progress") renderProgress();
  window.scrollTo(0, 0);
}

$$(".tabbar .tb").forEach((b) => b.addEventListener("click", () => showPage(b.dataset.page)));

/* ============ صفحه خانه ============ */
function renderHome() {
  const d = Store.data;
  $("#stat-lessons").textContent = faDigits(Object.values(d.done).filter((x) => x && x.quiz).length);
  $("#stat-words").textContent = faDigits(d.wordsSeen);
  $("#stat-quiz").textContent = faDigits(d.quizPassed);

  const list = $("#lesson-list");
  list.innerHTML = "";
  currentLessons().forEach((L) => {
    const st = d.done[L.id] || {};
    const unlocked = Store.isUnlocked(L.id);
    const doneAll = st.quiz && st.speak;
    const item = document.createElement("div");
    item.className = "lesson-item" + (unlocked ? "" : " locked") + (st.quiz ? " done" : "");
    item.innerHTML = `
      <div class="emoji">${st.quiz ? "✅" : unlocked ? L.emoji : "🔒"}</div>
      <div class="info">
        <div class="t">${L.id}. ${L.titleFa}</div>
        <div class="s">${L.title}${st.speak ? " · 🎤 گفتار تمرین‌شده" : ""}</div>
      </div>
      <div class="go">${st.quiz ? "✓" : unlocked ? "←" : ""}</div>`;
    if (unlocked) item.addEventListener("click", () => openLesson(L.id));
    list.appendChild(item);
  });

  const totalDone = Object.values(d.done).filter((x) => x && x.quiz).length;
  const pct = Math.round((totalDone / currentLessons().length) * 100);
  let bar = $("#home-progress-fill");
  if (!bar) {
    bar = document.createElement("div");
    bar.className = "pbar";
    bar.innerHTML = '<div class="fill" id="home-progress-fill" style="width:0%"></div>';
    const line = document.createElement("div");
    line.className = "progress-line";
    line.id = "home-progress-line";
    const listEl = $("#lesson-list");
    listEl.parentNode.insertBefore(bar, listEl);
    listEl.parentNode.insertBefore(line, listEl);
  }
  $("#home-progress-fill").style.width = pct + "%";
  $("#home-progress-line").textContent = `پیشرفت کل دوره: ${faDigits(pct)}٪ — ${faDigits(totalDone)} از ${faDigits(currentLessons().length)} درس`;
}

$("#continue-btn").addEventListener("click", () => {
  let target = Store.data.lastLesson || 1;
  if (!Store.isUnlocked(target)) target = 1;
  openLesson(target);
});

/* ============ بازکردن درس ============ */
function openLesson(id) {
  const L = currentLessons().find((x) => x.id === id);
  if (!L) return;
  LessonState.id = id;
  LessonState.lesson = L;
  LessonState.speakIdx = 0;
  Store.data.lastLesson = id;
  Store.save();

  $("#ls-emoji").textContent = L.emoji;
  $("#ls-title").textContent = `${faDigits(L.id)}. ${L.titleFa}`;
  $("#ls-sub").textContent = `Lesson ${L.id} — ${L.title}`;
  $("#ls-intro").textContent = L.intro;

  renderVocab(L);
  renderPhrases(L);
  renderDialog(L);
  resetSpeak();
  startQuiz(L);

  showPage("lesson");
  $$(".tab").forEach((t) => { t.classList.toggle("on", t.dataset.tab === "vocab"); });
  $$(".tabpane").forEach((p) => p.classList.remove("on"));
  $("#pane-vocab").classList.add("on");
}

$("#back-home").addEventListener("click", () => { renderHome(); showPage("home"); });

/* تب‌های درس */
$$(".tab").forEach((t) => t.addEventListener("click", () => {
  $$(".tab").forEach((x) => x.classList.remove("on"));
  t.classList.add("on");
  $$(".tabpane").forEach((p) => p.classList.remove("on"));
  $("#pane-" + t.dataset.tab).classList.add("on");
  if (t.dataset.tab === "quiz") startQuiz(LessonState.lesson);
}));

/* ============ واژه‌ها ============ */
function renderVocab(L) {
  const box = $("#vocab-list");
  box.innerHTML = "";
  L.vocab.forEach((w) => {
    const row = document.createElement("div");
    row.className = "word-row";
    row.innerHTML = `
      <button class="speak-btn">🔊</button>
      <div class="en">${w.en}<span class="tip">${w.tip}</span></div>
      <div class="fa">${w.fa}</div>`;
    row.querySelector(".speak-btn").addEventListener("click", function () {
      $$(".speak-btn.playing").forEach((b) => b.classList.remove("playing"));
      this.classList.add("playing");
      const text = w.en.replace(/\s*\/\s*/g, " , ").replace(/\s*\.\s*$/, "");
      Speaker.speak(text, () => this.classList.remove("playing"));
    });
    box.appendChild(row);
  });
  Store.data.wordsSeen = Math.max(Store.data.wordsSeen, 0);
  if (!(Store.lessonDone(L.id).vocab)) {
    Store.lessonDone(L.id).vocab = true;
    Store.data.wordsSeen += L.vocab.length;
    Store.save();
  }
}

/* ============ عبارات ============ */
function renderPhrases(L) {
  const box = $("#phrases-list");
  box.innerHTML = "";
  L.phrases.forEach((p) => {
    const item = document.createElement("div");
    item.className = "phrase-item";
    item.innerHTML = `
      <div class="en"><span>${p.en}</span><button class="speak-btn">🔊</button></div>
      <div class="fa">${p.fa}</div>
      <button class="repeat-btn">🔁 تکرار کن (بشنو و بگو)</button>`;
    item.querySelector(".speak-btn").addEventListener("click", function () {
      this.classList.add("playing");
      setTimeout(() => this.classList.remove("playing"), 600);
      Speaker.speak(p.en);
    });
    item.querySelector(".repeat-btn").addEventListener("click", function () {
      Speaker.speak(p.en);
    });
    box.appendChild(item);
  });
}

/* ============ دیالوگ ============ */
function renderDialog(L) {
  $("#dlg-title").textContent = L.dialogue.title;
  const chat = $("#dlg-chat");
  chat.innerHTML = "";
  L.dialogue.lines.forEach((ln) => {
    const m = document.createElement("div");
    m.className = "msg " + ln.speaker;
    m.innerHTML = `
      <button class="play-chip">🔊</button>
      <div class="who">${ln.speaker === "A" ? "👤 شخص A" : "🧑‍💼 شخص B"}</div>
      <div class="en">${ln.en}</div>
      <div class="fa">${ln.fa}</div>`;
    m.querySelector(".play-chip").addEventListener("click", (e) => { e.stopPropagation(); Speaker.speak(ln.en); });
    m.addEventListener("click", () => Speaker.speak(ln.en));
    chat.appendChild(m);
  });
}

$("#dlg-play").addEventListener("click", () => {
  const lines = LessonState.lesson.dialogue.lines;
  let i = 0;
  const next = () => { if (i < lines.length) Speaker.speak(lines[i++].en, next); };
  next();
});

$("#dlg-next").addEventListener("click", () => {
  const nx = LessonState.id + 1;
  if (nx <= currentLessons().length && Store.isUnlocked(nx)) openLesson(nx);
  else { renderHome(); showPage("home"); }
});

/* ============ تمرین گفتار ============ */
function speakTargets() {
  const L = LessonState.lesson;
  return [...L.phrases.map((p) => p.en), ...L.dialogue.lines.map((l) => l.en)];
}

function renderSpeak() {
  const t = speakTargets();
  if (LessonState.speakIdx >= t.length) LessonState.speakIdx = 0;
  $("#mic-text").textContent = t[LessonState.speakIdx];
  $("#mic-status").textContent = "روی دکمه میکروفون بزن و جمله بالا را بگو";
  $("#mic-status").className = "mic-status";
  $("#mic-result").classList.remove("show");
}

function resetSpeak() { LessonState.speakIdx = 0; renderSpeak(); }

$("#mic-listen-first").addEventListener("click", () => Speaker.speak(speakTargets()[LessonState.speakIdx]));
$("#mic-prev").addEventListener("click", () => { if (LessonState.speakIdx > 0) LessonState.speakIdx--; renderSpeak(); });
$("#mic-next").addEventListener("click", () => { LessonState.speakIdx++; renderSpeak(); });

const micBtn = $("#mic-btn");
if (!Recognizer.supported) {
  $("#mic-status").textContent = "مرورگر شما تمرین گفتار را پشتیبانی نمی‌کند — از Chrome استفاده کن. بقیه امکانات اپ کار می‌کند.";
}

micBtn.addEventListener("click", () => {
  if (!Recognizer.supported) { $("#mic-status").textContent = "پشتیبانی نمی‌شود. لطفاً Chrome را امتحان کن."; return; }
  if (Recognizer.active) { Recognizer.stop(); return; }

  const target = speakTargets()[LessonState.speakIdx];
  micBtn.classList.add("rec");
  $("#mic-status").textContent = "🎙️ دارا گوش می‌کنم... جمله را بگو";
  $("#mic-status").className = "mic-status";
  $("#mic-result").classList.remove("show");

  Recognizer.init(
    (alts) => {
      const best = Math.max(...alts.map((a) => similarity(a, target)));
      const heard = alts[0] || "";
      const box = $("#mic-result");
      box.classList.add("show");
      $("#mic-heard").textContent = heard || "—";
      const badge = $("#mic-score");
      let lvl, cls;
      if (best >= 75) { lvl = "عالی! ⭐ " + faDigits(best); cls = "ok"; Store.data.speakOk++; Store.lessonDone(LessonState.id).speak = true; Store.save(); }
      else if (best >= 40) { lvl = "خوب بود! " + faDigits(best) + "٪ — دوباره تلاش کن"; cls = "mid"; }
      else { lvl = "تقریباً! " + faDigits(best) + "٪ — گوش کن و دوباره بگو"; cls = "bad"; }
      badge.textContent = lvl;
      badge.className = "score-badge " + cls;
      $("#mic-status").textContent = best >= 75 ? "آفرین! جمله بعدی را امتحان کن 🎉" : "دوباره روی 🎙️ بزن";
      $("#mic-status").className = "mic-status " + (best >= 75 ? "ok" : "bad");
    },
    (err) => {
      micBtn.classList.remove("rec");
      if (err === "not-allowed") $("#mic-status").textContent = "دسترسی میکروفون داده نشد — از تنظیمات مرورگر مجوز بده";
      else if (err === "no-speech") $("#mic-status").textContent = "صدایی نشنیدم — دوباره روی 🎙️ بزن";
    }
  );
  Recognizer.start();
});

/* ============ آزمون ============ */
function startQuiz(L) {
  LessonState.quizIdx = 0;
  LessonState.quizOk = 0;
  renderQuiz();
}

function renderQuiz() {
  const L = LessonState.lesson;
  const Q = L.quiz[LessonState.quizIdx];
  const body = $("#quiz-body");
  $("#quiz-progress").textContent = `سؤال ${faDigits(LessonState.quizIdx + 1)} از ${faDigits(L.quiz.length)} — درست: ${faDigits(LessonState.quizOk)}`;

  if (!Q) {
    const passed = LessonState.quizOk >= Math.ceil(L.quiz.length * 0.6);
    const first = !Store.lessonDone(L.id).quiz;
    if (passed && first) { Store.lessonDone(L.id).quiz = true; Store.data.quizPassed++; Store.save(); }
    else if (passed) Store.lessonDone(L.id).quiz = true, Store.save();

    const nx = L.id + 1;
    const hasNext = nx <= currentLessons().length;
    body.innerHTML = `
      <div class="q-final">
        <div class="big">${passed ? "🎉" : "😕"}</div>
        <div style="font-size:15px;font-weight:800;margin-top:6px">${faDigits(LessonState.quizOk)} از ${faDigits(L.quiz.length)} درست</div>
        <div class="msg-line">${passed ? "آزمون قبول شد! درس بعدی باز شد 🔓" : "برای قبولی دوباره تلاش کن — واژه‌ها را مرور کن"}</div>
        <div class="dlg-actions" style="margin:0">
          ${!passed ? '<button class="btn pri" onclick="retryQuiz()">🔄 دوباره</button>' : ""}
          ${passed && hasNext ? '<button class="btn pri" onclick="goNextLesson()">درس بعدی ←</button>' : ""}
          ${passed && !hasNext ? '<div style="font-size:13px;color:var(--ok);font-weight:800">🏆 دوره را کامل کردی! آفرین!</div>' : ""}
          <button class="btn ghost" onclick="backHome()">خانه</button>
        </div>
      </div>`;
    return;
  }

  body.innerHTML = "";
  const qEl = document.createElement("div");
  qEl.className = "quiz-q";
  qEl.textContent = Q.q;
  body.appendChild(qEl);
  const opts = document.createElement("div");
  opts.className = "quiz-opts";
  Q.options.forEach((op, i) => {
    const b = document.createElement("button");
    b.className = "opt";
    b.textContent = op;
    b.addEventListener("click", () => {
      [...opts.children].forEach((c, j) => {
        c.disabled = true;
        if (j === Q.a) c.classList.add("correct");
      });
      if (i === Q.a) { LessonState.quizOk++; }
      else b.classList.add("wrong");
      $("#quiz-progress").textContent = `سؤال ${faDigits(LessonState.quizIdx + 1)} از ${faDigits(L.quiz.length)} — درست: ${faDigits(LessonState.quizOk)}`;
      setTimeout(() => { LessonState.quizIdx++; renderQuiz(); }, 900);
    });
    opts.appendChild(b);
  });
  body.appendChild(opts);
}

window.retryQuiz = () => startQuiz(LessonState.lesson);
window.goNextLesson = () => openLesson(LessonState.id + 1);
window.backHome = () => { renderHome(); showPage("home"); };

/* ============ صفحه پیشرفت ============ */
function renderProgress() {
  const d = Store.data;
  const box = $("#progress-card");
  const total = currentLessons().length;
  const doneQ = Object.values(d.done).filter((x) => x && x.quiz).length;
  const doneS = Object.values(d.done).filter((x) => x && x.speak).length;

  let rows = "";
  currentLessons().forEach((L) => {
    const st = d.done[L.id] || {};
    rows += `
      <div class="word-row">
        <div class="en" style="flex:1.6">${st.quiz ? "✅" : "⏳"} ${L.id}. ${L.titleFa}</div>
        <div class="fa" style="flex:.7;text-align:left">آزمون: ${st.quiz ? "قبول" : "—"}<br>گفتار: ${st.speak ? "تمرین‌شده ✓" : "—"}</div>
      </div>`;
  });

  let convRows = "";
  (window.CONVERSATIONS || []).forEach((c) => {
    const st = d.done["conv_" + c.id] || {};
    const stars = st.stars || 0;
    convRows += `
      <div class="word-row">
        <div class="en" style="flex:1.6">${c.emoji} ${c.titleFa}</div>
        <div class="fa" style="flex:.7;text-align:left">${"⭐".repeat(stars) || "—"}</div>
      </div>`;
  });

  box.innerHTML = `
    <div class="sec-title">📊 وضعیت دوره</div>
    <div class="pbar" style="margin:0 0 6px"><div class="fill" style="width:${Math.round((doneQ / total) * 100)}%"></div></div>
    <div class="hint" style="text-align:center;margin-bottom:10px">${faDigits(doneQ)} از ${faDigits(total)} درس (آزمون قبولی)</div>
    <div class="stat-grid" style="margin:0 0 12px">
      <div class="stat"><div class="num">${faDigits(doneS)}</div><div class="lbl">درس با گفتار تمرین‌شده</div></div>
      <div class="stat"><div class="num">${faDigits(d.speakOk || 0)}</div><div class="lbl">جمله درست گفته‌شده</div></div>
      <div class="stat"><div class="num">${faDigits(d.wordsSeen || 0)}</div><div class="lbl">واژه یادگرفته</div></div>
    </div>
    <div class="sec-title">💬 مکالمه‌های دوطرفه</div>
    ${convRows}
    <div class="sec-title">📋 جزئیات درس‌ها</div>
    ${rows}`;
}

$("#reset-btn").addEventListener("click", () => {
  if (confirm("همه پیشرفت‌ها پاک شود؟")) {
    localStorage.removeItem(Store.KEY);
    Store.load();
    renderProgress();
  }
});

/* ============ مکالمه دوطرفه ============ */
const Talk = {
  conv: null,
  step: 0,
  subStep: 0,   // 0: منتظر جواب اصلی | 1: منتظر جواب دوم
  score: 0,
  active: false,

  conversations() { return window.CONVERSATIONS || []; },

  isUnlocked(c) {
    const passed = Object.values(Store.data.done).filter((x) => x && x.quiz).length;
    return passed >= c.unlockedAt;
  },

  renderList() {
    const list = $("#conv-list");
    list.innerHTML = "";
    this.conversations().forEach((c) => {
      const unlocked = this.isUnlocked(c);
      const stars = (Store.data.done["conv_" + c.id] || {}).stars || 0;
      const item = document.createElement("div");
      item.className = "conv-item" + (unlocked ? "" : " locked");
      item.innerHTML = `
        <div class="emoji">${unlocked ? c.emoji : "🔒"}</div>
        <div class="info">
          <div class="t">${c.titleFa}</div>
          <div class="s">${unlocked ? c.desc : "با قبولی " + faDigits(c.unlockedAt) + " درس باز می‌شود"}</div>
        </div>
        <div class="stars">${"⭐".repeat(stars)}</div>
        <div class="go">${unlocked ? "←" : ""}</div>`;
      if (unlocked) item.addEventListener("click", () => this.start(c));
      list.appendChild(item);
    });
  },

  start(c) {
    this.conv = c;
    this.step = 0;
    this.subStep = 0;
    this.score = 0;
    this.active = true;
    $("#conv-list").style.display = "none";
    $("#conv-active").style.display = "block";
    $("#conv-emoji").textContent = c.emoji;
    $("#conv-title").textContent = c.titleFa;
    $("#conv-desc").textContent = c.desc;
    this.renderChat();
    this.playStep();
  },

  back() {
    this.active = false;
    Recognizer.stop();
    Speaker.stop();
    $("#conv-active").style.display = "none";
    $("#conv-list").style.display = "block";
    this.renderList();
  },

  renderChat() {
    const chat = $("#conv-chat");
    chat.innerHTML = "";
    const steps = this.conv.steps;
    for (let i = 0; i <= this.step && i < steps.length; i++) {
      const st = steps[i];
      chat.appendChild(this.msgEl("npc", st.npc, st.npcFa));
      if (i < this.step || (i === this.step && this.subStep > 0)) {
        const userLine = st.userSaid || "";
        if (userLine) chat.appendChild(this.msgEl("user", userLine, ""));
        if (i < this.step) {
          chat.appendChild(this.msgEl("npc", st.npcFollow, st.npcFollowFa));
        }
      }
    }
    if (this.step >= steps.length) {
      const stars = this.score >= steps.length ? 3 : this.score >= Math.ceil(steps.length * 0.6) ? 2 : 1;
      const fin = document.createElement("div");
      fin.className = "card conv-final";
      fin.innerHTML = `
        <div class="big">🎉</div>
        <div class="stars-line">${"⭐".repeat(stars)}</div>
        <div class="msg-line">مکالمه تمام شد! ${faDigits(this.score)} از ${faDigits(steps.length)} مرحله بدون کمک پیش رفتی.<br>می‌توانی دوباره امتحان کنی تا ۳ ستاره بگیری!</div>
        <button class="btn pri" id="conv-finish" style="width:100%">✅ تمام شد</button>`;
      chat.appendChild(fin);
      fin.querySelector("#conv-finish").addEventListener("click", () => this.back());
    }
    const total = steps.length * 2;
    const done = Math.min(this.step * 2 + this.subStep, total);
    $("#conv-progress").textContent = `مرحله ${faDigits(Math.min(this.step + 1, steps.length))} از ${faDigits(steps.length)} — امتیاز: ${faDigits(this.score * 50)}`;
    chat.scrollTop = chat.scrollHeight;
  },

  msgEl(kind, en, fa) {
    const m = document.createElement("div");
    m.className = "msg " + kind;
    m.innerHTML = `
      <div class="who">${kind === "npc" ? "🎭 " + this.conv.title : "🗣️ تو"}</div>
      <div class="en">${en}</div>
      ${fa ? `<div class="fa">${fa}</div>` : ""}`;
    m.addEventListener("click", () => Speaker.speak(en));
    return m;
  },

  currentStep() { return this.conv.steps[Math.min(this.step, this.conv.steps.length - 1)]; },

  expected() {
    const st = this.currentStep();
    return this.subStep === 0 ? st.expects : (st.expects2 || st.expects);
  },

  hint() {
    const st = this.currentStep();
    return this.subStep === 0 ? st.expectHint : (st.expectHint2 || st.expectHint);
  },

  playStep() {
    const st = this.currentStep();
    if (this.subStep === 0) {
      this.showHint("👂 اول گوش کن... روی جمله می‌توانی بزنی تا دوباره پخش شود");
      setTimeout(() => {
        Speaker.speak(st.npc, () => this.showHint("💬 " + this.hint()));
      }, 400);
    } else {
      this.showHint("💬 " + (this.hint()));
    }
    $("#conv-status").textContent = "نوبت توست — روی 🎙️ بزن یا تایپ کن";
    $("#conv-status").className = "mic-status";
  },

  showHint(text) { $("#conv-hint").innerHTML = "💡 " + text; },

  checkAnswer(said) {
    if (this.step >= this.conv.steps.length) return;
    said = (said || "").toLowerCase().trim();
    const st = this.currentStep();
    const ok = this.expected().some((k) => said.includes(k.toLowerCase()));

    st.userSaid = said;

    if (ok) {
      if (this.subStep === 0 && st.expects2) {
        /* جواب اول درست بود — مرحله دوم */
        this.subStep = 1;
        this.renderChat();
        Speaker.speak(st.npcFollow);
        this.showHint("💬 " + (st.expectHint2 || "ادامه بده"));
        $("#conv-status").textContent = "✅ آفرین! جوابش را هم بده";
        $("#conv-status").className = "mic-status ok";
      } else {
        /* هر دو جواب کامل شد — مرحله بعد */
        this.score++;
        this.step++;
        this.subStep = 0;
        this.renderChat();
        if (this.step < this.conv.steps.length) this.playStep();
        else this.finishConv();
        $("#conv-status").textContent = "✅ عالی بود!";
        $("#conv-status").className = "mic-status ok";
      }
    } else {
      this.renderChat();
      $("#conv-status").textContent = "❌ اشکالی ندارد — راهنما پایین است، دوباره بگو";
      $("#conv-status").className = "mic-status bad";
      this.showHint("💡 " + this.hint() + "<br><b>راهنمای جواب: </b>" + (st.npcFailFa || ""));
    }
  },

  finishConv() {
    const stars = this.score >= this.conv.steps.length ? 3 : this.score >= Math.ceil(this.conv.steps.length * 0.6) ? 2 : 1;
    const rec = Store.lessonDone("conv_" + this.conv.id);
    rec.stars = Math.max(rec.stars || 0, stars);
    rec.done = true;
    Store.save();
    this.renderChat();
    this.showHint("🏁 مکالمه تمام شد!");
  }
};

/* رویدادهای صفحه مکالمه */
$("#conv-back").addEventListener("click", () => Talk.back());
$("#conv-restart").addEventListener("click", () => { if (Talk.conv) Talk.start(Talk.conv); });
$("#conv-replay").addEventListener("click", () => {
  const st = Talk.currentStep();
  const text = Talk.subStep === 0 ? st.npc : st.npcFollow;
  if (text) Speaker.speak(text);
});

function sendConvInput() {
  const inp = $("#conv-input");
  const v = inp.value.trim();
  if (!v || !Talk.active || Talk.step >= Talk.conv.steps.length) return;
  inp.value = "";
  Talk.checkAnswer(v);
}
$("#conv-send").addEventListener("click", sendConvInput);
$("#conv-input").addEventListener("keydown", (e) => { if (e.key === "Enter") sendConvInput(); });

$("#conv-mic").addEventListener("click", () => {
  if (!Recognizer.supported) { $("#conv-status").textContent = "مرورگر گفتار را پشتیبانی نمی‌کند — از Chrome استفاده کن یا تایپ کن."; return; }
  if (!Talk.active || Talk.step >= Talk.conv.steps.length) return;
  const micB = $("#conv-mic");
  micB.classList.add("rec");
  $("#conv-status").textContent = "🎙️ گوش می‌کنم... جواب بده";
  Recognizer.init(
    (alts) => {
      micB.classList.remove("rec");
      if (alts && alts.length) Talk.checkAnswer(alts[0]);
    },
    (err) => {
      micB.classList.remove("rec");
      if (err === "not-allowed") $("#conv-status").textContent = "دسترسی میکروفون داده نشد — از تنظیمات مجوز بده";
      else if (err === "no-speech") $("#conv-status").textContent = "صدایی نشنیدم — دوباره بزن یا تایپ کن";
    }
  );
  Recognizer.start();
});

/* ============ نصب PWA ============ */
let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = $("#install-btn");
  btn.style.display = "flex";
  btn.addEventListener("click", async () => {
    if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt = null; btn.style.display = "none"; }
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}

/* ============ شروع ============ */
Store.load();
Speaker.init();
renderHome();
