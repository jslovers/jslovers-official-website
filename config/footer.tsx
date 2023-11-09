import { Icons } from "@/components/Icons";
import { FooterData } from "@/types";

// TODO: Reconfiguration needed once footer content is finalised

export const FOOTER: FooterData = {
  QuickLinks: [
    { title: "Meetups", href: "#" },
    { title: "Jobs", href: "#" },
    { title: "Speakers", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
  ],
  FollowUs: [
    { title: "Meetups", href: "#" },
    { title: "Jobs", href: "#" },
    { title: "Speakers", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
  ],
  Sponsors: [
    { title: "Microsoft", href: "#", logo: <Icons.microsoft /> },
    { title: "Razorpay", href: "#", logo: <Icons.razorpay /> },
    { title: "Amazon", href: "#", logo: <Icons.amazon /> },
    { title: "IBM", href: "#", logo: <Icons.ibm /> },
  ],
};
