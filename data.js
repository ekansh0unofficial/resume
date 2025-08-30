const DATA = {
about: "Innovative developer with expertise in cross-platform app development, scalable backend services, and AI-driven solutions. Proficient in Flutter, Python, and Java, with hands-on experience building ML-powered applications and real-time event management tools. Skilled in system design, API development, and strong foundations in DSA, OS, and networking. Passionate about delivering impactful, user-focused products.",

chips: ["Flutter", "Python", "Java", "FastAPI", "Flask", "Firebase", "Node.js", "Android Native", "LangChain", "ML", "TensorFlow"],

// Main Resume Projects (on LEFT)
projects: [
  {
    name:"MediMatch",
    blurb:"Flask/FastAPI backend deployed on Render. Detects common illnesses and suggests medicines.",
    details:"• Developed a cross-platform mobile app that detects common illnesses and provides instant medicine suggestions.\n• Incorporated an ML-based matching algorithm and exposed functionality via Flask API endpoints.\n• Engineered a data cleaning module using Sentence Transformers to transform raw user input into structured keywords, boosting ML model accuracy.\n• Deployed the backend on Render.com for reliable public access.",
    tech:["Python","Flask","FastAPI","ML"],
    url:"https://github.com/ekansh0unofficial/med-api.git"
  },
  {
    name:"Advaita Auth",
    blurb:"QR-based registration & validation system for college fest.",
    details:"• Built a QR-based registration and validation app for event access that utilized Flutter’s camera package to scan QR codes.\n• Integrated a FastAPI backend for pass registration and validation.\n• Implemented user-role categorization for Authenticator vs Validator access.\n• Scaled to handle 2,000–3,000 registrations during Advaita Fest for real-time access control.",
    tech:["Flutter","FastAPI","Android"],
    url:"https://github.com/ekansh0unofficial/ticket-validation.git"
  },
  {
    name:"Echo Mind",
    blurb:"Voice Assistant with LangChain & FastAPI backend.",
    details:"• Developed a Q&A Voice Assistant that accepts audio/text-based context input.\n• Implemented speech recognition, vector similarity search, and agentic processing with text-to-speech output.\n• Deployed the backend container with Docker on Microsoft Azure.",
    tech:["Python","LangChain","FastAPI","Docker","Azure"],
    url:"" // add GitHub if available
  },
  {
    name:"Maala",
    blurb:"Mindfulness & meditation mobile app.",
    details:"• Created a lifestyle and meditation app to encourage mindfulness.\n• Designed a flexible Flutter UI with native Android integration using Method Channels.\n• Collected and applied feedback from 20+ closed beta testers to improve usability.\n• Deployed to production, achieving 20+ peak users and consistent daily store visits.\n• Published a Medium article sharing experience with Google Play Console usage.",
    tech:["Flutter","Android"],
    url:"https://github.com/ekansh0unofficial/Maala.git"
  }
],

// Extra Projects (not in resume, on RIGHT)
extraProjects: [
  {
    name:"Moodify",
    blurb:"Mood detection with FER model integrated into Flutter app.",
    details:"• Integrated TensorFlow’s FER (Facial Emotion Recognition) pre-trained model.\n• Real-time emotion classification from camera feed.\n• Designed for interactive user experience.",
    tech:["Flutter","TensorFlow"],
    url:"https://github.com/ekansh0unofficial/moodify.git"
  },
  {
    name:"QuizGame",
    blurb:"Quiz Game App (TestLine).",
    details:"• Flutter based interactive quiz app.\n• Features category selection, score tracking, and timer.",
    tech:["Flutter","Rest APIs"],
    url:"https://github.com/ekansh0unofficial/QuizGame-TestLine.git"
  },
  {
    name:"Basic Kotlin Projects",
    blurb:"Foundational Kotlin/Android mini-projects.",
    details:"• Hands-on practice apps covering layouts, forms, and navigation.\n• Built multiple learning-oriented Android mini projects.",
    tech:["Kotlin","Android"],
    url:"https://github.com/ekansh0unofficial/Android-Projects.git"
  }
],

achievements:[
  {title:"LeetCode", meta:"Top 10% • 575+ problems • Rating 1790"},
  {title:"CodeChef", meta:"4-star • Rating 1900+ • Global rank ~3370"},
  {title:"Leadership", meta:"PR & Marketing Lead — TARS Society"},
  {title:"Placement Coordinator", meta:"Organized 10+ recruitment drives for 2025 batch"}
],

education:[
  {title:"IIIT Bhubaneswar — B.Tech, IT", meta:"2022–2026 • CGPA (6th Sem): 7.92/10"},
  {title:"St. Fateh Singh Convent School", meta:"12th (CBSE) — 85% • JEE Mains AIR 36,700"},
  {title:"St. Xavier High School, Rampura Phul", meta:"10th (CBSE) — 89%"}
],

coreSkills:{
  languages:["Dart","Java","C++","Python","JavaScript","Kotlin"],
  frameworks:["Flutter","FastAPI","Flask","Node.js","Spring Framework","JDBC"],
  tools:["Firebase","Git","GitHub","Render","Android Studio","VS Code","Maven","Gradle"],
  concepts:["OOP","DSA","REST APIs","System Design","ML Integrations","Design Patterns","Software Engineering Principles"]
},

softSkills:[
  "Problem Solving",
  "Team Collaboration",
  "Leadership & PR",
  "Adaptability",
  "Communication"
],

certs:[
  {title:"Java — GeeksforGeeks", meta:"OOP, Collections, Exceptions, DSA"},
  {title:"Software Architecture — CodeSignal", meta:"SOLID, Clean Architecture, System Design, Cloud intro"}
],

contact:[
  {title:"Email", meta:"ekanshmittal04@gmail.com"},
  {title:"Phone", meta:"+91 94173 28942"},
  {links:[
    {name:"LinkedIn", url:"https://www.linkedin.com/in/ekansh-mittal-ba87a2247/"},
    {name:"GitHub", url:"https://github.com/ekansh0unofficial"},
    {name:"LeetCode", url:"https://leetcode.com/u/b422026/"},
    {name:"CodeChef", url:"https://www.codechef.com/users/noted_awe_75"},
    {name:"Medium", url:"https://medium.com/@ekanshmittal04"},
    {name:"X / Twitter", url:"https://x.com/mitt1126"}
  ]}
]
};
