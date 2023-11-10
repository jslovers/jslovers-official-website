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

export interface MarketingData {
  Navigation: NavItem[];
  Achievements: AchievementItem[];
  PreviousTalks: TalkItem[];
}
export interface FooterData {
  QuickLinks: FooterItem[];
  FollowUs: FooterItem[];
  Sponsors: FooterItem[];
}
