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
};

export type BrowseItem = {
  title: string;
  href: string;
  icon: "live" | "recorded" | "test" | "rrb" | "free-test" | "free" | "links" | "result" | "youtube";
};

export const brand = {
  name: "EVERESTIMPACT",
  tagline: "India's Premier SSC Coaching Platform",
  logo: "/logo.png",
  about:
    "EVERESTIMPACT is India's Premier institution established with the sole aim to initiate, enable and empower individuals to grow up to be extraordinary professionals.",
};

export const sliders = [
  {
    id: "super-saturday",
    image: "/banner-super-saturday.png",
    link: "/test-series",
    fit: "contain" as const,
    width: 846,
    height: 466,
  },
  {
    id: "10",
    image:
      "https://appx-content-v2.classx.co.in/website_slider/2025-12-13-0_9597799620042444.jpg",
    link: "/courses/computers-course-for-ssc-cgl-tier-ii",
    width: 1920,
    height: 628,
  },
  {
    id: "7",
    image:
      "https://appx-content-v2.classx.co.in/website_slider/2026-09-15-0_9946619036606326.png",
    link: "/courses?category=Live%20Courses",
    width: 2048,
    height: 768,
  },
  {
    id: "13",
    image:
      "https://appx-content-v2.classx.co.in/website_slider/2026-04-19-0_19847042440824658.jpg",
    link: "/courses",
    width: 1920,
    height: 628,
  },
  {
    id: "9",
    image:
      "https://appx-content-v2.classx.co.in/website_slider/2026-10-16-0_9275426921327663.png",
    link: "/courses/ssc-cgl-chsl-2027-tier-1-recorded-6-months-validity",
    width: 2172,
    height: 724,
  },
];

export const browseItems: BrowseItem[] = [
  { title: "Live Courses", href: "/courses?category=Live%20Courses", icon: "live" },
  { title: "Recorded Courses", href: "/courses?category=Recorded%20Courses", icon: "recorded" },
  { title: "Test Series", href: "/courses?category=Test%20Series", icon: "test" },
  { title: "RRB & SI PC", href: "/courses?category=RRB", icon: "rrb" },
  { title: "Free Test Series", href: "/test-series", icon: "free-test" },
  { title: "Free Course", href: "/courses?free=1", icon: "free" },
  { title: "LINKS", href: "/links", icon: "links" },
  { title: "Result Dashboard", href: "/dashboard", icon: "result" },
  { title: "YouTube Playlist", href: "/videos", icon: "youtube" },
];

