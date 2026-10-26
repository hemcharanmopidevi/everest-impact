export type Course = {
  id: string;
  slug: string;
  title: string;
  price: number;
  mrp: number;
  image: string;
  exam: string;
  language: string;
  validity: string;
  validityType: string;
  videos: number;
  description: string;
  badge?: string;
  mode?: "Online" | "Offline" | "Recorded";
  subjects?: string;
};

export type BrowseItem = {
  title: string;
  href: string;
  icon: "live" | "recorded" | "test" | "rrb" | "free-test" | "free" | "links" | "result" | "youtube";
};

export const brand = {
  name: "Everest Coaching Point",
  appName: "EverestImpact",
  tagline: "SSC CGL / CHSL 2027 · August 2026 Live Batch",
  subtag: "Complete Preparation from Basics to Advanced · Online & Offline",
  location: "Dilsukhnagar, Hyderabad · Since 2015",
  logo: "/images/everest_logo_official.png",
  logoMark: "/images/everest_emblem.png",
  about:
    "Single-branch institute dedicated exclusively to SSC coaching at Dilsukhnagar, Hyderabad. 1200+ teaching hours, Guinness World Record holder faculty, 18 own published books, and 2000+ final selections.",
  phones: ["9030030185", "9030030186"],
  whatsapp: "https://wa.me/919030030185",
  telegram: "https://t.me/9030030185",
  website: "https://everestimpact.live",
};

export const heroStats = [
  { value: 1200, suffix: "+", label: "Hours of Teaching", desc: "Basics to advanced comprehensive coverage" },
  { value: 2000, suffix: "+", label: "Final Selections via SSC", desc: "In 11 years (2015 – 2026 official material)" },
  { value: 50000, suffix: "+", label: "TCS Previous Questions", desc: "Chapter-wise on the EverestImpact App" },
  { value: 18, suffix: "", label: "Our Own Books", desc: "From basic concepts to thousands of TCS PYQs" },
];

export const sliders = [
  {
    id: "hero-6m",
    title: "SSC CGL/CHSL Prelims-2027 August Batch (6 Months)",
    image: "/images/original/2_ssc_cgl_chsl_prelims_2027_august_20.jpg",
    link: "/#fees",
    badge: "August 2026 Batch",
  },
  {
    id: "hero-1y",
    title: "SSC CGL/CHSL Prelims-2027 August Batch (1 Year)",
    image: "/images/original/3_ssc_cgl_chsl_prelims_2027_august_20.jpg",
    link: "/#fees",
    badge: "1 Year Validity",
  },
  {
    id: "faculty-maths",
    title: "Mathematics by B. Rajkumar Sir — Guinness World Record Holder",
    image: "/images/original/4_official_mathematics_batch_poster_b.jpg",
    link: "/#faculty",
    badge: "Quant Specialist",
  },
  {
    id: "faculty-english",
    title: "English by B. Sreenivasulu Reddy Sir — Twin States' No.1",
    image: "/images/original/5_official_english_batch_poster_b_sre.jpg",
    link: "/#faculty",
    badge: "27+ Years Experience",
  },
  {
    id: "faculty-reasoning",
    title: "Reasoning by Kalyan Sir — Concept-First Approach",
    image: "/images/original/6_official_reasoning_batch_poster_kal.jpg",
    link: "/#faculty",
    badge: "Verbal & Non-Verbal",
  },
];

export const whyChooseEverest = [
  {
    id: 1,
    title: "Exclusive Coaching Centre for SSC",
    desc: "Single-branch institute dedicated only to SSC — undivided attention, state-of-the-art facility at Dilsukhnagar, Hyderabad.",
  },
  {
    id: 2,
    title: "Highest & Consistent Success Rate",
    desc: "2000+ final selections via SSC in 11 years, plus 2000+ jobs in Banking, Railways, SI, Constable, IB and other govt. posts.",
  },
  {
    id: 3,
    title: "Top-Notch Faculty",
    desc: "English by B. Sreenivasulu Reddy Sir (27+ yrs experience); Quant by B. Rajkumar Sir — Guinness World Record Holder in Mathematics.",
  },
  {
    id: 4,
    title: "Daily Mock + 4-Hour Video Explanation",
    desc: "Daily full-length mock tests followed by a 4-hour comprehensive explanation of every question and solving strategy.",
  },
  {
    id: 5,
    title: "50,000+ TCS Previous Questions",
    desc: "Chapter-wise tests across all four subjects on the EverestImpact App with detailed video solutions.",
  },
  {
    id: 6,
    title: "Doubt Clarification Team",
    desc: "8–10 selected associate faculty per subject, available 9:00 AM to 6:00 PM every working day.",
  },
  {
    id: 7,
    title: "Free Reading Room",
    desc: "Separate dedicated reading rooms for boys and girls for offline classroom students at Dilsukhnagar.",
  },
  {
    id: 8,
    title: "1200+ Hours of Quality Coaching",
    desc: "Quant 250h · General Awareness 250h · English 150h · Reasoning 100h · Mock explanation 500 hours.",
  },
  {
    id: 9,
    title: "Online Streaming of Offline Classes",
    desc: "All subjects streamed live online except GS (provided as high-quality studio recorded classes).",
  },
  {
    id: 10,
    title: "18 Books Covering All Subjects",
    desc: "Our own published books — from foundational concepts to 50,000+ TCS Previous Year Questions.",
  },
  {
    id: 11,
    title: "Periodic Performance Monitoring",
    desc: "Monthly individual review sessions after analysing your mock test performance and weak areas.",
  },
  {
    id: 12,
    title: "Daily Editorial & Current Affairs",
    desc: "The Hindu editorial analysis, daily current affairs, vocabulary doses, and regular review tests.",
  },
];

