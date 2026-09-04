/* داده‌های دوره — بخش ۱۸: درس ۸۶ تا ۹۰ */
window.LESSONS.push(
  {
    id: 86,
    title: "Reported Speech",
    titleFa: "نقل قول",
    emoji: "🗣️",
    intro: "حرف زدن دیگران را به someone بگو: She said she was tired.",
    vocab: [
      { en: "He said...", fa: "او گفت...", tip: "«هی سِد»" },
      { en: "She told me...", fa: "به من گفت...", tip: "«شی تولد می»" },
      { en: "They asked...", fa: "آنها پرسیدند...", tip: "«ذر اسکد»" },
      { en: "He said he was busy", fa: "گفت مشغول است", tip: "was به جای is" },
      { en: "She said she would come", fa: "گفت خواهد آمد", tip: "would به جای will" },
      { en: "ask / answer", fa: "پرسیدن / جواب دادن", tip: "«اسک / انسِر»" },
      { en: "repeat", fa: "تکرار کردن", tip: "«ریپیت»" },
      { en: " rumor", fa: "شایعه", tip: "«رومِر»" },
      { en: "exactly", fa: "دقیقاً", tip: "«اگزَکتلی»" },
      { en: "According to...", fa: "به گفته...", tip: "«اُکردینگ تو»" }
    ],
    phrases: [
      { en: "She said she was tired.", fa: "او گفت خسته است." },
      { en: "He told me he would call later.", fa: "به من گفت بعداً زنگ می‌زند." },
      { en: "They asked where I lived.", fa: "آنها پرسیدند کجا زندگی می‌کنم." },
      { en: "The teacher said the exam was easy.", fa: "معلم گفت امتحان آسان بود." },
      { en: "According to the news, it will rain.", fa: "به گفته خبر، باران خواهد آمد." }
    ],
    dialogue: {
      title: "پیام رساندن",
      lines: [
        { speaker: "A", en: "Where is Sara? The meeting starts soon!", fa: "سارا کجاست؟ جلسه تند شروع می‌شود!" },
        { speaker: "B", en: "She told me she was stuck in traffic.", fa: "به من گفت در ترافیک گیر کرده." },
        { speaker: "A", en: "Did she say when she would come?", fa: "گفت چه وقت می‌آید؟" },
        { speaker: "B", en: "She said she would be here in ten minutes.", fa: "گفت ده دقیقه دیگر اینجاست." },
        { speaker: "A", en: "OK. Please tell her we will wait in the meeting room.", fa: "خب. لطفاً به او بگو در اتاق جلسه منتظرش می‌مانیم." }
      ]
    },
    quiz: [
      { q: "«او گفت خسته است» کدام است؟", options: ["She said she was tired.", "She said she is tired.", "She says she tired was."], a: 0 },
      { q: "«به من گفت بعداً زنگ می‌زند» کدام است؟", options: ["He told me he would call later.", "He told me he will call later.", "He said me he calls later."], a: 0 },
      { q: "در نقل قول will به چه تبدیل می‌شود؟", options: ["would", "will be", "shall"], a: 0 },
      { q: "«به گفته...» کدام است؟", options: ["According to", "According of", "Accord to"], a: 0 },
      { q: "told حتماً به چه چیزی نیاز دارد؟", options: ["به شخص (told me)", "به هیچ", "به to"], a: 0 }
    ]
  },
  {
    id: 87,
    title: "Passive Voice",
    titleFa: "جمله مجهول",
    emoji: "🔄",
    intro: "وقتی فاعل مهم نیست: The letter was written by Ali.",
    vocab: [
      { en: "is made", fa: "ساخته می‌شود", tip: "«ایز مِید»" },
      { en: "was written", fa: "نوشته شد", tip: "«واز ریتِن»" },
      { en: "is spoken", fa: "صحبت می‌شود", tip: "«ایز اسپوکِن»" },
      { en: "is called", fa: "نامیده می‌شود", tip: "«ایز کالد»" },
      { en: "by (someone)", fa: "توسط (کسی)", tip: "«بای»" },
      { en: "is known for", fa: "شناخته شده برای", tip: "«ایز نون فور»" },
      { en: "is grown", fa: "کاشته می‌شود", tip: "«ایز گرون»" },
      { en: "is produced", fa: "تولید می‌شود", tip: "«ایز پرودیوسد»" },
      { en: "was built", fa: "ساخته شد", tip: "«واز بیلت»" },
      { en: "English is spoken here", fa: "اینجا انگلیسی صحبت می‌شود", tip: "«اینگلیش ایز اسپوکِن هیر»" }
    ],
    phrases: [
      { en: "This car is made in Japan.", fa: "این ماشین در ژاپن ساخته می‌شود." },
      { en: "The book was written in 1990.", fa: "کتاب در ۱۹۹۰ نوشته شد." },
      { en: "English is spoken all over the world.", fa: "انگلیسی در تمام دنیا صحبت می‌شود." },
      { en: "Rice is grown in the north.", fa: "برنج در شمال کشت می‌شود." },
      { en: "This bridge was built 100 years ago.", fa: "این پل ۱۰۰ سال پیش ساخته شد." }
    ],
    dialogue: {
      title: "درباره شهر",
      lines: [
        { speaker: "A", en: "This city is beautiful. What is it known for?", fa: "این شهر زیباست. چه چیزی معروفیتش است؟" },
        { speaker: "B", en: "It is known for its old bridge. It was built 800 years ago!", fa: "به پل قدیمی‌اش معروف است. ۸۰۰ سال پیش ساخته شد!" },
        { speaker: "A", en: "Amazing! Is tea grown here?", fa: "باورنکردنی! اینجا چای کشت می‌شود؟" },
        { speaker: "B", en: "No, but rice is grown near the river.", fa: "نه، ولی برنج نزدیک رودخانه کشت می‌شود." },
        { speaker: "A", en: "And that beautiful carpet?", fa: "و آن فرش زیبا؟" },
        { speaker: "B", en: "It was made by hand, by local artists.", fa: "دست‌ساز است، توسط هنرمندان محلی." }
      ]
    },
    quiz: [
      { q: "«این ماشین در ژاپن ساخته می‌شود» کدام است؟", options: ["This car is made in Japan.", "This car makes in Japan.", "Japan makes this car is."], a: 0 },
      { q: "ساختار مجهول؟", options: ["be + قسمت سوم فعل", "is + فعل ing", "was + فعل اصلی"], a: 0 },
      { q: "«توسط» در مجهول کدام است؟", options: ["by", "with of", "from by"], a: 0 },
      { q: "«انگلیسی در تمام دنیا صحبت می‌شود» کدام است؟", options: ["English is spoken all over the world.", "English speaks all over the world.", "English speaking all world is."], a: 0 },
      { q: "«ساخته شد» (گذشته) کدام است؟", options: ["was built", "is built", "was builded"], a: 0 }
    ]
  },
  {
    id: 88,
    title: "Used to",
    titleFa: "عادت‌های گذشته",
    emoji: "🕰️",
    intro: "کاری که قبلاً می‌کردی ولی دیگر نه: I used to play football.",
    vocab: [
      { en: "used to", fa: "قبلاً ... می‌کردم", tip: "«یوزد تو»" },
      { en: "I used to smoke", fa: "قبلاً سیگار می‌کشیدم", tip: "حالا دیگر نه!" },
      { en: "I didn't use to", fa: "قبلاً ... نمی‌کردم", tip: "«آی دیدنت یوز تو»" },
      { en: "Did you use to...?", fa: "قبلاً ... می‌کردی؟", tip: "«دید یو یوز تو»" },
      { en: "anymore", fa: "دیگر (نمی...", tip: "«اِنی‌مور»" },
      { en: "childhood", fa: "کودکی", tip: "«چایلدهود»" },
      { en: "back then", fa: "آن زمان‌ها", tip: "«بَک دِن»" },
      { en: "nowadays", fa: "امروزه", tip: "«ناوادِیز»" },
      { en: "habit", fa: "عادت", tip: "«هَبیت»" },
      { en: "grow out of", fa: "از دست دادن عادت با بزرگ شدن", tip: "«گراو اوت اُو»" }
    ],
    phrases: [
      { en: "I used to play football every day.", fa: "قبلاً هر روز فوتبال بازی می‌کردم." },
      { en: "I didn't use to like coffee.", fa: "قبلاً قهوه را دوست نداشتم." },
      { en: "Did you use to live in Shiraz?", fa: "قبلاً در شیراز زندگی می‌کردی؟" },
      { en: "I don't smoke anymore.", fa: "دیگر سیگار نمی‌کشم." },
      { en: "We used to be neighbors back then.", fa: "آن زمان‌ها همسایه بودیم." }
    ],
    dialogue: {
      title: "قدیمی‌ها",
      lines: [
        { speaker: "A", en: "Do you remember our childhood?", fa: "کودکی‌مان را یادت هست؟" },
        { speaker: "B", en: "Of course! We used to play in this street every day.", fa: "حتماً! قبلاً هر روز در این خیابان بازی می‌کردیم." },
        { speaker: "A", en: "And we used to fight over small things!", fa: "و بر سر چیزهای کوچک دعوا می‌کردیم!" },
        { speaker: "B", en: "I didn't use to like you back then!", fa: "آن زمان‌ها دوستت نداشتم!" },
        { speaker: "A", en: "Really? But now you are my best friend!", fa: "واقعاً؟ ولی الان بهترین دوستم هستی!" },
        { speaker: "B", en: "Things change! We grew up.", fa: "چیزها تغییر می‌کنند! بزرگ شدیم." }
      ]
    },
    quiz: [
      { q: "«قبلاً هر روز فوتبال بازی می‌کردم» کدام است؟", options: ["I used to play football every day.", "I use to play football every day now.", "I am used to play football."], a: 0 },
      { q: "شکل منفی used to؟", options: ["didn't use to", "didn't used to", "not used to did"], a: 0 },
      { q: "«دیگر سیگار نمی‌کشم» کدام است؟", options: ["I don't smoke anymore.", "I am not smoking anymore.", "I don't more smoke."], a: 0 },
      { q: "used to برای چیست؟", options: ["عادت‌های گذشته که تمام شده‌اند", "برنامه‌های آینده", "قابلیت‌های حال"], a: 0 },
      { q: "«امروزه» کدام است؟", options: ["nowadays", "now days", "today ways"], a: 0 }
    ]
  },
  {
    id: 89,
    title: "Technology Talk",
    titleFa: "گفتگو درباره تکنولوژی",
    emoji: "💻",
    intro: "گوشی، اپ و مشکل‌های تکنولوژی — مکالمه‌های نسل جدید.",
    vocab: [
      { en: "app (application)", fa: "اپلیکیشن", tip: "«اَپ»" },
      { en: "download / upload", fa: "دانلود / آپلود", tip: "«داون‌لود / آپ‌لود»" },
      { en: "password", fa: "رمز عبور", tip: "«پسورد»" },
      { en: "wifi / internet", fa: "وای‌فای / اینترنت", tip: "«وای‌فای»" },
      { en: "charge / battery", fa: "شارژ / باتری", tip: "«چارج / باتری»" },
      { en: "update", fa: "بروزرسانی", tip: "«آپدِیت»" },
      { en: "delete", fa: "حذف کردن", tip: "«دیلیت»" },
      { en: "notification", fa: "اطلاع‌رسانی", tip: "«نوتیفیکیشن»" },
      { en: "smartphone", fa: "گوشی هوشمند", tip: "«اسمارت‌فون»" },
      { en: "The wifi is down", fa: "وای‌فای قطع است", tip: "«دِ وای‌فای اِز داون»" }
    ],
    phrases: [
      { en: "My phone battery is dying.", fa: "باتری گوشی‌ام رو به اتمام است." },
      { en: "Can I use your wifi password?", fa: "می‌توانم از رمز وای‌فای‌ات استفاده کنم؟" },
      { en: "I need to update my phone.", fa: "باید گوشی‌ام را بروزرسانی کنم." },
      { en: "The wifi is down again!", fa: "وای‌فای باز قطع شد!" },
      { en: "Delete those old photos.", fa: "آن عکس‌های قدیمی را حذف کن." }
    ],
    dialogue: {
      title: "مشکل وای‌فای",
      lines: [
        { speaker: "A", en: "The wifi is down again!", fa: "وای‌فای باز قطع شد!" },
        { speaker: "B", en: "Again? Did you restart the router?", fa: "باز؟ روتر را ری‌استارت کردی؟" },
        { speaker: "A", en: "Yes, twice. My phone battery is dying too!", fa: "بله، دو بار. باتری گوشی‌ام هم رو به اتمام است!" },
        { speaker: "B", en: "Use my charger. What is your password problem?", fa: "شارژرم را ببر. مشکلت با پسورد چه بود؟" },
        { speaker: "A", en: "I forgot it! Can I use your wifi?", fa: "فراموشش کردم! می‌توانم از وای‌فای‌ات استفاده کنم؟" },
        { speaker: "B", en: "Sure, I will send it to you.", fa: "حتماً، برات می‌فرستمش." }
      ]
    },
    quiz: [
      { q: "«باتری گوشی‌ام رو به اتمام است» کدام است؟", options: ["My phone battery is dying.", "My phone battery is dead life.", "My phone is battery dying."], a: 0 },
      { q: "«وای‌فای قطع است» کدام است؟", options: ["The wifi is down.", "The wifi is under.", "The wifi is below."], a: 0 },
      { q: "«رمز عبور» کدام است؟", options: ["password", "pass word of", "wordpass"], a: 0 },
      { q: "«بروزرسانی» کدام است؟", options: ["update", "up date", "update to"], a: 0 },
      { q: "«می‌توانم از رمز وای‌فای‌ات استفاده کنم؟» کدام است؟", options: ["Can I use your wifi password?", "Can I use wifi your password?", "Can your wifi use I password?"], a: 0 }
    ]
  },
  {
    id: 90,
    title: "Social Media",
    titleFa: "شبکه‌های اجتماعی",
    emoji: "📱",
    intro: "پست‌گذاشتن، لایک و استوری — مکالمه‌های دنیای آنلاین.",
    vocab: [
      { en: "social media", fa: "شبکه‌های اجتماعی", tip: "«سوشال مِدیا»" },
      { en: "post / share", fa: "پست / اشتراک گذاشتن", tip: "«پوست / شِر»" },
      { en: "like / comment", fa: "لایک / نظر دادن", tip: "«لایک / کامنت»" },
      { en: "follow / follower", fa: "دنبال کردن / دنبال‌کننده", tip: "«فالو / فالووِر»" },
      { en: "story", fa: "استوری", tip: "«استوری»" },
      { en: "go viral", fa: "وایرال شدن", tip: "«گو وایرال»" },
      { en: "meme", fa: "میم (تصویر طنز)", tip: "«میم»" },
      { en: "account", fa: "حساب کاربری", tip: "«اکاونت»" },
      { en: "privacy", fa: "حریم خصوصی", tip: "«پرایوسی»" },
      { en: "add me", fa: "من را اضافه کن", tip: "«اد می»" }
    ],
    phrases: [
      { en: "Did you see my last post?", fa: "آخرین پستم را دیدی؟" },
      { en: "It went viral overnight!", fa: "یک‌شبه وایرال شد!" },
      { en: "Add me on Instagram.", fa: "در اینستاگرام من را اضافه کن." },
      { en: "I follow English learning pages.", fa: "صفحات آموزش انگلیسی را دنبال می‌کنم." },
      { en: "Don't share everything online. Think about privacy.", fa: "همه‌چیز را آنلاین نگذار. به حریم خصوصی فکر کن." }
    ],
    dialogue: {
      title: "پست وایرال",
      lines: [
        { speaker: "A", en: "Did you see my cat video? It went viral!", fa: "ویدیوی گربه‌ام را دیدی؟ وایرال شد!" },
        { speaker: "B", en: "Yes! It has two million views. Amazing!", fa: "بله! دو میلیون بازدید دارد. باورنکردنی!" },
        { speaker: "A", en: "I got ten thousand new followers overnight.", fa: "یک‌شبه ده هزار دنبال‌کننده جدید گرفتم." },
        { speaker: "B", en: "You should post more often.", fa: "باید بیشتر پست بگذاری." },
        { speaker: "A", en: "Maybe. But I think about privacy too.", fa: "شاید. ولی به حریم خصوصی هم فکر می‌کنم." },
        { speaker: "B", en: "That is smart. Add me by the way!", fa: "این هوشمندانه است. راستی من را اضافه کن!" }
      ]
    },
    quiz: [
      { q: "«وایرال شد» کدام است؟", options: ["It went viral.", "It went virus.", "It is viral went."], a: 0 },
      { q: "«دنبال کردن (در شبکه اجتماعی)» کدام است؟", options: ["follow", "following after", "chase"], a: 0 },
      { q: "«حریم خصوصی» کدام است؟", options: ["privacy", "private life only", "privity"], a: 0 },
      { q: "«در اینستاگرام من را اضافه کن» کدام است؟", options: ["Add me on Instagram.", "Add on Instagram me.", "Instagram add me on."], a: 0 },
      { q: "«نظر دادن» کدام است؟", options: ["comment", "command", "commend"], a: 0 }
    ]
  }
);
