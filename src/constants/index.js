import enthira from "../assets/11.jpg";
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

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    icon: meta, 
    iconBg: "#FFD700",
    date: "Aug 2023",
    points: [
      "Won Best Innovation with a prize of ₹10,000.",
      "Developed an IoT-based safety solution.",
      "Presented in front of top industry mentors.",
    ],
    images: [enthira],
  },
  {
    title: "Hackmageddon 2023 - Top 6 Finalist",
    company_name: "National Hackathon - 390 Teams",
    icon: tesla,
    iconBg: "#C0C0C0",
    date: "Oct 2023",
    points: [
      "Reached finals among 390 teams.",
      "Secured a cash prize of ₹2,000.",
      "Built a real-time emergency response app.",
    ],
    images: [enthira
    ],
  },
  {
    title: "DevInterns - Fly11 Program",
    company_name: "Internship Program",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Sep 2023",
    points: [
      "Presented my React-based solution.",
      "Recognized for frontend creativity.",
      "Participated in code reviews & collabs.",
    ],
    images: [
      enthira,
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Project Name",
    description:
      "Detailed description of the project that explains what it does, the technologies used, challenges overcome, and the impact it had.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "tailwind",
        color: "text-pink-400",
      },
    ],
    image: enthira,
    source_code_link: "https://github.com/yourUsername/project-repo",
    // New fields for detailed project page
    competitions: [
      {
        name: "International Hackathon 2023",
        award: "First Place",
        year: "2023"
      },
      {
        name: "Tech Innovation Challenge",
        award: "Best UI/UX Design",
        year: "2022"
      }
    ],
    team_members: [
      {
        name: "Jane Doe",
        role: "Frontend Developer",
        avatar: enthira // Path to team member's avatar
      },
      {
        name: "John Smith",
        role: "Backend Developer",
        avatar: enthira
      },
      {
        name: "Alex Johnson",
        role: "UI/UX Designer",
        avatar: enthira
      }
    ],
    gallery: [
      {
        src:enthira,
        caption: "Dashboard interface showing key metrics"
      },
      {
        src: enthira,
        caption: "User profile page with customization options"
      },
      {
        src: enthira,
        caption: "Mobile responsive view"
      },
      {
        src: enthira,
        caption: "Admin control panel"
      }
    ]
  },
  {
    name: "Project Name",
    description:
      "Detailed description of the project that explains what it does, the technologies used, challenges overcome, and the impact it had.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "tailwind",
        color: "text-pink-400",
      },
    ],
    image: enthira,
    source_code_link: "https://github.com/yourUsername/project-repo",
    // New fields for detailed project page
    competitions: [
      {
        name: "International Hackathon 2023",
        award: "First Place",
        year: "2023"
      },
      {
        name: "Tech Innovation Challenge",
        award: "Best UI/UX Design",
        year: "2022"
      }
    ],
    team_members: [
      {
        name: "Jane Doe",
        role: "Frontend Developer",
        avatar: enthira // Path to team member's avatar
      },
      {
        name: "John Smith",
        role: "Backend Developer",
        avatar: enthira
      },
      {
        name: "Alex Johnson",
        role: "UI/UX Designer",
        avatar: enthira
      }
    ],
    gallery: [
      {
        src:enthira,
        caption: "Dashboard interface showing key metrics"
      },
      {
        src: enthira,
        caption: "User profile page with customization options"
      },
      {
        src: enthira,
        caption: "Mobile responsive view"
      },
      {
        src: enthira,
        caption: "Admin control panel"
      }
    ]
  },
  {
    name: "Project Name",
    description:
      "Detailed description of the project that explains what it does, the technologies used, challenges overcome, and the impact it had.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "tailwind",
        color: "text-pink-400",
      },
    ],
    image: enthira,
    source_code_link: "https://github.com/yourUsername/project-repo",
    // New fields for detailed project page
    competitions: [
      {
        name: "International Hackathon 2023",
        award: "First Place",
        year: "2023"
      },
      {
        name: "Tech Innovation Challenge",
        award: "Best UI/UX Design",
        year: "2022"
      }
    ],
    team_members: [
      {
        name: "Jane Doe",
        role: "Frontend Developer",
        avatar: enthira // Path to team member's avatar
      },
      {
        name: "John Smith",
        role: "Backend Developer",
        avatar: enthira
      },
      {
        name: "Alex Johnson",
        role: "UI/UX Designer",
        avatar: enthira
      }
    ],
    gallery: [
      {
        src:enthira,
        caption: "Dashboard interface showing key metrics"
      },
      {
        src: enthira,
        caption: "User profile page with customization options"
      },
      {
        src: enthira,
        caption: "Mobile responsive view"
      },
      {
        src: enthira,
        caption: "Admin control panel"
      }
    ]
  },
];

export { services, technologies, experiences, testimonials, projects };
