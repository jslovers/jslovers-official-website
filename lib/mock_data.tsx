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

const getUniqueOptions = (key) => {
  return [...new Set(jobsList.map((job) => key.split('.').reduce((obj, k) => obj && obj[k], job)))];
};

export const comapnyFilterOptions = getUniqueOptions("company_name")
export const roleFilterOptions = getUniqueOptions("role")
export const experienceFilterOptions = getUniqueOptions("experience")
export const locationFilterOptions =getUniqueOptions("location.city")
