import { Check, ExternalLink, Zap } from "lucide-react";

export const ExperienceCard = ({ exp, completedActions, onClick }) => {
  const Icon = exp.icon;
  const isCompleted = completedActions.has(`exp-${exp.id}`);

  return (
    <div 
      onClick={onClick}
      className={`group border-2 border-white/40 p-8 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 cursor-pointer relative ${isCompleted ? 'border-white' : ''}`}>
      <div className="absolute top-4 right-4 flex items-center gap-2 font-mono text-sm">
        {isCompleted ? (
          <span className="flex items-center gap-1">
            <Check className="w-4 h-4" />
            Viewed
          </span>
        ) : (
          <>
            <Zap className="w-4 h-4" />
            <span>+{exp.xp} XP</span>
          </>
        )}
      </div>
      
      <div className="flex items-start gap-6">
        <div className="p-4 border-2 border-white group-hover:bg-black group-hover:text-white transition-all flex-shrink-0">
          <Icon size={32} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 font-mono">{exp.role}</h3>
          <p className="text-lg mb-1 font-mono">{exp.company}</p>
          <p className="text-gray-400 group-hover:text-gray-600 mb-4 font-mono text-sm">{exp.period}</p>
          <ul className="space-y-2 font-mono text-sm mb-3">
            {exp.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1">▹</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-sm font-mono underline">
            Click to view full details
            <ExternalLink size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
