export const projects = [
    {
      id: 'skilllink',
      name: "SkillLink",
      year: "2025",
      tagline: "Skilled Service Marketplace App",
      description: "Cross-platform mobile app connecting customers with skilled professionals in real-time",
      tech: ["React Native", "Node.js", "Firebase", "MongoDB", "Go"],
      stars: 5,
      xp: 60,
      details: {
        overview: "A comprehensive marketplace platform that bridges the gap between customers and service providers like plumbers, electricians, and carpenters.",
        features: [
          "Real-time job posting and notifications using FCM and APN",
          "In-app chat system for seamless communication",
          "Dynamic compensation negotiation flow",
          "Google Maps API integration for location-based matching",
          "Secure authentication with Firebase",
          "Role-based access control"
        ],
        techStack: {
          frontend: "React Native for cross-platform mobile development",
          backend: "Node.js and Go for scalable server-side logic",
          database: "MongoDB for flexible data storage",
          cloud: "Firebase for authentication and real-time features"
        },
        impact: "Enables seamless connection between customers and professionals with real-time updates"
      }
    },
    {
      id: 'patentbot',
      name: "Patent Interview Chatbot",
      year: "2024",
      tagline: "AI Interview Assistant for Patent Applications",
      github:"https://github.com/sarikaksstrcs/Patent-Application-Full-Project",
      liveDemoUrl: "https://patent-interview-application.onrender.com",
      description: "A chatbot that conducts simulated patent application interviews using GPT-3 and Whisper for speech recognition and AI guidance.",
      tech: ["React", "Node.js", "FastAPI", "GPT-3", "Whisper"],
      stars: 5,
      xp: 70,
      details: {
        overview: "An intelligent AI assistant that simulates patent interviews, helping inventors practice and refine their responses before submitting applications.",
        features: [
          "Conducts interactive AI-driven patent interviews",
          "Speech-to-text input using Whisper",
          "Real-time feedback and suggestions on answers",
          "Dynamic question generation based on patent category",
          "Backend API with FastAPI and Node.js for session management",
          "GPT-3 powered contextual understanding for guidance"
        ],
        techStack: {
          frontend: "React for responsive and interactive user interface",
          backend: "Node.js and FastAPI for handling API requests and managing interview sessions",
          ai: "GPT-3 for intelligent conversational responses and Whisper for speech recognition"
        },
        impact: "Enables inventors to practice patent interviews, improving the quality of applications and reducing errors."
      }
    }
,
    {
      id: 'mentalease',
      name: "MentalEase.ai",
      year: "2024",
      tagline: "Mental Health Companion App",
      description: "AI-powered mental health companion with GPT-3 and immersive 3D UI",
      tech: ["MERN", "GPT-3", "React", "LangChain", "React-Three-Fiber", "Blender", "Tailwind CSS"],
      stars: 5,
      github:'https://github.com/sarikaksstrcs/MentalEase.ai',
      xp: 60,
      details: {
        overview: "An innovative mental health support application combining AI technology with immersive 3D experiences.",
        features: [
          "GPT-3 integration for intelligent conversations",
          "LangChain for context-aware responses",
          "Text-to-Speech (TTS) for accessibility",
          "Sentiment analysis using face-recognition using OpenCV and voice-analysis for mood tracking",
          "3D UI using React-Three-Fiber and Blender",
          "Cross-platform mobile support"
        ],
        techStack: {
          frontend: "React Native with React-Three-Fiber for 3D rendering",
          backend: "MERN stack for robust data handling",
          ai: "GPT-3 and LangChain for conversational AI",
          design: "Blender for 3D asset creation"
        },
        impact: "Provides accessible mental health support with engaging user experience"
        
      }
    },
    {
      id: 'codeanalyzer',
      name: "Code Impact Analyzer",
      year: "2024",
      tagline: "Automated Code Quality Tool",
      description: "Backend pipeline for automated test generation and vulnerability detection",
      tech: ["Python", "REST API", "GitHub", "OpenAI"],
      stars: 4,
      xp: 60,
      details: {
        overview: "An intelligent code analysis tool that automatically generates tests and identifies security vulnerabilities.",
        features: [
          "Automated test generation using AI",
          "Dependency analysis and mapping",
          "Vulnerability detection and fixes",
          "GitHub integration for seamless workflow",
          "Real-time codebase insights",
          "Automated patch recommendations"
        ],
        techStack: {
          backend: "Python for processing and analysis",
          api: "REST API for GitHub integration",
          ai: "OpenAI for intelligent code understanding"
        },
        impact: "Improves code quality and security through automated analysis"
      }
    },
    {
      id: 'swasthyachain',
      name: "SwasthyaChain",
      year: "2025",
      tagline: "Full-Stack Decentralized Health Records Platform",
      description:
        "A full-stack healthcare records platform with a FastAPI backend and React (Vite) frontend, enabling secure, consent-driven medical data storage, sharing, and AI-assisted insights.",
      github:'https://github.com/sarikaksstrcs/swasthyachain/tree/main',
      tech: [
        "FastAPI",
        "Python",
        "React",
        "Vite",
        "MongoDB",
        "IPFS",
        "Blockchain",
        "AES-256 Encryption",
        "JWT",
        "Google Gemini AI",
        "Docker"
      ],
    stars: 5,
    xp: 90,
    details: {
      overview:
        "SwasthyaChain is a full-stack healthcare management system that combines a high-performance FastAPI backend with a modern React (Vite) frontend. It demonstrates secure medical record handling using encryption, decentralized storage (IPFS), blockchain-based audit trails, and AI-powered health insights, while giving patients complete control over data access through consent management.",
      features: [
        "Full-stack architecture with FastAPI backend and React (Vite) frontend",
        "Secure authentication using JWT with role-based access control",
        "Patient-controlled consent management for medical data sharing",
        "AES-256 encryption for medical records at rest and in transit",
        "Decentralized file storage using IPFS",
        "Blockchain-backed immutable audit logging",
        "AI-assisted health summaries, recommendations, and risk prediction",
        "Interactive API documentation via OpenAPI (Swagger)",
        "Dockerized setup for production-ready deployment",
        "Environment-based configuration using .env files"
      ],
      techStack: {
        frontend: "React with Vite for fast development, modular components, and modern UI",
        backend: "FastAPI (Python) for asynchronous, high-performance REST APIs",
        database: "MongoDB for flexible and scalable healthcare data storage",
        security: "JWT authentication, bcrypt password hashing, AES-256 encryption",
        decentralized: "IPFS for file storage and blockchain helpers for audit trails",
        ai: "Google Gemini AI for health summaries, recommendations, and predictions",
        devops: "Docker, uvicorn, pytest, and Vite dev server for development and deployment"
      },
      impact:
        "Demonstrates a production-grade full-stack healthcare system that prioritizes data security, patient ownership, and transparency while showcasing modern web technologies, decentralized systems, and applied AI in healthcare."
    }
    }

];
