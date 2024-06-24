import { FilterMap, FilterType } from "@/types";

export const jobsList = [
  {
    id: 1,
    company_name: "Amazon",
    location: {
      city: "Bangalore",
      country: "India",
    },
    is_remote: true,
    experience: "3-4 years",
    role: "Android Developer",
    company_logo: "/assets/razorpay_logo.svg",
  },
  {
    id: 2,
    company_name: "Razorpay",
    location: {
      city: "Bangalore",
      country: "India",
    },
    is_remote: false,
    experience: "3-4 years",
    role: "Frontend Developer",
    company_logo: "/assets/razorpay_logo.svg",
  },
  {
    id: 3,
    company_name: "Microsoft",
    location: {
      city: "Bangalore",
      country: "India",
    },
    is_remote: true,
    experience: "3-4 years",
    role: "Software Engineer",
    company_logo: "/assets/razorpay_logo.svg",
  },
  {
    id: 4,
    company_name: "BrowserStack",
    location: {
      city: "Bangalore",
      country: "India",
    },
    is_remote: false,
    experience: "3-4 years",
    role: "Android Developer",
    company_logo: "/assets/razorpay_logo.svg",
  },
  {
    id: 5,
    company_name: "Amazon",
    location: {
      city: "Bangalore",
      country: "India",
    },
    is_remote: true,
    experience: "3-4 years",
    role: "Android Developer",
    company_logo: "/assets/razorpay_logo.svg",
  },
  {
    id: 6,
    company_name: "Razorpay",
    location: {
      city: "Bangalore",
      country: "India",
    },
    is_remote: true,
    experience: "3-4 years",
    role: "Frontend Developer",
    company_logo: "/assets/razorpay_logo.svg",
  },
  {
    id: 7,
    company_name: "Microsoft",
    location: {
      city: "Bangalore",
      country: "India",
    },
    is_remote: false,
    experience: "3-4 years",
    role: "Software Engineer",
    company_logo: "/assets/razorpay_logo.svg",
  },
  {
    id: 8,
    company_name: "BrowserStack",
    location: {
      city: "Bangalore",
      country: "India",
    },
    is_remote: true,
    experience: "3-4 years",
    role: "Android Developer",
    company_logo: "/assets/razorpay_logo.svg",
  },
];

export const companyFilterOptions = ["Amazon", "Razorpay"];
export const roleFilterOptions = ["Full time", "Part time", "Contract"];
export const experienceFilterOptions = [
  "<1 year",
  "1-2 years",
  "3-4 years",
  "5+ years",
];
export const locationFilterOptions = ["abc", "xyz"];

export const jobFilters: FilterMap = {
  "Company": {
    filter_options: companyFilterOptions,
    filter_backgroundColor: "#e0719e",
  },
  "Role": {
    filter_options: roleFilterOptions,
    filter_backgroundColor: "#f6e049",
  },
  "Experience": {
    filter_options: experienceFilterOptions,
    filter_backgroundColor: "#7fd6c2",
  },
  "Location": {
    filter_options: locationFilterOptions,
    filter_backgroundColor: "#f6a649",
  }
};
 
