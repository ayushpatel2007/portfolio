export const personalInfo = {
  name: "AYUSH PATEL",
  role: "Automation & Robotics Engineering Student",
  location: "Vadodara, Gujarat, India",
  institution: "Parul University",
  headline: "Building practical systems across robotics, AI, embedded automation, and full-stack software.",
  bio: "I’m an Automation & Robotics Engineering student at Parul University focused on building practical systems across robotics, AI, embedded systems, automation, full-stack development and real-time software. I learn fastest by turning real problems into working prototypes.",
  stats: [
    { label: "Engineering Projects", value: "10+", icon: "Cpu" },
    { label: "Hackathon Builds", value: "4", icon: "Trophy" },
    { label: "Events Coordinated", value: "15+", icon: "Calendar" },
    { label: "Hardware & Tech Stack", value: "25+", icon: "Layers" }
  ]
};

export const roomsConfig = [
  {
    id: "about",
    title: "ABOUT ME",
    subtitle: "Engineering Profile & Background",
    doorZ: -18,
    side: "left",
    color: "#00f0ff",
    accentGlow: "rgba(0, 240, 255, 0.4)",
    description: "Explore my background in Automation & Robotics, skills matrix, and technical journey."
  },
  {
    id: "projects",
    title: "PERSONAL PROJECTS",
    subtitle: "Software & Robotics Innovations",
    doorZ: -32,
    side: "right",
    color: "#7000ff",
    accentGlow: "rgba(112, 0, 255, 0.4)",
    description: "Inspect live software systems, real-time push-to-talk apps, and physical robotics builds."
  },
  {
    id: "hackathons",
    title: "HACKATHONS",
    subtitle: "Competitive Builds & Platforms",
    doorZ: -48,
    side: "left",
    color: "#ff0055",
    accentGlow: "rgba(255, 0, 85, 0.4)",
    description: "Deep dive into IDBI Innovate, SIH 2026, Odoo, and IQOO ReSkill hackathon solutions."
  },
  {
    id: "contact",
    title: "CONTACT & RESUME",
    subtitle: "Connect & Terminal Access",
    doorZ: -62,
    side: "right",
    color: "#00ff88",
    accentGlow: "rgba(0, 255, 136, 0.4)",
    description: "Get in touch via direct terminal, inspect social channels, or download my official resume."
  }
];