export const coreSubjects = [
  {
    icon: "📐",
    name: "Mathematics",
    faculty: "B. Rajkumar Sir & Aravind Sir",
    desc: "Arithmetic & Pure Maths with magical short-cut methods — full Tier-I syllabus from basics to advanced.",
    hours: "250+ Hours",
  },
  {
    icon: "📖",
    name: "English",
    faculty: "B. Sreenivasulu Reddy Sir & Shyam Sir",
    desc: "Grammar, vocabulary and comprehension — the proven game-changer subject for top ranks.",
    hours: "150+ Hours",
  },
  {
    icon: "🧩",
    name: "Reasoning",
    faculty: "Kalyan Sir",
    desc: "Complete verbal & non-verbal reasoning with concept-wise practice and speed techniques.",
    hours: "100+ Hours",
  },
  {
    icon: "🌏",
    name: "General Studies",
    faculty: "Team of 6–7 Experienced Faculty",
    desc: "Full GS syllabus with daily current affairs and The Hindu editorial analysis.",
    hours: "250+ Hours",
  },
];

export const facultyMembers = [
  {
    name: "B. Rajkumar Sir",
    role: "Director & Faculty in Quant",
    experience: "17+ Years Experience",
    badge: "Guinness World Record Holder",
    quote: "“Man of Magical Short-cut Methods” — leads Quant from basics to advanced.",
    image: "/faculty/circle_portraits/b-rajkumar_circle.jpg",
  },
  {
    name: "B. Sreenivasulu Reddy Sir",
    role: "Director & Faculty in English",
    experience: "27+ Years Experience",
    badge: "Twin States' No.1 English Faculty",
    quote: "Master of Grammar, Vocab & Comprehension — helping students score 45+ out of 50 in English.",
    image: "/faculty/circle_portraits/b-srinivasulu_circle.jpg",
  },
  {
    name: "Kalyan Sir",
    role: "Faculty in Reasoning",
    experience: "Top Tier Reasoning Mentor",
    badge: "Concept-First Approach",
    quote: "Complete verbal & non-verbal reasoning for SSC Tier-I with rapid elimination techniques.",
    image: "/faculty/circle_portraits/kalyan_circle.jpg",
  },
  {
    name: "Shiva Shankar Sir",
    role: "Senior Faculty in GS & Polity",
    experience: "15+ Years Experience",
    badge: "Polity & History Specialist",
    quote: "Conceptual mastery over Indian Polity, Governance, and Ancient-to-Modern Indian History.",
    image: "/faculty/circle_portraits/shiva-shankar_circle.jpg",
  },
  {
    name: "Suparas Chand Jain Sir",
    role: "Senior Faculty in GS & Geography",
    experience: "18+ Years Experience",
    badge: "Geography & Economy Expert",
    quote: "High-yield memory mnemonics, map-work, and economic concepts for maximum retention.",
    image: "/faculty/circle_portraits/suparas-chand-jain_circle.jpg",
  },
  {
    name: "Thanuja Ma'am",
    role: "Faculty in General Science",
    experience: "12+ Years Experience",
    badge: "Science & Current Affairs",
    quote: "Simplifying Physics, Chemistry, and Biology for competitive examinations with lucid clarity.",
    image: "/faculty/circle_portraits/thanuja_circle.jpg",
  },
];

