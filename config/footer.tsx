import { Icons } from "@/components/Icons";
import { FooterData } from "@/types";

export const FOOTER: FooterData = {
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
