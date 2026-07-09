// ============================================================
// portfolioData.js — Centralized configuration for Priyanshu Kumar's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Priyanshu Kumar",
  firstName: "Priyanshu",
  brandName: "Priyanshu",
  title: "Full Stack Developer & Cloud Enthusiast",
  location: "Jalandhar, Punjab, India",
  phone: "+91-7717255246",
  emails: {
    primary: "priyanshu.kumar.dev13@gmail.com",
  },
  summary:
    "Computer Science undergraduate passionate about Cloud Computing, Artificial Intelligence, and Software Development. I enjoy building scalable web applications, deploying cloud-native solutions, and integrating AI into real-world products. My goal is to transform innovative ideas into impactful software that solves practical problems.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/priyanshukumar13",
  linkedin: "https://www.linkedin.com/in/priyanshu-kumar-gurjar/",
  instagram: "#", // Leave as placeholder since it's not listed on resume
};

export const heroContent = {
  greeting: "Hi, I'm Priyanshu Kumar",
  titleHighlight: "Cloud Computing | AI | Software Engineer",
  subtitle:
    "I build smart, serverless applications and responsive user interfaces using React, Python (FastAPI), NodeJS, and Cloud Technologies.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:priyanshu.kumar.dev13@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Priyanshu,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Priyanshu Kumar</span>, an aspiring <strong>Software Engineer</strong> and <strong>Cloud Enthusiast</strong> based in Punjab, India. I am passionate about Cloud Computing, Artificial Intelligence, and building scalable software solutions that solve real-world problems. Currently pursuing a B.Tech in Computer Science and Engineering at Lovely Professional University.`,
  techStack: ["AWS", "Python", "AI/ML"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "C", level: 80 },
        { name: "JavaScript", level: 65 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "ReactJS", level: 88 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "NodeJS", level: 82 }
      ]
    },
    {
      title: "Backend & Cloud",
      skills: [
        { name: "FastAPI", level: 80 },
        { name: "AWS Services", level: 80 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Git & GitHub", level: 88 },
        { name: "Figma", level: 75 },
        { name: "Cloudinary", level: 80 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "OOP", level: 90 },
        { name: "DSA", level: 75 },
        { name: "DBMS", level: 82 },
        { name: "Operating Systems", level: 85 },
        { name: "Computer Networks", level: 88 }
      ]
    }
  ]
};