export const publications = [
  {
    title: "English Grammar (6th Edition)",
    desc: "4000+ TCS PYQs by B. Sreenivasulu Reddy",
    image: "/images/original/7_english_grammar_6th_edition_b_sreen.jpg",
    subject: "English",
  },
  {
    title: "English Vocabulary",
    desc: "5000+ TCS PYQs with Telugu meanings",
    image: "/images/original/8_english_vocabulary_for_competitive_.jpg",
    subject: "English",
  },
  {
    title: "Advance Maths",
    desc: "1300+ Most Important PYQs by B. Rajkumar Sir",
    image: "/images/original/9_advance_maths_b_rajkumar_sir_1300_p.jpg",
    subject: "Mathematics",
  },
  {
    title: "Arithmetic for Competitive Exams",
    desc: "1400+ Most Important PYQs by B. Rajkumar Sir",
    image: "/images/original/10_arithmetic_for_competitive_examinat.jpg",
    subject: "Mathematics",
  },
  {
    title: "Maths Formula Book",
    desc: "Quick-revision formulas & magical tricks",
    image: "/images/original/11_maths_formula_book_b_rajkumar_sir.jpg",
    subject: "Mathematics",
  },
  {
    title: "English Handouts",
    desc: "Updated & enlarged edition compiled by Director",
    image: "/images/original/12_english_handouts_compiled_by_sreeni.jpg",
    subject: "English",
  },
  {
    title: "Arithmetic & Pure Maths Handouts",
    desc: "Complete classroom practice material",
    image: "/images/original/13_arithmetic_and_pure_maths_handouts.jpg",
    subject: "Mathematics",
  },
  {
    title: "General Awareness Handouts",
    desc: "History, Geography, Economy, Polity, GK, Science",
    image: "/images/original/14_general_awareness_handouts_history_.jpg",
    subject: "General Studies",
  },
  {
    title: "Verbal & Non-Verbal Reasoning",
    desc: "Full reasoning syllabus with shortcut rules",
    image: "/images/original/15_verbal_and_non_verbal_reasoning_for.jpg",
    subject: "Reasoning",
  },
  {
    title: "Static GK for Competitive Exams",
    desc: "Hundreds of high-frequency TCS questions",
    image: "/images/original/16_static_gk_for_competitive_examinati.jpg",
    subject: "General Studies",
  },
  {
    title: "Indian History",
    desc: "Concept clarity + chapter-wise TCS PYQs",
    image: "/images/original/17_indian_history_for_competitive_exam.jpg",
    subject: "General Studies",
  },
  {
    title: "Indian Polity",
    desc: "Constitution, Articles & Previous Year Questions",
    image: "/images/original/18_indian_polity_for_competitive_exami.jpg",
    subject: "General Studies",
  },
  {
    title: "Indian Geography",
    desc: "Memory tricks, physical & economic geography",
    image: "/images/original/19_indian_geography_for_competitive_ex.jpg",
    subject: "General Studies",
  },
  {
    title: "Indian Economy",
    desc: "Concept clarity, budgets & TCS PYQs",
    image: "/images/original/20_indian_economy_for_competitive_exam.jpg",
    subject: "General Studies",
  },
  {
    title: "Physical Science",
    desc: "Physics & Chemistry key concepts for SSC",
    image: "/images/original/21_physical_science_physics_and_chemis.jpg",
    subject: "Science",
  },
  {
    title: "Biology for Competitive Exams",
    desc: "Concept clarity + Diagrams + TCS PYQs",
    image: "/images/original/22_biology_for_competitive_examination.jpg",
    subject: "Science",
  },
];

export interface SSCBook {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  coverImage: string;
  indices?: { label: string; image: string }[];
  buyLink: string;
  category: "Mathematics" | "English" | "Reasoning" | "General Studies" | "Handouts";
  author: string;
  highlights: string;
}

