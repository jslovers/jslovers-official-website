import { Home } from "@/types";
import speakerImage from "public/assets/hero_image_guest_v1.png";

export const HOMEPAGE: Home = {
  Achievements: [
    {
      title: "10,000+ Members",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        imgSrc: "/assets/achievement_1_v1.png"
      
    },
    {
      title: "100+ Workshops",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        imgSrc: "/assets/achievement_2_v1.png"
    },
    {
      title: "100+ Sponsers",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        imgSrc: "/assets/achievement_3_v1.png"
    },
    {
      title: "100+ Speakers",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        imgSrc: "/assets/achievement_4_v1.png"
    },
  ],
  PreviousTalks: [
    {
      date: "20 May 2021",
      title: "Introduction to ReactJs",
      imgSrc: "/assets/achievement_4_v1.png",
      speaker: "Arun Singh",
    },
    {
      date: "01 June 2022",
      title: "NextJS workshop",
      imgSrc: "/assets/achievement_4_v1.png",
      speaker: "Arun Sharma",
    },
    {
      date: "14 Jan 2024",
      title: "Webworkers: Workshop",
      imgSrc: "/assets/achievement_4_v1.png",
      speaker: "Prateek",
    },
    {
      date: "20 May 2021",
      title: "TypeScript",
      imgSrc: "/assets/achievement_4_v1.png",
      speaker: "Ekaspreet Singh",
    },
    {
      date: "20 May 2021",
      title: "AWS for Front-end Developers",
      imgSrc: "/assets/achievement_4_v1.png",
      speaker: "Vrukshali",
    },
    {
      date: "20 May 2021",
      title: "Introduction to ReactJs",
      imgSrc: "/assets/achievement_4_v1.png",
      speaker: "Neha Sharma",
    },
  ],
  Workshop: {
    speakerImageSrc: speakerImage,
    speakerName: "John Doe",
    speakerRole: "Frontend Architect at Apple",
    workshopTitle: "Introduction to Design System and Storybook",
    workshopDate: " On 24th October at 05:00 AM IST",
    workshopDescription:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
};
