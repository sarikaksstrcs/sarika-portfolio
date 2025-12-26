
import { SkillCard } from "../atoms/SkillCard";

export const SkillsSection = ({ skills }) => {
  return (
    <section className="py-20 px-6 border-t-2 border-white/20">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 font-mono">
        // SKILL_TREE
      </h2>
      <p className="text-center text-gray-400 mb-16 font-mono">Technical Arsenal: {Object.values(skills).flat().length} Skills</p>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items], index) => (
          <SkillCard
            key={index}
            index={index}
            category={category}
            items={items}
          />
        ))}
      </div>
    </section>
  );
};
