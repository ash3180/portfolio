// ============================================================
// Portfolio Configuration — Edit this file to customize your portfolio
// ============================================================

export const siteConfig = {
  title: "Ashish | AI Engineer",
  description:
    "Portfolio of Ashish — AI Engineer specializing in Machine Learning, Deep Learning, Generative AI, and scalable software systems.",
  url: "https://ashish.dev",
  accentColor: "emerald", // "blue" | "emerald"
};

export const personalInfo = {
  name: "Ashish",
  roles: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Software Developer",
  ],
  tagline:
    "Building intelligent systems that turn data into impact — from ML pipelines to production-ready AI products.",
  email: "prajapatiashish3180.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/ash3180",
    linkedin: "https://www.linkedin.com/in/ashish-prajapati-014v/",
    leetcode: "https://leetcode.com/u/Ash0125/",
  },
};

export const aboutData = {
  paragraphs: [
    "I'm an AI Engineer passionate about building end-to-end machine learning systems that solve real-world problems. My expertise spans Machine Learning, Deep Learning, Generative AI, Large Language Models, and scalable software engineering.",
    "I enjoy the full spectrum — from researching novel architectures and fine-tuning models to deploying robust APIs and designing clean, maintainable codebases. I thrive at the intersection of AI research and software engineering, where ideas meet production.",
  ],
  highlights: [
    { label: "Focus", value: "AI / ML / GenAI" },
    { label: "Education", value: "M.Tech in AI" },
    { label: "Looking for", value: "Impactful roles" },
  ],
};

export const skillsData = [
  {
    category: "Programming",
    skills: ["Python", "Java", "C","Javascript","Typescript"],
  },
  {
    category: "AI / ML",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "Generative AI",
    skills: [
      "LangChain",
      "LlamaIndex",
      "Ollama",
      "RAG",
      "Vector Databases",
    ],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Flask", "REST APIs","Spring Boot","Express.js","Node.js"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MySQL","Mongodb"],
  },
  {
    category: "Tools",
    skills: ["Docker", "Git", "Linux", "VS Code"],
  },
  {
    category: "Cloud",
    skills: ["AWS"],
  },
];

export const projectsData = [
  {
    title: "AI Money Mentor",
    description:
      "An AI-powered personal finance assistant that analyzes spending patterns, provides budgeting advice, and generates investment insights using LLMs and RAG pipelines.",
    image: "/projects/ai-money-mentor.webp",
    techStack: ["Python", "Streamlit", "Gen-AI"],
    github: "https://github.com/ash3180/mentqor-ps9-",
    liveDemo: "https://ai-money-mentor.vercel.app",
    achievements: [
      "Achieved 92% accuracy in expense categorization",
      "Implemented a portfolio analytics engine with asset allocation modeling, diversification scoring",
    ],
  },
  // {
  //   title: "Adaptive Traffic Signal System",
  //   description:
  //     "Computer vision system that dynamically adjusts traffic signal timings based on real-time vehicle density, reducing average wait times by 35%.",
  //   image: "/projects/traffic-signal.webp",
  //   techStack: ["Python", "OpenCV", "TensorFlow", "YOLOv5", "Flask"],
  //   github: "https://github.com/ashish/adaptive-traffic",
  //   liveDemo: null,
  //   achievements: [
  //     "Reduced average wait time by 35% in simulation",
  //     "Real-time detection at 30 FPS on edge devices",
  //   ],
  // },
  // {
  //   title: "Fake News Detection",
  //   description:
  //     "NLP-based classification system that identifies misinformation in news articles using transformer models and linguistic feature analysis.",
  //   image: "/projects/fake-news.webp",
  //   techStack: ["Python", "PyTorch", "Transformers", "Scikit-learn", "Flask"],
  //   github: "https://github.com/ashish/fake-news-detection",
  //   liveDemo: null,
  //   achievements: [
  //     "97.3% F1-score on benchmark dataset",
  //     "Ensemble of BERT + traditional ML features",
  //   ],
  // },
  {
    title: "Real Estate Price Predictor",
    description:
      "Machine learning pipeline that predicts property prices using gradient boosting and feature engineering on geographical and market data.",
    image: "/projects/real-estate.webp",
    techStack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    github: "https://github.com/ash3180/real_estate",
    liveDemo: "https://realestate-predictor.streamlit.app",
    achievements: [
      "R² score of 0.94 on test set",
      "Interactive Streamlit dashboard for live predictions",
    ],
  }
  // {
  //   title: "SMS Spam Classifier",
  //   description:
  //     "End-to-end text classification system for detecting spam messages, deployed as a lightweight REST API with real-time inference.",
  //   image: "/projects/sms-spam.webp",
  //   techStack: ["Python", "Scikit-learn", "NLTK", "FastAPI", "Docker"],
  //   github: "https://github.com/ashish/sms-spam-classifier",
  //   liveDemo: null,
  //   achievements: [
  //     "98.1% accuracy with Naive Bayes + TF-IDF",
  //     "Dockerized deployment with <50ms latency",
  //   ],
  // },
];

// export const experienceData = [
//   {
//     role: "Machine Learning Intern",
//     company: "AI Research Lab",
//     location: "Remote",
//     period: "Jun 2025 – Aug 2025",
//     description: [
//       "Developed and fine-tuned transformer-based models for document understanding tasks.",
//       "Built end-to-end data pipelines processing 100K+ documents daily.",
//       "Collaborated with senior researchers on a paper submission to a top-tier conference.",
//     ],
//     techStack: ["Python", "PyTorch", "Transformers", "AWS"],
//   },
//   {
//     role: "Software Engineering Intern",
//     company: "Tech Startup",
//     location: "Bangalore, India",
//     period: "Jan 2025 – Apr 2025",
//     description: [
//       "Designed and implemented RESTful APIs serving 5K+ daily active users.",
//       "Optimized database queries resulting in 40% faster response times.",
//       "Integrated third-party ML services for intelligent content recommendations.",
//     ],
//     techStack: ["Python", "FastAPI", "PostgreSQL", "Docker"],
//   },
// ];

export const educationData = [
  {
    degree: "M.Tech in Computer Science — Artificial Intelligence",
    institution: "National Institute of Technology",
    period: "2025 – 2027",
    description:
      "Specialization in AI/ML with research focus on Generative AI and NLP. Coursework includes Deep Learning, Computer Vision, NLP, and Reinforcement Learning.",
    gpa: "8.55 / 10",
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "RGPV,Bhopal",
    period: "2021 – 2025",
    description:
      "Strong foundation in DSA, OOP, DBMS, OS, and Computer Networks. Active participation in competitive programming and hackathons.",
    gpa: "7.4 / 10",
  },
];

export const achievementsData = [
  {
    title: "LeetCode",
    description: "100+ problems solved.",
    icon: "leetcode",
  },
  {
    title: "GitHub Contributions",
    description:
      "highly active",
    icon: "github",
  },
  {
    title: "Research Publication",
    description:
      "paper under Review",
    icon: "research",
  },
  {
    title: "Certifications",
    description:
      "Economics Times Gen-AI Hackathon",
    icon: "certificate",
  },
  {
    title: "GATE Qualified",
    description:
      "Qualified GATE CS with a competitive percentile, securing admission to a top NIT.",
    icon: "gate",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
