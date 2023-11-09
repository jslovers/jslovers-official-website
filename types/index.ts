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

export interface MarketingData {
  Navigation: NavItem[];
  Achievements: AchievementItem[];
}