export const sscBooksList: SSCBook[] = [
  {
    id: "maths-formula-book",
    title: "MATHS FORMULA BOOK",
    price: "Rs. 250/-",
    originalPrice: "Rs. 350/-",
    coverImage: "/images/original/11_maths_formula_book_b_rajkumar_sir.jpg",
    indices: [
      { label: "Index 1", image: "/images/books/indices/maths_index_1.jpg" },
      { label: "Index 2", image: "/images/books/indices/maths_index_2.jpg" },
    ],
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "Mathematics",
    author: "B. Rajkumar Sir — Guinness World Record Holder",
    highlights: "Master The Formulas · Arithmetic Formula & Mind Calculations with Examples",
  },
  {
    id: "advance-maths",
    title: "ADVANCE MATHS",
    price: "Rs. 350/-",
    originalPrice: "Rs. 450/-",
    coverImage: "/images/original/9_advance_maths_b_rajkumar_sir_1300_p.jpg",
    indices: [
      { label: "Index", image: "/images/books/indices/advance_maths_index.jpg" },
    ],
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "Mathematics",
    author: "B. Rajkumar Sir",
    highlights: "1300+ Most Important PYQs · Conceptual Clarity & Magical Shortcuts",
  },
  {
    id: "english-grammar-book",
    title: "English Grammar Book",
    price: "Rs. 350/-",
    originalPrice: "Rs. 450/-",
    coverImage: "/images/original/7_english_grammar_6th_edition_b_sreen.jpg",
    indices: [
      { label: "Index", image: "/images/original/12_english_handouts_compiled_by_sreeni.jpg" },
    ],
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "English",
    author: "B. Sreenivasulu Reddy Sir — 27+ Yrs Experience",
    highlights: "4000+ TCS PYQs with Rules, Error Spotting, Cloze Tests & Model Papers",
  },
  {
    id: "english-vocabulary-book",
    title: "English Vocabulary Book",
    price: "Rs. 350/-",
    originalPrice: "Rs. 450/-",
    coverImage: "/images/original/8_english_vocabulary_for_competitive_.jpg",
    indices: [
      { label: "Index", image: "/images/books/indices/vocab_index.jpg" },
    ],
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "English",
    author: "B. Sreenivasulu Reddy Sir",
    highlights: "5000+ TCS PYQs with Telugu Meanings, Synonyms, Antonyms, Idioms & Phrases",
  },
  {
    id: "reasoning-book",
    title: "Reasoning Book",
    price: "Rs. 450/-",
    originalPrice: "Rs. 550/-",
    coverImage: "/images/original/15_verbal_and_non_verbal_reasoning_for.jpg",
    indices: [
      { label: "Index", image: "/images/books/indices/reasoning_index.jpg" },
    ],
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "Reasoning",
    author: "Kalyan Sir & Everest Experts",
    highlights: "2500+ Most Important TCS PYQs Fully Solved · Verbal & Non-Verbal Shortcuts",
  },
  {
    id: "static-gk-book",
    title: "Static GK Book",
    price: "Rs. 250/-",
    originalPrice: "Rs. 350/-",
    coverImage: "/images/original/16_static_gk_for_competitive_examinati.jpg",
    indices: [
      { label: "Index", image: "/images/books/indices/static_gk_index.png" },
    ],
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "General Studies",
    author: "Everest GS Faculty Team",
    highlights: "Monuments, Dances, Festivals, First in India, Books & Authors, Sports & Awards",
  },
  {
    id: "indian-polity-book",
    title: "Indian Polity Book",
    price: "Rs. 100/-",
    originalPrice: "Rs. 150/-",
    coverImage: "/images/original/18_indian_polity_for_competitive_exami.jpg",
    indices: [
      { label: "Index", image: "/images/books/indices/polity_index.jpg" },
    ],
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "General Studies",
    author: "Shiva Shankar Sir",
    highlights: "Preamble, Fundamental Rights, Articles, Parliament, Judiciary & Amendments",
  },
  {
    id: "biology-book",
    title: "Biology Book",
    price: "Rs. 100/-",
    originalPrice: "Rs. 150/-",
    coverImage: "/images/original/22_biology_for_competitive_examination.jpg",
    indices: [
      { label: "Index", image: "/images/books/indices/biology_index.jpg" },
    ],
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "General Studies",
    author: "Thanuja Ma'am",
    highlights: "Human Anatomy, Nutrients, Diseases, Plant Kingdom & Previous Year Questions",
  },
  {
    id: "indian-economy-book",
    title: "Indian Economy Book",
    price: "Rs. 100/-",
    originalPrice: "Rs. 150/-",
    coverImage: "/images/original/20_indian_economy_for_competitive_exam.jpg",
    indices: [
      { label: "Index", image: "/images/books/indices/economy_index.jpg" },
    ],
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "General Studies",
    author: "Suparas Chand Jain Sir",
    highlights: "Economic Planning, Budget, Inflation, RBI, Banking, GST & National Income",
  },
  {
    id: "indian-history-book",
    title: "Indian History Book",
    price: "Rs. 200/-",
    originalPrice: "Rs. 300/-",
    coverImage: "/images/original/17_indian_history_for_competitive_exam.jpg",
    indices: [
      { label: "Index", image: "/images/books/indices/history_index.jpg" },
    ],
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "General Studies",
    author: "Everest GS Specialists",
    highlights: "Indus Valley to Freedom Struggle · Chronology, Governor Generals & Movements",
  },
  {
    id: "arithmetic-book",
    title: "Arithmetic for Competitive Exams",
    price: "Rs. 420/-",
    originalPrice: "Rs. 550/-",
    coverImage: "/images/original/10_arithmetic_for_competitive_examinat.jpg",
    indices: [
      { label: "Index", image: "/images/books/indices/arithmetic_index.jpg" },
    ],
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "Mathematics",
    author: "B. Rajkumar Sir",
    highlights: "1400+ Important TCS PYQs · Percentages, Profit & Loss, SI-CI, Time & Work",
  },
  {
    id: "indian-geography-book",
    title: "Indian Geography Book",
    price: "Rs. 100/-",
    originalPrice: "Rs. 150/-",
    coverImage: "/images/original/19_indian_geography_for_competitive_ex.jpg",
    indices: [
      { label: "Index", image: "/images/books/indices/geography_index.png" },
    ],
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "General Studies",
    author: "Everest GS Specialists",
    highlights: "Physiographic Divisions, River Basins, Climate, Soils, Agriculture & Minerals",
  },
  {
    id: "arithmetic-handout",
    title: "ARITHMETIC HANDOUT BOOK",
    price: "Rs. 200/-",
    originalPrice: "Rs. 300/-",
    coverImage: "/images/original/13_arithmetic_and_pure_maths_handouts.jpg",
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "Handouts",
    author: "Classroom Handout · B. Rajkumar Sir",
    highlights: "Comprehensive classroom practice handouts covering entire Arithmetic syllabus",
  },
  {
    id: "reasoning-handout",
    title: "REASONING HANDOUT BOOK",
    price: "Rs. 150/-",
    originalPrice: "Rs. 250/-",
    coverImage: "/images/original/15_verbal_and_non_verbal_reasoning_for.jpg",
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "Handouts",
    author: "Classroom Handout · Kalyan Sir",
    highlights: "Topic-wise speed drill handouts with trick solutions for SSC Tier-I & II",
  },
  {
    id: "english-handout",
    title: "ENGLISH HANDOUT BOOK",
    price: "Rs. 200/-",
    originalPrice: "Rs. 300/-",
    coverImage: "/images/original/12_english_handouts_compiled_by_sreeni.jpg",
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "Handouts",
    author: "Classroom Handout · B. Sreenivasulu Reddy Sir",
    highlights: "Error spotting, Cloze test, sentence rearrangement & comprehension handouts",
  },
  {
    id: "gs-handout",
    title: "GS HANDOUT BOOK",
    price: "Rs. 150/-",
    originalPrice: "Rs. 250/-",
    coverImage: "/images/original/14_general_awareness_handouts_history_.jpg",
    buyLink: "https://docs.google.com/forms/d/e/1FAIpQLScnTGJ3sc01M_Xf5fJQhnQtDfmvgXs6mDUukUnLIaHfHPhj9g/viewform",
    category: "Handouts",
    author: "Classroom Handout · GS Team",
    highlights: "High-yield one-liners, tables, and quick-revision GK sheets for SSC exams",
  },
];

