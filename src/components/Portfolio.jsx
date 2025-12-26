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
import { ProjectDetailModal } from './atoms/ProjectDetailModal';
import { Style } from './atoms/Style';

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
      <ProjectDetailModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        completedActions={completedActions}
        addXP={addXP}
      />

      <Style />
    </div>
  );
};

export default Portfolio;