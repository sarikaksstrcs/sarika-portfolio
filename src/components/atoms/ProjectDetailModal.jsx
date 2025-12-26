import { ArrowLeft, Star, X } from "lucide-react";
export const ProjectDetailModal = ({ project, onClose, completedActions, addXP }) => {
  if (!project) return null;

  const handleClose = () => {
    if (!completedActions.has(`project-${project.id}`)) {
      addXP(project.xp, `project-${project.id}`, `Explored ${project.name}`);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto p-6">
      <div className="max-w-4xl mx-auto bg-white text-black p-8 my-8 border-4 border-white">
        <div className="flex justify-between items-start mb-6">
          <button 
            onClick={handleClose}
            className="flex items-center gap-2 font-mono hover:underline">
            <ArrowLeft size={20} />
            BACK
          </button>
          <button onClick={handleClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-4xl font-bold font-mono">{project.name}</h2>
            <div className="flex items-center gap-1">
              {Array.from({ length: project.stars }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-black" />
              ))}
            </div>
          </div>
          <p className="text-xl font-mono mb-2">{project.tagline}</p>
          <p className="text-gray-600 font-mono">{project.year}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold font-mono mb-3 border-b-2 border-black pb-2">OVERVIEW</h3>
          <p className="font-mono">{project.details.overview}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold font-mono mb-3 border-b-2 border-black pb-2">KEY FEATURES</h3>
          <ul className="space-y-2 font-mono text-sm">
            {project.details.features.map((feature, i) => (
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
            {Object.entries(project.details.techStack).map(([key, value]) => (
              <div key={key}>
                <span className="font-bold uppercase">{key}:</span> {value}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold font-mono mb-3 border-b-2 border-black pb-2">TECHNOLOGIES</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-3 py-1 border-2 border-black font-mono text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 bg-black text-white font-mono">
          <p className="font-bold mb-1">IMPACT:</p>
          <p>{project.details.impact}</p>
        </div>

        <div className="mt-6 text-center">
          <p className="font-mono text-sm text-gray-600">
            {completedActions.has(`project-${project.id}`) ? '✓ XP Already Earned' : `+${project.xp} XP will be added when you close this`}
          </p>
        </div>
      </div>
    </div>
  );
};