export const preparationPlans = [
  {
    id: "plan-online-full",
    title: "Full Course — Online Live",
    mode: "Online",
    subjects: "Maths + English + Reasoning + GS",
    validity: "6 / 12 Months",
    originalPrice: "₹17,999",
    offerPrice: "₹8,888",
    badge: "MOST POPULAR",
    isPopular: true,
    enquiryText: "I want to enquire about: Full Course — Online Live (6 / 12 Months).",
    features: [
      "1200+ Teaching Hours",
      "Live interactive classes on EverestImpact App",
      "Daily full-length mock test + 4-hour video explanation",
      "50,000+ TCS PYQs chapter-wise",
      "GS studio-quality recorded classes",
    ],
  },
  {
    id: "plan-online-maths",
    title: "Mathematics Only — Online",
    mode: "Online",
    subjects: "Arithmetic & Pure Maths",
    validity: "6 Months",
    originalPrice: "₹6,499",
    offerPrice: "₹2,999",
    enquiryText: "I want to enquire about: Mathematics Only — Online (6 Months).",
    features: [
      "250+ Hours of Quant",
      "B. Rajkumar Sir's Magical Shortcut Methods",
      "Arithmetic & Advanced Maths PYQs",
      "Topic-wise practice tests",
    ],
  },
  {
    id: "plan-online-english",
    title: "English Only — Online",
    mode: "Online",
    subjects: "Complete English",
    validity: "6 Months",
    originalPrice: "₹6,499",
    offerPrice: "₹2,999",
    enquiryText: "I want to enquire about: English Only — Online (6 Months).",
    features: [
      "150+ Hours of English",
      "B. Sreenivasulu Reddy Sir's proven grammar rules",
      "5000+ Vocab with Telugu meanings",
      "Daily editorial analysis",
    ],
  },
  {
    id: "plan-online-reasoning",
    title: "Reasoning Only — Online",
    mode: "Online",
    subjects: "Complete Reasoning",
    validity: "6 Months",
    originalPrice: "₹6,499",
    offerPrice: "₹2,999",
    enquiryText: "I want to enquire about: Reasoning Only — Online (6 Months).",
    features: [
      "100+ Hours of Reasoning",
      "Verbal & Non-Verbal coverage",
      "Rapid elimination tricks by Kalyan Sir",
      "Mock tests with solutions",
    ],
  },
  {
    id: "plan-offline-classroom",
    title: "Full Course — Offline Classroom",
    mode: "Offline",
    subjects: "All 4 Core Subjects",
    validity: "6 / 8 / 12 Months",
    offerPrice: "Contact Front Office",
    isTextPrice: true,
    enquiryText: "I want to enquire about: Full Course — Offline Classroom (Dilsukhnagar).",
    features: [
      "Daily 5 to 6 hours classroom teaching",
      "Free separate reading rooms for boys & girls",
      "Doubt clearing by 8-10 associate faculty (9 AM - 6 PM)",
      "18 printed physical books provided",
      "Located at Dilsukhnagar, Hyderabad",
    ],
  },
  {
    id: "plan-recorded",
    title: "Recorded Courses",
    mode: "Recorded",
    subjects: "Single-subject recorded videos",
    validity: "As per course selected",
    offerPrice: "From ₹499",
    isTextPrice: true,
    enquiryText: "I want to enquire about: Recorded Courses.",
    features: [
      "Self-paced learning on mobile/web",
      "Full HD video lectures",
      "Offline download capability on app",
      "Practice quizzes included",
    ],
  },
];

