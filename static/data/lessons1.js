/* داده‌های دوره — بخش ۱: درس ۱ تا ۵ */
window.LESSONS = [
  {
    id: 1,
    title: "سلام و احوال‌پرسی",
    titleFa: "سلام و احوال‌پرسی",
    emoji: "👋",
    intro: "در این درس یاد می‌گیری چطور سلام کنی و حال کسی را بپرسی — اولین قدم برای شروع هر مکالمه.",
    vocab: [
      { en: "Hello", fa: "سلام", tip: "«هِلو» — رسمی و همه‌جایی" },
      { en: "Hi", fa: "سلام (خودمونی)", tip: "«های» — بین دوستان" },
      { en: "Good morning", fa: "صبح بخیر", tip: "«گود مورنینگ» — تا ساعت ۱۲ ظهر" },
      { en: "Good afternoon", fa: "بعدازظهر بخیر", tip: "«گود افترنون» — از ۱۲ تا ۶" },
      { en: "Good evening", fa: "عصر بخیر", tip: "«گود ایونینگ» — بعد از ۶" },
      { en: "How are you?", fa: "حالت چطوره؟", tip: "«هاو آر یو»" },
      { en: "I'm fine, thank you", fa: "خوبم، ممنون", tip: "«آیم فاین، تنک یو»" },
      { en: "And you?", fa: "تو چطور؟", tip: "«اند یو»" },
      { en: "Goodbye", fa: "خداحافظ", tip: "«گودبای»" },
      { en: "See you later", fa: "بعداً می‌بینمت", tip: "«سی یو لِیتِر»" }
    ],
    phrases: [
      { en: "Hello! How are you?", fa: "سلام! حالت چطوره؟" },
      { en: "Hi! I'm fine, thank you. And you?", fa: "سلام! خوبم، ممنون. تو چطور؟" },
      { en: "I'm very well, thanks.", fa: "خیلی خوبم، ممنون." },
      { en: "Good morning! Nice to see you.", fa: "صبح بخیر! خوشحالم می‌بینمت." },
      { en: "See you later. Goodbye!", fa: "بعداً می‌بینمت. خداحافظ!" }
    ],
    dialogue: {
      title: "در خیابان",
      lines: [
        { speaker: "A", en: "Good morning!", fa: "صبح بخیر!" },
        { speaker: "B", en: "Good morning! How are you?", fa: "صبح بخیر! حالت چطوره؟" },
        { speaker: "A", en: "I'm fine, thank you. And you?", fa: "خوبم، ممنون. تو چطور؟" },
        { speaker: "B", en: "I'm very well, thanks. Goodbye!", fa: "خیلی خوبم، ممنون. خداحافظ!" },
        { speaker: "A", en: "See you later!", fa: "بعداً می‌بینمت!" }
      ]
    },
    quiz: [
      { q: "جمله «حالت چطوره؟» کدام است؟", options: ["How are you?", "How old are you?", "What is your name?"], a: 0 },
      { q: "جواب رسمی به «How are you?» چیست؟", options: ["I'm fine, thank you.", "My name is Ali.", "Good night."], a: 0 },
      { q: "«بعد از ساعت ۶ عصر» چه سلامی می‌دهیم؟", options: ["Good morning", "Good afternoon", "Good evening"], a: 2 },
      { q: "کدام یک «خداحافظ» است؟", options: ["Hello", "Goodbye", "Hi"], a: 1 },
      { q: "«بعداً می‌بینمت» کدام است؟", options: ["See you later", "See you tomorrow", "Nice to meet you"], a: 0 }
    ]
  },
  {
    id: 2,
    title: "معرفی خودم",
    titleFa: "معرفی خودم",
    emoji: "🧑",
    intro: "یاد می‌گیری اسم، کشور و شغلت را انگلیسی بگویی و از طرف مقابل سؤال کنی.",
    vocab: [
      { en: "name", fa: "اسم", tip: "«نِیم»" },
      { en: "My name is Ali", fa: "اسم من علی است", tip: "«مای نِیم اِز علی»" },
      { en: "I am from Iran", fa: "من اهل ایران هستم", tip: "«آیم فروم ایران»" },
      { en: "years old", fa: "سال سن", tip: "«یرز اولد» — I am 25 years old" },
      { en: "job", fa: "شغل", tip: "«جاب»" },
      { en: "student", fa: "دانش‌آموز / دانشجو", tip: "«استودنت»" },
      { en: "Nice to meet you", fa: "از آشنایی‌ات خوشحالم", tip: "«نایس تو میت یو»" },
      { en: "Where are you from?", fa: "اهل کجا هستی؟", tip: "«وِر آر یو فروم»" },
      { en: "What do you do?", fa: "شغلت چیه؟", tip: "«وات دو یو دو»" },
      { en: "live", fa: "زندگی کردن", tip: "«لیو» — I live in Tehran" }
    ],
    phrases: [
      { en: "Hello! My name is Ali. What is your name?", fa: "سلام! اسم من علی است. اسم تو چیه؟" },
      { en: "Nice to meet you!", fa: "از آشنایی‌ات خوشحالم!" },
      { en: "I am from Iran. Where are you from?", fa: "من اهل ایرانم. تو اهل کجایی؟" },
      { en: "I am 25 years old.", fa: "من ۲۵ ساله‌ام." },
      { en: "I live in Tehran.", fa: "من در تهران زندگی می‌کنم." }
    ],
    dialogue: {
      title: "اولین ملاقات",
      lines: [
        { speaker: "A", en: "Hi! My name is Sara. What is your name?", fa: "سلام! اسم من سارا است. اسم تو چیه؟" },
        { speaker: "B", en: "Hello Sara! My name is Ali. Nice to meet you!", fa: "سلام سارا! اسم من علی است. از آشنایی‌ات خوشحالم!" },
        { speaker: "A", en: "Nice to meet you too! Where are you from?", fa: "من هم از آشنایی‌ات خوشحالم! اهل کجایی؟" },
        { speaker: "B", en: "I am from Iran. I live in Tehran. And you?", fa: "من اهل ایرانم. در تهران زندگی می‌کنم. تو چطور؟" },
        { speaker: "A", en: "I am from Iran too. I live in Shiraz.", fa: "من هم ایرانی هستم. در شیراز زندگی می‌کنم." }
      ]
    },
    quiz: [
      { q: "«من ۲۵ ساله‌ام» کدام است؟", options: ["I have 25 years", "I am 25 years old", "My age 25"], a: 1 },
      { q: "«اهل کجا هستی؟» کدام است؟", options: ["Where are you from?", "What is your from?", "How are you from?"], a: 0 },
      { q: "«شغلت چیه؟» کدام است؟", options: ["What is your job name?", "What do you do?", "Where do you do?"], a: 1 },
      { q: "«از آشنایی‌ات خوشحالم» کدام است؟", options: ["Nice to meet you", "Good to see you later", "Fine, thank you"], a: 0 },
      { q: "جمله «من در تهران زندگی می‌کنم» کدام است؟", options: ["I live at Tehran", "I life in Tehran", "I live in Tehran"], a: 2 }
    ]
  },
  {
    id: 3,
    title: "اعداد و سن",
    titleFa: "اعداد و سن",
    emoji: "🔢",
    intro: "اعداد ۱ تا ۱۰۰ و اینکه چطور درباره سن و شماره تلفن حرف بزنی.",
    vocab: [
      { en: "one / two / three", fa: "یک / دو / سه", tip: "«وان / تو / تری»" },
      { en: "four / five / six", fa: "چهار / پنج / شش", tip: "«فور / فایو / سیکس»" },
      { en: "seven / eight / nine / ten", fa: "هفت / هشت / نه / ده", tip: "«سِوِن / اِیت / ناین / تِن»" },
      { en: "twenty", fa: "بیست", tip: "«توئِنتی»" },
      { en: "thirty", fa: "سی", tip: "«ثِرتی»" },
      { en: "fifty", fa: "پنجاه", tip: "«فیفتی»" },
      { en: "hundred", fa: "صد", tip: "«هاندرِد»" },
      { en: "How old are you?", fa: "چند سالته؟", tip: "«هاو اولد آر یو»" },
      { en: "phone number", fa: "شماره تلفن", tip: "«فون نَمبر»" },
      { en: "number", fa: "عدد", tip: "«نَمبر»" }
    ],
    phrases: [
      { en: "How old are you?", fa: "چند سالته؟" },
      { en: "I am thirty years old.", fa: "من سی ساله‌ام." },
      { en: "My phone number is 0912...", fa: "شماره تلفن من ۰۹۱۲... است." },
      { en: "How many brothers do you have? I have two.", fa: "چند تا برادر داری؟ دو تا." },
      { en: "What is your apartment number? It is twelve.", fa: "شماره آپارتمان شما چند است؟ دوازده." }
    ],
    dialogue: {
      title: "در یک کلاس زبان",
      lines: [
        { speaker: "A", en: "How old are you?", fa: "چند سالته؟" },
        { speaker: "B", en: "I am thirty years old. And you?", fa: "من سی ساله‌ام. تو چطور؟" },
        { speaker: "A", en: "I am twenty-eight.", fa: "من بیست‌وهشت ساله‌ام." },
        { speaker: "B", en: "What is your phone number?", fa: "شماره تلفن تو چند است؟" },
        { speaker: "A", en: "It is zero nine one two, three four five.", fa: "۰۹۱۲۳۴۵ است." }
      ]
    },
    quiz: [
      { q: "«چهند سالته؟» کدام است؟", options: ["How many years you have?", "How old are you?", "What is your age number?"], a: 1 },
      { q: "عدد ۱۲ به انگلیسی؟", options: ["twelve", "twenty", "twentieth"], a: 0 },
      { q: "عدد ۵۰ به انگلیسی؟", options: ["fifteen", "five", "fifty"], a: 2 },
      { q: "«شماره تلفن» کدام است؟", options: ["phone number", "home number", "call number"], a: 0 },
      { q: "«صد» به انگلیسی؟", options: ["thousand", "hundred", "million"], a: 1 }
    ]
  },
  {
    id: 4,
    title: "خانواده و افراد",
    titleFa: "خانواده و افراد",
    emoji: "👨‍👩‍👧‍👦",
    intro: "اسم اعضای خانواده و اینکه چطور از خانواده‌ات تعریف کنی.",
    vocab: [
      { en: "family", fa: "خانواده", tip: "«فَمیلی»" },
      { en: "father / mother", fa: "پدر / مادر", tip: "«فادر / مادر»" },
      { en: "brother / sister", fa: "برادر / خواهر", tip: "«برادر / سیستر»" },
      { en: "son / daughter", fa: "پسر / دختر", tip: "«سان / داتِر»" },
      { en: "husband / wife", fa: "شوهر / همسر (زن)", tip: "«هازبند / وایف»" },
      { en: "grandfather / grandmother", fa: "پدربزرگ / مادربزرگ", tip: "«گرَندفادر / گرَندمادر»" },
      { en: "uncle / aunt", fa: "عمو/دایی / عمه/خاله", tip: "«انکل / آنت»" },
      { en: "friend", fa: "دوست", tip: "«فرِند»" },
      { en: "children / kids", fa: "بچه‌ها", tip: "«چیلدرِن / کیدز»" },
      { en: "married / single", fa: "متأهل / مجرد", tip: "«مَرید / سینگل»" }
    ],
    phrases: [
      { en: "This is my family.", fa: "این خانواده من است." },
      { en: "I have one brother and two sisters.", fa: "یک برادر و دو خواهر دارم." },
      { en: "My father is a teacher.", fa: "پدرم معلم است." },
      { en: "Are you married? No, I am single.", fa: "متأهل هستی؟ نه، مجردم." },
      { en: "How many children do you have?", fa: "چند تا بچه داری؟" }
    ],
    dialogue: {
      title: "نمایش عکس خانواده",
      lines: [
        { speaker: "A", en: "Is this your family photo?", fa: "این عکس خانواده تو است؟" },
        { speaker: "B", en: "Yes! This is my father and this is my mother.", fa: "بله! این پدرم است و این مادرم." },
        { speaker: "A", en: "Who is this girl?", fa: "این دختر کیست؟" },
        { speaker: "B", en: "She is my sister. She is twenty years old.", fa: "او خواهر من است. بیست ساله است." },
        { speaker: "A", en: "And this old man?", fa: "و این مرد پیر؟" },
        { speaker: "B", en: "He is my grandfather. He is eighty!", fa: "او پدربزرگ من است. هشتاد ساله است!" }
      ]
    },
    quiz: [
      { q: "«خواهر» کدام است؟", options: ["brother", "sister", "daughter"], a: 1 },
      { q: "«دختر (فرزند)» کدام است؟", options: ["daughter", "aunt", "wife"], a: 0 },
      { q: "«من یک برادر دارم» کدام است؟", options: ["I am one brother", "I have one brother", "My brother is one"], a: 1 },
      { q: "«متأهل» کدام است؟", options: ["single", "married", "friend"], a: 1 },
      { q: "«چند تا بچه داری؟» کدام است؟", options: ["How many children do you have?", "How much children you have?", "What children do you have?"], a: 0 }
    ]
  },
  {
    id: 5,
    title: "رنگ‌ها و شکل‌ها",
    titleFa: "رنگ‌ها و شکل‌ها",
    emoji: "🎨",
    intro: "رنگ‌های اصلی و توصیف اشیا با رنگ — پایه توصیف‌کردن هر چیزی.",
    vocab: [
      { en: "red", fa: "قرمز", tip: "«رِد»" },
      { en: "blue", fa: "آبی", tip: "«بلو»" },
      { en: "green", fa: "سبز", tip: "«گرین»" },
      { en: "yellow", fa: "زرد", tip: "«یِلو»" },
      { en: "black / white", fa: "مشکی / سفید", tip: "«بِلک / وایت»" },
      { en: "color", fa: "رنگ", tip: "«کالِر»" },
      { en: "big / small", fa: "بزرگ / کوچک", tip: "«بیگ / اسمول»" },
      { en: "beautiful", fa: "زیبا", tip: "«بیوطیفول»" },
      { en: "What color is it?", fa: "رنگش چیست؟", tip: "«وات کالر اِز ایت»" },
      { en: "favorite", fa: "محبوب / موردعلاقه", tip: "«فِیوَریت»" }
    ],
    phrases: [
      { en: "What is your favorite color?", fa: "رنگ موردعلاقه‌ات چیست؟" },
      { en: "My favorite color is blue.", fa: "رنگ موردعلاقه من آبی است." },
      { en: "I have a red car.", fa: "من یک ماشین قرمز دارم." },
      { en: "The sky is blue.", fa: "آسمان آبی است." },
      { en: "This is a small black bag.", fa: "این یک کیف مشکی کوچک است." }
    ],
    dialogue: {
      title: "خرید تی‌شرت",
      lines: [
        { speaker: "A", en: "I like this shirt!", fa: "من این پیراهن را دوست دارم!" },
        { speaker: "B", en: "What color is it?", fa: "رنگش چیست؟" },
        { speaker: "A", en: "It is green. Green is my favorite color.", fa: "سبز است. سبز رنگ موردعلاقه من است." },
        { speaker: "B", en: "Nice! I like blue shirts.", fa: "خوبه! من پیراهن‌های آبی را دوست دارم." },
        { speaker: "A", en: "Blue is beautiful too!", fa: "آبی هم زیباست!" }
      ]
    },
    quiz: [
      { q: "«رنگ موردعلاقه من آبی است» کدام است؟", options: ["My favorite color is blue.", "My blue is favorite color.", "My color favorite is blue."], a: 0 },
      { q: "«سبز» کدام است؟", options: ["great", "green", "gray"], a: 1 },
      { q: "«رنگش چیست؟» کدام است؟", options: ["What color is it?", "Which color it has?", "How color is it?"], a: 0 },
      { q: "«این یک کیف مشکی کوچک است» کدام است؟", options: ["This is a small black bag.", "This is a black small bag.", "This bag is black a small."], a: 0 },
      { q: "«بزرگ» کدام است؟", options: ["small", "big", "beautiful"], a: 1 }
    ]
  }
];
