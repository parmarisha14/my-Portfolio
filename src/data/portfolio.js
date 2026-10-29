
/**
 * Portfolio Data
 * Name: Parmar Isha Miteshkumar
 * Education: BCA Completed | MCA First Year
 */

export const profile = {
  name: "Parmar Isha Miteshkumar",
  shortName: "Isha Parmar",
  firstName: "Isha",
  role: "Aspiring Full Stack Developer",

  email: "parmarisha744@gmail.com",
  phone: "+91 99093 15676",
  location: "Navsari, Gujarat",

  github: "https://github.com/parmarisha14",
  linkedin: null,
  instagram: null,

  openToWork: true,

  languages: ["English", "Gujarati", "Hindi"],

  intro:
    "BCA Graduate | MCA First Year Student | Aspiring Full Stack Developer. Passionate about building modern, responsive, and user-friendly web applications.",

  about: `Hello! I'm Isha Parmar, a passionate and enthusiastic computer applications student with a strong interest in web development and software technologies.

I have successfully completed my Bachelor of Computer Applications (BCA) and am currently pursuing my Master of Computer Applications (MCA – First Year).

I enjoy designing and developing responsive, user-friendly, and attractive websites. Through my academic studies and practical projects, I have gained knowledge of HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Java, MySQL, MongoDB, and other programming technologies.

I am always eager to learn new technologies, improve my programming skills, and explore creative solutions to real-world problems.

My goal is to become a skilled Full Stack Web Developer and build innovative applications that provide meaningful user experiences.`,
};

// ================= SKILLS =================

export const skillGroups = [
  {
    label: "Frontend",
    icon: "layers",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "JavaScript", level: 82 },
      { name: "jQuery", level: 75 },
      { name: "React.js", level: 78 },
    ],
  },
  {
    label: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 74 },
      { name: "Express.js", level: 72 },
      { name: "PHP", level: 65 },
    ],
  },
  {
    label: "Database",
    icon: "database",
    skills: [
      { name: "MySQL", level: 70 },
      { name: "MongoDB", level: 68 },
    ],
  },
  {
    label: "Programming",
    icon: "terminal",
    skills: [
      { name: "C", level: 78 },
      { name: "C++", level: 76 },
      { name: "Java", level: 75 },
      { name: "DSA", level: 70 },
    ],
  },
];

export const marqueeSkills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "jQuery",
  "React.js",
  "Node.js",
  "Express.js",
  "PHP",
  "MySQL",
  "MongoDB",
  "Java",
  "C",
  "C++",
  "DSA",
];

// ================= EDUCATION =================

export const education = [
  {
    title: "Master of Computer Applications (MCA)",
    institute:
      "Shrimad Rajchandra Institute of Management and Computer Application, Uka Tarsadia University",
    period: "First Year – Pursuing",
    detail:
      "Currently pursuing MCA and developing advanced knowledge in software development, web technologies, databases, and application development.",
    current: true,
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    institute:
      "Naran Lala College of Professional & Applied Sciences, Navsari",
    period: "Completed",
    detail: "CGPA: 7.36",
    current: false,
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institute:
      "Sanskar Bharti – Gujarat Secondary and Higher Secondary Education Board",
    period: "Completed",
    current: false,
  },
  {
    title: "Secondary School Certificate (SSC)",
    institute:
      "Sanskar Bharti – Gujarat Secondary and Higher Secondary Education Board",
    period: "Completed",
    current: false,
  },
];

// ================= FEATURED PROJECTS =================

export const resumeProjects = [
  {
    title: "SolutionMp4",
    stack: ["HTML", "CSS"],
    description:
      "A responsive website focused on a clean layout and user-friendly design, with structured sections and modern styling for better visual presentation.",
    featured: true,
  },
  {
    title: "CROMA — Clone Project",
    stack: ["HTML", "CSS", "Bootstrap"],
    description:
      "A responsive Croma e-commerce website clone developed using HTML, CSS, and Bootstrap. Features a modern layout, product sections, and mobile-friendly design.",
    liveUrl: "https://croma-project-green.vercel.app",
    repoUrl: "https://github.com/parmarisha14/Croma-project",
    featured: true,
  },
  {
    title: "Calculator",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    description:
      "An interactive calculator application with a clean interface and functionality for basic mathematical operations.",
    featured: true,
  },
  {
    title: "Library Management System",
    stack: ["HTML", "CSS", "Bootstrap", "React.js"],
    description:
      "A React-based library management application with a responsive, component-based interface and basic CRUD functionality.",
    featured: true,
  },
];

// ================= GITHUB PROJECTS =================

export const githubProjects = [
  {
    title: "Book My Show — Clone",
    stack: ["Node.js", "EJS", "Express"],
    description:
      "A movie booking application developed using Node.js, Express.js, and EJS templates.",
    liveUrl: "https://book-my-show-three-khaki.vercel.app",
    repoUrl: "https://github.com/parmarisha14/book-my-show",
  },
  {
    title: "Admin Panel",
    stack: ["Node.js", "JavaScript", "CRUD"],
    description:
      "An admin dashboard with CRUD operations and an interface for managing application data.",
    liveUrl:
      "https://make-admin-panel-on-requiremnt.onrender.com",
    repoUrl:
      "https://github.com/parmarisha14/MAKE-ADMIN-PANEL-ON-REQUIREMNT",
  },
  {
    title: "Passport Blog Project",
    stack: ["Node.js", "Passport.js", "Express"],
    description:
      "A blogging platform featuring user authentication, protected routes, and login functionality.",
    liveUrl: "https://passport-blog-project.onrender.com",
    repoUrl:
      "https://github.com/parmarisha14/passport-blog-project",
  },
  {
    title: "Firebase Auth & Storage",
    stack: ["JavaScript", "Firebase"],
    description:
      "A Firebase-based project implementing user authentication and cloud storage functionality.",
    liveUrl: "https://project-firebase-auth.vercel.app",
    repoUrl:
      "https://github.com/parmarisha14/project-Firebase--Auth",
  },
  {
    title: "Properties — Buy & Sell",
    stack: ["JavaScript", "Frontend"],
    description:
      "A real estate listing website designed for browsing properties available for buying and selling.",
    liveUrl: "https://properties-buy-sell.vercel.app",
    repoUrl:
      "https://github.com/parmarisha14/properties-buy-sell",
  },
  {
    title: "OLX — CSS Clone",
    stack: ["HTML", "CSS"],
    description:
      "A responsive OLX-inspired listing page developed using HTML and CSS to practice modern layouts.",
    liveUrl: "https://olx-css.vercel.app",
    repoUrl: "https://github.com/parmarisha14/olx-css",
  },
  {
    title: "Weather & Corona API Dashboards",
    stack: ["HTML", "JavaScript", "REST API"],
    description:
      "API-based dashboards demonstrating asynchronous data fetching and dynamic data presentation.",
    liveUrl: "https://corona-api-theta.vercel.app",
    repoUrl: "https://github.com/parmarisha14/corona-API",
  },
  {
    title: "Task Management System",
    stack: ["JavaScript", "Frontend"],
    description:
      "An interactive task management application designed to organize and manage daily tasks.",
    liveUrl:
      "https://project-6-localbox-miner.vercel.app",
    repoUrl:
      "https://github.com/parmarisha14/project-task-management-system",
  },
];

// ================= GITHUB STATS =================

export const githubStats = {
  username: "parmarisha14",
  publicRepos: 65,
  url: "https://github.com/parmarisha14",
};

// ================= NAVIGATION =================

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "My Portfolio", href: "#myportfolio" },
  { label: "Contact", href: "#contact" },
];