export const batchSchedule = {
  lastUpdated: "03-08-2026",
  items: [
    {
      title: "Seminar",
      date: "02 – 08 – 2026 (Sunday)",
      time: "10:30 AM",
      desc: "Special orientation seminar by Directors",
      highlight: true,
    },
    {
      title: "Free Demo Classes",
      date: "3 Days FREE Demo Classes",
      time: "After the Seminar",
      desc: "Attend free demo before you take admission",
      highlight: false,
    },
    {
      title: "Batch Starts",
      date: "03 – 08 – 2026 (Monday)",
      time: "Daily 5 to 6 Hours",
      desc: "Classroom & live interactive streaming commences",
      highlight: true,
    },
    {
      title: "Course Duration",
      date: "5 to 6 Months",
      time: "1200+ Hours",
      desc: "Comprehensive syllabus completion from zero to hero",
      highlight: false,
    },
    {
      title: "Online Validity",
      date: "6 / 12 Months",
      time: "Flexible Plans",
      desc: "Choose your access duration at admission",
      highlight: false,
    },
    {
      title: "Offline Validity",
      date: "6 / 8 / 12 Months",
      time: "Dilsukhnagar Campus",
      desc: "Subject-wise coaching also available",
      highlight: false,
    },
  ],
};

export const modeComparison = {
  online: {
    title: "Online Live Classes",
    icon: "💻",
    location: "Anywhere — EverestImpact App",
    interaction: "100% Live (GS as premium recorded)",
    validity: "6 / 12 Months",
    bestFor: "Aspirants outside Hyderabad / Working professionals",
    features: [
      "Learn from anywhere on mobile or tablet",
      "Daily full-length mock test + 4-hour video explanation",
      "50,000+ TCS previous questions chapter-wise",
      "Single-subject live batches also available",
    ],
  },
  offline: {
    title: "Offline Classroom (Dilsukhnagar)",
    icon: "🏫",
    location: "Dilsukhnagar, Hyderabad",
    interaction: "Fully In-Person Classroom",
    validity: "6 / 8 / 12 Months",
    bestFor: "Students seeking classroom discipline & study rooms",
    features: [
      "Daily 5 to 6 hours intensive classroom teaching",
      "Free separate reading rooms for boys & girls",
      "8–10 doubt faculty per subject available 9 AM – 6 PM",
      "18 structured physical books with TCS PYQs",
    ],
  },
};

export const resultPosters = [
  {
    title: "SSC CGL — Latest Results",
    image: "/images/original/23_latest_ssc_cgl_result_poster.jpg",
    desc: "10%+ Southern Region selections from Everest Coaching Point",
  },
  {
    title: "SSC CHSL 2024 Final Selections",
    image: "/images/original/24_ssc_chsl_2024_result_poster.jpg",
    desc: "Top ranks in Postal Assistant, LDC, and DEO",
  },
  {
    title: "SSC MTS 2024 — 63+ Selections",
    image: "/images/original/25_ssc_mts_2024_result_poster.jpg",
    desc: "Unmatched performance across central government departments",
  },
  {
    title: "SSC CGL 2023 Results",
    image: "/images/original/26_ssc_cgl_2023_result_poster.jpg",
    desc: "CGST Inspectors, Excise Inspectors, and Tax Assistants",
  },
  {
    title: "SSC CGL 2022 Results",
    image: "/images/original/27_ssc_cgl_2022_result_poster.jpg",
    desc: "Continuing the legacy of #1 SSC Institute in South India",
  },
];