// Adapted Achievements & Hackathons Data (Replaces Content Creation)
export const contentCreation = {
  badge: "Innovation & Code",
  heading: "Hackathons & Technical Achievements",
  description: "Beyond academic learning, I compete in developer challenges, build AI prototypes, and scale applications under time constraints.",
  categories: [
    {
      title: "Top 10 in AWS Hackathon",
      description: "Secured a Top 10 position out of 1,000+ participants in the AWS Hackathon, demonstrating speed and deployment capability.",
      stats: "Top 10",
      icon: "🏆"
    },
    {
      title: "Adobe India Hackathon",
      description: "Participated in Round 1 - Online MCQ Assessment + Coding with team CodeSpirit, solving complex algorithmic challenges.",
      stats: "Competitor",
      icon: "🚀"
    },
    {
      title: "AWS Course Badge",
      description: "Earned the official AWS Academy Cloud Foundations Course Completion Badge after intensive labs and technical coursework.",
      stats: "AWS Graduate",
      icon: "☁️"
    },
    {
      title: "Build a Thon Hackathon",
      description: "Collaborated on rapid prototype coding and backend systems integration during the Board Infinity LPU Hackathon.",
      stats: "Competitor",
      icon: "💻"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "Adobe India Hackathon (Team CodeSpirit)",
    description: "Collaborated on algorithmic and programming challenges, contributing to code optimization and problem-solving structures.",
    role: "Team Member & Developer",
    badge: "Hackathon"
  },
  {
    title: "Walmart Sparkathon Converge",
    description: "Participated in Walmart Global Tech's flagship open innovation challenge, working on software paradigms for modern retail.",
    role: "Team Competitor",
    badge: "Hackathon"
  },
  {
    title: "Build a Thon Hackathon (Board Infinity)",
    description: "Competed in the flagship hackathon organized by Board Infinity at LPU, building web solutions within tight deadlines.",
    role: "Developer",
    badge: "Hackathon"
  },
  {
    title: "Blood Donation Awareness Camp (I Dream Too Trust)",
    description: "Volunteered to spread donation awareness and managed event logistics to coordinate successful blood donation camps.",
    role: "Volunteer Coordinator",
    badge: "Volunteering"
  }
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Placify Technologies",
    role: "Python Developer Intern",
    duration: "June 2024 - September 2024",
    skills: ["Core Python Concepts", "File Handling and Operations", "Data Processing", "Code Debugging"],
    tech: ["Python", "Git", "VS Code"]
  },
  {
    organization: "Cipher School",
    role: "C++ & OOPs Training Trainee",
    duration: "July 2025 (1 Month)",
    skills: ["C++ Programming", "Object-Oriented Concepts (OOPs)", "Polymorphism & Encapsulation", "Logic Optimization"],
    tech: ["C++", "OOPs Concepts"]
  },
  {
    organization: "I Dream Too Trust",
    role: "Volunteering Coordinator",
    duration: "June 2024 (1 Month)",
    skills: ["Team Management", "Event Logistics Coordination", "Public Communication", "Social Volunteering"],
    tech: ["Management", "Coordination", "Leadership"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Critical Thinking", icon: "🧠", desc: "Analyzing problems from logical standpoints to devise robust, optimized solutions." },
  { name: "Team Collaboration", icon: "🤝", desc: "Coordinating across teams and coding in sync during fast-paced developer events." },
  { name: "Adaptability & Agility", icon: "⚡", desc: "Quick to master new frameworks, APIs, and cloud services under tight constraints." },
  { name: "Public Speaking", icon: "🎤", desc: "Presenting solutions articulately and explaining complex technical setups clearly." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down intricate system requirements into clean, modular components." },
  { name: "Time Management", icon: "⏰", desc: "Balancing university coursework, internships, and building personal projects." }
];

export const projects = [
  {
    id: "filegenieai",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "FileGenieAI",
    description:
      "An AI-powered file toolkit platform enabling robust file processing through simple command-based natural language interactions. Integrated an AI assistant for command execution, enabling seamless conversions and tasks. Achieved up to 80% faster file operations through optimized processing workflows.",
    techTags: [
      "React (Vite)",
      "JavaScript",
      "Python (FastAPI)",
      "Cloudinary",
      "MongoDB",
    ],
    links: {
      github: "https://github.com/PriyanshuKumar/FileGenieAI",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "lostit",
    number: "02",
    badge: "🔥 AI & Serverless",
    title: "LOSTit",
    description:
      "An AI-powered system designed to digitize and automate lost & found management for campuses and public spaces. Built a serverless system using AWS and Google Gemini API for item recognition, chatbot support, and verification, improving match accuracy by 85%.",
    techTags: ["React (Vite)", "JavaScript", "AWS", "Python", "Google Gemini API"],
    links: {
      github: "https://github.com/PriyanshuKumar/LOSTit",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "billmate",
    number: "03",
    badge: "📅 Web Utility",
    title: "BillMate",
    description:
      "A responsive bill reminder and payment tracking platform designed to help users track bills and receive alerts to avoid missed deadlines. Features include due-date alerts, automated reminders, and complete database integrations.",
    techTags: ["HTML", "CSS", "JavaScript", "MongoDB"],
    links: {
      github: "https://github.com/PriyanshuKumar/BillMate",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Gemini Certified Student",
      issuer: "Google for Education",
      icon: "💎",
    },
    {
      name: "Oracle Cloud Infrastructure AI Associate",
      issuer: "Oracle University",
      icon: "☁️",
    },
    {
      name: "Oracle Cloud Infrastructure Foundations",
      issuer: "Oracle University",
      icon: "☁️",
    },
    {
      name: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      icon: "🏅",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      icon: "💻",
    },
    {
      name: "Successful Career Development",
      issuer: "Kennesaw State University",
      icon: "💼",
    },
  ],
  viewAllUrl: "/Certificates.pdf",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Lovely Professional University",
  cgpa: "6.26",
  graduation: "2027",
  twelfth: "Army Public School Jalandhar — 72.6%",
  tenth: "Army Public School Jalandhar — 92.6%",
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "React · Python · Cloud",
    "Serverless & Intelligent Apps",
  ],
  credential: "B.Tech CSE · Lovely Professional University",
  copyright: `© ${new Date().getFullYear()} Priyanshu Kumar | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