export const personalProjects = [
  {
    id: "bus-track-system",
    name: "Bus Track System",
    category: "Full-Stack Fleet Management",
    tagline: "Real-time fleet management & bus tracking with Google Sheets data layer",
    description: "A real-time fleet management and bus tracking system built using Python and Flask, utilizing Google Sheets as a low-latency live data storage layer.",
    features: [
      "QR code scanning for rapid commuter boarding",
      "Role-based access control (Driver, Admin, Commuter)",
      "Live fleet and bus movement tracking dashboard",
      "Comprehensive system audit logging and CSV export",
      "Mobile-optimized responsive management UI"
    ],
    technologies: ["Python", "Flask", "Google Sheets API", "HTML5", "Tailwind CSS", "JavaScript", "html5-qrcode"],
    github: "https://github.com/ayushpatel2007/bus-track-system",
    liveDemo: null,
    featured: true,
    status: "Production Ready"
  },
  {
    id: "gitprofile-studio",
    name: "GitProfile Studio",
    category: "Developer Tools",
    tagline: "Automated high-impact GitHub README generator from public profiles",
    description: "A Next.js application that inspects public GitHub usernames, analyzes repository metadata, and generates sleek, customizable Markdown README files.",
    features: [
      "Instant GitHub profile & public repository analysis",
      "Automated primary language detection & stats showcase",
      "Multiple customizable Markdown layout templates",
      "Real-time Markdown editor with live visual preview",
      "One-click copy to clipboard and file download"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "React Markdown", "Framer Motion"],
    github: "https://github.com/ayushpatel2007/gitprofile-studio",
    liveDemo: null,
    featured: true,
    status: "Active Release"
  },
  {
    id: "group-walkie",
    name: "Group Walkie",
    category: "Real-Time Audio & WebRTC",
    tagline: "Browser-based real-time push-to-talk voice communication app",
    description: "A real-time WebRTC and Socket.IO application providing low-latency push-to-talk voice communication across private rooms.",
    features: [
      "Real-time peer-to-peer audio transmission",
      "Private password-protected channels (up to 15 users)",
      "Socket.IO signaling for instant room management",
      "Emergency SOS alert broadcast feature",
      "Live active participant list with audio indicators"
    ],
    technologies: ["Node.js", "Express.js", "Socket.IO", "WebRTC", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/ayushpatel2007/group-walkie",
    liveDemo: null,
    featured: true,
    status: "Live Prototype"
  },
  {
    id: "robotics-systems",
    name: "Robotics & Automation Suite",
    category: "Hardware & Embedded Robotics",
    tagline: "Integrated physical robotics systems, autonomous navigation & industrial automation",
    description: "A showcase of physical robotics prototypes engineered with microcontrollers, computer vision, motor controllers, and sensor arrays.",
    subProjects: [
      {
        name: "AI Autonomous Driving Robot",
        tech: "Raspberry Pi, OpenCV, Python, LiDAR, MPU6050",
        desc: "Autonomous mobile robot utilizing computer vision line tracking and obstacle avoidance algorithms."
      },
      {
        name: "Hand Gesture Controlled Robot Car",
        tech: "Arduino, ESP32, MPU6050 Accelerometer, RF Module",
        desc: "Real-time wireless gesture control using hand orientation telemetry."
      },
      {
        name: "Mapping Robot Car",
        tech: "LiDAR, HC-SR04, ESP32, Python SLAM",
        desc: "2D spatial mapping robot for room contour scanning and telemetry logging."
      },
      {
        name: "Stretch Wrapping Robot",
        tech: "NEMA-17 Stepper, CNC Shield, A4988, Arduino, Industrial Sensors",
        desc: "Automated pallet wrapping mechanism engineered for workshop & industrial packaging safety."
      }
    ],
    features: [
      "Sensor fusion with MPU6050 IMU, LiDAR & HC-SR04 ultrasonic sensors",
      "Computer vision object & lane tracking with OpenCV & Python",
      "High-torque stepper control via NEMA-17, CNC Shields & A4988 drivers",
      "Wireless telemetry and embedded control using Arduino & ESP32"
    ],
    technologies: [
      "Arduino", "ESP32", "Raspberry Pi", "LiDAR", "OpenCV", "GPS",
      "MPU6050", "HC-SR04", "NEMA-17", "CNC Shield", "A4988", "Python",
      "Embedded Systems", "Industrial Automation"
    ],
    github: "https://github.com/ayushpatel2007",
    liveDemo: null,
    featured: true,
    status: "Hardware Verified"
  }
];

export const hackathons = [
  {
    id: "finnexa-ai",
    name: "FinNexa AI",
    hackathon: "IDBI Innovate Hackathon",
    tagline: "AI-powered next-gen banking & financial advisory ecosystem",
    description: "An AI-powered banking platform engineered for IDBI Innovate, enabling automated financial advisory, expense categorizations, and intelligent assistant interactions.",
    features: [
      "AI-driven personal financial advice engine",
      "Automated transaction insight analysis",
      "Supabase vector & auth integration",
      "Responsive financial dashboard UI"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase", "OpenRouter", "Gemini AI"],
    github: "https://github.com/ayushpatel2007/FinNexa-AI",
    status: "Hackathon Submission"
  },
  {
    id: "vitalsync",
    name: "VitalSync",
    hackathon: "SIH 2026 Internal Hackathon",
    tagline: "Real-time health telemetry & vital tracking system",
    description: "A digital health platform designed during the SIH 2026 Internal Hackathon to track, monitor, and alert medical teams regarding critical patient vitals.",
    features: [
      "Real-time vital statistics aggregation",
      "Emergency threshold warning alerts",
      "Role-based healthcare portal",
      "Clean clinical dashboard interface"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Python"],
    github: "https://github.com/ayushpatel2007/VitalSync",
    status: "SIH 2026 Entry"
  },
  {
    id: "globetrotter",
    name: "GlobeTrotter",
    hackathon: "Odoo × LDCE Hackathon",
    team: "Alpha Protocol",
    tagline: "Personalized multi-city travel planning & expense analytics platform",
    description: "Built by Team Alpha Protocol for the Odoo x LDCE Hackathon, GlobeTrotter provides automated multi-city trip itineraries, budget tracking, and social sharing.",
    features: [
      "Supabase user authentication & profile preferences",
      "Multi-city intelligent trip route planning",
      "Day-by-day customizable itinerary planner",
      "Comprehensive budget tracking, expense logs & analytics",
      "Public itinerary sharing and AI travel recommendations"
    ],
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Lucide React"],
    github: "https://github.com/ayushpatel2007/odoo-alpha-protocol",
    status: "Odoo Hackathon Entry"
  },
  {
    id: "eventops-ai",
    name: "EventOps AI",
    hackathon: "IQOO ReSkill Hackathon",
    tagline: "AI-driven campus event operations & emergency management system",
    description: "An operations platform created during the IQOO ReSkill Hackathon to coordinate campus events, track coordinator presence in real time, and manage SOS alerts.",
    features: [
      "Digital coordinator ID cards with dynamic access control",
      "Interactive campus zone mapping with React Leaflet",
      "Core-controlled attendance tracking & audit logs",
      "Realtime control-room analytics dashboard",
      "Instant emergency SOS alert & incident management system"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase PostgreSQL", "Leaflet", "React Leaflet", "Lucide React"],
    github: "https://github.com/ayushpatel2007/EventOps-AI",
    status: "IQOO ReSkill Submission"
  }
];

export const workExperience = [
  {
    role: "Industrial Training Intern",
    company: "Bhathwari Technologies Pvt. Ltd.",
    location: "Ahmedabad, Gujarat",
    period: "05/2026 – 06/2026",
    details: [
      "Hands-on exposure to industrial tools, precision machinery, and workshop automation",
      "Executed technical assembly processes and adhered to industrial safety protocols",
      "Gained real-world engineering insights into manufacturing workflows and machine maintenance"
    ]
  },
  {
    role: "Operations Intern",
    company: "Transport Department, Parul University",
    location: "Vadodara, Gujarat",
    period: "01/2026 – 05/2026",
    details: [
      "Managed large-scale transport records, vehicle registrations, and fleet data in Excel",
      "Coordinated daily logistics and route operations for university transport services",
      "Facilitated clear communication between administrative staff, drivers, and students"
    ]
  },
  {
    role: "Event Coordinator",
    company: "Parul University",
    location: "Vadodara, Gujarat",
    period: "03/2025 – Present",
    details: [
      "Successfully led and executed 15+ university technical events, workshops, and hackathons",
      "Managed student coordinator teams, venue logistics, participant registration, and ground operations",
      "Fostered strong team leadership and rapid problem-solving under tight event timelines"
    ]
  }
];

export const education = [
  {
    degree: "Diploma in Automation and Robotics",
    institution: "Parul University",
    location: "Vadodara, Gujarat",
    period: "2024 – 2027",
    highlights: "Focus on Robotics, Microcontrollers, Industrial Automation, Control Systems, Computer Vision, and Software Development."
  },
  {
    degree: "10th Class (CBSE)",
    institution: "RBK Hanumant High School",
    location: "Mahuva, Gujarat",
    period: "2023 – 2024",
    highlights: "Secondary education with strong foundation in Science, Mathematics, and Computer Applications."
  }
];

export const skillCategories = [
  {
    name: "Robotics & Hardware",
    skills: ["Arduino", "ESP32", "Raspberry Pi", "LiDAR", "OpenCV", "MPU6050", "Sensors", "Automation", "Robotics Systems", "NEMA Steppers", "Autodesk Fusion 360"]
  },
  {
    name: "Software & Web Development",
    skills: ["Python", "JavaScript", "TypeScript", "React", "Next.js", "HTML5", "CSS3 / SCSS", "Tailwind CSS", "Node.js", "Express.js", "Socket.IO", "WebRTC"]
  },
  {
    name: "Databases, Cloud & Tools",
    skills: ["Supabase", "PostgreSQL", "Google Sheets API", "Git / GitHub", "Vite", "Data Management", "Microsoft Office"]
  },
  {
    name: "AI & Engineering Skills",
    skills: ["AI Integration", "Prompt Engineering", "System Architecture", "Event Coordination", "Technical Leadership", "Problem Solving"]
  }
];

export const contactInfo = {
  email: "patelayush20@outlook.com",
  phone: "+91 8374688927",
  phoneCallUrl: "tel:+918374688927",
  github: "https://github.com/ayushpatel2007",
  linkedin: "https://www.linkedin.com/in/ayushpatel2037/",
  resumePath: "/assets/Ayush_Patel_resume.pdf"
};
