import { StaticImageData } from "next/image";

export type NavItem = {
  title: string;
  href?: string;
};

export type FooterItem = NavItem & {
  logo?: JSX.Element;
};

export type AchievementItem = NavItem & {
  description: string;
  imgSrc: string;
};

export type TalkItem = Omit<AchievementItem, "description"> & {
  date: string;
  speaker: string;
};

export interface WorkShopData {
  speakerImageSrc: StaticImageData;
  speakerName: string;
  speakerRole: string;
  workshopTitle: string;
  workshopDescription: string;
  workshopDate: string;
}

export interface Home {
  Achievements: AchievementItem[];
  PreviousTalks: TalkItem[];
  WorkshopData: WorkShopData;
}

export interface Navigation {
  Navigation: NavItem[];
}
export interface FooterData {
  QuickLinks: FooterItem[];
  FollowUs: FooterItem[];
  Sponsors: FooterItem[];
}

export interface JobData {
  id: number;
  company_name: string;
  location: {
    city: string;
    country: string;
  };
  is_remote: boolean;
  experience: string;
  role: string;
  company_logo: string;
}

export type FilterType = "Company" | "Role" | "Experience" | "Location";
export interface FilterDetails {
  filter_options: string[];
  filter_backgroundColor: string;
}

export type FilterMap = Record<FilterType, FilterDetails>;

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

export interface PurposeCards {
  title: string;
  imgSrc: string;
  description: string;
}

export interface SpeakersData {
  Navigation: NavItem[];
  Speakers: Speaker[];
}

export interface Talk {
  imgSrc: string;
  title: string;
  date: string;
  speaker: string;
}

export interface About {
  hero: {
    title: string;
    description: string;
    ctaLink: string;
  };
  purpose: {
    title: string;
    cards: PurposeCards[];
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

export interface AboutData {
  Navigation: NavItem[];
  About: About;
}
