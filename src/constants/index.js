// =======================
// PROJECTS
// =======================

export const myProjects = [
  {
    id: 1,
    title: "GenAI-Based SLD Design Automation Platform",
      image: import.meta.env.BASE_URL + "assets/projects/EDA.png",
    description:
      "A GenAI-driven platform that automates the complete creation of electrical Single Line Diagrams (SLDs), significantly reducing manual engineering effort.",
    subDescription: [
      "Automated load list extraction, standardization, optimization, and design modification from raw engineering inputs.",
      "Designed a GenAI-assisted workflow to make engineering design decisions programmatically.",
      "Built an interactive Streamlit dashboard to control design parameters and visualize outputs.",
      "Generated final SLD diagrams programmatically using Graphviz, eliminating manual drafting.",
      "Translated core electrical engineering workflows into scalable AI-assisted software systems.",
    ],
    tags: [
      { id: 1, name: "Python", path: import.meta.env.BASE_URL + "assets/logos/python.png" },
      { id: 2, name: "Streamlit", path: import.meta.env.BASE_URL + "assets/logos/streamlit.svg" },
      { id: 3, name: "Graphviz", path: import.meta.env.BASE_URL + "assets/logos/graphviz.png" },
      { id: 4, name: "GenAI", path: import.meta.env.BASE_URL + "assets/logos/ai.png" },
    ],
    href: "https://edasystem.streamlit.app/",
    github: "https://github.com/lucifer2f/sld-design",
  },

  {
    id: 2,
    title: "MILO – Youth Mental Wellness Platform",
    image: import.meta.env.BASE_URL + "assets/projects/milo.jpg",
    description:
      "A GenAI-powered mental wellness platform for youth, combining conversational AI, gamification, journaling, and mood tracking.",
    subDescription: [
      "Built an AI chatbot companion for daily conversations and mental wellness check-ins.",
      "Designed Pokémon-style gamification where characters grow with healthy engagement habits.",
      "Implemented journaling with mood tracking and a calendar-based emotional timeline.",
      "Developed AI-driven wellness assessments using historical interaction and mood data.",
      "Added moderated community features (Squad Mode) for safe, anonymous peer interaction.",
    ],
    tags: [
      { id: 1, name: "TypeScript", path: import.meta.env.BASE_URL + "assets/logos/typescript.png" },
      { id: 2, name: "Firebase", path: import.meta.env.BASE_URL + "assets/logos/firebase.svg" },
      { id: 3, name: "GenAI", path: import.meta.env.BASE_URL + "assets/logos/ai.png" },
      { id: 4, name: "Git", path: import.meta.env.BASE_URL + "assets/logos/git.svg" },
    ],
    href: "https://milo-collab-nki9ta6z0-apurv-ns-projects.vercel.app",
    github: "https://github.com/vapor7v/milo-collab",
  },

  {
    id: 3,
    title: "Food Delivery Platform – Nashtto",
    image: import.meta.env.BASE_URL + "assets/projects/nashtto.png",
    description:
      "A full-scale food delivery platform built for a startup, covering customer ordering, restaurant operations, and delivery partner workflows.",
    subDescription: [
      "Developed a customer-facing app for restaurant discovery, ordering, and real-time order tracking.",
      "Built a restaurant partner app for menu management, order handling, and daily operations.",
      "Contributed to a delivery partner app for order assignment, navigation, and delivery updates.",
      "Worked on backend logic, API integration, and data flow across all three applications.",
      "Gained hands-on experience in startup execution, scalability, and end-to-end product development.",
    ],
    tags: [
      { id: 1, name: "TypeScript", path: import.meta.env.BASE_URL + "assets/logos/typescript.png" },
      { id: 2, name: "JavaScript", path: import.meta.env.BASE_URL + "assets/logos/javascript.svg" },
      { id: 3, name: "Backend APIs", path: import.meta.env.BASE_URL + "assets/logos/api.png" },
      { id: 4, name: "Database", path: import.meta.env.BASE_URL + "assets/logos/database.png" },
    ],
    href: "",
    github: "https://github.com/yogesh1454/food-app",
  },
  {
  id: 4,
  title: "Personal Portfolio Website",
  image: import.meta.env.BASE_URL + "assets/projects/portfolio.png",
  description:
    "A modern, interactive personal portfolio website built to showcase my skills, projects, experiences, and online presence as a software developer.",
  subDescription: [
    "Built using React 19 and Vite for a fast, scalable, component-driven architecture.",
    "Styled with Tailwind CSS to achieve a clean, responsive, mobile-first UI.",
    "Integrated Three.js via @react-three/fiber and @react-three/drei for interactive 3D elements like an astronaut and globe.",
    "Implemented smooth animations and transitions using Framer Motion.",
    "Data-driven structure using centralized constants for projects, socials, and experiences, making updates easy.",
    "Includes interactive UI elements such as parallax backgrounds, orbiting animations, and a copy-email button.",
  ],
  tags: [
    { id: 1, name: "React", path: import.meta.env.BASE_URL + "assets/logos/react.svg" },
    { id: 2, name: "Vite", path: import.meta.env.BASE_URL + "assets/logos/vitejs.svg" },
    { id: 3, name: "Tailwind CSS", path: import.meta.env.BASE_URL + "assets/logos/tailwindcss.svg" },
    { id: 4, name: "Three.js", path: import.meta.env.BASE_URL + "assets/logos/threejs.svg" },
    { id: 5, name: "JavaScript", path: import.meta.env.BASE_URL + "assets/logos/javascript.svg" },
  ],
  href: "", // add live URL once deployed (Vercel / Netlify)
  github: "https://github.com/lucifer2f/Portfolio",
},

];

