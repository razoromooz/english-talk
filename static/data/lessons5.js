/* داده‌های دوره — بخش ۵: درس ۲۱ تا ۲۵ */
window.LESSONS.push(
  {
    id: 21,
    title: "Body and Health",
    titleFa: "بدن و سلامت",
    emoji: "🩺",
    intro: "اعضای بدن و گفتن اینکه کجایت درد می‌کند — برای مراجعه به پزشک ضروری است.",
    vocab: [
      { en: "head", fa: "سر", tip: "«هِد»" },
      { en: "eye / ear", fa: "چشم / گوش", tip: "«آی / ایر»" },
      { en: "mouth / tooth", fa: "دهان / دندان", tip: "«ماوث / توث»" },
      { en: "hand / arm", fa: "دست / بازو", tip: "«هند / آرم»" },
      { en: "leg / foot", fa: "پا / کف پا", tip: "«لِگ / فوت»" },
      { en: "stomach", fa: "شکم", tip: "«استومَک»" },
      { en: "back", fa: "کمر", tip: "«بَک»" },
      { en: "hurt / ache", fa: "درد کردن", tip: "«هِرت / اِیک»" },
      { en: "sick / ill", fa: "مریض", tip: "«سیک / ایل»" },
      { en: "medicine", fa: "دارو", tip: "«مِدیسین»" }
    ],
    phrases: [
      { en: "My head hurts.", fa: "سرم درد می‌کند." },
      { en: "I have a stomachache.", fa: "درد شکم دارم." },
      { en: "I feel sick today.", fa: "امروز احساس بیماری می‌کنم." },
      { en: "You should see a doctor.", fa: "باید به پزشک مراجعه کنی." },
      { en: "Take this medicine twice a day.", fa: "این دارو را روزی دو بار مصرف کن." }
    ],
    dialogue: {
      title: "پذیرش مطب",
      lines: [
        { speaker: "A", en: "Good morning. What is the problem?", fa: "صبح بخیر. مشکل چیست؟" },
        { speaker: "B", en: "My stomach hurts a lot.", fa: "شکمم خیلی درد می‌کند." },
        { speaker: "A", en: "Since when?", fa: "از چه زمانی؟" },
        { speaker: "B", en: "Since last night.", fa: "از دیشب." },
        { speaker: "A", en: "OK. Take this medicine twice a day.", fa: "خب. این دارو را روزی دو بار مصرف کن." }
      ]
    },
    quiz: [
      { q: "«سرم درد می‌کند» کدام است؟", options: ["My head hurts.", "My head is pain.", "I have head sick."], a: 0 },
      { q: "«درد شکم دارم» کدام است؟", options: ["I have stomachache a.", "I have a stomachache.", "My stomach pain have."], a: 1 },
      { q: "«کمر» کدام است؟", options: ["back", "bag", "body"], a: 0 },
      { q: "«دارو» کدام است؟", options: ["medicine", "medical", "mediator"], a: 0 },
      { q: "«دندان» کدام است؟", options: ["tooth", "teeth", "mouth"], a: 0 }
    ]
  },
  {
    id: 22,
    title: "At the Doctor's",
    titleFa: "مطب پزشک",
    emoji: "🏥",
    intro: "مکالمه کامل با پزشک: توصیف علائم، سؤال از پزشک و فهمیدن توصیه‌ها.",
    vocab: [
      { en: "doctor", fa: "پزشک", tip: "«داکتِر»" },
      { en: "fever", fa: "تب", tip: "«فیوِر»" },
      { en: "cough", fa: "سرفه", tip: "«کاف» — t تلفظ نمی‌شود" },
      { en: "cold", fa: "سرماخوردگی", tip: "«کولد»" },
      { en: "flu", fa: "آنفولانزا", tip: "«فلو»" },
      { en: "pain", fa: "درد", tip: "«پِین»" },
      { en: "temperature", fa: "دمای بدن", tip: "«تِمپِرِچِر»" },
      { en: "better / worse", fa: "بهتر / بدتر", tip: "«بِتِر / وِرس»" },
      { en: "rest", fa: "استراحت", tip: "«رِست»" },
      { en: "appointment", fa: "وقت ملاقات (نوبت)", tip: "«اپوینتمنت»" }
    ],
    phrases: [
      { en: "I have a fever and a bad cough.", fa: "تب و سرفه شدید دارم." },
      { en: "How long have you had this pain?", fa: "این دررد را چه مدت دارید؟" },
      { en: "It started two days ago.", fa: "دو روز پیش شروع شد." },
      { en: "You should rest and drink water.", fa: "باید استراحت کنی و آب بخوری." },
      { en: "Do I need medicine? Yes, take this one.", fa: "دارو لازم دارم؟ بله، این را مصرف کن." }
    ],
    dialogue: {
      title: "ویزیت پزشک",
      lines: [
        { speaker: "A", en: "Hello doctor. I feel very sick.", fa: "سلام دکتر. خیلی مریض‌حال هستم." },
        { speaker: "B", en: "What are your symptoms?", fa: "علائمتان چیست؟" },
        { speaker: "A", en: "I have a fever and my head hurts.", fa: "تب دارم و سرم درد می‌کند." },
        { speaker: "B", en: "How long have you had the fever?", fa: "تب را چه مدت دارید؟" },
        { speaker: "A", en: "It started two days ago.", fa: "دو روز پیش شروع شد." },
        { speaker: "B", en: "You have the flu. Rest and drink water.", fa: "آنفولانزا دارید. استراحت کنید و آب بخورید." }
      ]
    },
    quiz: [
      { q: "«تب» کدام است؟", options: ["fever", "favor", "fear"], a: 0 },
      { q: "«دو روز پیش شروع شد» کدام است؟", options: ["It started two days ago.", "It starts two days before.", "It was starting two days."], a: 0 },
      { q: "«سرفه» کدام است؟", options: ["cough", "cow", "cold"], a: 0 },
      { q: "«علائمتان چیست؟» کدام است؟", options: ["What are your symptoms?", "What is your sick?", "How are symptoms?"], a: 0 },
      { q: "«باید استراحت کنی و آب بخوری» کدام است؟", options: ["You should rest and drink water.", "You must resting and drinking.", "You should to rest water."], a: 0 }
    ]
  },
  {
    id: 23,
    title: "In the City",
    titleFa: "در شهر",
    emoji: "🏙️",
    intro: "مکان‌های شهری: پست، داروخانه، سوپرمارکت و فرستادن نامه.",
    vocab: [
      { en: "city", fa: "شهر", tip: "«سیتی»" },
      { en: "pharmacy", fa: "داروخانه", tip: "«فارماسی»" },
      { en: "post office", fa: "دفتر پست", tip: "«پست اوفیس»" },
      { en: "supermarket", fa: "سوپرمارکت", tip: "«سوپِرمارکت»" },
      { en: "park", fa: "پارک", tip: "«پارک»" },
      { en: "square", fa: "میدان", tip: "«اسکوئر»" },
      { en: "library", fa: "کتابخانه", tip: "«لایبرری»" },
      { en: "mosque", fa: "مسجد", tip: "«مُسک»" },
      { en: "busy street", fa: "خیابان شلوغ", tip: "«بیزی استریت»" },
      { en: "downtown", fa: "مرکز شهر", tip: "«داون‌تاون»" }
    ],
    phrases: [
      { en: "Is there a pharmacy near here?", fa: "داروخانه‌ای این اطراف هست؟" },
      { en: "The post office is downtown.", fa: "دفتر پست در مرکز شهر است." },
      { en: "I want to send this letter.", fa: "می‌خواهم این نامه را بفرستم." },
      { en: "The supermarket is open until nine.", fa: "سوپرمارکت تا ۹ باز است." },
      { en: "This street is very busy in the morning.", fa: "این خیابان صبح‌ها خیلی شلوغ است." }
    ],
    dialogue: {
      title: "به دنبال داروخانه",
      lines: [
        { speaker: "A", en: "Excuse me, is there a pharmacy near here?", fa: "ببخشید، داروخانه‌ای این اطراف هست؟" },
        { speaker: "B", en: "Yes, there is one on Main Street.", fa: "بله، در خیابان اصلی یکی هست." },
        { speaker: "A", en: "How can I get there?", fa: "چطور می‌توانم آنجا بروم؟" },
        { speaker: "B", en: "Go straight and turn left at the square.", fa: "مستقیم برو و در میدان بپیچ چپ." },
        { speaker: "A", en: "Is it far?", fa: "دور است؟" },
        { speaker: "B", en: "No, just five minutes.", fa: "نه، فقط پنج دقیقه." }
      ]
    },
    quiz: [
      { q: "«داروخانه‌ای این اطراف هست؟» کدام است؟", options: ["Is there a pharmacy near here?", "Is a pharmacy this near?", "Has pharmacy near here?"], a: 0 },
      { q: "«کتابخانه» کدام است؟", options: ["library", "librarian", "bookstore shop"], a: 0 },
      { q: "«مرکز شهر» کدام است؟", options: ["downtown", "downstreet", "city down"], a: 0 },
      { q: "«می‌خواهم این نامه را بفرستم» کدام است؟", options: ["I want send this letter.", "I want to send this letter.", "I want sending this letter."], a: 1 },
      { q: "«دفتر پست» کدام است؟", options: ["post office", "office post", "postal off"], a: 0 }
    ]
  },
  {
    id: 24,
    mode: "upgrade",
    title: "Transport and Traffic",
    titleFa: "حمل‌ونقل و ترافیک",
    emoji: "🚌",
    intro: "سوار شدن تاکسی، مترو و اتوبوس — پرداخت کرایه و پرسیدن مسیر.",
    vocab: [
      { en: "taxi", fa: "تاکسی", tip: "«تاکسی»" },
      { en: "bus", fa: "اتوبوس", tip: "«باس»" },
      { en: "metro / subway", fa: "مترو", tip: "«مترو / ساب‌وی»" },
      { en: "train", fa: "قطار", tip: "«ترِین»" },
      { en: "airport", fa: "فرودگاه", tip: "«اِرپورت»" },
      { en: "ticket", fa: "بلیت", tip: "«تیکِت»" },
      { en: "driver", fa: "راننده", tip: "«درایوِر»" },
      { en: "traffic", fa: "ترافیک", tip: "«ترافیک»" },
      { en: "station", fa: "ایستگاه", tip: "«استیشن»" },
      { en: "get on / get off", fa: "سوار شدن / پیاده شدن", tip: "«گِت آن / گِت اوف»" }
    ],
    phrases: [
      { en: "Please take me to the airport.", fa: "لطفاً مرا به فرودگاه ببر." },
      { en: "How much is the ticket?", fa: "بلیت چند است؟" },
      { en: "Where is the bus station?", fa: "ایستگاه اتوبوس کجاست؟" },
      { en: "Which bus goes to the city center?", fa: "کدام اتوبوس به مرکز شهر می‌رود؟" },
      { en: "The traffic is very heavy today.", fa: "امروز ترافیک خیلی سنگین است." }
    ],
    dialogue: {
      title: "در تاکسی",
      lines: [
        { speaker: "A", en: "Hi! Please take me to the airport.", fa: "سلام! لطفاً مرا به فرودگاه ببر." },
        { speaker: "B", en: "OK. The traffic is heavy today.", fa: "باشه. امروز ترافیک سنگین است." },
        { speaker: "A", en: "How long does it take?", fa: "چقدر طول می‌کشد؟" },
        { speaker: "B", en: "About forty minutes.", fa: "حدود چهل دقیقه." },
        { speaker: "A", en: "How much is it?", fa: "چقدر می‌شود؟" },
        { speaker: "B", en: "Twenty dollars.", fa: "بیست دلار." }
      ]
    },
    quiz: [
      { q: "«لطفاً مرا به فرودگاه ببر» کدام است؟", options: ["Please take me to the airport.", "Please go me airport.", "Please bring me to airport."], a: 0 },
      { q: "«چقدر طول می‌کشد؟» کدام است؟", options: ["How long does it take?", "How much time it takes?", "How long it is?"], a: 0 },
      { q: "«بلیت» کدام است؟", options: ["ticket", "market", "pocket"], a: 0 },
      { q: "«کدام اتوبوس به مرکز شهر می‌رود؟» کدام است؟", options: ["Which bus goes to the city center?", "What bus go city center?", "Which bus going center city?"], a: 0 },
      { q: "«ایستگاه» کدام است؟", options: ["station", "stationary", "stoppage"], a: 0 }
    ]
  },
  {
    id: 25,
    title: "Sports and Exercise",
    titleFa: "ورزش و تمرین",
    emoji: "🏅",
    intro: "ورزش‌های محبوب، باشگاه و گفتن اینکه چقدر فعال هستی.",
    vocab: [
      { en: "sport", fa: "ورزش", tip: "«اسپورت»" },
      { en: "football", fa: "فوتبال", tip: "«فوتبال»" },
      { en: "volleyball", fa: "والیبال", tip: "«والی‌بول»" },
      { en: "swimming", fa: "شنا", tip: "«سویمینگ»" },
      { en: "running", fa: "دویدن", tip: "«رانینگ»" },
      { en: "team", fa: "تیم", tip: "«تیم»" },
      { en: "game / match", fa: "بازی / مسابقه", tip: "«گِیم / مَچ»" },
      { en: "win / lose", fa: "بردن / باختن", tip: "«وین / لوuz»" },
      { en: "player", fa: "بازیکن", tip: "«پلیر»" },
      { en: "exercise", fa: "تمرین / ورزش کردن", tip: "«اکسِرسایز»" }
    ],
    phrases: [
      { en: "Do you play any sports?", fa: "ورزشی انجام می‌دهی؟" },
      { en: "I play football every weekend.", fa: "هر آخر هفته فوتبال بازی می‌کنم." },
      { en: "My team won the game!", fa: "تیم من بازی را برد!" },
      { en: "I go swimming twice a week.", fa: "هفته‌ای دو بار شنا می‌روم." },
      { en: "Running is good for your health.", fa: "دویدن برای سلامتی خوب است." }
    ],
    dialogue: {
      title: "درباره ورزش",
      lines: [
        { speaker: "A", en: "Do you play any sports?", fa: "ورزشی انجام می‌دهی؟" },
        { speaker: "B", en: "Yes, I love football. I play every weekend.", fa: "بله، فوتبال را دوست دارم. هر آخر هفته بازی می‌کنم." },
        { speaker: "A", en: "Are you in a team?", fa: "در تیمی هستی؟" },
        { speaker: "B", en: "Yes, and we won our last game!", fa: "بله، و بازی آخر را بردیم!" },
        { speaker: "A", en: "Great! I should exercise more too.", fa: "عالی! من هم باید بیشتر ورزش کنم." }
      ]
    },
    quiz: [
      { q: "«ورزشی انجام می‌دهی؟» کدام است؟", options: ["Do you play any sports?", "Do you make sports?", "Are you playing sport any?"], a: 0 },
      { q: "«تیم من بازی را برد» کدام است؟", options: ["My team won the game.", "My team winned the game.", "My team wins the game yesterday."], a: 0 },
      { q: "«هفته‌ای دو بار شنا می‌روم» کدام است؟", options: ["I go swimming two a week.", "I go swimming twice a week.", "I go swimming double week."], a: 1 },
      { q: "«بازیکن» کدام است؟", options: ["player", "playman", "gamer man"], a: 0 },
      { q: "«دویدن برای سلامتی خوب است» کدام است؟", options: ["Running is good for your health.", "Running is good to your health.", "Running good for your healthy."], a: 0 }
    ]
  }
);
