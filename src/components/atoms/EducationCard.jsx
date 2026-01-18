import { Trophy } from "lucide-react";
import { EDUCATION } from "../../constants/credentials";

export const EducationCard = () => {
  return (
    <div className="border-2 border-white/40 p-8 hover:bg-white hover:text-black transition-all group">
      <h3 className="text-2xl font-bold mb-6 font-mono">Education</h3>

      <div className="space-y-4">
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="border-l-2 border-white pl-4">
            <p className="font-bold font-mono flex items-center gap-2">
              {edu.degree} • {edu.score}
              {edu.highlight && <Trophy className="w-4 h-4" />}
            </p>
            <p className="text-sm font-mono text-gray-400 group-hover:text-gray-600">
              {edu.highlight && `${edu.highlight} • `}
              {edu.institution} • {edu.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
