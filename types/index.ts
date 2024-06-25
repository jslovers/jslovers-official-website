import { StaticImageData } from "next/image";

export interface Navigation {
  title: string;
  href?: string;
};

export interface Achievement extends Navigation {
  description: string;
  imgSrc: string;
};

export interface Talk extends Omit<Achievement, "description"> {
  date: string;
  speaker: string;
};

export interface Workshop {
  speakerImageSrc: StaticImageData;
  speakerName: string;
  speakerRole: string;
  workshopTitle: string;
  workshopDescription: string;
  workshopDate: string;
}

export interface Home {
  Achievements: Achievement[];
  PreviousTalks: Talk[];
  Workshop: Workshop;
}

export interface Speaker {
  id: string;
  imageSrc: string;
  name: string;
  designation: string;
  company?: string;
  description: string;
  socials: {
    href: string;
    platform: string;
  }[];
}

export interface Feature {
  title: string;
  imgSrc: string;
  description: string;
}

export interface SpeakersDetails {
  Navigation: Navigation[];
  Speakers: Speaker[];
}


export interface About {
  Navigation: Navigation[];
  hero: {
    title: string;
    description: string;
    ctaLink: string;
  };
  purpose: {
    title: string;
    cards: Feature[];
  };
  team: {
    title: string;
    members: Speaker[];
  };
  story: {
    title: string;
    images: string[];
    faqs: {
      summaryBgColor: string;
      ques: string;
      ans: string;
    }[];
  };
}
