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
  colors: Colors;
}

const EventInfoData: UserProfile[] = [
  {
    id: 1,
    date: 5,
    month: 9,
    year: 2024,
    time: "08:30 AM",
    tagName: "First Sesson with Alex Stan",
    profileLink: "https://socialmedia.com/johndoe",
    dummyURL: "https://dummyimage.com/600x400/000/fff&text=John+Doe",
    colors: {
      primary: "#ffe4c8",
      secondary: "#0f4c81",
      text: "#0f4c81",
    },
  },
  {
    id: 2,
    date: 7,
    month: 9,
    year: 2024,
    time: "09:15 AM",
    tagName: "First Sesson with Alex Stan",
    profileLink: "https://socialmedia.com/janesmith",
    dummyURL: "https://dummyimage.com/600x400/000/fff&text=Jane+Smith",
    colors: {
      primary: "#ffe4c8",
      secondary: "#ffe4c8",
      text: "#0f4c81",
    },
  },
  {
    id: 3,
    date: 12,
    month: 9,
    year: 2024,
    time: "10:00 AM",
    tagName: "Webinar: How to cope with trauma in professional life",
    profileLink: "https://socialmedia.com/alicejohnson",
    dummyURL: "https://dummyimage.com/600x400/000/fff&text=Alice+Johnson",
    colors: {
      primary: "#e99f79",
      secondary: "#0f4c81",
      text: "#0f4c81",
    },
  },
  {
    id: 4,
    date: 17,
    month: 9,
    year: 2024,
    time: "11:45 AM",
    tagName: "Chemistry Session",
    profileLink: "https://socialmedia.com/bobbrown",
    dummyURL: "https://dummyimage.com/600x400/000/fff&text=Bob+Brown",
    colors: {
      primary: "#0f4c81",
      secondary: "#ee7c41",
      text: "#fff",
    },
  },
  {
    id: 5,
    date: 5,
    month: 9,
    year: 2024,
    time: "08:30 AM",
    tagName: "First Sesson with Alex Stan",
    profileLink: "https://socialmedia.com/johndoe",
    dummyURL: "https://dummyimage.com/600x400/000/fff&text=John+Doe",
    colors: {
      primary: "#ffe4c8",
      secondary: "#0f4c81",
      text: "#0f4c81",
    },
  },
  {
    id: 6,
    date: 12,
    month: 9,
    year: 2024,
    time: "10:00 AM",
    tagName: "Webinar: How to cope with trauma in professional life",
    profileLink: "https://socialmedia.com/alicejohnson",
    dummyURL: "https://dummyimage.com/600x400/000/fff&text=Alice+Johnson",
    colors: {
      primary: "#e99f79",
      secondary: "#0f4c81",
      text: "#0f4c81",
    },
  },
];

export default EventInfoData;
