import { Job, JobFilterMap, Meetup, MeetupFilterMap } from "@/types";

export const jobsList: Job[] = [
  {
    id: 1,
    company_name: "Amazon",
    location: {
      city: "Mumbai",
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
      city: "Pune",
      country: "India",
    },
    is_remote: false,
    experience: "0-2 years",
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
      city: "Chennai",
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
      city: "Hyderabad",
      country: "India",
    },
    is_remote: true,
    experience: "0-2 years",
    role: "Android Developer",
    company_logo: "/assets/razorpay_logo.svg",
  },
  {
    id: 6,
    company_name: "Razorpay",
    location: {
      city: "Gurugram",
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
      city: "Mumbai",
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
      city: "Pune",
      country: "India",
    },
    is_remote: true,
    experience: "3-4 years",
    role: "Android Developer",
    company_logo: "/assets/razorpay_logo.svg",
  },
];

const uniqueCompanies = Array.from(new Set(jobsList.map(job => job.company_name)));
const uniqueRole = Array.from(new Set(jobsList.map(job => job.role)));
const uniqueExperience = Array.from(new Set(jobsList.map(job => job.experience)));
const uniqueJobLocations = Array.from(new Set(jobsList.map(job => job.location.city)));

export const jobFilters: JobFilterMap = {
  "Company": {
    filter_options: uniqueCompanies,
    filter_backgroundColor: "#e0719e",
  },
  "Role": {
    filter_options: uniqueRole,
    filter_backgroundColor: "#f6e049",
  },
  "Experience": {
    filter_options: uniqueExperience,
    filter_backgroundColor: "#7fd6c2",
  },
  "Location": {
    filter_options: uniqueJobLocations,
    filter_backgroundColor: "#f6a649",
  }
};

export const meetupsList: Meetup[] = [
  {
    id: 1,
    location: { city: "San Francisco", country: "USA" },
    topicName: "React Native Development",
    level: "Intermediate",
    speakerName: "John Doe",
    dateTime: new Date("2024-07-10T18:00:00Z"),
    timeZone: "PDT",
    banner: "https://example.com/meetup1-banner.jpg"
  },
  {
    id: 2,
    location: { city: "London", country: "UK" },
    topicName: "Building Scalable APIs with Node.js",
    level: "Advanced",
    speakerName: "Jane Smith",
    dateTime: new Date("2024-07-15T17:30:00Z"),
    timeZone: "BST",
    banner: "https://example.com/meetup2-banner.jpg"
  },
  {
    id: 3,
    location: { city: "New York City", country: "USA" },
    topicName: "Python Web Development",
    level: "Beginner",
    speakerName: "Michael Brown",
    dateTime: new Date("2024-07-20T19:00:00Z"),
    timeZone: "EDT",
    banner: "https://example.com/meetup3-banner.jpg"
  },
  {
    id: 4,
    location: { city: "Berlin", country: "Germany" },
    topicName: "iOS App Development",
    level: "Intermediate",
    speakerName: "Anna Müller",
    dateTime: new Date("2024-07-12T16:00:00Z"),
    timeZone: "CEST",
    banner: "https://example.com/meetup4-banner.jpg"
  },
  {
    id: 5,
    location: { city: "Singapore", country: "Singapore" },
    topicName: "Frontend Frameworks Comparison",
    level: "Advanced",
    speakerName: "David Lim",
    dateTime: new Date("2024-07-25T15:30:00Z"),
    timeZone: "SGT",
    banner: "https://example.com/meetup5-banner.jpg"
  },
  {
    id: 6,
    location: { city: "San Francisco", country: "USA" },
    topicName: "GraphQL Best Practices",
    level: "Intermediate",
    speakerName: "Emily Chen",
    dateTime: new Date("2024-07-18T18:30:00Z"),
    timeZone: "PDT",
    banner: "https://example.com/meetup6-banner.jpg"
  },
  {
    id: 7,
    location: { city: "London", country: "UK" },
    topicName: "Machine Learning Algorithms",
    level: "Advanced",
    speakerName: "Thomas Green",
    dateTime: new Date("2024-07-14T17:00:00Z"),
    timeZone: "BST",
    banner: "https://example.com/meetup7-banner.jpg"
  },
  {
    id: 8,
    location: { city: "New York City", country: "USA" },
    topicName: "Blockchain Applications",
    level: "Beginner",
    speakerName: "Sophia Johnson",
    dateTime: new Date("2024-07-21T19:30:00Z"),
    timeZone: "EDT",
    banner: "https://example.com/meetup8-banner.jpg"
  },
];

const uniqueMeetupLocations = Array.from(new Set(meetupsList.map(meetup => meetup.location.city)));
const uniqueTopics = Array.from(new Set(meetupsList.map(meetup => meetup.topicName)));
const uniqueLevels = Array.from(new Set(meetupsList.map(meetup => meetup.level)));

export const meetupFilters: MeetupFilterMap = {
  "Locations": {
    filter_options: uniqueMeetupLocations,
    filter_backgroundColor: "#e0719e",
  },
  "Topics": {
    filter_options: uniqueTopics,
    filter_backgroundColor: "#f6e049",
  },
  "Level": {
    filter_options: uniqueLevels,
    filter_backgroundColor: "#7fd6c2",
  },
};