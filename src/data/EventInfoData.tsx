interface Colors {
  primary: string;
  secondary: string;
  text: string;
}

interface UserProfile {
  id: number;
  date: number;
  month: number;
  year: number;
  time: string;
  tagName: string;
  profileLink: string;
  dummyURL: string;
  type: string;
  image: string;
  colors: Colors;
}

const defaultColors = [
  { primary: "#ffe4c8", secondary: "#0f4c81", text: "#0f4c81" },
  { primary: "#0f4c81", secondary: "#ff6347", text: "#fff" },
  { primary: "rgb(251, 186, 153)", secondary: "#0f4c81", text: "#0f4c81" },
];

const EventInfoData: UserProfile[] = [
  {
    id: 1,
    date: 5,
    month: 9,
    year: 2024,
    time: "16:00 - 17:30 GMT+7",
    tagName: "TEC x Lightpath: Master the Art of Storytelling with Irene Ohler",
    profileLink: "",
    dummyURL:
      "https://www.eventbrite.sg/e/tec-x-lightpath-master-the-art-of-storytelling-with-irene-ohler-tickets-975345975067",
    colors: defaultColors[0],
    type: "event",
    image: "https://example.com/images/storytelling.jpg",
  },
  {
    id: 3,
    date: 5,
    month: 9,
    year: 2024,
    time: "17:00 GMT+7",
    tagName: "International Veterinary Vaccinology Network Conference 2024",
    profileLink: "",
    dummyURL:
      "https://www.eventbrite.co.uk/e/international-veterinary-vaccinology-network-conference-2024-tickets-862008981067",
    colors: defaultColors[2],
    type: "event",
    image: "https://example.com/images/veterinary-conference.jpg",
  },
  {
    id: 4,
    date: 5,
    month: 9,
    year: 2024,
    time: "13:00 - 14:30 GMT+7",
    tagName: "Color Fiesta season 13: PARANORMAL",
    profileLink: "",
    dummyURL:
      "https://www.eventbrite.com/e/uxui-design-bootcamp-tickets-441850593847",
    colors: defaultColors[0],
    type: "event",
    image: "https://example.com/images/ux-ui-bootcamp.jpg",
  },
  {
    id: 5,
    date: 15,
    month: 9,
    year: 2024,
    time: "10:00 - 11:00 GMT+7",
    tagName:
      "The Job Market in September 2024 + Use AI Resume Tools to Stand Out!",
    profileLink: "",
    dummyURL:
      "https://www.eventbrite.com/e/the-job-market-in-september-2024-use-ai-resume-tools-to-stand-out-tickets-989222249377?aff=ebdssbcitybrowse",
    colors: defaultColors[2],
    type: "event",
    image: "https://example.com/images/digital-marketing.jpg",
  },
  {
    id: 6,
    date: 18,
    month: 9,
    year: 2024,
    time: "09:00 - 10:30 GMT+7",
    tagName: "Career Fair: Exclusive Tech Hiring Event-New Tickets Available",
    profileLink: "",
    dummyURL:
      "https://www.eventbrite.com/e/career-fair-exclusive-tech-hiring-event-new-tickets-available-tickets-63049080497?aff=ebdssbcitybrowse",
    colors: defaultColors[0],
    type: "event",
    image: "https://example.com/images/data-science.jpg",
  },
  {
    id: 8,
    date: 25,
    month: 9,
    year: 2024,
    time: "08:00 - 09:30 GMT+7",
    tagName: "Introduction to AI and Machine Learning",
    profileLink: "",
    dummyURL:
      "https://www.eventbrite.com/e/introduction-to-ai-and-machine-learning-tickets-151705506243",
    colors: defaultColors[1],
    type: "event",
    image: "https://example.com/images/ai-ml.jpg",
  },
  {
    id: 7,
    date: 25,
    month: 9,
    year: 2024,
    time: "12:00 - 13:30 GMT+7",
    tagName: "Global Health Conference 2024",
    profileLink: "",
    dummyURL:
      "https://www.eventbrite.com/e/global-health-conference-2024-tickets-123456789",
    colors: defaultColors[0],
    type: "event",
    image: "https://example.com/images/global-health.jpg",
  },
  {
    id: 9,
    date: 18,
    month: 9,
    year: 2024,
    time: "14:00 - 15:30 GMT+7",
    tagName: "Identifying and managing type 2 diabetes: the nursing role",
    profileLink: "",
    dummyURL:
      "https://www.eventbrite.com/e/identifying-and-managing-type-2-diabetes-the-nursing-role-tickets-927848117697?aff=ebdssbcitybrowse&keep_tld=1",
    colors: defaultColors[1],
    type: "event",
    image: "https://example.com/images/tech-innovations.jpg",
  },
  {
    id: 10,
    date: 18,
    month: 9,
    year: 2024,
    time: "10:00 - 11:30 GMT+7",
    tagName: "Morning Yoga Session",
    profileLink: "",
    dummyURL:
      "https://www.eventbrite.sg/e/morning-yoga-session-tickets-1234567890",
    colors: defaultColors[1],
    type: "event",
    image: "https://example.com/images/yoga-session.jpg",
  },
  {
    id: 11,
    date: 18,
    month: 9,
    year: 2024,
    time: "16:00 - 17:30 GMT+7",
    tagName: "UX/UI Design Panel Discussion",
    profileLink: "",
    dummyURL:
      "https://www.eventbrite.com/e/uxui-design-panel-discussion-tickets-0987654321",
    colors: defaultColors[2],
    type: "event",
    image: "https://example.com/images/uxui-panel.jpg",
  },
  {
    id: 12,
    date: 20,
    month: 9,
    year: 2024,
    time: "14:00 - 15:30 GMT+7",
    tagName: "Heroes of Hope: Championing Suicide Prevention Together",
    profileLink: "",
    dummyURL:
      "https://www.eventbrite.com/e/heroes-of-hope-championing-suicide-prevention-together-registration-907292866387?aff=ebdssbcitybrowse",
    colors: defaultColors[0],
    type: "event",
    image: "https://example.com/images/seo-strategies.jpg",
  },
  {
    id: 13,
    date: 9,
    month: 9,
    year: 2024,
    time: "9:00 - 18:00 GMT+7",
    tagName: "MasterBranch-Calendar",
    profileLink: "https://www.masterbranch.co/",
    dummyURL: "https://www.masterbranch.co/",
    colors: defaultColors[0],
    type: "appointment",
    image: "https://www.masterbranch.co/assets/images/logo/logo-light.png",
  },
  {
    id: 14,
    date: 28,
    month: 9,
    year: 2024,
    time: "9:00 - 18:00 GMT+7",
    tagName: "MasterBranch-Calendar",
    profileLink: "https://www.masterbranch.co/",
    dummyURL: "https://www.masterbranch.co/",
    colors: defaultColors[1],
    type: "appointment",
    image: "https://www.masterbranch.co/assets/images/logo/logo-light.png",
  },
  {
    id: 15,
    date: 29,
    month: 9,
    year: 2024,
    time: "9:00 - 18:00 GMT+7",
    tagName: "MasterBranch-Calendar",
    profileLink: "https://www.masterbranch.co/",
    dummyURL: "https://www.masterbranch.co/",
    colors: defaultColors[1],
    type: "appointment",
    image: "https://www.masterbranch.co/assets/images/logo/logo-light.png",
  },
  {
    id: 16,
    date: 14,
    month: 9,
    year: 2024,
    time: "9:00 - 18:00 GMT+7",
    tagName: "MasterBranch-Calendar",
    profileLink: "https://www.masterbranch.co/",
    dummyURL: "https://www.masterbranch.co/",
    colors: defaultColors[2],
    type: "appointment",
    image: "https://www.masterbranch.co/assets/images/logo/logo-light.png",
  },
  {
    id: 17,
    date: 20,
    month: 9,
    year: 2024,
    time: "9:00 - 18:00 GMT+7",
    tagName: "MasterBranch-Calendar",
    profileLink: "https://www.masterbranch.co/",
    dummyURL: "https://www.masterbranch.co/",
    colors: defaultColors[2],
    type: "appointment",
    image: "https://www.masterbranch.co/assets/images/logo/logo-light.png",
  },
  {
    id: 18,
    date: 14,
    month: 9,
    year: 2024,
    time: "17:00 GMT+7",
    tagName: "International Veterinary Vaccinology Network Conference 2024",
    profileLink: "",
    dummyURL:
      "https://www.eventbrite.co.uk/e/international-veterinary-vaccinology-network-conference-2024-tickets-862008981067",
    colors: defaultColors[1],
    type: "event",
    image: "https://example.com/images/veterinary-conference.jpg",
  },
  {
    id: 19,
    date: 29,
    month: 9,
    year: 2024,
    time: "14:00 - 15:30 GMT+7",
    tagName: "Identifying and managing type 2 diabetes: the nursing role",
    profileLink: "",
    dummyURL:
      "https://www.eventbrite.com/e/identifying-and-managing-type-2-diabetes-the-nursing-role-tickets-927848117697?aff=ebdssbcitybrowse&keep_tld=1",
    colors: defaultColors[0],
    type: "event",
    image: "https://example.com/images/tech-innovations.jpg",
  },
  {
    id: 20,
    date: 18,
    month: 9,
    year: 2024,
    time: "9:00 - 18:00 GMT+7",
    tagName: "MasterBranch-Calendar",
    profileLink: "https://www.masterbranch.co/",
    dummyURL: "https://www.masterbranch.co/",
    colors: defaultColors[0],
    type: "appointment",
    image: "https://www.masterbranch.co/assets/images/logo/logo-light.png",
  },
];

export default EventInfoData;