export const courses: Course[] = [
  {
    id: "596",
    slug: "ssc-cgl-chsl-2027-tier-1-recorded-6-months-validity",
    title: "SSC CGL/ CHSL - 2027 TIER-1 RECORDED (6 MONTHS VALIDITY)",
    price: 4999,
    mrp: 8888,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-12-0_19526519991280078.png",
    exam: "Recorded Courses",
    language: "English",
    validity: "6",
    validityType: "MONTHS",
    videos: 632,
    description:
      "Complete recorded Tier-1 preparation for SSC CGL/CHSL 2027 with 6 months validity.",
  },
  {
    id: "597",
    slug: "ssc-cgl-chsl-2027-tier-1-recorded-4-months-validity",
    title: "SSC CGL/ CHSL - 2027 TIER-1 RECORDED (4 MONTHS VALIDITY)",
    price: 3499,
    mrp: 6999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-15-0_21767521996849315.png",
    exam: "Recorded Courses",
    language: "English",
    validity: "4",
    validityType: "MONTHS",
    videos: 500,
    description:
      "Focused recorded Tier-1 batch for SSC CGL/CHSL with 4 months validity.",
  },
  {
    id: "605",
    slug: "cgl-tier-ii-2026-sudarshanchakra-20",
    title: "CGL TIER-II 2026 (SUDARSHANCHAKRA 2.0)",
    price: 999,
    mrp: 6999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-14-0_4197332121606143.png",
    exam: "Live Courses",
    language: "English",
    validity: "4",
    validityType: "MONTHS",
    videos: 120,
    description: "Sudarshanchakra 2.0 live program for SSC CGL Tier-II 2026.",
  },
  {
    id: "606",
    slug: "cgl-tier-ii-2026-tier-i-recorded-sudarshanchakra-20",
    title: "CGL TIER-II 2026 & TIER-I RECORDED (SUDARSHANCHAKRA 2.0)",
    price: 2999,
    mrp: 4999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-14-0_17949508063808683.png",
    exam: "Live Courses",
    language: "English",
    validity: "4",
    validityType: "MONTHS",
    videos: 240,
    description: "Combined Tier-II live + Tier-I recorded package.",
  },
  {
    id: "588",
    slug: "vijayosthu-cgl-rapid-mock-2026-2o",
    title: "VIJAYOSTHU CGL RAPID MOCK 2026 2.O",
    price: 99,
    mrp: 99,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-09-15-0_3750603443326114.png",
    exam: "Test Series",
    language: "English",
    validity: "3",
    validityType: "MONTHS",
    videos: 80,
    description: "Rapid mock test series for CGL aspirants.",
  },
  {
    id: "591",
    slug: "ssc-cgl-chsl-live-batch-october-2026-12-months-validity",
    title: "SSC CGL/CHSL LIVE BATCH OCTOBER- 2026 (12 MONTHS VALIDITY)",
    price: 8888,
    mrp: 15999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-02-0_44759778344671497.png",
    exam: "Live Courses",
    language: "English",
    validity: "12",
    validityType: "MONTHS",
    videos: 0,
    description: "Full year live batch for SSC CGL/CHSL starting October 2026.",
  },
  {
    id: "581",
    slug: "ssc-gd-2027-live-batch-zero-to-gd-bilingual",
    title: "SSC GD - 2027 LIVE BATCH (ZERO TO GD) (BILINGUAL)",
    price: 5000,
    mrp: 12999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-08-24-0_011541848932745236.png",
    exam: "Live Courses",
    language: "Bilingual",
    validity: "6",
    validityType: "MONTHS",
    videos: 0,
    description: "Zero to GD bilingual live batch for SSC GD 2027.",
  },
  {
    id: "592",
    slug: "ssc-cgl-chsl-live-batch-october-2026-6-months-validity",
    title: "SSC CGL/CHSL LIVE BATCH OCTOBER- 2026 (6 MONTHS VALIDITY)",
    price: 5555,
    mrp: 12999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-02-0_5444061367089984.png",
    exam: "Live Courses",
    language: "English",
    validity: "6",
    validityType: "MONTHS",
    videos: 0,
    description: "6-month live batch for SSC CGL/CHSL October 2026.",
  },
  {
    id: "595",
    slug: "maths-ssc-october-live-batch-2026-6-months-validity",
    title: "MATHS SSC OCTOBER LIVE BATCH - 2026 (6 MONTHS VALIDITY)",
    price: 2999,
    mrp: 6999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-02-0_2927052389445556.png",
    exam: "Live Courses",
    language: "English",
    validity: "6",
    validityType: "MONTHS",
    videos: 0,
    description: "Dedicated Maths live batch for SSC aspirants.",
  },
  {
    id: "593",
    slug: "english-live-batch-october-2026-6-months-validity",
    title: "ENGLISH LIVE BATCH OCTOBER- 2026 (6 MONTHS VALIDITY)",
    price: 2999,
    mrp: 7000,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-02-0_1622949511514925.png",
    exam: "Live Courses",
    language: "English",
    validity: "6",
    validityType: "MONTHS",
    videos: 0,
    description: "English live batch focused on SSC exam patterns.",
  },
  {
    id: "594",
    slug: "reasoning-october-ssc-live-batch-2026-6-months-validity",
    title: "REASONING OCTOBER SSC LIVE BATCH - 2026 (6 MONTHS VALIDITY)",
    price: 1999,
    mrp: 5999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-08-27-0_009620156671559799.png",
    exam: "Live Courses",
    language: "English",
    validity: "6",
    validityType: "MONTHS",
    videos: 0,
    description: "Reasoning live batch for SSC October aspirants.",
  },
  {
    id: "565",
    slug: "target-ssc-cgl-2026-special-course",
    title: "TARGET SSC CGL - 2026 (SPECIAL COURSE)",
    price: 4000,
    mrp: 8000,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-05-27-0_6664215565127225.png",
    exam: "Live Courses",
    language: "English",
    validity: "4",
    validityType: "MONTHS",
    videos: 300,
    description: "Special target course for SSC CGL 2026 aspirants.",
  },
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  detail?: string;
  image?: string;
};

export const expertTeam: TeamMember[] = [
  {
    id: "5",
    name: "B. Sreenivasulu Reddy",
    role: "Founder",
    detail: "Director & English Faculty",
    image: "/faculty/b-srinivasulu.jpg",
  },
  {
    id: "1",
    name: "Devaraj Burra",
    role: "Lead Instructor",
    detail: "Senior Faculty",
  },
  {
    id: "2",
    name: "Mallikharjunareddy Bodanapu",
    role: "Co-Founder",
  },
  {
    id: "3",
    name: "Satheesh Dannuri",
    role: "Co-Founder",
    detail: "Ex: Google, IIT KGP",
  },
  {
    id: "4",
    name: "Singam Srinivas Reddy",
    role: "Co-Founder",
    detail: "Ex: IBM Labs, AppliedAI, IITKGP",
  },
  {
    id: "9",
    name: "Shiva Shankar",
    role: "GS Faculty",
    detail: "GS Maestro",
    image: "/faculty/shiva-shankar.jpg",
  },
  {
    id: "6",
    name: "B. Rajkumar",
    role: "Maths Faculty",
    detail: "Senior Faculty",
    image: "/faculty/b-rajkumar.jpg",
  },
  {
    id: "7",
    name: "Jain",
    role: "Subject Expert",
    detail: "Senior Faculty",
    image: "/faculty/suparas-chand-jain.jpg",
  },
  {
    id: "8",
    name: "Kalyan",
    role: "Reasoning Faculty",
    detail: "Senior Faculty",
    image: "/faculty/kalyan.jpg",
  },
  {
    id: "10",
    name: "Basha",
    role: "Faculty",
    detail: "Senior Faculty",
    image: "/faculty/basha.jpg",
  },
  {
    id: "11",
    name: "Thanuja",
    role: "Faculty",
    detail: "Senior Faculty",
    image: "/faculty/thanuja.jpg",
  },
];

