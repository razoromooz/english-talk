/* داده‌های دوره — بخش ۳: درس ۱۱ تا ۱۵ */
window.LESSONS.push(
  {
    id: 11,
    title: "Shopping",
    titleFa: "خرید و فروش",
    emoji: "🛒",
    intro: "خریدکردن، پرسیدن قیمت و گفتن اینکه چقدر پول داری.",
    vocab: [
      { en: "shop / store", fa: "مغازه", tip: "«شاپ / استور»" },
      { en: "buy", fa: "خریدن", tip: "«بای»" },
      { en: "sell", fa: "فروختن", tip: "«سِل»" },
      { en: "price", fa: "قیمت", tip: "«پرایس»" },
      { en: "cheap / expensive", fa: "ارزان / گران", tip: "«چیپ / اِکسپِنسیو»" },
      { en: "money", fa: "پول", tip: "«مانی»" },
      { en: "How much?", fa: "چقدر؟", tip: "«هاو ماچ»" },
      { en: "size", fa: "اندازه", tip: "«سایز»" },
      { en: "shirt / shoes", fa: "پیراهن / کفش", tip: "«شِرت / شوز»" },
      { en: "pay", fa: "پرداخت‌کردن", tip: "«پِی»" }
    ],
    phrases: [
      { en: "How much is this?", fa: "قیمت این چقدر است؟" },
      { en: "It is too expensive!", fa: "خیلی گران است!" },
      { en: "Do you have a cheaper one?", fa: "ارزان‌تر ندارید؟" },
      { en: "Can I try it on?", fa: "می‌توانم پرو کنم؟" },
      { en: "I will take it. Here is the money.", fa: "همین را می‌خرم. پولش اینجاست." }
    ],
    dialogue: {
      title: "در مغازه لباس",
      lines: [
        { speaker: "A", en: "Hello! Can I help you?", fa: "سلام! کمکی می‌توانم بکنم؟" },
        { speaker: "B", en: "Yes. How much is this shirt?", fa: "بله. قیمت این پیراهن چقدر است؟" },
        { speaker: "A", en: "It is twenty dollars.", fa: "بیست دلار است." },
        { speaker: "B", en: "Do you have a cheaper one?", fa: "ارزان‌تری ندارید؟" },
        { speaker: "A", en: "Yes, this one is ten dollars.", fa: "بله، این یکی ده دلار است." },
        { speaker: "B", en: "Great! I will take it.", fa: "عالی! همین را می‌خرم." }
      ]
    },
    quiz: [
      { q: "«قیمت این چقدر است؟» کدام است؟", options: ["How much is this?", "How many is this?", "What price this?"], a: 0 },
      { q: "«گران» کدام است؟", options: ["cheap", "expensive", "free"], a: 1 },
      { q: "«ارزان‌تر ندارید؟» کدام است؟", options: ["Do you have a cheaper one?", "Do you have an expensive one?", "Is this cheap one?"], a: 0 },
      { q: "«پرداخت‌کردن» کدام است؟", options: ["pay", "play", "buy"], a: 0 },
      { q: "«اندازه» کدام است؟", options: ["size", "shape", "sale"], a: 0 }
    ]
  },
  {
    id: 12,
    title: "Places and Directions",
    titleFa: "مکان‌ها و مسیر",
    emoji: "🗺️",
    intro: "راه پرسیدن و راهنمایی‌کردن — خیلی مهم برای سفر!",
    vocab: [
      { en: "street / road", fa: "خیابان / جاده", tip: "«ستریت / رود»" },
      { en: "left / right", fa: "چپ / راست", tip: "«لِفت / رایت»" },
      { en: "straight", fa: "مستقیم", tip: "«سترِیت»" },
      { en: "near / far", fa: "نزدیک / دور", tip: "«نیر / فار»" },
      { en: "bank", fa: "بانک", tip: "«بَنک»" },
      { en: "hospital", fa: "بیمارستان", tip: "«هاسپیتیل»" },
      { en: "restaurant", fa: "رستوران", tip: "«رِستِرانت»" },
      { en: "How can I get to...?", fa: "چطور به ... بروم؟", tip: "«هاو کن آی گِت تو»" },
      { en: "Excuse me", fa: "ببخشید", tip: "«اِکسکیوز می»" },
      { en: "turn", fa: "پیچیدن (به مسیر)", tip: "«تِرن»" }
    ],
    phrases: [
      { en: "Excuse me, where is the bank?", fa: "ببخشید، بانک کجاست؟" },
      { en: "How can I get to the hospital?", fa: "چطور به بیمارستان بروم؟" },
      { en: "Go straight, then turn left.", fa: "مستقیم برو، بعد بپیچ چپ." },
      { en: "It is near the restaurant.", fa: "نزدیک رستوران است." },
      { en: "Is it far from here? No, it is very near.", fa: "از اینجا دور است؟ نه، خیلی نزدیک است." }
    ],
    dialogue: {
      title: "پرسیدن آدرس",
      lines: [
        { speaker: "A", en: "Excuse me! Where is the hospital?", fa: "ببخشید! بیمارستان کجاست؟" },
        { speaker: "B", en: "Go straight on this street.", fa: "در این خیابان مستقیم برو." },
        { speaker: "A", en: "OK, then what?", fa: "خب، بعدش؟" },
        { speaker: "B", en: "Turn right at the bank.", fa: "کنار بانک بپیچ راست." },
        { speaker: "A", en: "Is it far?", fa: "دور است؟" },
        { speaker: "B", en: "No, it is very near. About five minutes.", fa: "نه، خیلی نزدیک است. حدود پنج دقیقه." }
      ]
    },
    quiz: [
      { q: "«ببخشید، بانک کجاست؟» کدام است؟", options: ["Excuse me, where is the bank?", "Sorry, what is the bank?", "Excuse me, how is the bank?"], a: 0 },
      { q: "«مستقیم برو، بعد بپیچ چپ» کدام است؟", options: ["Go straight, then turn left.", "Go left, then turn straight.", "Turn straight, then go left."], a: 0 },
      { q: "«دور» کدام است؟", options: ["near", "far", "fast"], a: 1 },
      { q: "«چطور به بیمارستان بروم؟» کدام است؟", options: ["How can I get to the hospital?", "Where can I go hospital?", "How I go to hospital?"], a: 0 },
      { q: "«بپیچ راست» کدام است؟", options: ["turn right", "right turn you", "go right turn"], a: 0 }
    ]
  },
  {
    id: 13,
    title: "Weather",
    titleFa: "آب‌وهوا",
    emoji: "⛅",
    intro: "درباره هوا حرف بزن — مکالمه‌های کوچک روزمره از اینجا شروع می‌شوند.",
    vocab: [
      { en: "weather", fa: "آب‌وهوا", tip: "«وِذِر»" },
      { en: "sunny", fa: "آفتابی", tip: "«سانی»" },
      { en: "rainy / rain", fa: "بارانی / باران", tip: "«رِینی / رِین»" },
      { en: "cloudy", fa: "ابرى", tip: "«کلاودی»" },
      { en: "windy", fa: "بادی", tip: "«ویندی»" },
      { en: "snow", fa: "برف", tip: "«اسنو»" },
      { en: "hot / cold", fa: "گرم / سرد", tip: "«هات / کولد»" },
      { en: "warm / cool", fa: "معتدل / خنک", tip: "«وورم / کول»" },
      { en: "summer / winter", fa: "تابستان / زمستان", tip: "«سامِر / وینتِر»" },
      { en: "season", fa: "فصل", tip: "«سیزِن»" }
    ],
    phrases: [
      { en: "How is the weather today?", fa: "امروز هوا چطور است؟" },
      { en: "It is sunny and warm.", fa: "آفتابی و معتدل است." },
      { en: "It is very cold in winter.", fa: "در زمستان خیلی سرد است." },
      { en: "I like rainy days.", fa: "روزهای بارانی را دوست دارم." },
      { en: "What is your favorite season?", fa: "فصل موردعلاقه‌ات چیست؟" }
    ],
    dialogue: {
      title: "گفت‌وگوی روزمره",
      lines: [
        { speaker: "A", en: "Hi! How is the weather today?", fa: "سلام! امروز هوا چطور است؟" },
        { speaker: "B", en: "It is cloudy and windy.", fa: "ابری و بادی است." },
        { speaker: "A", en: "Is it cold?", fa: "سرد است؟" },
        { speaker: "B", en: "A little. Take a jacket.", fa: "یکم. جکتت را بردار." },
        { speaker: "A", en: "OK! I like cool weather.", fa: "خب! من هوای خنک را دوست دارم." }
      ]
    },
    quiz: [
      { q: "«امروز هوا چطور است؟» کدام است؟", options: ["How is the weather today?", "What weather is today?", "How weather today?"], a: 0 },
      { q: "«آفتابی» کدام است؟", options: ["rainy", "sunny", "cloudy"], a: 1 },
      { q: "«ابری» کدام است؟", options: ["cloudy", "windy", "snowy"], a: 0 },
      { q: "«در زمستان خیلی سرد است» کدام است؟", options: ["It is very cold in winter.", "It is very winter in cold.", "In winter very is cold."], a: 0 },
      { q: "«فصل» کدام است؟", options: ["season", "seasons", "reason"], a: 0 }
    ]
  },
  {
    id: 14,
    title: "Hobbies and Free Time",
    titleFa: "سرگرمی و اوقات فراغت",
    emoji: "⚽",
    intro: "درباره کارهایی که برای لذت انجام می‌دهی حرف بزن و از دیگران بپرس.",
    vocab: [
      { en: "hobby", fa: "سرگرمی", tip: "«هابی»" },
      { en: "free time", fa: "وقت آزاد", tip: "«فری تایم»" },
      { en: "play football", fa: "فوتبال بازی‌کردن", tip: "«پلی فوتبال»" },
      { en: "read books", fa: "کتاب خواندن", tip: "«رید بوکز»" },
      { en: "listen to music", fa: "موسیقی گوش‌دادن", tip: "«لیسن تو میوزیک»" },
      { en: "swim / running", fa: "شنا / دویدن", tip: "«سویم / رانینگ»" },
      { en: "travel", fa: "سفر", tip: "«ترَوِل»" },
      { en: "painting", fa: "نقاشی", tip: "«پِینتینگ»" },
      { en: "What do you do in your free time?", fa: "در اوقات فراغت چه کار می‌کنی؟", tip: "«وات دِ یو دو این یور فری تایم»" },
      { en: "enjoy", fa: "لذت‌بردن", tip: "«اِنجوی»" }
    ],
    phrases: [
      { en: "What do you do in your free time?", fa: "در اوقات فراغت چه کار می‌کنی؟" },
      { en: "I like listening to music.", fa: "من گوش‌دادن به موسیقی را دوست دارم." },
      { en: "My hobby is reading books.", fa: "سرگرمی من کتاب‌خوانی است." },
      { en: "I enjoy playing football.", fa: "از فوتبال بازی‌کردن لذت می‌برم." },
      { en: "Do you like traveling? Yes, I love it!", fa: "سفر دوست داری؟ بله، عاشقشم!" }
    ],
    dialogue: {
      title: "دو همکار",
      lines: [
        { speaker: "A", en: "What do you do in your free time?", fa: "در اوقات فراغت چه کار می‌کنی؟" },
        { speaker: "B", en: "I listen to music and read books.", fa: "موسیقی گوش می‌دهم و کتاب می‌خوانم." },
        { speaker: "A", en: "Nice! Do you like sports?", fa: "خوبه! ورزش دوست داری؟" },
        { speaker: "B", en: "Yes, I enjoy swimming.", fa: "بله، از شنا لذت می‌برم." },
        { speaker: "A", en: "Great! I like swimming too.", fa: "عالی! من هم شنا را دوست دارم." }
      ]
    },
    quiz: [
      { q: "«در اوقات فراغت چه کار می‌کنی؟» کدام است؟", options: ["What do you do in your free time?", "What you do free time?", "How do you do in free time?"], a: 0 },
      { q: "«موسیقی گوش می‌دهم» کدام است؟", options: ["I listen music.", "I listen to music.", "I hear music."], a: 1 },
      { q: "«سرگرمی» کدام است؟", options: ["hobby", "happy", "habit"], a: 0 },
      { q: "«از فوتبال لذت می‌برم» کدام است؟", options: ["I enjoy playing football.", "I enjoy play football.", "I enjoy to playing football."], a: 0 },
      { q: "«سفر» کدام است؟", options: ["travel", "training", "trade"], a: 0 }
    ]
  },
  {
    id: 15,
    title: "Past Events",
    titleFa: "تعریف گذشته‌ها",
    emoji: "🕰️",
    intro: "ساده‌ترین شکل گذشته: کارهایی که دیروز انجام دادی.",
    vocab: [
      { en: "yesterday", fa: "دیروز", tip: "«یِستِردِی»" },
      { en: "last night", fa: "دیشب", tip: "«لَست نایت»" },
      { en: "last week", fa: "هفته پیش", tip: "«لَست ویک»" },
      { en: "went (go)", fa: "رفتم (رفتن)", tip: "«وِنت»" },
      { en: "ate (eat)", fa: "خوردم (خوردن)", tip: "«اِیت»" },
      { en: "saw (see)", fa: "دیدم (دیدن)", tip: "«سو»" },
      { en: "watched", fa: "تماشا کردم", tip: "«واچد»" },
      { en: "visited", fa: "دیدار کردم", tip: "«ویزیتِد»" },
      { en: "was / were", fa: "بودم / بودند", tip: "«واز / وِر»" },
      { en: "What did you do?", fa: "چه کار کردی؟", tip: "«وات دِد یو دو»" }
    ],
    phrases: [
      { en: "What did you do yesterday?", fa: "دیروز چه کار کردی؟" },
      { en: "I went to the park.", fa: "به پارک رفتم." },
      { en: "I watched a movie last night.", fa: "دیشب یک فیلم دیدم." },
      { en: "We visited my grandmother.", fa: "مادربزرگم را دیدار کردیم." },
      { en: "It was a great day!", fa: "روز فوق‌العاده‌ای بود!" }
    ],
    dialogue: {
      title: "تعریح یک روز خوب",
      lines: [
        { speaker: "A", en: "What did you do yesterday?", fa: "دیروز چه کار کردی؟" },
        { speaker: "B", en: "I went to the park with my family.", fa: "با خانواده‌ام به پارک رفتم." },
        { speaker: "A", en: "Nice! What did you eat there?", fa: "خوبه! آنجا چه چیزی خوردی؟" },
        { speaker: "B", en: "We ate bread and fruit.", fa: "نان و میوه خوردیم." },
        { speaker: "A", en: "How was the weather?", fa: "هوا چطور بود؟" },
        { speaker: "B", en: "It was sunny and warm. It was a great day!", fa: "آفتابی و معتدل بود. روز فوق‌العاده‌ای بود!" }
      ]
    },
    quiz: [
      { q: "«دیروز چه کار کردی؟» کدام است؟", options: ["What did you do yesterday?", "What do you did yesterday?", "What you did yesterday?"], a: 0 },
      { q: "گذشته go کدام است؟", options: ["goed", "gone to", "went"], a: 2 },
      { q: "«دیشب یک فیلم دیدم» کدام است؟", options: ["I watched a movie last night.", "I watch a movie last night.", "I watch a movie yesterday night."], a: 0 },
      { q: "گذره eat کدام است؟", options: ["eated", "ate", "eaten"], a: 1 },
      { q: "«روز فوق‌العاده‌ای بود» کدام است؟", options: ["It was a great day!", "It is a great day!", "It were a great day!"], a: 0 }
    ]
  }
);
