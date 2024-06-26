import { Icons } from "@/components/Icons";
import { FooterData } from "@/types";

export const FOOTER: FooterData = {
  QuickLinks: [
    { title: "Meetups", href: "/meetups" },
    { title: "Jobs", href: "/jobs" },
    { title: "Speakers", href: "/speakers" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "#" },
  ],
  FollowUs: [
    { platform: "github", href: "https://www.github.com" },
    { platform: "twitter", href: "https://twitter.com", },
    { platform: "linkedin", href: "https://www.linkedin.com", },
  ],
  Sponsors: [
    { title: "Microsoft", href: "#", logo: <Icons.microsoft /> },
    { title: "Razorpay", href: "#", logo: <Icons.razorpay /> },
    { title: "Amazon", href: "#", logo: <Icons.amazon /> },
    { title: "IBM", href: "#", logo: <Icons.ibm /> },
  ],
};
