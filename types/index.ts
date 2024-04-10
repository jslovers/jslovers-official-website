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
  image: {
    src: string;
    width: number;
    height: number;
  };
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

export interface MarketingData {
  Navigation: NavItem[];
  Achievements: AchievementItem[];
  PreviousTalks: TalkItem[];
  WorkshopData: WorkShopData;
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

export interface Speaker {
  id: string;
  imageSrc: string;
  name: string;
  designation: string;
  company: string;
  description: string;
  socials: {
    href: string;
    platform: string;
  }[];
}

export interface SpeakersData {
  Navigation: NavItem[];
  Speakers: Speaker[];
}
