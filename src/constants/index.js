import { mto } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  figma,
  miro,
  framer,
  blog,
  dictionary,
  journal,
  food,
  concierge,
  chatbot,
  scheduler,
  drawing,
  modeling,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: figma,
    name: "Figma",
    type: "UXdesign",
  },
  {
    imageUrl: miro,
    name: "Miro",
    type: "UXdesign",
  },
  {
    imageUrl: framer,
    name: "Framer",
    type: "UXdesign",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  // {
  //     imageUrl: motion,
  //     name: "Motion",
  //     type: "Animation",
  // },
  // {
  //     imageUrl: mui,
  //     name: "Material-UI",
  //     type: "Frontend",
  // },
  // {
  //     imageUrl: nextjs,
  //     name: "Next.js",
  //     type: "Frontend",
  // },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  // {
  //     imageUrl: redux,
  //     name: "Redux",
  //     type: "State Management",
  // },
  // {
  //     imageUrl: sass,
  //     name: "Sass",
  //     type: "Frontend",
  // },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Junior UX Designer",
    company_name: "Ministry of Transporation",
    icon: mto,
    iconBg: "#accbe1",
    date: "January 2024 - April 2024",
    points: [
      "Participated in usability testing and created user personas for the MDIS (MTO Data and Information Strategy).",
      "Improved the FFS (Fee for Service) procurement process by creating flowcharts and documentation to aid managers in hiring procedures.",
      "Assisted in the GTSSD & IPEO CRM project by engaging in discovery session, including user personas and journey map.",
      "Enhanced the prototype of the RSS (Roadside Scheduling System) and CMS (Certification Management System) focusing on user experience and usability.",
      "Developed “PingBot”, an AI chatbot for the OPS Hackathon, involving user research, user persona, and prototype design to centralize learning resources for employees.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#fbc3bc",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#b7e4c7",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#a2d2ff",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "mailto:sjo9@my.centennialcollege.ca",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Seyeon-Jo",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/seyeonjo/",
  },
];

export const projects = [
  {
    iconUrl: food,
    theme: "btn-back-blue",
    name: "SFN Hackathon - Foodbank App",
    description:
      "Developed a desktop and mobile app to connect individuals facing food insecurity in Scarborough and the GTA with local food banks, aiming to streamline access to food resources.",
    link: "https://seyeonjo.notion.site/Scarborough-Food-Network-App-3804e505c0484271a2e15704d82a7d0c?pvs=4",
  },
  {
    iconUrl: chatbot,
    theme: "btn-back-black",
    name: "OPS Hackathon - AI Chatbot",
    description:
      "Developed an AI chatbot, 'PingBot,' to simplify finding development opportunities within the OPS by enabling course searches by role or skill and answering learning and development queries.",
    link: "https://seyeonjo.notion.site/AI-Chatbot-ea947f2afce54324915476d112999c1a?pvs=4",
  },
  {
    iconUrl: scheduler,
    theme: "btn-back-red",
    name: "Team Project - Scheduler App",
    description:
      "Created a comprehensive scheduler web application designed to enhance time management for individuals and collaboration for teams, aiming to boost overall productivity.",
    link: "https://seyeonjo.notion.site/Scheduler-Web-App-36c37d7b064c4c75832f253143b553ca?pvs=4",
  },
  // {
  //   iconUrl: concierge,
  //   theme: "btn-back-green",
  //   name: "Condo Management Web App",
  //   description:
  //     'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
  //   link: "https://seyeonjo.notion.site/Condo-Management-Web-App-6f6d4cc1776b4dd6b522b6d057dda245?pvs=4",
  // },
  // {
  //   iconUrl: journal,
  //   theme: "btn-back-pink",
  //   name: "Journal Web App",
  //   description:
  //     "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://seyeonjo.notion.site/Journal-Web-App-2d969639dda1458f896a9a2dad2b6337?pvs=4",
  // },
  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "Case Study Temp",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://seyeonjo.notion.site/Case-Study-Temp-ba898c338c2c44e4873485324781f67c?pvs=4",
  // },
];

export const studies = [
  {
    iconUrl: blog,
    theme: "btn-back-pink",
    name: "Github Blog",
    description:
      "Explore my GitHub study blog, tracking my current learning journey. Follow along as I delve into diverse subjects, sharing insights along the way.",
    link: "https://seyeon-jo.github.io/",
  },
  {
    iconUrl: dictionary,
    theme: "btn-back-black",
    name: "UX dictionary in Notion",
    description:
      "Explore my UX Notion dictionary—curated UX/UI design knowledge. Discover definitions and insights on the user experience journey.",
    link: "https://seyeonjo.notion.site/UX-Dictionary-62f05c26ff9d43ce81f5c0b81c1d3963?pvs=4",
  },
  {
    iconUrl: drawing,
    theme: "btn-back-yellow",
    name: "Digital Drawing",
    description: "Explore my digital drawing learning journey.",
    link: "https://seyeonjo.notion.site/Digital-Drawing-62d0e43871924d09ae93098c3bac9796?pvs=4",
  },
  {
    iconUrl: modeling,
    theme: "btn-back-blue",
    name: "3D Modeling",
    description: "Explore my 3d Modeling learning journey.",
    link: "https://seyeonjo.notion.site/3D-Modeling-8365e598f8c64338965f391ce011f938?pvs=4",
  },
];