export const guidanceMantras = [
  {
    id: 1,
    title: "Passion for Your Goal",
    desc: "Be really passionate about your goal. Dream it, live it, and keep your motivation burning every day.",
  },
  {
    id: 2,
    title: "Commit to High Intensity",
    desc: "Be ready to work a minimum of 10 to 12 hours a day with focused and distraction-free study blocks.",
  },
  {
    id: 3,
    title: "Mock Test Discipline",
    desc: "Practice is the secret mantra of success — 50 to 60 full-length mock tests with deep analysis are mandatory.",
  },
  {
    id: 4,
    title: "Persistence Over Raw Talent",
    desc: "You need not be exceptionally talented, but be persistent — sometimes the journey may take more than a year.",
  },
  {
    id: 5,
    title: "Resilience in Setbacks",
    desc: "Do not give up. Be resilient. Every failed test contains the exact roadmap for your eventual selection.",
  },
  {
    id: 6,
    title: "Game Changers: English & GS",
    desc: "English and General Studies are the ultimate game changers — give them special attention from day one.",
  },
];

export const admissionSteps = [
  {
    step: "01",
    title: "Select Your Course",
    desc: "Choose Full Course or single subject (Maths, English, Reasoning) and pick your preferred mode: Online Live or Offline Classroom.",
  },
  {
    step: "02",
    title: "Speak to Counsellor",
    desc: "Call 9030030185 / 9030030186 or message on WhatsApp to confirm the right plan, batch timing, and fee details.",
  },
  {
    step: "03",
    title: "Complete Admission",
    desc: "Finalise enrollment at the front office (Dilsukhnagar, Hyderabad) or online via the EverestImpact App.",
  },
  {
    step: "04",
    title: "Start Your Classes",
    desc: "Batch starts 03-08-2026 (Monday) following 3 days of free demo sessions after the orientation seminar.",
  },
];

export const faqs = [
  {
    q: "Who can join this batch?",
    a: "Any aspirant preparing for SSC CGL, CHSL or MTS targeting the 2027 cycle — online from anywhere on EverestImpact App, or offline at our Dilsukhnagar campus in Hyderabad.",
  },
  {
    q: "Is the course suitable for beginners?",
    a: "Yes. Teaching starts from absolute basics and advances systematically across all four subjects, spanning 1200+ hours over 5 to 6 months.",
  },
  {
    q: "What is the course duration?",
    a: "Approximately 5 to 6 months, with daily 5 to 6 hours of classes.",
  },
  {
    q: "Is subject-wise coaching available?",
    a: "Yes — single-subject live batches (Maths / English / Reasoning) and self-paced recorded courses are available.",
  },
  {
    q: "What are the validity options?",
    a: "Online: 6 or 12 months. Offline: 6, 8 or 12 months.",
  },
  {
    q: "Is there a free demo?",
    a: "Yes. Orientation Seminar on 02-08-2026 (Sunday) at 10:30 AM, followed by 3 days of FREE demo classes before you decide.",
  },
  {
    q: "How can I join?",
    a: "Attend the seminar/demo or contact the front office, choose your plan, complete admission, and start classes from 03-08-2026.",
  },
  {
    q: "How can I contact the front office?",
    a: "Call 9030030185 / 9030030186, message on WhatsApp/Telegram on the same number, or visit everestimpact.live.",
  },
];

export const browseItems: BrowseItem[] = [
  { title: "Live Courses", href: "/#fees", icon: "live" },
  { title: "Offline Batch", href: "/#schedule", icon: "rrb" },
  { title: "18 Books", href: "/#books", icon: "recorded" },
  { title: "Faculty Team", href: "/#faculty", icon: "links" },
  { title: "Result Posters", href: "/#results", icon: "result" },
  { title: "Free Demo", href: "/#schedule", icon: "free-test" },
  { title: "SSC Guidance", href: "/#guidance", icon: "free" },
  { title: "Batch FAQs", href: "/#faqs", icon: "youtube" },
  { title: "Contact Us", href: "/#contact", icon: "links" },
];

