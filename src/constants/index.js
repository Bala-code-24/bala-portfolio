import enthira from "../assets/11.jpg";
import enthirathon from "../assets/Enthirathon.jpg";
import devs from "../assets/devs.jpg";
import hackmag from "../assets/hackmagadon.jpg";
import hack from "../assets/hacksummit.jpg";
import data from "../assets/data.jpg";
import b5 from "../assets/banyutrack-z/b5.jpg";
import b1 from "../assets/banyutrack-z/b1.jpg";
import b2 from "../assets/banyutrack-z/b2.jpg";
import b3 from "../assets/banyutrack-z/b3.jpg";
import b4 from "../assets/banyutrack-z/b4.jpg";
import me from "../assets/n1.png";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import logo from "../assets/png.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Archievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IoT Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Best Innovation Award - Enthirathon",
    company_name: "National Level Hackathon",
    icon: logo, 
    iconBg: "#0A0D11",
    date: "Aug 2023",
    points: [
      "Won Best Innovation with a prize of ₹10,000.",
      "Developed an IoT-based safety solution.",
      "Presented in front of top industry mentors.",
    ],
    images: [enthirathon],
  },
  {
    title: "Hackmageddon 2023 - Top 6 Finalist",
    company_name: "National Hackathon - 390 Teams",
    icon: logo,
    iconBg: "#0A0D11",
    date: "Oct 2023",
    points: [
      "Reached finals among 390 teams.",
      "Secured a cash prize of ₹2,000.",
      "Built a real-time emergency response app.",
    ],
    images: [hackmag],
  },
  {
    title: "DevInterns - Fly11 Program",
    company_name: "Internship Program",
    icon: logo,
    iconBg: "#0A0D11",
    date: "Sep 2023",
    points: [
      "Presented my React-based solution.",
      "Recognized for frontend creativity.",
      "Participated in code reviews & collabs.",
    ],
    images: [devs],
  },
  {
    title: "Data Sprint 2.0 Hackathon",
    company_name: "Sairam Engineering College",
    icon: logo, 
    iconBg: "#0A0D11",
    date: "Apr 2024", 
    points: [
      "Secured 1st Place among 27 top teams.",
      "Built a solution with Team TECH BUDDY using real-time data.",
      "Demonstrated strong collaboration, innovation, and frontend expertise.",
    ],
    images: [data], 
  },
  {
    title: "Hack Summit 5.0 - Most Sustainable Idea",
    company_name: "SRM IST, Aaruush x Temenos",
    icon: logo,
    iconBg: "#0A0D11",
    date: "Oct 2024",
    points: [
      "Awarded 'Most Sustainable Idea' at Hack Summit 5.0.",
      "Built KIBO: an AI-powered IoT-based agricultural assistant.",
      "Won ₹10,000 cash prize for promoting sustainable innovation."
    ],
    images: [hack], 
  }
];

const projects = [
  {
    name: "Banyutract-z",
    description:
      "Banyutract-z is a smart water monitoring system designed to revolutionize water resource management through IoT, real-time analytics, and mobile-first alerts. Built during the Enthirathon 2024 hackathon, this project addresses water scarcity, flooding, and contamination using a tech-for-good approach. Key features include live water level tracking, quality analysis, and user notifications through a React-based frontend and MongoDB-powered backend.",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "mongodb", color: "text-green-400" },
      { name: "tailwind", color: "text-pink-400" },
      { name: "iot", color: "text-orange-400" },
      { name: "express.js", color: "text-yellow-400" }
    ],
    image: b5,
    source_code_link: "https://github.com/balajisanthanam200/Banyutract-z",
    competitions: [
      {
        name: "Enthirathon 2024",
        award: "Best Innovation Award",
        year: "2024"
      }
    ],
    team_members: [
      { name: "Balaji Santhanam", role: "Frontend Developer", avatar: me },
      { name: "Suriya S", role: "IoT & Backend Engineer", avatar: enthira },
      { name: "Domesh U", role: "ML & Data Logic", avatar: enthira },
      { name: "Kaviya S", role: "UI Designer & Documentation", avatar: enthira }
    ],
    gallery: [
      { src: b1, caption: "Live dashboard interface monitoring water levels and quality" },
      { src: b2, caption: "User mobile alert system for real-time water conditions" },
      { src: b3, caption: "Mobile responsive view of the user dashboard" },
      { src: b4, caption: "Admin panel for configuring thresholds and analytics" }
    ]
  },
  {
    name: "Kibo",
    description:
      "Kibo is a digital community platform built to enhance collaboration and engagement among campus clubs, students, and organizers. Featuring a centralized dashboard, event calendar, membership systems, and notification services, Kibo bridges the gap between students and their extracurricular engagements. Developed with MERN stack and deployed for student use at our institution.",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "node.js", color: "text-yellow-400" },
      { name: "mongodb", color: "text-green-400" },
      { name: "express.js", color: "text-yellow-300" },
      { name: "tailwind", color: "text-pink-400" }
    ],
    image: enthira,
    source_code_link: "https://github.com/balajisanthanam200/Kibo", // Update if necessary
    competitions: [
      {
        name: "Campus Innovation Week",
        award: "Runner-up",
        year: "2023"
      }
    ],
    team_members: [
      { name: "Balaji Santhanam", role: "Full Stack Developer", avatar: me },
      { name: "Jayanesh D", role: "Backend Developer", avatar: enthira },
      { name: "Pavithra M", role: "UI/UX Designer", avatar: enthira }
    ],
    gallery: [
      { src: enthira, caption: "Event dashboard with calendar integration" },
      { src: enthira, caption: "Student portal and registration view" },
      { src: enthira, caption: "Admin management panel for clubs" },
      { src: enthira, caption: "Mobile-friendly interface for events" }
    ]
  },
  {
    name: "NourishNet",
    description:
      "NourishNet is a food donation and redistribution platform aimed at connecting restaurants, food donors, and NGOs to fight food waste and hunger. Built during Hackmageddon 2024, it includes features like real-time donation matching, route optimization for deliveries, and food safety monitoring. It integrates mapping services and intelligent scheduling logic to ensure efficient food rescue.",
    tags: [
      { name: "next.js", color: "text-blue-500" },
      { name: "firebase", color: "text-orange-400" },
      { name: "tailwind", color: "text-pink-400" },
      { name: "mapbox", color: "text-green-300" },
      { name: "cloud functions", color: "text-purple-400" }
    ],
    image: enthira,
    source_code_link: "https://github.com/balajisanthanam200/NourishNet", // Update if necessary
    competitions: [
      {
        name: "Hackmageddon 2024",
        award: "Special Prize",
        year: "2024"
      }
    ],
    team_members: [
      { name: "Balaji Santhanam", role: "Frontend & UI Developer", avatar: enthira },
      { name: "Thirumurugan A K S", role: "Cloud & Backend Engineer", avatar: enthira },
      { name: "Shanmugashree M", role: "Data & NGO Integration", avatar: enthira },
      { name: "Jayanesh D", role: "Logistics Algorithm Developer", avatar: enthira }
    ],
    gallery: [
      { src: enthira, caption: "Food donor dashboard with donation status" },
      { src: enthira, caption: "Live map tracking deliveries to NGOs" },
      { src: enthira, caption: "Mobile view showing donation history" },
      { src: enthira, caption: "NGO portal accepting and confirming deliveries" }
    ]
  }
];


export { services, technologies, experiences, projects };