export type RecordResult = {
  id: string;
  name: string;
  exam: string;
  year: string;
  rank: number;
  initials: string;
  tone: "mint" | "blush";
  nameTone: "green" | "red" | "blue";
  interview?: string;
};

export const recordResults: RecordResult[] = [
  {
    id: "1",
    name: "Guttula Yasaswani Sri",
    exam: "CGST Inspector",
    year: "2023",
    rank: 1,
    initials: "GY",
    tone: "mint",
    nameTone: "green",
  },
  {
    id: "2",
    name: "Prashanth Banoth",
    exam: "SSC CGL",
    year: "2023",
    rank: 1,
    initials: "PB",
    tone: "blush",
    nameTone: "red",
    interview: "/videos",
  },
  {
    id: "3",
    name: "Khagga Nagaraju",
    exam: "Excise Inspector",
    year: "2023",
    rank: 3,
    initials: "KN",
    tone: "blush",
    nameTone: "red",
  },
  {
    id: "4",
    name: "Sai Sudheer Talapala",
    exam: "Postal Assistant",
    year: "2023",
    rank: 1,
    initials: "SS",
    tone: "mint",
    nameTone: "blue",
    interview: "/videos",
  },
  {
    id: "5",
    name: "Rajaji Bathula",
    exam: "Tax Assistant",
    year: "2023",
    rank: 1,
    initials: "RB",
    tone: "blush",
    nameTone: "red",
  },
  {
    id: "6",
    name: "Srinivas Goturu",
    exam: "Excise Inspector",
    year: "2023",
    rank: 1,
    initials: "SG",
    tone: "mint",
    nameTone: "green",
    interview: "/videos",
  },
];

export type SuccessStory = {
  id: string;
  name: string;
  achievement: string;
};

export const successStories: SuccessStory[] = [
  {
    id: "1",
    name: "Singanamoni Saritha",
    achievement: "SI/Constable (2022)",
  },
  {
    id: "2",
    name: "Guttula Yasaswani Sri",
    achievement: "CGST Inspector",
  },
  {
    id: "3",
    name: "Prashanth Banoth",
    achievement: "CGST Inspector (2023)",
  },
  {
    id: "4",
    name: "Khagga Nagaraju",
    achievement: "Excise Inspector (2023)",
  },
  {
    id: "5",
    name: "Sai Sudheer Talapala",
    achievement: "Postal Assistant",
  },
  {
    id: "6",
    name: "Rajaji Bathula",
    achievement: "Tax Assistant (CBIC)",
  },
  {
    id: "7",
    name: "Srinivas Goturu",
    achievement: "Excise Inspector",
  },
  {
    id: "8",
    name: "Anusha Reddy",
    achievement: "SSC CGL (2023)",
  },
];

export const testimonials = [
  {
    name: "Prashanth Kumar",
    rating: 5,
    text: "✓Very useful app. ✓Nice features. ✓Prices are reasonable. ✓Teaching is unique. ✓Must choose everest for SSC exams.",
  },
  {
    name: "Sahith Raja",
    rating: 5,
    text: "Excellent for all SSC exams. Top-notch faculty and explanations.",
  },
  {
    name: "Manoj Kumar",
    rating: 5,
    text: "Top notch Quality Content for SSC CGL",
  },
  {
    name: "Y madhu",
    rating: 5,
    text: "Good faculty, this is best source to clear the SSC CGL",
  },
  {
    name: "KANTHI BHUKYA",
    rating: 5,
    text: "nice explanation",
  },
  {
    name: "Mahakali kalyan",
    rating: 5,
    text: "excellent teachings",
  },
  {
    name: "Sunil Kumar ITI",
    rating: 5,
    text: "good content",
  },
  {
    name: "B. prem Kumar",
    rating: 5,
    text: "good app",
  },
  {
    name: "Vijay raghava",
    rating: 5,
    text: "excellent",
  },
];

export const youtubeVideos = [
  {
    id: "1",
    title: "English Grammar in One Shot - 150 Golden Rules",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    href: "https://www.youtube.com",
  },
  {
    id: "2",
    title: "English Vocabulary Improvement Course",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    href: "https://www.youtube.com",
  },
  {
    id: "3",
    title: "SSC Preparation Strategy Interview",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    href: "https://www.youtube.com",
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}
