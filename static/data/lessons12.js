/* داده‌های دوره — بخش ۱۲: درس ۵۶ تا ۶۰ */
window.LESSONS.push(
  {
    id: 56,
    title: "At the Hotel",
    titleFa: "در هتل — مشکلات",
    emoji: "🏨",
    intro: "گزارش مشکل در اتاق هتل و درخواست خدمات.",
    vocab: [
      { en: "reception", fa: "پذیرش", tip: "«ریسِپشن»" },
      { en: "receptionist", fa: "پذیرش‌دار", tip: "«ریسپشنیست»" },
      { en: "room key", fa: "کلید اتاق", tip: "«روم کی»" },
      { en: "air conditioning", fa: "کولر / تهویه", tip: "«اِر کاندیشنینگ»" },
      { en: "broken", fa: "خراب", tip: "«بروکِن»" },
      { en: "towels", fa: " حوله‌ها", tip: "«تاوِلز»" },
      { en: "clean my room", fa: "اتاقم را تمیز کنید", tip: "«کلین مای روم»" },
      { en: "wake-up call", fa: "تماس بیدارباش", tip: "«ویک‌آپ کال»" },
      { en: "complaint", fa: "شکایت", tip: "«کمپلِینت»" },
      { en: "Could you send someone?", fa: "می‌توانید کسی بفرستید؟", tip: "«کود یو سند سام‌وان»" }
    ],
    phrases: [
      { en: "The air conditioning is broken.", fa: "کولر خراب است." },
      { en: "There are no towels in my room.", fa: "در اتاقم حوله نیست." },
      { en: "Could you send someone to fix it?", fa: "می‌توانید کسی برای تعمیرش بفرستید؟" },
      { en: "Can I have a wake-up call at six?", fa: "می‌توانم ساعت ۶ تماس بیدارباش بگیرم؟" },
      { en: "Sorry for the problem. We will fix it now.", fa: "بابت مشکل عذرخواهی می‌کنیم. الان درستش می‌کنیم." }
    ],
    dialogue: {
      title: "تماس با پذیرش هتل",
      lines: [
        { speaker: "A", en: "Reception, how can I help you?", fa: "پذیرش، چطور کمکتان کنم؟" },
        { speaker: "B", en: "Hello. The air conditioning in my room is broken.", fa: "سلام. کولر اتاقم خراب است." },
        { speaker: "A", en: "I am sorry, sir. Room number?", fa: "متأسفم. شماره اتاق؟" },
        { speaker: "B", en: "Room 305. It is very hot.", fa: "اتاق ۳۰۵. خیلی گرم است." },
        { speaker: "A", en: "We will send someone right now. Sorry again!", fa: "همین الان کسی می‌فرستیم. باز هم عذر می‌خواهیم!" },
        { speaker: "B", en: "Thank you very much.", fa: "خیلی ممنون." }
      ]
    },
    quiz: [
      { q: "«کولر خراب است» کدام است؟", options: ["The air conditioning is broken.", "The air conditioning is broke.", "The air conditioning broken is."], a: 0 },
      { q: "«می‌توانید کسی برای تعمیرش بفرستید؟» کدام است؟", options: ["Could you send someone to fix it?", "Could you send to fix someone it?", "Can you send fix someone?"], a: 0 },
      { q: "«حوله» کدام است؟", options: ["towel", "tower", "tale"], a: 0 },
      { q: "«تماس بیدارباش» کدام است؟", options: ["wake-up call", "wake call-up", "calling wake"], a: 0 },
      { q: "«خراب» کدام است؟", options: ["broken", "broked", "breaked"], a: 0 }
    ]
  },
  {
    id: 57,
    title: "Emergencies",
    titleFa: "وضعیت‌های اضطراری",
    emoji: "🆘",
    intro: "جمله‌های حیاتی برای شرایط اضطراری — کمک خواستن.",
    vocab: [
      { en: "emergency", fa: "اضطراری", tip: "«ایمِرجِنسی»" },
      { en: "help!", fa: "کمک!", tip: "«هِلپ»" },
      { en: "fire!", fa: "آتش‌سوزی!", tip: "«فایر»" },
      { en: "accident", fa: "تصادف", tip: "«اَکسیدِنت»" },
      { en: "police", fa: "پلیس", tip: "«پِلیس»" },
      { en: "ambulance", fa: "آمبولانس", tip: "«امبیولانس»" },
      { en: "hurt / injured", fa: "آسیب‌دیده", tip: "«هِرت / اینجرِد»" },
      { en: "dangerous", fa: "خطرناک", tip: "«دِینجِرِس»" },
      { en: "Call the police!", fa: "زنگ بزن به پلیس!", tip: "«کال دِ پلیس»" },
      { en: "Are you OK?", fa: "حالت خوب است؟", tip: "«آر یو اوکی»" }
    ],
    phrases: [
      { en: "Help! Call an ambulance!", fa: "کمک! آمبولانس خبر کنید!" },
      { en: "There has been an accident!", fa: "تصادفی رخ داده است!" },
      { en: "Are you OK? Are you hurt?", fa: "حالت خوب است؟ آسیب دیدی؟" },
      { en: "This is an emergency!", fa: "این یک وضعیت اضطراری است!" },
      { en: "Please hurry!", fa: "لطفاً عجله کنید!" }
    ],
    dialogue: {
      title: "تصادف در خیابان",
      lines: [
        { speaker: "A", en: "Oh no! Are you OK?", fa: "وای نه! حالت خوب است؟" },
        { speaker: "B", en: "I think my leg is hurt. Please help!", fa: "فکر کنم پا‌م آسیب دیده. لطفاً کمک!" },
        { speaker: "A", en: "Don't move. I will call an ambulance.", fa: "تکان نخور. آمبولانس خبر می‌کنم." },
        { speaker: "B", en: "Thank you. Please hurry!", fa: "ممنون. لطفاً عجله کن!" },
        { speaker: "A", en: "They are coming. Stay with me!", fa: "در راه‌اند. با من باش!" }
      ]
    },
    quiz: [
      { q: "«آمبولانس خبر کنید!» کدام است؟", options: ["Call an ambulance!", "Ambulance call it!", "Call to ambulance!"], a: 0 },
      { q: "«حالت خوب است؟» کدام است؟", options: ["Are you OK?", "You are OK?", "Is you OK?"], a: 0 },
      { q: "«تصادف» کدام است؟", options: ["accident", "incident only", "coincidence"], a: 0 },
      { q: "«این یک وضعیت اضطراری است» کدام است؟", options: ["This is an emergency!", "This is emergency a!", "This emergency is one!"], a: 0 },
      { q: "«لطفاً عجله کنید» کدام است؟", options: ["Please hurry!", "Please fast do!", "Please quick make!"], a: 0 }
    ]
  },
  {
    id: 58,
    title: "Making Friends",
    titleFa: "دوست‌یابی",
    emoji: "🤗",
    intro: "چطور دوست جدید پیدا کنی و دوستی شروع کنی.",
    vocab: [
      { en: "make friends", fa: "دوست پیدا کردن", tip: "«مِیک فرندز»" },
      { en: "friendly", fa: "خون‌گرم / صمیمی", tip: "«فرِندلی»" },
      { en: "meet new people", fa: "آدم‌های جدید دیدن", tip: "«میت نیو پیپل»" },
      { en: "hang out together", fa: "با هم گشت‌وگذار", tip: "«هَنگ اوت توگِذِر»" },
      { en: "common interests", fa: "علاقه‌های مشترک", tip: "«کامِن اینترِستس»" },
      { en: "keep in touch", fa: "در تماس بودن", tip: "«کیپ این تاچ»" },
      { en: "exchange numbers", fa: "شماره‌ها را ردوبدل کردن", tip: "«اکسچِینج نامبرز»" },
      { en: "Do you come here often?", fa: "زیاد اینجا می‌آیی؟", tip: "«دو یو کام هیر اُفِن»" },
      { en: "get along well", fa: "خوش رفتار بودن", tip: "«گِت اِلانگ وِل»" },
      { en: "nice person", fa: "آدم خوب", tip: "«نایس پِرسن»" }
    ],
    phrases: [
      { en: "Hi! Do you come here often?", fa: "سلام! زیاد اینجا می‌آیی؟" },
      { en: "We have common interests!", fa: "علاقه‌های مشترکی داریم!" },
      { en: "Let's keep in touch. Here is my number.", fa: "در تماس باشیم. این شماره من است." },
      { en: "You are a very nice person.", fa: "آدم خیلی خوبی هستی." },
      { en: "We should hang out together sometime.", fa: "باید یه روزی با هم گشت بزنیم." }
    ],
    dialogue: {
      title: "در کافه — دوست جدید",
      lines: [
        { speaker: "A", en: "Hi! Is this seat free?", fa: "سلام! اینجا خالی است؟" },
        { speaker: "B", en: "Yes, of course. Sit down!", fa: "بله حتماً. بنشین!" },
        { speaker: "A", en: "Thanks. Do you come here often?", fa: "ممنون. زیاد اینجا می‌آیی؟" },
        { speaker: "B", en: "Every day! I love their coffee.", fa: "هر روز! قهوه‌شان را دوست دارم." },
        { speaker: "A", en: "Me too! We should keep in touch.", fa: "من هم! باید در تماس باشیم." },
        { speaker: "B", en: "Great! Here is my number.", fa: "عالی! این شماره من است." }
      ]
    },
    quiz: [
      { q: "«زیاد اینجا می‌آیی؟» کدام است؟", options: ["Do you come here often?", "You come here often do?", "Do you often come here at?"], a: 0 },
      { q: "«در تماس باشیم» کدام است؟", options: ["Let's keep in touch.", "Let's keep on touch.", "Let's stay in touching."], a: 0 },
      { q: "«دوست پیدا کردن» کدام است؟", options: ["make friends", "do friends", "make friendships happen"], a: 0 },
      { q: "«علاقه‌های مشترک» کدام است؟", options: ["common interests", "common interested", "together interests"], a: 0 },
      { q: "«آدم خیلی خوبی هستی» کدام است؟", options: ["You are a very nice person.", "You are very a nice person.", "You a very nice person are."], a: 0 }
    ]
  },
  {
    id: 59,
    title: "Job Interview",
    titleFa: "مصاحبه شغلی",
    emoji: "🧑‍💼",
    intro: "مصاحبه استخدام: معرفی خود، مهارت‌ها و سؤال‌های پرتکرار.",
    vocab: [
      { en: "interview", fa: "مصاحبه", tip: "«اینترویو»" },
      { en: "candidate", fa: "داوطلب / نامزدها", tip: "«کَندیدِیت»" },
      { en: "experience", fa: "سابقه / تجربه", tip: "«اکسپیرینس»" },
      { en: "skills", fa: "مهارت‌ها", tip: "«اسکیلز»" },
      { en: "resume / CV", fa: "رزومه", tip: "«رِزیومه»" },
      { en: "strengths / weaknesses", fa: "نقاط قوت / ضعف", tip: "«استرنگثس / ویکنِسِز»" },
      { en: "teamwork", fa: "کار تیمی", tip: "«تیم‌وورک»" },
      { en: "Why should we hire you?", fa: "چرا شما را استخدام کنیم؟", tip: "«وای شود وی هایر یو»" },
      { en: "Tell me about yourself", fa: "از خودتان بگویید", tip: "«تِل می اَباوت یورسلف»" },
      { en: "available", fa: "آزاد / در دسترس", tip: "«اَویلِبل»" }
    ],
    phrases: [
      { en: "Thank you for this interview.", fa: "ممنون از این مصاحبه." },
      { en: "I have three years of experience.", fa: "سه سال سابقه دارم." },
      { en: "My strength is teamwork.", fa: "نقطه قوتم کار تیمی است." },
      { en: "I am a hard worker and I learn fast.", fa: "سخت‌کوش هستم و سریع یاد می‌گیرم." },
      { en: "When can you start? I can start next week.", fa: "کی می‌توانی شروع کنی؟ هفته بعد می‌توانم." }
    ],
    dialogue: {
      title: "مصاحبه استخدام",
      lines: [
        { speaker: "A", en: "Good morning. Please tell me about yourself.", fa: "صبح بخیر. لطفاً از خودتان بگویید." },
        { speaker: "B", en: "I am an accountant with three years of experience.", fa: "حسابدارم با سه سال سابقه." },
        { speaker: "A", en: "What are your strengths?", fa: "نقاط قوتتان چیست؟" },
        { speaker: "B", en: "Teamwork and fast learning.", fa: "کار تیمی و یادگیری سریع." },
        { speaker: "A", en: "Why should we hire you?", fa: "چرا شما را استخدام کنیم؟" },
        { speaker: "B", en: "Because I am a hard worker and I love this job.", fa: "چون سخت‌کوش هستم و این شغل را دوست دارم." }
      ]
    },
    quiz: [
      { q: "«سه سال سابقه دارم» کدام است؟", options: ["I have three years of experience.", "I have three years experiences.", "I am three years experienced."], a: 0 },
      { q: "«نقطه قوتم کار تیمی است» کدام است؟", options: ["My strength is teamwork.", "My strong is teamwork.", "My strength are teamworking."], a: 0 },
      { q: "«رزومه» کدام است؟", options: ["resume", "resoom", "re-sum"], a: 0 },
      { q: "«سخت‌کوش هستم» کدام است؟", options: ["I am a hard worker.", "I am a hardly worker.", "I am hard work person."], a: 0 },
      { q: "«سؤال پرتکرار مصاحبه» «از خودتان بگویید» کدام است؟", options: ["Tell me about yourself.", "Say me about your self.", "Talk me about yourself."], a: 0 }
    ]
  },
  {
    id: 60,
    title: "Graduation — Free Conversation",
    titleFa: "فارغ‌التحصیلی — مکالمه آزاد",
    emoji: "🏆",
    intro: "مرور کل دوره! این درس یک مکالمه آزاد طولانی دارد که همه چیز‌هایی که یاد گرفتی را در بر می‌گیرد. تبریک — تو الان می‌توانی مکالمه کنی!",
    vocab: [
      { en: "graduation", fa: "فارغ‌التحصیلی", tip: "«گرَجوِیشن»" },
      { en: "fluently", fa: "روان", tip: "«فلوئنتلی»" },
      { en: "improve", fa: "بهبود دادن", tip: "«ایمپروو»" },
      { en: "practice", fa: "تمرین", tip: "«پرَکتیس»" },
      { en: "keep learning", fa: "ادامه یادگیری", tip: "«کیپ لِرنینگ»" },
      { en: "proud", fa: "مفتخر", tip: "«پراود»" },
      { en: "journey", fa: "سفر (مسیر)", tip: "«جِرنی»" },
      { en: "well done!", fa: "آفرین!", tip: "«وِل دان»" },
      { en: "never give up", fa: "هرگز ناامید نشو", tip: "«نِوِر گیو آپ»" },
      { en: "the more you practice...", fa: "هرچه بیشتر تمرین کنی...", tip: "«دِ مور یو پرَکتیس»" }
    ],
    phrases: [
      { en: "Congratulations on your graduation!", fa: "فارغ‌التحصیلی‌ات مبارک!" },
      { en: "You can speak English now. Well done!", fa: "حالا می‌توانی انگلیسی حرف بزنی. آفرین!" },
      { en: "The more you practice, the better you get.", fa: "هرچه بیشتر تمرین کنی، بهتر می‌شوی." },
      { en: "I am so proud of your journey!", fa: "به مسیرت خیلی افتخار می‌کنم!" },
      { en: "Never give up. Keep learning!", fa: "هرگز ناامید نشو. یادگرفتن را ادامه بده!" }
    ],
    dialogue: {
      title: "مکالمه آزاد — همه‌چیز با هم",
      lines: [
        { speaker: "A", en: "Good morning! How are you today?", fa: "صبح بخیر! امروز حالت چطور است؟" },
        { speaker: "B", en: "I am great, thanks! I just finished my English course.", fa: "عالیم، ممنون! دوره انگلیسی‌ام را تازه تمام کردم." },
        { speaker: "A", en: "Congratulations! So, tell me about your journey.", fa: "مبارکه! خب، از مسیرت بگو." },
        { speaker: "B", en: "It was amazing. I started from zero and now I can speak.", fa: "فوق‌العاده بود. از صفر شروع کردم و حالا می‌توانم صحبت کنم." },
        { speaker: "A", en: "Well done! What helped you the most?", fa: "آفرین! چه چیزی بیشترین کمک را کرد؟" },
        { speaker: "B", en: "Practice every day. The more you practice, the better you get.", fa: "تمرین هر روز. هرچه بیشتر تمرین کنی، بهتر می‌شوی." },
        { speaker: "A", en: "Great advice! What are your plans now?", fa: "پیشنهاد خوبی! حالا برنامه‌ات چیست؟" },
        { speaker: "B", en: "I want to travel and use my English. Maybe find a better job!", fa: "می‌خواهم سفر کنم و انگلیسی‌ام را به کار ببرم. شاید شغل بهتری پیدا کنم!" },
        { speaker: "A", en: "I am sure you will succeed. Never give up!", fa: "مطمئنم موفق می‌شوی. هرگز ناامید نشو!" },
        { speaker: "B", en: "Thank you so much for everything!", fa: "ممنون از همه‌چیز!" }
      ]
    },
    quiz: [
      { q: "«هرچه بیشتر تمرین کنی، بهتر می‌شوی» کدام است؟", options: ["The more you practice, the better you get.", "More practice, better you get the.", "The practice more, the get better you."], a: 0 },
      { q: "«هرگز ناامید نشو» کدام است؟", options: ["Never give up.", "Never give down.", "Ever give up not."], a: 0 },
      { q: "«روان» کدام است؟", options: ["fluently", "fluent", "fluidly only"], a: 0 },
      { q: "«به مسیرت افتخار می‌کنم» کدام است؟", options: ["I am proud of your journey.", "I proud your journey am.", "I am proud you of journey."], a: 0 },
      { q: "«یادگرفتن را ادامه بده» کدام است؟", options: ["Keep learning!", "Keep to learn!", "Keeping learn!"], a: 0 }
    ]
  }
);
