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
      id: 'mentalease',
      name: "MentalEase.ai",
      year: "2024",
      tagline: "Mental Health Companion App",
      description: "AI-powered mental health companion with GPT-3 and immersive 3D UI",
      tech: ["MERN", "GPT-3", "React Native", "LangChain", "3D"],
      stars: 5,
      github:'https://github.com/sarikaksstrcs/MentalEase.ai',
      xp: 60,
      details: {
        overview: "An innovative mental health support application combining AI technology with immersive 3D experiences.",
        features: [
          "GPT-3 integration for intelligent conversations",
          "LangChain for context-aware responses",
          "Text-to-Speech (TTS) for accessibility",
          "Sentiment analysis for mood tracking",
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
    }
  ];
