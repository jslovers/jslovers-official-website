import { Icons } from "@/components/Icons";
import { Navigation } from "@/types";

export type FooterProps = Navigation & {
  logo?: JSX.Element;
};

type Footer = {
  QuickLinks: FooterProps[];
  FollowUs: FooterProps[];
  Sponsors: FooterProps[];
};

export const FOOTER: Footer = {
  QuickLinks: [
    { title: "Meetups", href: "#" },
    { title: "Jobs", href: "/jobs" },
    { title: "Speakers", href: "/speakers" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "#" },
  ],
  FollowUs: [
    { title: "Meetups", href: "#" },
    { title: "Jobs", href: "/jobs" },
    { title: "Speakers", href: "/speakers" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "#" },
  ],
  Sponsors: [
    { title: "Microsoft", href: "#", logo: <Icons.microsoft /> },
    { title: "Razorpay", href: "#", logo: <Icons.razorpay /> },
    { title: "Amazon", href: "#", logo: <Icons.amazon /> },
    { title: "IBM", href: "#", logo: <Icons.ibm /> },
  ],
};
