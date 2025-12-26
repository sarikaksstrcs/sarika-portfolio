import { Check, Download, Github, Linkedin, Mail, Phone, Terminal } from "lucide-react";

export const HeroSection = ({ handleSocialClick, completedActions, setShowResumeModal }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 animate-ping-slow">
            <Terminal className="w-20 h-20 text-white opacity-20" />
          </div>
          <Terminal className="w-20 h-20 text-white relative z-10 animate-pulse" />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bold mb-4 font-mono tracking-tighter animate-glitch">
          K S SARIKA
        </h1>
        
        <div className="mb-8 font-mono">
          <div className="text-xl md:text-2xl mb-2 animate-type">
            <span className="text-gray-400">{">"}</span> Software Engineer
          </div>
          <div className="text-xl md:text-2xl mb-2 animate-type" style={{ animationDelay: '1s' }}>
            <span className="text-gray-400">{">"}</span> AI Enthusiast
          </div>
          <div className="text-xl md:text-2xl animate-type" style={{ animationDelay: '2s' }}>
            <span className="text-gray-400">{">"}</span> Problem Solver
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setShowResumeModal(true)}
            className="px-6 py-3 border-2 border-white font-mono font-bold hover:bg-white hover:text-black transition-all transform hover:scale-105 flex items-center gap-2">
            <Download size={20} />
            DOWNLOAD RESUME
            <span className="text-sm ml-2">+100 XP</span>
          </button>
        </div>

        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={() => handleSocialClick('GitHub', 'https://github.com/sarikaksstrcs')}
            className={`p-4 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:scale-110 hover:rotate-6 relative ${completedActions.has('social-GitHub') ? 'bg-white text-black' : ''}`}>
            <Github size={24} />
            {completedActions.has('social-GitHub') && (
              <Check className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white rounded-full" />
            )}
          </button>
          <button
            onClick={() => handleSocialClick('LinkedIn', 'https://linkedin.com/in/sarika-k-s-b094b61ba')}
            className={`p-4 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:scale-110 hover:-rotate-6 relative ${completedActions.has('social-LinkedIn') ? 'bg-white text-black' : ''}`}>
            <Linkedin size={24} />
            {completedActions.has('social-LinkedIn') && (
              <Check className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white rounded-full" />
            )}
          </button>
          <button
            onClick={() => handleSocialClick('Email', 'mailto:sarika.ks.official@gmail.com')}
            className={`p-4 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:scale-110 hover:rotate-6 relative ${completedActions.has('social-Email') ? 'bg-white text-black' : ''}`}>
            <Mail size={24} />
            {completedActions.has('social-Email') && (
              <Check className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white rounded-full" />
            )}
          </button>
          <button
            onClick={() => handleSocialClick('Phone', 'tel:+918075841629')}
            className={`p-4 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:scale-110 hover:-rotate-6 relative ${completedActions.has('social-Phone') ? 'bg-white text-black' : ''}`}>
            <Phone size={24} />
            {completedActions.has('social-Phone') && (
              <Check className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white rounded-full" />
            )}
          </button>
        </div>

        <div className="text-sm text-gray-400 font-mono">
          +50 XP for each connection • Help me level up by connecting!
        </div>
      </div>
    </section>
  );
};