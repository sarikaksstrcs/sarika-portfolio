import { Github, Star } from "lucide-react";

export const ContributionDetailModal = ({ contribution, onClose, completedActions, addXP }) => {
  if (!contribution) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-black border-2 border-white max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white hover:text-black transition-colors border-2 border-white">
          ✕
        </button>
        
        <div className="mb-6">
          <h2 className="text-4xl font-bold mb-2 font-mono">{contribution.project}</h2>
          <p className="text-xl text-gray-400 font-mono">{contribution.organization}</p>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="px-3 py-1 border-2 border-white font-mono">
            {contribution.type}
          </span>
          <span className="px-3 py-1 border-2 border-white font-mono">
            {contribution.prNumber}
          </span>
          <span className="px-3 py-1 border-2 border-green-500 bg-green-500/20 font-mono">
            {contribution.status}
          </span>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 font-mono">Description</h3>
          <p className="font-mono text-gray-300">{contribution.description}</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 font-mono">Impact</h3>
          <p className="font-mono text-gray-300">{contribution.impact}</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3 font-mono">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {contribution.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 border-2 border-white/40 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-white" />
            <span className="font-mono">{(contribution.stars / 1000).toFixed(0)}k stars</span>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={() => {
              addXP(80, `opensource-${contribution.id}`, `Explored ${contribution.project} contribution`);
              window.open(contribution.url, '_blank');
            }}
            className="flex-1 px-6 py-3 bg-white text-black hover:bg-black hover:text-white border-2 border-white transition-all font-mono font-bold flex items-center justify-center gap-2">
            <Github className="w-5 h-5" />
            View on GitHub (+80 XP)
          </button>
        </div>
      </div>
    </div>
  );
};

