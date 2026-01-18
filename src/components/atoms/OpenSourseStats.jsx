import { Award, Code, GitPullRequest, Users } from "lucide-react";

export const OpenSourceStats = () => {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 mb-12">
      <div className="border-2 border-white/40 p-6 text-center hover:bg-white hover:text-black transition-all duration-300">
        <GitPullRequest className="w-8 h-8 mx-auto mb-2" />
        <div className="text-3xl font-bold font-mono mb-1">15+</div>
        <div className="text-sm font-mono">Merged PRs</div>
      </div>
      
      <div className="border-2 border-white/40 p-6 text-center hover:bg-white hover:text-black transition-all duration-300">
        <Code className="w-8 h-8 mx-auto mb-2" />
        <div className="text-3xl font-bold font-mono mb-1">10k+</div>
        <div className="text-sm font-mono">Lines Changed</div>
      </div>
      
      <div className="border-2 border-white/40 p-6 text-center hover:bg-white hover:text-black transition-all duration-300">
        <Users className="w-8 h-8 mx-auto mb-2" />
        <div className="text-3xl font-bold font-mono mb-1">100M+</div>
        <div className="text-sm font-mono">Users Impacted</div>
      </div>
      
      <div className="border-2 border-white/40 p-6 text-center hover:bg-white hover:text-black transition-all duration-300">
        <Award className="w-8 h-8 mx-auto mb-2" />
        <div className="text-3xl font-bold font-mono mb-1">8</div>
        <div className="text-sm font-mono">Projects</div>
      </div>
    </div>
  );
};