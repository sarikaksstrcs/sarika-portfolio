import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Award, Briefcase, Code, Rocket, Sparkles, Terminal, Brain, Database, Cloud, Star, Trophy, Target, Zap, Download, ExternalLink, X, ArrowLeft, Check } from 'lucide-react';

import { getProgressMessage } from '../utils/progressmessage';
import Particles from './atoms/Particles';
import { experience, projects, skills } from '../constants';
import { StatsHUD } from './atoms/StatHUD';
import { LevelUp } from './atoms/Levelup';
import { HeroSection } from './molecules/HEro';
import { ExperienceCard } from './atoms/ExperienceCard';
import { ExperienceSection } from './molecules/ExperianceSection';
import { ProjectCard } from './atoms/ProjectCard';
import { ProjectsSection } from './molecules/ProjectSection';
import { SkillsSection } from './molecules/SkillSection';
import { CredentialsSection } from './molecules/CredentialsSection';
import { Footer } from './molecules/Footer';
import { ResumeModal } from './atoms/ResumeModal';
import { ExperienceDetailModal } from './atoms/ExperianceModal';

const Portfolio = () => {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [achievements, setAchievements] = useState([]);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [particles, setParticles] = useState([]);
  const [completedActions, setCompletedActions] = useState(new Set());
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10
    }));
    setParticles(newParticles);
  }, []);

  const addXP = (amount, actionId, achievementText) => {
    if (completedActions.has(actionId)) return;
    
    const newCompleted = new Set(completedActions);
    newCompleted.add(actionId);
    setCompletedActions(newCompleted);

    const newXP = xp + amount;
    setXp(newXP);
    
    const newLevel = Math.floor(newXP / 500) + 1;
    if (newLevel > level) {
      setLevel(newLevel);
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 2000);
    }

    if (achievementText && !achievements.includes(achievementText)) {
      setAchievements([...achievements, achievementText]);
    }
  };

  const handleSocialClick = (platform, url) => {
    addXP(50, `social-${platform}`, `Connected on ${platform}`);
    window.open(url, '_blank');
  };

  const handleResumeDownload = () => {
    addXP(100, 'resume-download', 'Downloaded Resume - Ready to Hire!');
    setShowResumeModal(false);
    // In a real scenario, trigger actual download
    alert('Resume download started! +100 XP earned');
  };

  

  const xpToNextLevel = 500 - (xp % 500);
  const xpProgress = (xp % 500) / 5;


  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-x-hidden relative">
      {/* Background Particles */}
     <Particles particles={particles} />
     <Particles particles={particles} />

      {/* Stats HUD */}
      <StatsHUD
        level={level}
        xp={xp}
        xpProgress={xpProgress}
        xpToNextLevel={xpToNextLevel}
        achievements={achievements}
        getProgressMessage={getProgressMessage}
      />

      {/* Level Up Animation */}
      <LevelUp show={showLevelUp} level={level} />

      {/* Hero Section */}
      <HeroSection
        handleSocialClick={handleSocialClick}
        setShowResumeModal={setShowResumeModal}
        completedActions={completedActions}
      />

      {/* Experience Section */}
      <ExperienceSection
        experience={experience}
        completedActions={completedActions}
        setSelectedExperience={setSelectedExperience}
      />

      {/* Projects Section */}
      <ProjectsSection
        projects={projects}
        completedActions={completedActions}
        setSelectedProject={setSelectedProject}
      />

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* Education & Certifications - Condensed */}
      <CredentialsSection
      />

      {/* Footer */}
     <Footer
        level={level}
        setShowResumeModal={setShowResumeModal}
      />

      {/* Resume Download Modal */}
      <ResumeModal
        show={showResumeModal}
        onClose={() => setShowResumeModal(false)}
        onDownload={handleResumeDownload}
      />

      {/* Experience Detail Modal */}
      <ExperienceDetailModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        completedActions={completedActions}
        addXP={addXP}
      />
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto bg-white text-black p-8 my-8 border-4 border-white">
            <div className="flex justify-between items-start mb-6">
              <button 
                onClick={() => {
                  if (!completedActions.has(`project-${selectedProject.id}`)) {
                    addXP(selectedProject.xp, `project-${selectedProject.id}`, `Explored ${selectedProject.name}`);
                  }
                  setSelectedProject(null);
                }}
                className="flex items-center gap-2 font-mono hover:underline">
                <ArrowLeft size={20} />
                BACK
              </button>
              <button onClick={() => {
                if (!completedActions.has(`project-${selectedProject.id}`)) {
                  addXP(selectedProject.xp, `project-${selectedProject.id}`, `Explored ${selectedProject.name}`);
                }
                setSelectedProject(null);
              }}>
                <X size={24} />
              </button>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-4xl font-bold font-mono">{selectedProject.name}</h2>
                <div className="flex items-center gap-1">
                  {Array.from({ length: selectedProject.stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-black" />
                  ))}
                </div>
              </div>
              <p className="text-xl font-mono mb-2">{selectedProject.tagline}</p>
              <p className="text-gray-600 font-mono">{selectedProject.year}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold font-mono mb-3 border-b-2 border-black pb-2">OVERVIEW</h3>
              <p className="font-mono">{selectedProject.details.overview}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold font-mono mb-3 border-b-2 border-black pb-2">KEY FEATURES</h3>
              <ul className="space-y-2 font-mono text-sm">
                {selectedProject.details.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold font-mono mb-3 border-b-2 border-black pb-2">TECH STACK</h3>
              <div className="space-y-2 font-mono text-sm">
                {Object.entries(selectedProject.details.techStack).map(([key, value]) => (
                  <div key={key}>
                    <span className="font-bold uppercase">{key}:</span> {value}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold font-mono mb-3 border-b-2 border-black pb-2">TECHNOLOGIES</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 border-2 border-black font-mono text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-black text-white font-mono">
              <p className="font-bold mb-1">IMPACT:</p>
              <p>{selectedProject.details.impact}</p>
            </div>

            <div className="mt-6 text-center">
              <p className="font-mono text-sm text-gray-600">
                {completedActions.has(`project-${selectedProject.id}`) ? '✓ XP Already Earned' : `+${selectedProject.xp} XP will be added when you close this`}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }
        
        @keyframes type {
          0% {
            opacity: 0;
            transform: translateX(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes level-up {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(10deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0;
          }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-fall {
          animation: fall linear infinite;
        }
        
        .animate-glitch {
          animation: glitch 3s infinite;
        }
        
        .animate-type {
          animation: type 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-level-up {
          animation: level-up 2s ease-out forwards;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;