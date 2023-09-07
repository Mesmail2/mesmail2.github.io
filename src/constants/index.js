import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  c,
  sql,
  python,
  aws,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  intel,
  ust,
  novus,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Embedded systems Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "SQL",
    icon: sql,
  },
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Intern",
    company_name: "Intel",
    icon: intel,
    iconBg: "#E6DEDD",
    date: "March 2020 - Sept 2020",
    points: [
      "Developed scripts in C, C++, and Python to aid team projects.",
      "Managed data through MySQL queries and implemented OOP features in existing software.",
    ],
  },
  {
    title: "QA Software Technician",
    company_name: "Novus Labs",
    icon: novus,
    iconBg: "#383E56",
    date: "Sept 2021 - March 2022",
    points: [
      "Developed automated anomaly checking and wireless performance tests in Python.",
      "Collaborated with engineers to create effective test plans.",
      "Managed lab hardware and logistics, ensuring quality throughout the development lifecycle.",
    ],
  },
  {
    title: "Semiconductor Validation Engineer",
    company_name: "UST",
    icon: ust,
    iconBg: "#E6DEDD",
    date: "March 2022 - May 2022",
    points: [
      "Developed and executed python scripts and validation test plans.",
      "Enhanced efficiency through VBA scripts in Excel for data analysis.",
      "Managed repositories in Github and utilized JIRA for data validation and analysis.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Intel",
    icon: intel,
    iconBg: "#E6DEDD",
    date: "May 2022 - August 2023",
    points: [
      "Optimized code efficiency in C++, implemented error handling, and executed analytics tasks.",
      "Developed data visualization features using Chart.js and Vue.js.",
      "Engaged in embedded software development, modifying base layers to boot Linux on FPGA boards, and TCL scripting.",
      "Led the University Shuttle Program project using Agile and Scrum methodologies.",
    ],
  },
];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

export { services, technologies, experiences };
