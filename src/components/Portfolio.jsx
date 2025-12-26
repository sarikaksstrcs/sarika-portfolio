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
      <section className="py-20 px-6 border-t-2 border-white/20">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 font-mono">
          // PROJECT_ARCHIVE
        </h2>
        <p className="text-center text-gray-400 mb-4 font-mono">Click to explore project details</p>
        <p className="text-center text-sm text-white mb-16 font-mono">+60 XP per project explored</p>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isCompleted = completedActions.has(`project-${project.id}`);
            return (
              <div key={index} 
                   onClick={() => setSelectedProject(project)}
                   className={`group border-2 border-white/40 p-6 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden ${isCompleted ? 'border-white' : ''}`}>
                {isCompleted && (
                  <Check className="absolute top-2 right-2 w-6 h-6" />
                )}
                <div className="absolute top-0 left-0 right-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-mono">{project.name}</h3>
                  <span className="text-sm text-gray-400 group-hover:text-gray-600 font-mono">{project.year}</span>
                </div>
                
                <p className="text-xs mb-2 font-mono font-bold">{project.tagline}</p>
                <p className="text-sm mb-4 font-mono">{project.description}</p>
                
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: project.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white group-hover:fill-black" />
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 border border-white/40 font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 border border-white/40 font-mono text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-sm font-mono underline">
                  View details
                  <ExternalLink size={16} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 border-t-2 border-white/20">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 font-mono">
          // SKILL_TREE
        </h2>
        <p className="text-center text-gray-400 mb-16 font-mono">Technical Arsenal: {Object.values(skills).flat().length} Skills</p>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index} 
                 className="border-2 border-white/40 p-6 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 group">
              <h3 className="text-xl font-bold mb-4 font-mono flex items-center gap-2">
                <Code className="w-5 h-5" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span key={i} 
                        className="px-3 py-1 border border-white/40 font-mono text-xs group-hover:bg-black group-hover:text-white transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications - Condensed */}
      <section className="py-20 px-6 border-t-2 border-white/20">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 font-mono">
          // CREDENTIALS
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="border-2 border-white/40 p-8 hover:bg-white hover:text-black transition-all group">
            <h3 className="text-2xl font-bold mb-6 font-mono">Education</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-white pl-4">
                <p className="font-bold font-mono">MCA • CGPA: 9.19/10</p>
                <p className="text-sm font-mono text-gray-400 group-hover:text-gray-600">CET • 2022-2024</p>
              </div>
              <div className="border-l-2 border-white pl-4">
                <p className="font-bold font-mono flex items-center gap-2">
                  BSc CS • 92.02%
                  <Trophy className="w-4 h-4" />
                </p>
                <p className="text-sm font-mono text-gray-400 group-hover:text-gray-600">University First Rank • 2019-2022</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-white/40 p-8 hover:bg-white hover:text-black transition-all group">
            <h3 className="text-2xl font-bold mb-6 font-mono">Certifications</h3>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>UGC-NET (CS) 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>GATE (CS/DS) 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Microsoft Azure AI 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>AWS AI Practitioner 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>IBM Cybersecurity 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span className="font-bold">Extra Mile Award - TATA ELXSI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-2 border-white/20 text-center font-mono">
        <p className="mb-4 text-xl">Ready to hire? Let's connect!</p>
        <button
          onClick={() => setShowResumeModal(true)}
          className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-all mb-4 font-bold">
          DOWNLOAD RESUME (+100 XP)
        </button>
        <p className="text-xs text-gray-600 mt-6">© 2025 K S SARIKA • Level {level} Recruiter</p>
      </footer>

      {/* Resume Download Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
          <div className="bg-white text-black p-8 max-w-md w-full border-4 border-white">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold font-mono">RESUME DOWNLOAD</h3>
              <button onClick={() => setShowResumeModal(false)}>
                <X size={24} />
              </button>
            </div>
            <p className="font-mono mb-6">
              Downloading my resume will earn you <strong>100 XP</strong> and unlock the "Ready to Hire" achievement!
            </p>
            <div className="space-y-4">
              <button
                onClick={handleResumeDownload}
                className="w-full px-6 py-3 bg-black text-white font-mono font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                <Download size={20} />
                DOWNLOAD NOW (+100 XP)
              </button>
              <button
                onClick={() => setShowResumeModal(false)}
                className="w-full px-6 py-3 border-2 border-black font-mono font-bold hover:bg-gray-100 transition-all">
                MAYBE LATER
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto bg-white text-black p-8 my-8 border-4 border-white">
            <div className="flex justify-between items-start mb-6">
              <button 
                onClick={() => {
                  if (!completedActions.has(`exp-${selectedExperience.id}`)) {
                    addXP(selectedExperience.xp, `exp-${selectedExperience.id}`, `Explored ${selectedExperience.company}`);
                  }
                  setSelectedExperience(null);
                }}
                className="flex items-center gap-2 font-mono hover:underline">
                <ArrowLeft size={20} />
                BACK
              </button>
              <button onClick={() => {
                if (!completedActions.has(`exp-${selectedExperience.id}`)) {
                  addXP(selectedExperience.xp, `exp-${selectedExperience.id}`, `Explored ${selectedExperience.company}`);
                }
                setSelectedExperience(null);
              }}>
                <X size={24} />
              </button>
            </div>
            
            <div className="mb-6">
              <h2 className="text-4xl font-bold font-mono mb-2">{selectedExperience.role}</h2>
              <p className="text-2xl font-mono mb-2">{selectedExperience.company}</p>
              <p className="text-gray-600 font-mono">{selectedExperience.period}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold font-mono mb-3 border-b-2 border-black pb-2">RESPONSIBILITIES</h3>
              <ul className="space-y-2 font-mono text-sm">
                {selectedExperience.details.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold font-mono mb-3 border-b-2 border-black pb-2">TECHNOLOGIES USED</h3>
              <div className="flex flex-wrap gap-2">
                {selectedExperience.details.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 border-2 border-black font-mono text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-black text-white font-mono">
              <p className="font-bold mb-1">IMPACT:</p>
              <p>{selectedExperience.details.impact}</p>
            </div>

            <div className="mt-6 text-center">
              <p className="font-mono text-sm text-gray-600">
                {completedActions.has(`exp-${selectedExperience.id}`) ? '✓ XP Already Earned' : `+${selectedExperience.xp} XP will be added when you close this`}
              </p>
            </div>
          </div>
        </div>
      )}

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