import { ArrowLeft, X } from "lucide-react";

export const ExperienceDetailModal = ({ experience, onClose, completedActions, addXP }) => {
  if (!experience) return null;

  const handleClose = () => {
    if (!completedActions.has(`exp-${experience.id}`)) {
      addXP(experience.xp, `exp-${experience.id}`, `Explored ${experience.company}`);
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
          <h2 className="text-4xl font-bold font-mono mb-2">{experience.role}</h2>
          <p className="text-2xl font-mono mb-2">{experience.company}</p>
          <p className="text-gray-600 font-mono">{experience.period}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold font-mono mb-3 border-b-2 border-black pb-2">RESPONSIBILITIES</h3>
          <ul className="space-y-2 font-mono text-sm">
            {experience.details.responsibilities.map((resp, i) => (
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
            {experience.details.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 border-2 border-black font-mono text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 bg-black text-white font-mono">
          <p className="font-bold mb-1">IMPACT:</p>
          <p>{experience.details.impact}</p>
        </div>

        <div className="mt-6 text-center">
          <p className="font-mono text-sm text-gray-600">
            {completedActions.has(`exp-${experience.id}`) ? '✓ XP Already Earned' : `+${experience.xp} XP will be added when you close this`}
          </p>
        </div>
      </div>
    </div>
  );
};
