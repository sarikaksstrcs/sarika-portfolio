import { Check, ExternalLink, Star } from "lucide-react";

export const ContributionCard = ({ contribution, completedActions, onClick }) => {
  const isCompleted = completedActions.has(`opensource-${contribution.id}`);
  
  const getTypeColor = (type) => {
    switch(type) {
      case "Bug Fix": return "border-red-500";
      case "Feature": return "border-green-500";
      case "Documentation": return "border-blue-500";
      default: return "border-white/40";
    }
  };

  return (
    <div 
      onClick={onClick}
      className={`group border-2 ${getTypeColor(contribution.type)} p-6 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden ${isCompleted ? 'border-white' : ''}`}>
      
      {isCompleted && (
        <Check className="absolute top-2 right-2 w-6 h-6" />
      )}
      
      <div className="absolute top-0 left-0 right-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold font-mono">{contribution.project}</h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-600 font-mono">{contribution.organization}</p>
        </div>
        <span className="text-xs font-mono px-2 py-1 border border-white/40 group-hover:border-black/40">
          {contribution.year}
        </span>
      </div>
      
      <div className="flex items-center gap-3 mb-3">
        <span className={`px-2 py-1 text-xs font-mono border ${getTypeColor(contribution.type)}`}>
          {contribution.type}
        </span>
        <span className="px-2 py-1 text-xs font-mono border border-white/40 group-hover:border-black/40">
          {contribution.prNumber}
        </span>
        <span className="px-2 py-1 text-xs font-mono border border-green-500 bg-green-500/10 group-hover:bg-green-500/20">
          {contribution.status}
        </span>
      </div>
      
      <p className="text-sm mb-2 font-mono font-bold">{contribution.description}</p>
      <p className="text-xs mb-4 text-gray-400 group-hover:text-gray-600 font-mono italic">
        Impact: {contribution.impact}
      </p>
      
      <div className="flex items-center gap-2 mb-4">
        <Star className={`w-4 h-4 ${contribution.stars > 0 ? "fill-white" : ''} group-hover:${contribution.stars > 0 ? "fill-black" : ''}`} />
        <span className="text-xs font-mono">{(contribution.stars / 1000).toFixed(0)} stars</span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {contribution.technologies.map((tech, i) => (
          <span key={i} className="px-2 py-1 border border-white/40 group-hover:border-black/40 font-mono text-xs">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-2 text-sm font-mono underline">
        View on GitHub
        <ExternalLink size={16} />
      </div>
    </div>
  );
};
