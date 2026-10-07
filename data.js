const DATA = {
about: "Backend & AI Engineer building production systems, data pipelines at scale, and cross-platform apps — working across Azure, AWS, and distributed architectures with a focus on reliability and real-world impact.",

chips: ["Java", "Python", "Spring Boot", "FastAPI", "React", "Flutter", "PostgreSQL", "Elastic Search", "Docker", "Azure", "AWS"],

experience: [
  {
    role: "Backend & AI Engineer",
    company: "AI Ordinate",
    period: "Dec 2025 – Present",
    subPeriod: "Intern (Dec 2025 – Jun 2026) · Full-Time (Jun 2026 – Present)",
    tech: ["ADLS", "Elastic Search", "Python", "Docker", "React", "FastAPI", "ElevenLabs"],
    points: [
      "Led development of a production-ready full-stack application for a Tier-1 pharmaceutical client, integrating LLMs, image generation, and text-to-speech capabilities.",
      "Served as primary engineer for production deployment of a regression-based ML model for a fast-growing maritime startup, focusing on model reliability and evaluation metrics.",
      "Built fault-tolerant, resumable document-processing pipelines transforming 14M+ unstructured documents into searchable digital assets using self-hosted Elastic Search.",
      "Worked across Azure and AWS environments to maintain and deploy SaaS applications."
    ]
  }
],

projects: [
  {
    name: "Snow Runtime",
    blurb: "Developer platform integrating VS Code with Snowflake for data engineering workflows.",
    details: "• Python runtime powering both CLI and editor integrations with secure Snowflake connection management.\n• Built on Clean Architecture and SOLID principles — extensible for authentication, history, and future developer tooling.",
    tech: ["Python", "Snowflake", "CLI"],
    url: ""
  },
  {
    name: "Intelli-Relief",
    blurb: "Disaster monitoring platform — real-time signals, event-driven architecture, AI-powered insights.",
    details: "• Full-stack app integrating OpenWeather and seismic APIs for real-time disaster tracking and response workflows.\n• Event-driven architecture with containerized Docker + Nginx deployment and Sentence Transformers for semantic audit trails.",
    tech: ["React", "FastAPI", "Docker", "Nginx", "Sentence Transformers"],
    url: ""
  },
  {
    name: "Maala",
    blurb: "Meditation app — 100+ installs, consistent daily users, live on Play Store.",
    details: "• Flutter UI with native Android Method Channels and scalable state management for real-time updates.\n• Shipped to production with modular component architecture; monitored stability with 20+ beta testers.",
    tech: ["Flutter", "Dart", "Android Native"],
    url: "https://github.com/ekansh0unofficial/Maala.git"
  }
],

otherProjects: [
  {
    name: "Legal Doc Pipeline",
    blurb: "Processing pipeline for legal documents — multi-strategy chunking, NLP cleaning, and LLM rhetorical role classification for RAG systems.",
    tech: ["Python", "FastAPI", "Embeddings", "NLP"],
    url: "https://github.com/ekansh0unofficial/semantic_chunker"
  },
  {
    name: "Meeting Assistant",
    blurb: "Voice bot with LangChain + TTS — accepts PDF or audio context and answers queries conversationally with semantic search.",
    tech: ["Python", "LangChain", "FastAPI", "Docker"],
    url: "https://github.com/ekansh0unofficial/meeting-assistent"
  },
  {
    name: "SIH Backend",
    blurb: "REST API backend built for Smart India Hackathon — TypeScript/Node.js with web scrapers and structured routing.",
    tech: ["TypeScript", "Node.js", "Express"],
    url: "https://github.com/ekansh0unofficial/SIH-Backend"
  },
  {
    name: "Med API",
    blurb: "Symptom-based disease prediction API serving diet, medication, and precaution recommendations from structured medical datasets.",
    tech: ["Python", "FastAPI", "ML"],
    url: "https://github.com/ekansh0unofficial/med-api"
  }
],

achievements: [
  {title: "LeetCode Knight", meta: "700+ solved · 1000+ submissions · Rating 1900+ · Top 5%"},
  {title: "CodeChef 4★", meta: "Rating 1800+ · Global rank ~3370"},
  {title: "Apache Checkstyle", meta: "Open source contributor — production CI tool"},
  {title: "TARS Society", meta: "PR & Marketing Lead — outreach & org visibility"}
],

education: [
  {title: "IIIT Bhubaneswar", meta: "B.Tech IT · Aug 2022 – Jun 2026"},
  {title: "St. Fateh Singh Convent", meta: "12th CBSE · Apr 2020 – Mar 2022"},
  {title: "St. Xavier High School", meta: "10th CBSE · Apr 2008 – Mar 2020"}
],

coreSkills: {
  languages:  ["Java", "Python", "SQL", "JavaScript", "C/C++"],
  frameworks: ["Spring Boot", "FastAPI", "React", "Flutter", "Firebase"],
  databases:  ["PostgreSQL", "MongoDB", "Elastic Search"],
  cloud:      ["Azure Blob", "Azure AI Search", "AWS S3", "AWS EC2", "CloudFront", "Docker"],
  tools:      ["Git", "Maven", "Gradle", "Confluence"]
},

certs: [
  {title: "Java · GeeksforGeeks", meta: "OOP · Collections · Exception Handling · DSA", url: "https://drive.google.com/file/d/1z7d1uKSbUV213u_hvm7Jz4UH-Af7iLJJ/view?usp=drive_link"},
  {title: "Software Architecture · CodeSignal", meta: "SOLID · Clean Architecture · System Design · Cloud Fundamentals", url: "https://drive.google.com/file/d/1KK5jGBcIy1LA-05xcivHf_PVt7GSB7KI/view?usp=drive_link"}
],

contact: [
  {title: "Email", meta: "ekanshmittal04@gmail.com"},
  {title: "Phone", meta: "+91 94173 28942"},
  {links: [
    {name: "LinkedIn", url: "https://www.linkedin.com/in/ekansh-mittal-ba87a2247/"},
    {name: "GitHub",   url: "https://github.com/ekansh0unofficial"},
    {name: "LeetCode", url: "https://leetcode.com/u/b422026/"},
    {name: "CodeChef", url: "https://www.codechef.com/users/noted_awe_75"},
    {name: "Medium",   url: "https://medium.com/@ekanshmittal04"},
    {name: "X / Twitter", url: "https://x.com/mitt1126"}
  ]}
]
};
