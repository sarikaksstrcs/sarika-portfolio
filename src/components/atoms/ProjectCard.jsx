import { Check, ExternalLink, Star } from "lucide-react";

export const ProjectCard = ({ project, completedActions, onClick }) => {
  const isCompleted = completedActions.has(`project-${project.id}`);

  return (
    <div 
      onClick={onClick}
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
};