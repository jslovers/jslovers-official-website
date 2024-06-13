import { MarketingData } from "@/types";
import speakerImage from "public/assets/hero_image_guest_v1.png";

export const MARKETING: MarketingData = {
  Navigation: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Meetups",
      href: "/meetups",
    },
    {
      title: "Jobs",
      href: "/jobs",
    },
    {
      title: "Speakers",
      href: "/speakers",
    },
    {
      title: "Collaboration",
      href: "/collaboration",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  Achievements: [
    {
      title: "10,000+ Members",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      image: {
        src: "/assets/achievement_1_v1.png",
        width: 143,
        height: 125,
      },
    },
    {
      title: "100+ Workshops",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      image: {
        src: "/assets/achievement_2_v1.png",
        width: 158,
        height: 125,
      },
    },
    {
      title: "100+ Sponsers",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      image: {
        src: "/assets/achievement_3_v1.png",
        width: 194,
        height: 125,
      },
    },
    {
      title: "100+ Speakers",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      image: {
        src: "/assets/achievement_4_v1.png",
        width: 223,
        height: 125,
      },
    },
  ],
  PreviousTalks: [
    {
      date: "20 May 2021",
      title: "Introduction to ReactJs",
      image: {
        src: "/assets/achievement_4_v1.png",
        width: 223,
        height: 125,
      },
      speaker: "Arun Singh",
    },
    {
      date: "01 June 2022",
      title: "NextJS workshop",
      image: {
        src: "/assets/achievement_4_v1.png",
        width: 223,
        height: 125,
      },
      speaker: "Arun Sharma",
    },
    {
      date: "14 Jan 2024",
      title: "Webworkers: Workshop",
      image: {
        src: "/assets/achievement_4_v1.png",
        width: 223,
        height: 125,
      },
      speaker: "Prateek",
    },
    {
      date: "20 May 2021",
      title: "TypeScript",
      image: {
        src: "/assets/achievement_4_v1.png",
        width: 223,
        height: 125,
      },
      speaker: "Ekaspreet Singh",
    },
    {
      date: "20 May 2021",
      title: "AWS for Front-end Developers",
      image: {
        src: "/assets/achievement_4_v1.png",
        width: 223,
        height: 125,
      },
      speaker: "Vrukshali",
    },
    {
      date: "20 May 2021",
      title: "Introduction to ReactJs",
      image: {
        src: "/assets/achievement_4_v1.png",
        width: 223,
        height: 125,
      },
      speaker: "Neha Sharma",
    },
  ],
  WorkshopData: {
    speakerImageSrc: speakerImage,
    speakerName: "John Doe",
    speakerRole: "Frontend Architect at Apple",
    workshopTitle: "Introduction to Design System and Storybook",
    workshopDate: " On 24th October at 05:00 AM IST",
    workshopDescription:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
};