// =======================
// SOCIAL LINKS
// =======================

export const mySocials = [
  {
    id: 1,
    name: "GitHub",
    href: "https://github.com/lucifer2f",
    icon: "/assets/logos/github.svg",
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sandesh-singh-a46974282/",
    icon: "/assets/logos/linkedin.svg",
  },
  {
    id: 3,
    name: "LeetCode",
    href: "https://leetcode.com/u/TO63iVYOBo/",
    icon: "/assets/logos/leetcode.svg",
  },
  {
    id: 4,
    name: "Email",
    href: "mailto:sandeshsinghh12@gmail.com",
    icon: "/assets/logos/email.svg",
  },
];

// =======================
// EXPERIENCE & ACHIEVEMENTS
// =======================

export const experiences = [
  {
    id: 1,
    role: "Software Developer (Product Engineering)",
    company: "Nashtto – Food Delivery Startup",
    duration: "2025 – Present",
    points: [
      "Working as part of a 3-member core engineering team on a food delivery startup.",
      "Developing a customer-facing application for restaurant discovery, ordering, and real-time order tracking.",
      "Building a restaurant partner app for menu management, order handling, and operational workflows.",
      "Contributing to a delivery partner app for order assignment, navigation, and delivery updates.",
      "Involved in end-to-end product development, backend logic, API integration, and feature planning.",
    ],
  },

  {
    id: 2,
    role: "2nd Prize Winner – TCE ACE Hackathon",
    company: "Tata Consulting Engineers (National Level)",
    duration: "2025",
    points: [
      "Selected among the Top 10 teams across India to compete in the Grand Finale.",
      "Built a GenAI-powered platform to automate end-to-end Single Line Diagram (SLD) design.",
      "Automated load list extraction, standardization, optimization, and design modification workflows.",
      "Developed an interactive Streamlit dashboard and generated SLD diagrams using Graphviz.",
      "Recognized for applying Generative AI to real-world electrical engineering workflows.",
    ],
  },

  {
    id: 3,
    role: "Round 2 Qualifier – Google Gen AI Hackathon",
    company: "Google (National Level)",
    duration: "2025",
    points: [
      "Qualified for Round 2 with MILO, a GenAI-powered youth mental wellness platform.",
      "Built an AI chatbot companion to support daily emotional check-ins and conversations.",
      "Designed Pokémon-style gamification where a character grows with positive user engagement.",
      "Implemented journaling, mood tracking, and AI-driven wellness assessments.",
      "Added safe, anonymous peer interaction features with moderation (Squad Mode).",
    ],
  },

  {
    id: 4,
    role: "Bachelor of Engineering – Electronics & Telecommunication",
    company: "R.V. College of Engineering, Bengaluru",
    duration: "2022 – 2026",
    points: [
      "Undergraduate engineering student with strong focus on software development and GenAI-based systems.",
      "Actively participated in national-level hackathons and product-focused competitions.",
      "Applied engineering fundamentals to real-world startup and AI-driven projects.",
    ],
  },
];


// =======================
// REVIEWS (OPTIONAL)
// =======================

export const reviews = [];
