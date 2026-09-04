/* داده‌های دوره — بخش ۱۵: درس ۷۱ تا ۷۵ */
window.LESSONS.push(
  {
    id: 71,
    title: "Making Appointments",
    titleFa: "تعیین وقت meeting",
    emoji: "📅",
    intro: "تعیین وقت ملاقات، تأیید و جابه‌جایی وقت — مکالمه اداری روزمره.",
    vocab: [
      { en: "appointment", fa: "وقت ملاقات", tip: "«اپوینتمنت»" },
      { en: "schedule", fa: "برنامه زمانی", tip: "«شِدیول»" },
      { en: "available", fa: "آزاد / در دسترس", tip: "«اویلِبل»" },
      { en: "reschedule", fa: "جابه‌جا کردن وقت", tip: "«ری‌شدیول»" },
      { en: "cancel", fa: "لغو کردن", tip: "«کَنسِل»" },
      { en: "confirm", fa: "تأیید کردن", tip: "«کِنفِرم»" },
      { en: "free / busy", fa: "بلا / مشغول", tip: "«فری / بیزی»" },
      { en: "meet with", fa: "ملاقات با", tip: "«میت ویذ»" },
      { en: "on Monday at 10", fa: "دوشنبه ساعت ۱۰", tip: "«آن ماندِی ات تِن»" },
      { en: "Does that work for you?", fa: "برایت مناسب است؟", tip: "«داز دَت وورک فور یو»" }
    ],
    phrases: [
      { en: "I would like to make an appointment.", fa: "می‌خواهم وقت ملاقات بگذارم." },
      { en: "Are you available on Friday?", fa: "جمعه بلا هستی؟" },
      { en: "Does Monday at 10 work for you?", fa: "دوشنبه ساعت ۱۰ برایت مناسب است؟" },
      { en: "Can we reschedule to next week?", fa: "می‌توانیم به هفته بعد موکول کنیم؟" },
      { en: "I confirm our meeting for tomorrow.", fa: "جلسه فردایمان را تأیید می‌کنم." }
    ],
    dialogue: {
      title: "تعیین وقت با دکتر",
      lines: [
        { speaker: "A", en: "Good morning, Dr. Smith's office.", fa: "صبح بخیر، مطب دکتر اسمیث." },
        { speaker: "B", en: "Hello! I would like to make an appointment.", fa: "سلام! می‌خواهم وقت بگیرم." },
        { speaker: "A", en: "Of course. Are you available on Tuesday?", fa: "حتماً. سه‌شنبه بلا هستید؟" },
        { speaker: "B", en: "Is Friday possible? I am busy on Tuesday.", fa: "جمعه ممکن است؟ سه‌شنبه مشغولم." },
        { speaker: "A", en: "Friday at 3 pm then. Does that work for you?", fa: "پس جمعه ساعت ۳. برایتان مناسب است؟" },
        { speaker: "B", en: "Perfect! I confirm Friday at 3. Thank you!", fa: "کامل! جمعه ۳ را تأیید می‌کنم. ممنون!" }
      ]
    },
    quiz: [
      { q: "«می‌خواهم وقت ملاقات بگذارم» کدام است؟", options: ["I would like to make an appointment.", "I would like make appointment an.", "I like an appointment make."], a: 0 },
      { q: "«جمعه بلا هستی؟» کدام است؟", options: ["Are you available on Friday?", "Are you free in Friday?", "Do you available Friday?"], a: 0 },
      { q: "«می‌توانیم به هفته بعد موکول کنیم؟» کدام است؟", options: ["Can we reschedule to next week?", "Can we schedule cancel next week?", "Can we next week reschedule?"], a: 0 },
      { q: "«لغو کردن» کدام است؟", options: ["cancel", "candle", "cancer"], a: 0 },
      { q: "«برایت مناسب است؟» کدام است؟", options: ["Does that work for you?", "Does that works you for?", "Is that work to you?"], a: 0 }
    ]
  },
  {
    id: 72,
    title: "Talking about Money",
    titleFa: "گفتگو درباره پول",
    emoji: "💰",
    intro: "خرج، پس‌انداز و قیمت‌ها — مکالمه درباره پول روزمره.",
    vocab: [
      { en: "spend", fa: "خرج کردن", tip: "«سپِند»" },
      { en: "save", fa: "پس‌انداز کردن", tip: "«سِیو»" },
      { en: "price / cost", fa: "قیمت / هزینه", tip: "«پرایس / کاست»" },
      { en: "expensive / cheap", fa: "گران / ارزان", tip: "«اکسپنسیو / چیپ»" },
      { en: "pay / payment", fa: "پرداخت", tip: "«پِی / پِیمنت»" },
      { en: "cash / card", fa: "نقد / کارت", tip: "«کش / کارد»" },
      { en: "discount", fa: "تخفیف", tip: "«دیسکاونت»" },
      { en: "afford", fa: "خریداری توانستن", tip: "«افورد»" },
      { en: "budget", fa: "بودجه", tip: "«باجِت»" },
      { en: "How much does it cost?", fa: "چقدر هزینه دارد؟", tip: "«هاو ماچ داز ایت کاست»" }
    ],
    phrases: [
      { en: "How much does it cost?", fa: "چقدر هزینه دارد؟" },
      { en: "I can't afford it right now.", fa: "الان توان خریدش را ندارم." },
      { en: "I am saving money for a car.", fa: "برای ماشین پس‌انداز می‌کنم." },
      { en: "I spend too much on coffee!", fa: "خیلی خرج قهوه می‌کنم!" },
      { en: "Can I pay by card?", fa: "می‌توانم با کارت پرداخت کنم؟" }
    ],
    dialogue: {
      title: "گفتگو درباره بودجه",
      lines: [
        { speaker: "A", en: "I want to buy a new laptop, but they are expensive.", fa: "می‌خواهم لپ‌تاپ نو بخرم، ولی گران‌اند." },
        { speaker: "B", en: "How much does your favorite one cost?", fa: "موردعلاقه‌ات چقدر هزینه دارد؟" },
        { speaker: "A", en: "Nine hundred dollars. I can't afford it right now.", fa: "نهصد دلار. الان نمی‌توانم بخرمش." },
        { speaker: "B", en: "Maybe you can save money for three months?", fa: "شاید بتوانی سه ماه پس‌انداز کنی؟" },
        { speaker: "A", en: "Good idea! I will stop spending on coffee!", fa: "فکر خوبیه! خرج قهوه را قطع می‌کنم!" }
      ]
    },
    quiz: [
      { q: "«چقدر هزینه دارد؟» کدام است؟", options: ["How much does it cost?", "How many it costs?", "What cost it has much?"], a: 0 },
      { q: "«الان توان خریدش را ندارم» کدام است؟", options: ["I can't afford it right now.", "I can't pay it right now both.", "I can't buy afford now."], a: 0 },
      { q: "«برای ماشین پس‌انداز می‌کنم» کدام است؟", options: ["I am saving money for a car.", "I save moneys for car.", "I am save money car."], a: 0 },
      { q: "«می‌توانم با کارت پرداخت کنم؟» کدام است؟", options: ["Can I pay by card?", "Can I pay with card money?", "Can I card pay by?"], a: 0 },
      { q: "«بودجه» کدام است؟", options: ["budget", "budjet", "badge it"], a: 0 }
    ]
  },
  {
    id: 73,
    title: "Simple Future: Will",
    titleFa: "آینده ساده: will",
    emoji: "🔮",
    intro: "قرارها و پیش‌بینی‌ها با will — I will call you tomorrow!",
    vocab: [
      { en: "will", fa: "خواهم (آینده)", tip: "«ویل»" },
      { en: "won't (will not)", fa: "نخواهم", tip: "«وونت»" },
      { en: "I will call you", fa: "زنگ می‌زنم بهت", tip: "«آی ویل کال یو»" },
      { en: "tomorrow / next week", fa: "فردا / هفته بعد", tip: "«تومورو / نکست ویک»" },
      { en: "probably", fa: "احتمالاً", tip: "«پرابابلی»" },
      { en: "I think... will", fa: "فکر می‌کنم ... خواهد", tip: "«آی ثینک»" },
      { en: "promise", fa: "قول دادن", tip: "«پرامیس»" },
      { en: "maybe / perhaps", fa: "شاید", tip: "«مِیبی / پرهَپس»" },
      { en: "in the future", fa: "در آینده", tip: "«این دِ فیوچر»" },
      { en: "Will you...?", fa: "... خواهی؟", tip: "«ویل یو»" }
    ],
    phrases: [
      { en: "I will call you tomorrow.", fa: "فردا بهت زنگ می‌زنم." },
      { en: "I won't be late, I promise!", fa: "دیر نمی‌کنم، قول می‌دهم!" },
      { en: "I think it will rain tonight.", fa: "فکر می‌کنم امشب باران بیاید." },
      { en: "Will you help me with this?", fa: "کمکم می‌کنی با این؟" },
      { en: "We will probably meet on Sunday.", fa: "احتمالاً یکشنبه می‌بینیم." }
    ],
    dialogue: {
      title: "قرار آخر هفته",
      lines: [
        { speaker: "A", en: "Will you come to the party on Saturday?", fa: "شنبه به مهمانی می‌آیی؟" },
        { speaker: "B", en: "I think I will. I won't be late, I promise!", fa: "فکر کنم بیایم. دیر نمی‌کنم، قول می‌دهم!" },
        { speaker: "A", en: "Great! I will prepare the food.", fa: "عالی! من غذا را آماده می‌کنم." },
        { speaker: "B", en: "And I will bring drinks.", fa: "و من نوشیدنی می‌آورم." },
        { speaker: "A", en: "It will be a great party!", fa: "مهمانی فوق‌العاده‌ای خواهد شد!" }
      ]
    },
    quiz: [
      { q: "«فردا بهت زنگ می‌زنم» کدام است؟", options: ["I will call you tomorrow.", "I call you will tomorrow.", "I will calling you tomorrow."], a: 0 },
      { q: "«دیر نمی‌کنم» کدام است؟", options: ["I won't be late.", "I am not late will.", "I don't late will."], a: 0 },
      { q: "جمله منفی will کدام است؟", options: ["won't", "willn't", "not will"], a: 0 },
      { q: "«فکر می‌کنم امشب باران بیاید» کدام است؟", options: ["I think it will rain tonight.", "I think it rains tonight will.", "I think will rain tonight it."], a: 0 },
      { q: "«احتمالاً» کدام است؟", options: ["probably", "probable maybe", "perhaps it"], a: 0 }
    ]
  },
  {
    id: 74,
    title: "At the Office",
    titleFa: "در دفتر کار",
    emoji: "🏢",
    intro: "مکالمه‌های دفتری: ایمیل، پرینتر، جلسه و ناهار با همکارها.",
    vocab: [
      { en: "office", fa: "دفتر", tip: "«اوفیس»" },
      { en: "email / inbox", fa: "ایمیل / صندوق ورودی", tip: "«ایمِیل / اینباکس»" },
      { en: "printer / scan", fa: "پرینتر / اسکن", tip: "«پرینتِر / اسکن»" },
      { en: "meeting room", fa: "اتاق جلسه", tip: "«میتینگ روم»" },
      { en: "colleague", fa: "همکار", tip: "«کالیگ»" },
      { en: "deadline", fa: "مهلت", tip: "«دِدلاین»" },
      { en: "take a break", fa: "استراحت کردن", tip: "«تِیک ا برِیک»" },
      { en: "lunch break", fa: "وقفه ناهار", tip: "«لانچ برِیک»" },
      { en: "busy / free", fa: "مشغول / بلا", tip: "«بیزی / فری»" },
      { en: "print it out", fa: "پرینتش کن", tip: "«پرینت ایت اوت»" }
    ],
    phrases: [
      { en: "Can you print this out for me?", fa: "می‌توانی این را برایم پرینت کنی؟" },
      { en: "I have a meeting at noon.", fa: "ساعت ظهر جلسه دارم." },
      { en: "The deadline is on Friday.", fa: "مهلت جمعه است." },
      { en: "Let's take a lunch break together.", fa: "با هم وقفه ناهار بگیریم." },
      { en: "My inbox is full of emails!", fa: "صندوق ورودیم پر از ایمیل است!" }
    ],
    dialogue: {
      title: "صبح دوشنبه در دفتر",
      lines: [
        { speaker: "A", en: "Good morning! Is the printer working?", fa: "صبح بخیر! پرینتر کار می‌کند؟" },
        { speaker: "B", en: "Yes, but it is out of paper.", fa: "بله، ولی کاغذ ندارد." },
        { speaker: "A", en: "I will get some. By the way, do we have a meeting today?", fa: "کمی می‌آورم. راستی، امروز جلسه داریم؟" },
        { speaker: "B", en: "Yes, at noon in the big meeting room.", fa: "بله، ظهر در اتاق جلسه بزرگ." },
        { speaker: "A", en: "OK. Let's take a coffee break first!", fa: "خب. اول یک وقفه قهوه بگیریم!" }
      ]
    },
    quiz: [
      { q: "«می‌توانی این را برایم پرینت کنی؟» کدام است؟", options: ["Can you print this out for me?", "Can you print me this for out?", "Can this print out you for me?"], a: 0 },
      { q: "«مهلت جمعه است» کدام است؟", options: ["The deadline is on Friday.", "The deadline is in Friday.", "The deadline Friday is on."], a: 0 },
      { q: "«وقفه ناهار» کدام است؟", options: ["lunch break", "lunch pause", "noon break lunch"], a: 0 },
      { q: "«صندوق ورودیم پر از ایمیل است» کدام است؟", options: ["My inbox is full of emails.", "My inbox full emails of is.", "My inbox has full emails."], a: 0 },
      { q: "«استراحت کردن» کدام است؟", options: ["take a break", "make a break", "do a break"], a: 0 }
    ]
  },
  {
    id: 75,
    title: "Polite English",
    titleFa: "انگلیسی محترمانه",
    emoji: "🎩",
    intro: "تفاوت درخواست مستقیم و مؤدبانه — کلید مکالمه حرفه‌ای.",
    vocab: [
      { en: "Would you...?", fa: "... می‌کردی؟ (محترمانه)", tip: "«وود یو»" },
      { en: "Could you possibly...?", fa: "شاید می‌توانستید...؟", tip: "«کود یو پاسیبلی»" },
      { en: "May I...?", fa: "اجازه دارم...؟", tip: "«مِی آی»" },
      { en: "I was wondering if...", fa: "می‌خواستم بدانم اگر...", tip: "«آی واز واندرینگ ایف»" },
      { en: "Would you mind...?", fa: "اشکال دارد اگر...؟", tip: "«وود یو مایند»" },
      { en: "please", fa: "لطفاً", tip: "«پلیز»" },
      { en: "excuse me / sorry", fa: "ببخشید / متأسفم", tip: "«اکسکیوز می / سُری»" },
      { en: "Direct: Give me water", fa: "مستقیم: آب بده", tip: "غیرمؤدبانه!" },
      { en: "Polite: Could I have water?", fa: "مؤدبانه: آب می‌توانم بگیرم؟", tip: "درست و مؤدبانه" },
      { en: "That would be great", fa: "عالی می‌شود", tip: "«دَت وود بی گرِیت»" }
    ],
    phrases: [
      { en: "Could you open the window, please?", fa: "می‌شود لطفاً پنجره را باز کنید؟" },
      { en: "Would you mind helping me?", fa: "اشکال دارد کمکم کنید؟" },
      { en: "May I come in?", fa: "اجازه هست وارد شوم؟" },
      { en: "I was wondering if you could help me.", fa: "می‌خواستم ببینم می‌توانید کمکم کنید." },
      { en: "That would be great, thank you!", fa: "عالی می‌شود، ممنون!" }
    ],
    dialogue: {
      title: "درخواست‌های مؤدبانه در دفتر",
      lines: [
        { speaker: "A", en: "Excuse me, Sarah? I was wondering if you could help me.", fa: "ببخشید، سارا؟ می‌خواستم ببینم می‌توانی کمکم کنی." },
        { speaker: "B", en: "Of course! What do you need?", fa: "حتماً! چه لازم داری؟" },
        { speaker: "A", en: "Would you mind checking my report?", fa: "اشکال دارد گزارشم را چک کنی؟" },
        { speaker: "B", en: "Not at all. Could you send it by email?", fa: "هرگز. می‌توانی با ایمیل بفرستی؟" },
        { speaker: "A", en: "Sure. May I use your printer too?", fa: "حتماً. از پرینتت هم استفاده کنم؟" },
        { speaker: "B", en: "Of course you may! That would be no problem.", fa: "حتماً می‌توانی! مشکلی نیست." }
      ]
    },
    quiz: [
      { q: "مؤدبانه‌ترین شکل «آب بده» کدام است؟", options: ["Give me water!", "Water, now!", "Could I have some water, please?"], a: 2 },
      { q: "«اشکال دارد کمکم کنید؟» کدام است؟", options: ["Would you mind helping me?", "Would you mind help me?", "Do you mind help me?"], a: 0 },
      { q: "«اجازه هست وارد شوم؟» کدام است؟", options: ["May I come in?", "Do I come in?", "Can I entering?"], a: 0 },
      { q: "جواب مثبت به Would you mind...? کدام است؟", options: ["Yes, I do.", "Not at all.", "No problem yes."], a: 1 },
      { q: "«می‌خواستم ببینم می‌توانید کمکم کنید» کدام است؟", options: ["I was wondering if you could help me.", "I wonder if you can help me now.", "I am wondering you could help."], a: 0 }
    ]
  }
);