export const courses: Course[] = [
  {
    id: "full-online-live",
    slug: "ssc-cgl-chsl-2027-full-course-online-live",
    title: "SSC CGL/CHSL Prelims 2027 Full Course (Online Live)",
    price: 8888,
    mrp: 17999,
    image: "/images/courses/ssc-cgl-full-course.jpg",
    exam: "Live Courses",
    language: "English / Bilingual",
    validity: "6 or 12",
    validityType: "MONTHS",
    videos: 1200,
    badge: "MOST POPULAR",
    mode: "Online",
    subjects: "Maths + English + Reasoning + GS",
    description:
      "Complete preparation from basics to advanced. 1200+ hours, daily mocks with 4-hr video explanation, 50,000+ TCS PYQs.",
  },
  {
    id: "maths-online",
    slug: "mathematics-online-b-rajkumar-sir",
    title: "Mathematics Only — Online (B. Rajkumar Sir)",
    price: 2999,
    mrp: 6499,
    image: "/images/courses/mathematics-online.jpg",
    exam: "Live Courses",
    language: "English / Bilingual",
    validity: "6",
    validityType: "MONTHS",
    videos: 250,
    badge: "QUANT SPECIAL",
    mode: "Online",
    subjects: "Arithmetic & Pure Maths",
    description:
      "Guinness World Record Holder B. Rajkumar Sir's magical shortcut methods for Arithmetic and Pure Maths.",
  },
  {
    id: "english-online",
    slug: "english-only-online-sreenivasulu-reddy-sir",
    title: "English Only — Online (B. Sreenivasulu Reddy Sir)",
    price: 2999,
    mrp: 6499,
    image: "/images/courses/english-online.jpg",
    exam: "Live Courses",
    language: "English",
    validity: "6",
    validityType: "MONTHS",
    videos: 150,
    badge: "ENGLISH SPECIAL",
    mode: "Online",
    subjects: "Grammar, Vocab & Comprehension",
    description:
      "Twin States' No.1 English faculty with 27+ years experience. 4000+ grammar PYQs & 5000+ vocab with Telugu meanings.",
  },
  {
    id: "reasoning-online",
    slug: "reasoning-only-online-kalyan-sir",
    title: "Reasoning Only — Online (Kalyan Sir)",
    price: 2999,
    mrp: 6499,
    image: "/images/courses/reasoning-online.jpg",
    exam: "Live Courses",
    language: "English / Bilingual",
    validity: "6",
    validityType: "MONTHS",
    videos: 100,
    badge: "REASONING SPECIAL",
    mode: "Online",
    subjects: "Complete Verbal & Non-Verbal",
    description:
      "Concept-first teaching covering full verbal and non-verbal reasoning for SSC Tier-I with rapid elimination techniques.",
  },
  {
    id: "full-offline-classroom",
    slug: "ssc-cgl-chsl-2027-offline-classroom-dilsukhnagar",
    title: "Full Course — Offline Classroom (Dilsukhnagar)",
    price: 18000,
    mrp: 24000,
    image: "/images/courses/offline-classroom.jpg",
    exam: "Live Courses",
    language: "Classroom / Dilsukhnagar",
    validity: "6 / 8 / 12",
    validityType: "MONTHS",
    videos: 0,
    badge: "OFFLINE CAMPUS",
    mode: "Offline",
    subjects: "All 4 Core Subjects + 18 Books",
    description:
      "Daily 5 to 6 hours intensive coaching in Hyderabad. Free separate study rooms for boys & girls, 8-10 doubt mentors per subject.",
  },
  {
    id: "recorded-pack",
    slug: "ssc-cgl-tier-1-recorded-bundle",
    title: "SSC CGL / CHSL Recorded Video Pack",
    price: 499,
    mrp: 1999,
    image: "/images/courses/recorded-pack.jpg",
    exam: "Recorded Courses",
    language: "English / Bilingual",
    validity: "3 to 12",
    validityType: "MONTHS",
    videos: 600,
    badge: "SELF PACED",
    mode: "Recorded",
    subjects: "Subject-wise Recorded Bundles",
    description:
      "High quality recorded video lectures for self-paced study with downloadable handouts on EverestImpact App.",
  },
];

export const youtubeVideos = [
  {
    id: "1",
    title: "SSC CGL 2027 August Live Batch Announcement & Preparation Strategy",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "Guinness Record Holder B. Rajkumar Sir — Maths Magical Shortcuts",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "English Grammar 150 Golden Rules by B. Sreenivasulu Reddy Sir",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export const successStories = [
  { id: "1", name: "Singanamoni Saritha", achievement: "SI/Constable" },
  { id: "2", name: "Guttula Yasaswani Sri", achievement: "CGST Inspector (Rank 1)" },
  { id: "3", name: "Prashanth Banoth", achievement: "SSC CGL (Rank 1)" },
  { id: "4", name: "Khagga Nagaraju", achievement: "Excise Inspector (Rank 3)" },
  { id: "5", name: "Sai Sudheer Talapala", achievement: "Postal Assistant (Rank 1)" },
  { id: "6", name: "Rajaji Bathula", achievement: "Tax Assistant (Rank 1)" },
  { id: "7", name: "Srinivas Goturu", achievement: "Excise Inspector (Rank 1)" },
];

export const testimonials = [
  {
    name: "Prashanth Kumar",
    rating: 5,
    text: "Very useful app and exceptional classroom environment. Teachers give personal attention and 4-hour mock test explanations are game changers.",
  },
  {
    name: "Sahith Raja",
    rating: 5,
    text: "Best coaching in South India for SSC CGL. B. Sreenivasulu Reddy Sir's English and Rajkumar Sir's Maths shortcuts cannot be matched.",
  },
  {
    name: "Manoj Kumar",
    rating: 5,
    text: "Top notch quality content for SSC CGL. The 18 published books save so much time during revision.",
  },
  {
    name: "Y Madhu",
    rating: 5,
    text: "Good faculty and daily mock tests. This is the premier institute to clear SSC CGL in your first attempt.",
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}
