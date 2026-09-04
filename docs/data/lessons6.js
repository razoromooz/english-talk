/* داده‌های دوره — بخش ۶: درس ۲۶ تا ۳۰ */
window.LESSONS.push(
  {
    id: 26,
    title: "Clothes",
    titleFa: "لباس و پوشاک",
    emoji: "👕",
    intro: "انواع لباس، سایز و رنگ‌ها در خرید — مکمل درس خرید.",
    vocab: [
      { en: "clothes", fa: "لباس‌ها", tip: "«کلوز»" },
      { en: "shirt / T-shirt", fa: "پیراهن / تی‌شرت", tip: "«شِرت / تی‌شرت»" },
      { en: "pants / trousers", fa: "شلوار", tip: "«پنتس / تراوزرز»" },
      { en: "dress", fa: "پیراهن زنانه", tip: "«درِس»" },
      { en: "coat / jacket", fa: "کاپشن / جکت", tip: "«کوت / جکت»" },
      { en: "shoes / socks", fa: "کفش / جوراب", tip: "«شوز / ساکس»" },
      { en: "wear", fa: "پوشیدن", tip: "«وِر»" },
      { en: "try on", fa: "پرو کردن", tip: "«ترای آن»" },
      { en: "fit", fa: "اندازه بودن", tip: "«فیت»" },
      { en: "change room", fa: "اتاق پرو", tip: "«چِنج روم»" }
    ],
    phrases: [
      { en: "Can I try on this jacket?", fa: "می‌توانم این جکت را پرو کنم؟" },
      { en: "What size are you?", fa: "سایزت چند است؟" },
      { en: "I am size medium.", fa: "سایزم مدیوم (متوسط) است." },
      { en: "It doesn't fit. Do you have a bigger one?", fa: "اندازه نیست. بزرگ‌تر ندارید؟" },
      { en: "I like your new shoes!", fa: "کفش نوتم را دوست دارم!" }
    ],
    dialogue: {
      title: "خرید جکت",
      lines: [
        { speaker: "A", en: "Good afternoon! Can I help you?", fa: "بعدازظهر بخیر! کمکی می‌کنم؟" },
        { speaker: "B", en: "Yes. Can I try on this jacket?", fa: "بله. می‌توانم این جکت را پرو کنم؟" },
        { speaker: "A", en: "Of course. What size are you?", fa: "حتماً. سایزتان چند است؟" },
        { speaker: "B", en: "I am size medium.", fa: "سایزم مدیوم است." },
        { speaker: "A", en: "Here you are. The change room is there.", fa: "بفرمایید. اتاق پرو آنجاست." },
        { speaker: "B", en: "Thank you!", fa: "ممنون!" }
      ]
    },
    quiz: [
      { q: "«می‌توانم این جکت را پرو کنم؟» کدام است؟", options: ["Can I try on this jacket?", "Can I try this jacket on me?", "Can I wear try this jacket?"], a: 0 },
      { q: "«سایزت چند است؟» کدام است؟", options: ["What size are you?", "What is size you?", "How size do you have?"], a: 0 },
      { q: "«اندازه نیست» کدام است؟", options: ["It doesn't fit.", "It is not fit me.", "It no fits."], a: 0 },
      { q: "«جوراب» کدام است؟", options: ["socks", "shoes", "stock"], a: 0 },
      { q: "«پوشیدن» کدام است؟", options: ["wear", "where", "were"], a: 0 }
    ]
  },
  {
    id: 27,
    title: "House Hunting",
    titleFa: "اجاره خانه",
    emoji: "🏘️",
    intro: "اجاره آپارتمان: پرسیدن قیمت، تعداد اتاق و شرایط.",
    vocab: [
      { en: "apartment", fa: "آپارتمان", tip: "«اپارتمنت»" },
      { en: "rent", fa: "اجاره / اجاره‌کردن", tip: "«رِنت»" },
      { en: "floor", fa: "طبقه", tip: "«فلور»" },
      { en: "rooms", fa: "اتاق‌ها", tip: "«رومز»" },
      { en: "balcony", fa: "بالکن", tip: "«بالکونی»" },
      { en: "elevator", fa: "آسانسور", tip: "«اِلوِیتِر»" },
      { en: "parking", fa: "پارکینگ", tip: "«پارکینگ»" },
      { en: "furniture", fa: "اثاثیه", tip: "«فِرنیچِر»" },
      { en: "neighbors", fa: "همسایه‌ها", tip: "«نِیبِرز»" },
      { en: "quiet", fa: "ساکت / آرام", tip: "«کوایِت» — مثل quite نباشد!" }
    ],
    phrases: [
      { en: "Is this apartment for rent?", fa: "این آپارتمان اجاره داده می‌شود؟" },
      { en: "How many rooms does it have?", fa: "چند اتاق دارد؟" },
      { en: "It is on the third floor.", fa: "در طبقه سوم است." },
      { en: "How much is the rent per month?", fa: "اجاره ماهانه چقدر است؟" },
      { en: "The neighborhood is very quiet.", fa: "محله خیلی ساکت است." }
    ],
    dialogue: {
      title: "دیدن آپارتمان",
      lines: [
        { speaker: "A", en: "Hello! I am here to see the apartment.", fa: "سلام! برای دیدن آپارتمان آمده‌ام." },
        { speaker: "B", en: "Welcome! It is on the third floor.", fa: "خوش‌آمدید! در طبقه سوم است." },
        { speaker: "A", en: "How many rooms does it have?", fa: "چند اتاق دارد؟" },
        { speaker: "B", en: "Two bedrooms and a big living room.", fa: "دو اتاق خواب و یک پذیرایی بزرگ." },
        { speaker: "A", en: "How much is the rent?", fa: "اجاره چقدر است؟" },
        { speaker: "B", en: "Five hundred dollars per month.", fa: "ماهانه پانصد دلار." }
      ]
    },
    quiz: [
      { q: "«این آپارتمان اجاره داده می‌شود؟» کدام است؟", options: ["Is this apartment for rent?", "Does this apartment for rent?", "Is this apartment in rent?"], a: 0 },
      { q: "«چند اتاق دارد؟» کدام است؟", options: ["How many rooms does it have?", "How much rooms it has?", "What rooms does have?"], a: 0 },
      { q: "«اجاره ماهانه چقدر است؟» کدام است؟", options: ["How much is the rent per month?", "How many rent per month?", "What cost the month rent?"], a: 0 },
      { q: "«طبقه سوم» کدام است؟", options: ["third floor", "three floor", "floor third"], a: 0 },
      { q: "«آسانسور» کدام است؟", options: ["elevator", "escalator", "escalade"], a: 0 }
    ]
  },
  {
    id: 28,
    title: "At the Bank",
    titleFa: "در بانک",
    emoji: "🏦",
    intro: "حساب بانکی، پول گرفتن و کارت — مکالمه‌های ضروری بانکی.",
    vocab: [
      { en: "bank account", fa: "حساب بانکی", tip: "«بَنک اَکاونت»" },
      { en: "money / cash", fa: "پول / نقد", tip: "«مانی / کش»" },
      { en: "card", fa: "کارت", tip: "«کارد»" },
      { en: "ATM", fa: "عابربانک", tip: "«اِی‌تی‌اِم»" },
      { en: "open an account", fa: "حساب افتتاح کردن", tip: "«اوبن اَن اکاونت»" },
      { en: "deposit", fa: "سپرده گذاشتن", tip: "«دیپازیت»" },
      { en: "withdraw", fa: "پول گرفتن", tip: "«ویذدرا»" },
      { en: "exchange", fa: "تبدیل / صرافی", tip: "«اِکسچِینج»" },
      { en: "receipt", fa: "رسید", tip: "«ریسیت» — p تلفظ نمی‌شود" },
      { en: "signature", fa: "امضا", tip: "«سیگنیچِر»" }
    ],
    phrases: [
      { en: "I want to open an account.", fa: "می‌خواهم حسابی افتتاح کنم." },
      { en: "I want to withdraw some money.", fa: "می‌خواهم مقداری پول بردارم." },
      { en: "Where is the ATM?", fa: "عابربانک کجاست؟" },
      { en: "Can I exchange dollars here?", fa: "می‌توانم اینجا دلار تبدیل کنم؟" },
      { en: "Please sign here.", fa: "لطفاً اینجا امضا کنید." }
    ],
    dialogue: {
      title: "افتتاح حساب",
      lines: [
        { speaker: "A", en: "Good morning. How can I help you?", fa: "صبح بخیر. چطور می‌توانم کمک کنم؟" },
        { speaker: "B", en: "I want to open an account, please.", fa: "لطفاً می‌خواهم حسابی افتتاح کنم." },
        { speaker: "A", en: "OK. Do you have your ID card?", fa: "خب. کارت شناسایی دارید؟" },
        { speaker: "B", en: "Yes, here it is.", fa: "بله، اینجاست." },
        { speaker: "A", en: "Please fill this form and sign here.", fa: "لطفاً این فرم را پر کنید و اینجا امضا کنید." },
        { speaker: "B", en: "Done. Thank you!", fa: "انجام شد. ممنون!" }
      ]
    },
    quiz: [
      { q: "«می‌خواهم حسابی افتتاح کنم» کدام است؟", options: ["I want to open an account.", "I want open account.", "I want opening an account."], a: 0 },
      { q: "«عابربانک» کدام است؟", options: ["ATM", "ATP", "ATS"], a: 0 },
      { q: "«می‌خواهم پول بردارم» کدام است؟", options: ["I want to withdraw some money.", "I want take out money.", "Both are correct"], a: 2 },
      { q: "«رسید» کدام است؟", options: ["receipt", "recipe", "recession"], a: 0 },
      { q: "«لطفاً اینجا امضا کنید» کدام است؟", options: ["Please sign here.", "Please signature here.", "Please sign you here."], a: 0 }
    ]
  },
  {
    id: 29,
    title: "Jobs and Work",
    titleFa: "مشاغل و کار",
    emoji: "👩‍💻",
    intro: "شغل‌های مختلف و گفتن اینکه کجا کار می‌کنی.",
    vocab: [
      { en: "teacher", fa: "معلم", tip: "«تیچِر»" },
      { en: "engineer", fa: "مهندس", tip: "«انجینیر»" },
      { en: "doctor / nurse", fa: "پزشک / پرستار", tip: "«داکتِر / نِرس»" },
      { en: "driver", fa: "راننده", tip: "«درایوِر»" },
      { en: "shopkeeper", fa: "مغازه‌دار", tip: "«شاپ‌کیپِر»" },
      { en: "accountant", fa: "حسابدار", tip: "«اکاونتنت»" },
      { en: "company", fa: "شرکت", tip: "«کامپنی»" },
      { en: "salary", fa: "حقوق", tip: "«سالِری»" },
      { en: "work full-time", fa: "تمام‌وقت کار کردن", tip: "«ورک فول‌تایم»" },
      { en: "retired", fa: "بازنشسته", tip: "«ری‌تایَرد»" }
    ],
    phrases: [
      { en: "What do you do for a living?", fa: "برای امرار معاش چه کار می‌کنی؟" },
      { en: "I am an engineer at a big company.", fa: "مهندسم در یک شرکت بزرگ." },
      { en: "My sister is a nurse.", fa: "خواهرم پرستار است." },
      { en: "I work full-time.", fa: "تمام‌وقت کار می‌کنم." },
      { en: "My father is retired now.", fa: "پدرم الان بازنشسته است." }
    ],
    dialogue: {
      title: "شناخت شغل هم",
      lines: [
        { speaker: "A", en: "What do you do for a living?", fa: "شغلت چیست؟" },
        { speaker: "B", en: "I am an engineer. I work at a car company.", fa: "مهندسم. در یک شرکت خودرو کار می‌کنم." },
        { speaker: "A", en: "Do you work full-time?", fa: "تمام‌وقت کار می‌کنی؟" },
        { speaker: "B", en: "Yes, eight hours a day.", fa: "بله، روزی هشت ساعت." },
        { speaker: "A", en: "My father was a teacher. He is retired now.", fa: "پدرم معلم بود. الان بازنشسته است." }
      ]
    },
    quiz: [
      { q: "«شغلت چیست؟» کدام است؟", options: ["What do you do for a living?", "What is your living job?", "How do you living?"], a: 0 },
      { q: "«مهندسم» کدام است؟", options: ["I am engineer a.", "I am an engineer.", "I am a engineer."], a: 1 },
      { q: "«حقوق» کدام است؟", options: ["salary", "salarys", "sale"], a: 0 },
      { q: "«بازنشسته» کدام است؟", options: ["retired", "retrained", "tired again"], a: 0 },
      { q: "«خواهرم پرستار است» کدام است؟", options: ["My sister is a nurse.", "My sister nurse is.", "My sister is nurse a."], a: 0 }
    ]
  },
  {
    id: 30,
    title: "School and Study",
    titleFa: "مدرسه و درس",
    emoji: "🎓",
    intro: "مدرسه، دانشگاه و درس‌ها — مکالمه درباره تحصیل.",
    vocab: [
      { en: "school / university", fa: "مدرسه / دانشگاه", tip: "«اسکول / یونیوِرسیتی»" },
      { en: "student", fa: "دانش‌آموز / دانشجو", tip: "«استودنت»" },
      { en: "class / classroom", fa: "کلاس", tip: "«کلاس / کلاس‌روم»" },
      { en: "homework", fa: "تکلیف", tip: "«هوم‌ورک»" },
      { en: "exam / test", fa: "امتحان", tip: "«اِگزَم / تست»" },
      { en: "math / history", fa: "ریاضی / تاریخ", tip: "«مَث / هیستری»" },
      { en: "learn / teach", fa: "یادگرفتن / یاددادن", tip: "«لِرن / تیچ»" },
      { en: "grade", fa: "نمره / پایه", tip: "«گرِید»" },
      { en: "question / answer", fa: "سؤال / جواب", tip: "«کوئسچن / انسِر»" },
      { en: "difficult / easy", fa: "سخت / آسان", tip: "«دیفیکلت / ایزی»" }
    ],
    phrases: [
      { en: "I am a student at Tehran University.", fa: "دانشجوی دانشگاه تهران هستم." },
      { en: "Do you have a lot of homework?", fa: "تکالیف زیادی داری؟" },
      { en: "The math exam was very difficult.", fa: "امتحان ریاضی خیلی سخت بود." },
      { en: "I have a question, teacher.", fa: "معلم، سؤالی دارم." },
      { en: "English is easy to learn.", fa: "انگلیسی یادگرفتنش آسان است." }
    ],
    dialogue: {
      title: "بعد از امتحان",
      lines: [
        { speaker: "A", en: "How was your math exam?", fa: "امتحان ریاضی‌ات چطور بود؟" },
        { speaker: "B", en: "Very difficult! I didn't know three answers.", fa: "خیلی سخت! سه جواب را نمی‌دانستم." },
        { speaker: "A", en: "Don't worry. What about history?", fa: "نگران نباش. تاریخ چطور شد؟" },
        { speaker: "B", en: "History was easy.", fa: "تاریخ آسان بود." },
        { speaker: "A", en: "Good! Now we have more homework...", fa: "خوب! حالا تکالیف بیشتری داریم..." }
      ]
    },
    quiz: [
      { q: "«تکالیف زیادی داری؟» کدام است؟", options: ["Do you have a lot of homework?", "Do you have many homeworks?", "You have much homework?"], a: 0 },
      { q: "«امتحان ریاضی خیلی سخت بود» کدام است؟", options: ["The math exam was very difficult.", "The math exam was very easy.", "The math exam were difficult very."], a: 0 },
      { q: "«یاددادن» کدام است؟", options: ["teach", "learn", "study"], a: 0 },
      { q: "«سؤالی دارم» کدام است؟", options: ["I have a question.", "I am a question.", "I have question one."], a: 0 },
      { q: "«نمره» کدام است؟", options: ["grade", "great", "grape"], a: 0 }
    ]
  }
);
