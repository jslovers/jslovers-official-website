export type NavItem = {
  TITLE: string;
  HREF: string;
};

export type FooterItem = NavItem & {
  LOGO?: JSX.Element;
};
