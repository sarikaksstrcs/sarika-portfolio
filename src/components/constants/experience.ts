import { Award, Brain, Rocket } from "lucide-react";

export const experience = [
    {
      id: 'armada',
      role: "Software Engineer",
      company: "ARMADA",
      period: "Feb 2025 – Present",
      icon: Rocket,
      xp: 75,
      highlights: [
        "Built React Native app managing 5,000+ Starlink terminals",
        "Achieved 99.9% crash-free sessions",
        "Created Go-based Push Notification microservice"
      ],
      details: {
        responsibilities: [
          "Developed and optimized cross-platform mobile app (iOS & Android) for 5,000+ Starlink terminals",
          "Integrated Swift modules using Native Modules for Apple ecosystem compatibility",
          "Implemented Zustand + TanStack Query for efficient state management",
          "Designed modular UI components with Storybook and Material UI",
          "Automated testing with Jest achieving 95% coverage, reduced bugs by 40%",
          "Led AppStore and PlayStore deployments via CI/CD pipelines"
        ],
        technologies: ["React Native", "Swift", "Go", "Kafka", "Postgres", "Azure", "Firebase", "Jest", "GitLab CI/CD"],
        impact: "Ensured 99.9% crash-free sessions with <1s load time through optimization"
      }
    },
    {
      id: 'turing',
      role: "AI Engineer",
      company: "TURING (with Google)",
      period: "Aug 2024 - Mar 2025",
      icon: Brain,
      xp: 75,
      highlights: [
        "Enhanced Gemini 2.5 Pro using RLHF",
        "Improved code efficiency by 12%",
        "Built PowerBI visualization dashboards"
      ],
      details: {
        responsibilities: [
          "Enhanced Python code generation for Google Gemini 2.5 Pro using RLHF",
          "Tested LLM performance on multimodal datasets (text+image)",
          "Fine-tuned model response quality for algorithmic benchmarks",
          "Built visualization dashboards using PowerBI and Matplotlib",
          "Tracked data feedback loop convergence through analytics"
        ],
        technologies: ["Python", "Gemini 2.5", "RLHF", "PowerBI", "Matplotlib", "LLM"],
        impact: "Improved code efficiency in algorithmic benchmarks by 12%"
      }
    },
    {
      id: 'tata',
      role: "SDE Intern",
      company: "TATA ELXSI",
      period: "Mar 2024 - Jul 2024",
      icon: Award,
      xp: 75,
      highlights: [
        "Won 'Extra Mile Award'",
        "Built gamified carbon calculation app",
        "Automated workflows with 40% efficiency gain"
      ],
      details: {
        responsibilities: [
          "Developed interactive carbon footprint web platform using React, Node.js, and FastAPI",
          "Integrated 3D rendering (Three.js) and OpenAI-powered chatbot via LangChain",
          "Deployed scalable backend with Azure cloud integration",
          "Automated enterprise workflows using Playwright and Selenium in Python",
          "Containerized services using Docker and orchestrated via Kubernetes"
        ],
        technologies: ["React", "Node.js", "FastAPI", "Three.js", "OpenAI", "LangChain", "Azure", "Docker", "Kubernetes"],
        impact: "Improved workflow efficiency by 40%, received Extra Mile Award"
      }
    }
  ];