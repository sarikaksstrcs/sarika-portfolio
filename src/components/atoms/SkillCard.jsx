import { Code } from "lucide-react";

export const SkillCard = ({index, category, items }) => {
  return (
    <div key={index} 
               className="border-2 border-white/40 p-6 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 group">
            <h3 className="text-xl font-bold mb-4 font-mono flex items-center gap-2">
              <Code className="w-5 h-5" />
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <span key={i} 
                      className="px-3 py-1 border border-white/40 font-mono text-xs group-hover:bg-black group-hover:text-white transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </div>
    );  
}