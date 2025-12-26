import { ExperienceCard } from "../atoms/ExperienceCard";

export const ExperienceSection = ({ experience, completedActions, setSelectedExperience }) => {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl md:text-6xl font-bold text-center mb-4 font-mono">
        // EXPERIENCE_LOG
      </h2>
      <p className="text-center text-gray-400 mb-4 font-mono">Click to view details and earn XP</p>
      <p className="text-center text-sm text-white mb-16 font-mono">+75 XP per experience viewed</p>
      
      <div className="max-w-6xl mx-auto space-y-8">
        {experience.map((exp, index) => (
          <ExperienceCard 
            key={index}
            exp={exp}
            completedActions={completedActions}
            onClick={() => setSelectedExperience(exp)}
          />
        ))}
      </div>
    </section>
  );
};