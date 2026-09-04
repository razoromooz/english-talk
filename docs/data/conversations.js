/* سناریوهای مکالمه دوطرفه — اپ نقش شخص A را بازی می‌کند و بازیکن شخص B */
window.CONVERSATIONS = [
  {
    id: "cafe",
    title: "در کافه",
    titleFa: "در کافه",
    emoji: "☕",
    desc: "تو مشتری کافه هستی. سفارش بده!",
    unlockedAt: 8,
    role: "B",
    steps: [
      {
        npc: "Hi! Welcome to our cafe. What can I get you?",
        npcFa: "سلام! به کافه ما خوش آمدی. چه چیزی برات بیارم؟",
        expects: ["coffee", "tea", "latte", "cappuccino", "water", "juice", "cake", "espresso"],
        expectHint: "چیزی سفارش بده (مثلاً: I would like a coffee, please)",
        matchType: "any",
        npcFollow: "Great choice! Anything to eat with that?",
        npcFollowFa: "انتخاب خوبی! چیزی هم برای خوردن می‌خواهی؟",
        expects2: ["cake", "cookie", "sandwich", "no", "nothing", "thanks", "that's all", "just"],
        matchType2: "any",
        npcFail: "Sorry, I didn't catch that. You can say: 'I would like a coffee, please.'",
        npcFailFa: "ببخشید، متوجہ نشدم. می‌توانی بگویی: I would like a coffee, please."
      },
      {
        npc: "For here or to go?",
        npcFa: "همین‌جا میل می‌کنی یا بیرون‌بر؟",
        expects: ["here", "to go", "take away", "takeaway"],
        expectHint: "بگو همین‌جا (for here) یا بیرون‌بر (to go)",
        matchType: "any",
        npcFollow: "Perfect! That will be four dollars.",
        npcFollowFa: "عالیه! چهار دلار می‌شود.",
        expects2: ["here", "dollars", "thank", "thanks", "ok", "okay", "sure", "four"],
        matchType2: "any",
        npcFail: "Sorry? You can say 'for here' or 'to go'.",
        npcFailFa: "ببخشید؟ می‌توانی بگویی for here یا to go."
      },
      {
        npc: "Here is your order. Enjoy your day!",
        npcFa: "سفارشت اینجاست. روز خوبی داشته باشی!",
        expects: ["thank", "thanks", "thank you", "you too", "bye"],
        expectHint: "تشکر کن (Thank you!)",
        matchType: "any",
        npcFollow: "You're welcome! See you again!",
        npcFollowFa: "خواهش می‌کنم! دوباره می‌بینمت!",
        expects2: ["thank", "bye", "see", "you"],
        matchType2: "any",
        npcFail: "Don't forget to say 'Thank you!'",
        npcFailFa: "فراموش نکن بگویی Thank you!"
      }
    ]
  },
  {
    id: "restaurant",
    title: "At the Restaurant",
    titleFa: "در رستوران",
    emoji: "🍽️",
    desc: "گارسون از تو سفارش می‌گیرد. غذا سفارش بده!",
    unlockedAt: 12,
    role: "B",
    steps: [
      {
        npc: "Good evening! Welcome! Are you ready to order?",
        npcFa: "عصر بخیر! خوش آمدی! آماده سفارش هستی؟",
        expects: ["yes", "ready", "chicken", "rice", "pizza", "fish", "salad", "pasta", "burger", "soup"],
        expectHint: "سفارش غذا بده (مثلاً: I will have the chicken)",
        matchType: "any",
        npcFollow: "Excellent choice! Would you like something to drink?",
        npcFollowFa: "انتخاب عالی! چیزی برای نوشیدن می‌خواهی؟",
        expects2: ["water", "juice", "tea", "coffee", "soda", "cola", "yes", "no", "nothing"],
        matchType2: "any",
        npcFail: "Take your time. You can say: 'I will have the chicken with rice.'",
        npcFailFa: "عجله نکن. می‌توانی بگویی: I will have the chicken with rice."
      },
      {
        npc: "Is everything OK with your meal?",
        npcFa: "غذایت مشکلی ندارد؟",
        expects: ["yes", "delicious", "good", "great", "ok", "okay", "lovely", "nice"],
        expectHint: "تعریف کن (مثلاً: It is delicious!)",
        matchType: "any",
        npcFollow: "Wonderful! Would you like some dessert?",
        npcFollowFa: "عالیه! دسر هم می‌خواهی؟",
        expects2: ["yes", "no", "thank", "ice cream", "cake", "maybe", "sure"],
        matchType2: "any",
        npcFail: "You can say: 'Yes, it is delicious!'",
        npcFailFa: "می‌توانی بگویی: Yes, it is delicious!"
      },
      {
        npc: "Here is your bill. It is twenty dollars.",
        npcFa: "حساب اینجاست. بیست دلار می‌شود.",
        expects: ["here", "thank", "thanks", "dollars", "keep", "ok", "okay"],
        expectHint: "پول بده و تشکر کن",
        matchType: "any",
        npcFollow: "Thank you very much! Have a great night!",
        npcFollowFa: "خیلی ممنون! شب خوبی داشته باشی!",
        expects2: ["thank", "you", "night", "bye"],
        matchType2: "any",
        npcFail: "You can say: 'Here you are. Thank you!'",
        npcFailFa: "می‌توانی بگویی: Here you are. Thank you!"
      }
    ]
  },
  {
    id: "taxi",
    title: "In a Taxi",
    titleFa: "در تاکسی",
    emoji: "🚕",
    desc: "راننده تاکسی مسیر را از تو می‌پرسد. آدرس بده!",
    unlockedAt: 15,
    role: "B",
    steps: [
      {
        npc: "Hello! Where would you like to go?",
        npcFa: "سلام! کجا می‌خواهی بروی؟",
        expects: ["airport", "station", "hospital", "hotel", "bank", "park", "city", "center", "downtown", "street", "mall", "museum"],
        expectHint: "مقصد بگو (مثلاً: To the airport, please)",
        matchType: "any",
        npcFollow: "OK, no problem. The traffic is heavy today.",
        npcFollowFa: "خب، مشکلی نیست. امروز ترافیک سنگین است.",
        expects2: ["ok", "okay", "long", "how", "much", "time", "far", "minutes"],
        matchType2: "any",
        npcFail: "Where? You can say: 'To the airport, please.'",
        npcFailFa: "کجا؟ می‌توانی بگویی: To the airport, please."
      },
      {
        npc: "We are almost there. About ten more minutes.",
        npcFa: "تقریباً رسیدیم. حدود ده دقیقه دیگر.",
        expects: ["ok", "okay", "good", "thank", "thanks", "great", "fine"],
        expectHint: "جواب کوتاه بده (مثلاً: OK, thank you)",
        matchType: "any",
        npcFollow: "Here we are! That will be fifteen dollars.",
        npcFollowFa: "رسیدیم! پانزده دلار می‌شود.",
        expects2: ["here", "thank", "thanks", "dollars", "ok", "okay", "keep"],
        matchType2: "any",
        npcFail: "You can say: 'OK, thank you.'",
        npcFailFa: "می‌توانی بگویی: OK, thank you."
      },
      {
        npc: "Thank you! Do you need a receipt?",
        npcFa: "ممنون! رسید می‌خواهی؟",
        expects: ["yes", "no", "thank", "thanks", "please", "sure"],
        expectHint: "بله یا نه بگو",
        matchType: "any",
        npcFollow: "Here you are. Have a nice day! Goodbye!",
        npcFollowFa: "بفرمایید. روز خوبی داشته باشی! خداحافظ!",
        expects2: ["thank", "you", "too", "bye", "goodbye"],
        matchType2: "any",
        npcFail: "You can say 'Yes, please' or 'No, thank you'.",
        npcFailFa: "می‌توانی بگویی Yes, please یا No, thank you."
      }
    ]
  },
  {
    id: "doctor",
    title: "At the Doctor's",
    titleFa: "مطب دکتر",
    emoji: "🩺",
    desc: "دکتر از علائمت می‌پرسد. توصیف کن!",
    unlockedAt: 18,
    role: "B",
    steps: [
      {
        npc: "Good morning! What seems to be the problem?",
        npcFa: "صبح بخیر! مشکل چیست؟",
        expects: ["head", "stomach", "hurt", "ache", "sick", "fever", "cold", "cough", "pain", "sore", "tired", "ill", "tooth", "back"],
        expectHint: "علائمت را بگو (مثلاً: My head hurts)",
        matchType: "any",
        npcFollow: "I see. Since when do you have this problem?",
        npcFollowFa: "متوجه شدم. از کی این مشکل را داری؟",
        expects2: ["yesterday", "today", "days", "week", "night", "morning", "hours", "since", "two", "three", "one"],
        matchType2: "any",
        npcFail: "Tell me your symptom. You can say: 'My head hurts.'",
        npcFailFa: "علامتت را بگو. می‌توانی بگویی: My head hurts."
      },
      {
        npc: "OK. Do you have a fever too?",
        npcFa: "خب. تب هم داری؟",
        expects: ["yes", "no", "little", "small", "maybe", "think"],
        expectHint: "بله یا نه بگو",
        matchType: "any",
        npcFollow: "Alright. You should rest and drink a lot of water. I will give you some medicine.",
        npcFollowFa: "باشه. باید استراحت کنی و آب زیاد بخوری. مقداری دارو می‌دهم.",
        expects2: ["thank", "thanks", "ok", "okay", "how", "many", "medicine", "take", "much"],
        matchType2: "any",
        npcFail: "Just say 'Yes' or 'No, I don't'.",
        npcFailFa: "فقط بگو Yes یا No, I don't."
      },
      {
        npc: "Take this medicine twice a day. Do you have any questions?",
        npcFa: "این دارو را روزی دو بار مصرف کن. سؤالی داری؟",
        expects: ["no", "thank", "thanks", "yes", "how", "when", "what", "ok", "okay"],
        expectHint: "سؤالت را بپرس یا تشکر کن",
        matchType: "any",
        npcFollow: "You're welcome! Feel better soon. Goodbye!",
        npcFollowFa: "خواهش می‌کنم! زود خوب شو. خداحافظ!",
        expects2: ["thank", "you", "bye", "goodbye", "much"],
        matchType2: "any",
        npcFail: "You can ask: 'How many days should I take it?'",
        npcFailFa: "می‌توانی بپرسی: How many days should I take it?"
      }
    ]
  },
  {
    id: "shopping",
    title: "Clothes Shopping",
    titleFa: "خرید لباس",
    emoji: "🛍️",
    desc: "در مغازه لباس داری خرید می‌کنی. قیمت بپرس و خرید کن!",
    unlockedAt: 20,
    role: "B",
    steps: [
      {
        npc: "Hello! Can I help you with something?",
        npcFa: "سلام! کمکی می‌توانم بکنم؟",
        expects: ["yes", "looking", "shirt", "jacket", "shoes", "pants", "dress", "how", "much", "price"],
        expectHint: "چیزی بپرس یا ببین (مثلاً: How much is this shirt?)",
        matchType: "any",
        npcFollow: "That shirt is twenty dollars. Would you like to try it on?",
        npcFollowFa: "آن پیراهن بیست دلار است. می‌خواهی پروش کنی؟",
        expects2: ["yes", "sure", "ok", "okay", "try", "please", "where"],
        matchType2: "any",
        npcFail: "You can say: 'Yes, how much is this shirt?'",
        npcFailFa: "می‌توانی بگویی: Yes, how much is this shirt?"
      },
      {
        npc: "The changing room is over there. How does it fit?",
        npcFa: "اتاق پرو آنجاست. اندازه‌ات شد؟",
        expects: ["fits", "fit", "good", "nice", "great", "small", "big", "large", "size", "love", "like", "perfect"],
        expectHint: "بگو اندازه شد یا نه (مثلاً: It fits perfectly!)",
        matchType: "any",
        npcFollow: "Wonderful! So, will you take it?",
        npcFollowFa: "عالیه! خب، برش می‌داری؟",
        expects2: ["yes", "take", "will", "buy", "sure", "ok", "okay", "thanks"],
        matchType2: "any",
        npcFail: "You can say: 'It fits well!' or 'It is too small.'",
        npcFailFa: "می‌توانی بگویی: It fits well! یا It is too small."
      },
      {
        npc: "Great! That will be twenty dollars. How will you pay?",
        npcFa: "عالی! بیست دلار می‌شود. چطور پرداخت می‌کنی؟",
        expects: ["cash", "card", "here", "dollars", "money", "thank", "ok", "okay"],
        expectHint: "نحوه پرداخت را بگو (cash یا card)",
        matchType: "any",
        npcFollow: "Perfect! Here is your receipt. Thank you and goodbye!",
        npcFollowFa: "کامل! رسیدت اینجاست. ممنون و خداحافظ!",
        expects2: ["thank", "thanks", "you", "too", "bye", "goodbye"],
        matchType2: "any",
        npcFail: "You can say: 'I will pay with cash' or 'By card, please.'",
        npcFailFa: "می‌توانی بگویی: I will pay with cash یا By card, please."
      }
    ]
  },
  {
    id: "directions",
    title: "Asking for Directions",
    titleFa: "پرسیدن آدرس",
    emoji: "🗺️",
    desc: "تو از عابر پیاده آدرس می‌پرسی. بپرس و برو!",
    unlockedAt: 25,
    role: "B",
    steps: [
      {
        npc: "Hello, you look a little lost. Do you need help?",
        npcFa: "سلام، کمی گم به نظر می‌رسی. کمک می‌خواهی؟",
        expects: ["yes", "where", "how", "bank", "hospital", "station", "museum", "pharmacy", "post", "airport", "mall", "get"],
        expectHint: "آدرس یک جا را بپرس (مثلاً: Where is the bank?)",
        matchType: "any",
        npcFollow: "The bank? Yes, I know it. It is not far from here.",
        npcFollowFa: "بانک؟ بله، می‌شناسمش. از اینجا دور نیست.",
        expects2: ["how", "where", "far", "get", "walk", "minutes", "ok", "okay", "thank"],
        matchType2: "any",
        npcFail: "Ask me! You can say: 'Excuse me, where is the bank?'",
        npcFailFa: "بپرس! می‌توانی بگویی: Excuse me, where is the bank?"
      },
      {
        npc: "Go straight on this street, then turn left at the traffic lights.",
        npcFa: "در همین خیابان مستقیم برو، بعد سر چراغ راهنمایی بپیچ چپ.",
        expects: ["left", "right", "straight", "far", "long", "minutes", "walk", "thank", "ok", "okay", "how"],
        expectHint: "مسیر را تأیید کن یا سؤال بپرس",
        matchType: "any",
        npcFollow: "It is about five minutes on foot. You can't miss it!",
        npcFollowFa: "حدود پنج دقیقه پیاده است. حتماً پیدایش می‌کنی!",
        expects2: ["thank", "thanks", "ok", "okay", "great", "good", "far", "is", "five"],
        matchType2: "any",
        npcFail: "You can say: 'OK. Is it far from here?'",
        npcFailFa: "می‌توانی بگویی: OK. Is it far from here?"
      },
      {
        npc: "My pleasure! Do you need anything else?",
        npcFa: "خواهش می‌کنم! چیز دیگری لازم داری؟",
        expects: ["no", "thank", "thanks", "that's", "all", "good", "bye"],
        expectHint: "تشکر کن و خداحافظی کن",
        matchType: "any",
        npcFollow: "You're welcome. Goodbye! Have a great day!",
        npcFollowFa: "خواهش می‌کنم. خداحافظ! روز خوبی داشته باشی!",
        expects2: ["thank", "you", "too", "bye", "goodbye", "day"],
        matchType2: "any",
        npcFail: "Say: 'No, thank you very much. Goodbye!'",
        npcFailFa: "بگو: No, thank you very much. Goodbye!"
      }
    ]
  },
  {
    id: "hotel",
    title: "Checking into a Hotel",
    titleFa: "ورود به هتل",
    emoji: "🏨",
    desc: "پذیرش‌دار هتل از تو اطلاعات می‌گیرد. چک‌این کن!",
    unlockedAt: 30,
    role: "B",
    steps: [
      {
        npc: "Good afternoon! Welcome to Grand Hotel. Do you have a reservation?",
        npcFa: "بعدازظهر بخیر! به هتل گرند خوش آمدی. رزرو داری؟",
        expects: ["yes", "name", "no", "room", "want", "book", "reservation", "have"],
        expectHint: "بگو رزرو داری (Yes, I have a reservation)",
        matchType: "any",
        npcFollow: "May I have your name, please?",
        npcFollowFa: "می‌توانم اسمت را بپرسم؟",
        expects2: ["ali", "sara", "reza", "maryam", "ahmadi", "karimi", "mohammadi", "my", "name", "i"],
        matchType2: "any",
        npcFail: "Say 'Yes, I have a reservation' or 'No, I want a room.'",
        npcFailFa: "بگو Yes, I have a reservation یا No, I want a room."
      },
      {
        npc: "Thank you! How many nights will you stay?",
        npcFa: "ممنون! چند شب می‌مانی؟",
        expects: ["one", "two", "three", "four", "five", "night", "nights", "week", "days"],
        expectHint: "تعداد شب را بگو (مثلاً: Two nights)",
        matchType: "any",
        npcFollow: "Wonderful. Would you like a single or a double room?",
        npcFollowFa: "عالیه. اتاق یک‌نفره می‌خواهی یا دونفره؟",
        expects2: ["single", "double", "one", "two", "big", "small"],
        matchType2: "any",
        npcFail: "You can say: 'Two nights, please.'",
        npcFailFa: "می‌توانی بگویی: Two nights, please."
      },
      {
        npc: "Here is your key card. Room 302, third floor. Breakfast is at seven.",
        npcFa: "کارت کلیدت. اتاق ۳۰۲، طبقه سوم. صبحانه ساعت ۷ است.",
        expects: ["thank", "thanks", "what", "time", "where", "breakfast", "ok", "okay", "seven"],
        expectHint: "تشکر کن یا سؤال بپرس",
        matchType: "any",
        npcFollow: "The restaurant is on the first floor. Enjoy your stay!",
        npcFollowFa: "رستوران در طبقه اول است. اقامت خوبی داشته باشی!",
        expects2: ["thank", "you", "much", "ok", "okay", "great", "good"],
        matchType2: "any",
        npcFail: "You can ask: 'Where is breakfast?' or say 'Thank you!'",
        npcFailFa: "می‌توانی بپرسی: Where is breakfast? یا بگویی Thank you!"
      }
    ]
  },
  {
    id: "friends",
    title: "Meeting a Friend",
    titleFa: "ملاقات دوست",
    emoji: "🤝",
    desc: "دوستی را در خیابان می‌بینی. گپ بزن!",
    unlockedAt: 35,
    role: "B",
    steps: [
      {
        npc: "Hey! Long time no see! How are you?",
        npcFa: "هی! خیلی وقته ندیدمت! حالت چطوره؟",
        expects: ["fine", "good", "great", "well", "ok", "okay", "happy", "how", "you"],
        expectHint: "حالت را بگو و جوابش را بپرس (I am fine, thank you! And you?)",
        matchType: "any",
        npcFollow: "I am great too, thanks! What are you doing these days?",
        npcFollowFa: "من هم عالیم، ممنون! این روزها چه کار می‌کنی؟",
        expects2: ["work", "working", "study", "studying", "job", "school", "university", "english", "learning", "nothing", "busy"],
        matchType2: "any",
        npcFail: "You can say: 'I am fine, thank you! And you?'",
        npcFailFa: "می‌توانی بگویی: I am fine, thank you! And you?"
      },
      {
        npc: "That is wonderful! Hey, are you free this Friday evening?",
        npcFa: "این فوق‌العاده‌ست! هی، جمعه عصر وقتت خالیه؟",
        expects: ["yes", "free", "friday", "sure", "why", "what", "maybe", "no", "sorry", "busy"],
        expectHint: "بگو وقت داری یا نه",
        matchType: "any",
        npcFollow: "Great! There is a new movie. Do you want to watch it together?",
        npcFollowFa: "عالیه! یک فیلم جدید اومده. می‌خواهی با هم ببینیم؟",
        expects2: ["yes", "sure", "love", "great", "ok", "okay", "good", "idea", "sounds", "like", "movie"],
        matchType2: "any",
        npcFail: "You can say: 'Yes, I am free! Why?'",
        npcFailFa: "می‌توانی بگویی: Yes, I am free! Why?"
      },
      {
        npc: "Awesome! Let's meet at the cinema at seven o'clock.",
        npcFa: "عالیه! ساعت ۷ جلوی سینما همدیگر را ببینیم.",
        expects: ["ok", "okay", "seven", "great", "good", "see", "thank", "thanks", "sure", "perfect", "bye"],
        expectHint: "موافقت کن (مثلاً: OK! See you on Friday!)",
        matchType: "any",
        npcFollow: "See you on Friday! Goodbye my friend!",
        npcFollowFa: "جمعه می‌بینمت! خداحافظ رفیق!",
        expects2: ["see", "you", "bye", "goodbye", "friday", "thank"],
        matchType2: "any",
        npcFail: "Say: 'OK! See you on Friday. Goodbye!'",
        npcFailFa: "بگو: OK! See you on Friday. Goodbye!"
      }
    ]
  },
  {
    id: "interview",
    title: "Job Interview",
    titleFa: "مصاحبه شغلی",
    emoji: "💼",
    desc: "مصاحبه استخدامی! به سؤال‌های مدیر جواب بده.",
    unlockedAt: 45,
    role: "B",
    steps: [
      {
        npc: "Good morning! Please tell me a little about yourself.",
        npcFa: "صبح بخیر! لطفاً کمی از خودت بگو.",
        expects: ["name", "i am", "i'm", "my name", "years", "old", "from", "engineer", "teacher", "accountant", "student", "work"],
        expectHint: "خودت را معرفی کن (My name is Ali. I am an engineer.)",
        matchType: "any",
        npcFollow: "Interesting! Do you have work experience?",
        npcFollowFa: "جالب است! سابقه کاری داری؟",
        expects2: ["yes", "years", "experience", "worked", "no", "new", "three", "two", "five", "one"],
        matchType2: "any",
        npcFail: "Introduce yourself: 'My name is Ali. I am an engineer.'",
        npcFailFa: "معرفی کن: My name is Ali. I am an engineer."
      },
      {
        npc: "Great. Why do you want this job?",
        npcFa: "خوبه. چرا این شغل را می‌خواهی؟",
        expects: ["because", "like", "love", "want", "learn", "good", "company", "interest", "job", "think", "skills"],
        expectHint: "دلیل بگو (مثلاً: Because I like this job and I am a hard worker)",
        matchType: "any",
        npcFollow: "Good answer! What are your strengths?",
        npcFollowFa: "جواب خوبی بود! نقاط قوتت چیست؟",
        expects2: ["hard", "worker", "teamwork", "fast", "learner", "friendly", "punctual", "good", "skills", "communication"],
        matchType2: "any",
        npcFail: "Say: 'Because I love this job and I am a hard worker.'",
        npcFailFa: "بگو: Because I love this job and I am a hard worker."
      },
      {
        npc: "Wonderful! Last question: When can you start?",
        npcFa: "عالی! آخرین سؤال: کی می‌توانی شروع کنی؟",
        expects: ["tomorrow", "today", "monday", "next", "week", "now", "start", "can", "month", "immediately", "as soon"],
        expectHint: "بگو کی می‌توانی شروع کنی (مثلاً: I can start next week)",
        matchType: "any",
        npcFollow: "Perfect! You got the job. Congratulations!",
        npcFollowFa: "کامل! استخدام شدی. مبارکه!",
        expects2: ["thank", "thanks", "you", "much", "great", "happy", "when", "start"],
        matchType2: "any",
        npcFail: "You can say: 'I can start next week.'",
        npcFailFa: "می‌توانی بگویی: I can start next week."
      }
    ]
  },
  {
    id: "smalltalk",
    title: "Free Small Talk",
    titleFa: "گپ آزاد",
    emoji: "💬",
    desc: "گپ و گفت‌وگوی آزاد با دوست انگلیسی‌زاده. هر چه دوست داری بگو!",
    unlockedAt: 50,
    role: "B",
    steps: [
      {
        npc: "Hi there! Beautiful day, isn't it? How is your day going?",
        npcFa: "سلام! روز قشنگیه، نه؟ روزت چطور می‌گذره؟",
        expects: ["good", "great", "fine", "ok", "okay", "nice", "day", "how", "you", "tired", "busy", "beautiful", "yes"],
        expectHint: "درباره روزت بگو",
        matchType: "any",
        npcFollow: "Glad to hear that! So, what do you do in your free time?",
        npcFollowFa: "خوشحالشم! خب، در اوقات فراغتت چه کار می‌کنی؟",
        expects2: ["read", "music", "sport", "football", "watch", "movie", "walk", "cook", "swim", "study", "english", "play", "travel", "nothing", "sleep", "friends"],
        matchType2: "any",
        npcFail: "Tell me about your day or ask me: 'How about you?'",
        npcFailFa: "از روزت بگو یا من را بپرس: How about you?"
      },
      {
        npc: "That sounds fun! I enjoy it too. By the way, any plans for the weekend?",
        npcFa: "خوش می‌گذره! منم ازش لذت می‌برم. راستی، برای آخر هفته برنامه‌ای داری؟",
        expects: ["yes", "no", "going", "will", "plan", "weekend", "maybe", "family", "friends", "trip", "rest", "home", "movie", "party", "study", "nothing", "don't"],
        expectHint: "برنامه آخر هفته‌ات را بگو",
        matchType: "any",
        npcFollow: "Sounds great! I hope you enjoy it. It was nice talking to you!",
        npcFollowFa: "به نظر خوبه! امیدوارم لذت ببری. باهات حرف زدن خوب بود!",
        expects2: ["thank", "thanks", "you", "too", "nice", "talk", "bye", "goodbye", "great"],
        matchType2: "any",
        npcFail: "You can say: 'I am going to visit my family.'",
        npcFailFa: "می‌توانی بگویی: I am going to visit my family."
      },
      {
        npc: "Before I go, one last question: Do you like learning English?",
        npcFa: "قبل از رفتن، یک سؤال آخر: یادگرفتن انگلیسی را دوست داری؟",
        expects: ["yes", "love", "like", "english", "learn", "learning", "hard", "difficult", "fun", "interesting", "no"],
        expectHint: "درباره یادگیری انگلیسی بگو",
        matchType: "any",
        npcFollow: "Wonderful! The more you practice, the better you get. Take care! Goodbye!",
        npcFollowFa: "عالیه! هرچه بیشتر تمرین کنی بهتر می‌شی. مراقب خودت باش! خداحافظ!",
        expects2: ["thank", "thanks", "you", "too", "bye", "goodbye", "will", "care", "practice"],
        matchType2: "any",
        npcFail: "Say: 'Yes, I love learning English!'",
        npcFailFa: "بگو: Yes, I love learning English!"
      }
    ]
  }
];
