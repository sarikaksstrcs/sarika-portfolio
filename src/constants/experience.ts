import { Award, Brain, Rocket } from "lucide-react";
import { ArmadaIcon, TataIcon, TuringIcon } from "../assets/icons/companyIcons";

export const experience = [
    {
  id: 'armada',
  role: "Software Engineer",
  company: "ARMADA",
  period: "Feb 2025 – Present",
  icon: ArmadaIcon,
  xp: 75,
  highlights: [
    "Built React Native app managing 5,000+ Starlink terminals",
    "Designed Go microservices with Kafka on AKS for real-time notifications using Azure Notification Hub",
    "Achieved 99.9% crash-free sessions",
  ],
  details: {
    responsibilities: [
      "Developed and optimized cross-platform mobile application (iOS & Android) managing 5,000+ Starlink terminals",
      "Built Go push-notification microservices with Kafka on Azure Kubernetes Service (AKS)",
      "Integrated Azure Notification Hub with Firebase Cloud Messaging (FCM) and Apple Push Notification service (APNs)",
      "Implemented Kafka-based event streaming to handle large-scale notification delivery",
      "Built native Swift modules using React Native Native Modules for seamless Apple ecosystem integration",
      "Implemented scalable state management using Zustand and TanStack Query",
      "Designed modular, reusable UI components using Storybook and Material UI",
      "Automated unit and integration testing with Jest, achieving 95% test coverage and reducing production bugs by 40%",
      "Led App Store and Google Play deployments through GitLab CI/CD pipelines"
    ],
    technologies: [
      // Mobile
      "React Native",
      "Swift",
      "TypeScript",

      // Backend & Messaging
      "Go",
      "Kafka",
      "PostgreSQL",

      // Cloud & Infrastructure
      "Azure",
      "AKS",
      "ANH",
      "FCM",
      "APNs",

      // Tooling & DevOps
      "GitLab CI/CD",
      "Jest",
      "Storybook"
    ],
    impact: "Delivered a highly reliable mobile platform with 99.9% crash-free sessions and sub-second load times through performance tuning and scalable cloud infrastructure"
  }
},
    {
      id: 'turing',
      role: "AI Engineer",
      company: "TURING (with Google)",
      period: "Aug 2024 - Mar 2025",
      icon: TuringIcon,
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
      icon: TataIcon,
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