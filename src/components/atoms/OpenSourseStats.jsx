import { Award, Code, GitPullRequest, GitPullRequestCreateIcon } from "lucide-react";

export const OpenSourceStats = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-4 gap-2 sm:gap-3 md:gap-6 mb-12">
      
      <div className="border-2 border-white/40 p-3 sm:p-4 md:p-6 text-center hover:bg-white hover:text-black transition-all duration-300">
        <GitPullRequest className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mx-auto mb-1 sm:mb-2" />
        <div className="text-lg sm:text-xl md:text-3xl font-bold font-mono">5+</div>
        <div className="text-[10px] sm:text-xs font-mono">Merged PRs</div>
      </div>

      <div className="border-2 border-white/40 p-3 sm:p-4 md:p-6 text-center hover:bg-white hover:text-black transition-all duration-300">
        <Code className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mx-auto mb-1 sm:mb-2" />
        <div className="text-lg sm:text-xl md:text-3xl font-bold font-mono">1k+</div>
        <div className="text-[10px] sm:text-xs font-mono">Lines</div>
      </div>

      <div className="border-2 border-white/40 p-3 sm:p-4 md:p-6 text-center hover:bg-white hover:text-black transition-all duration-300">
        <GitPullRequestCreateIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mx-auto mb-1 sm:mb-2" />
        <div className="text-lg sm:text-xl md:text-3xl font-bold font-mono">30+</div>
        <div className="text-[10px] sm:text-xs font-mono">Issues</div>
      </div>

      <div className="border-2 border-white/40 p-3 sm:p-4 md:p-6 text-center hover:bg-white hover:text-black transition-all duration-300">
        <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mx-auto mb-1 sm:mb-2" />
        <div className="text-lg sm:text-xl md:text-3xl font-bold font-mono">8</div>
        <div className="text-[10px] sm:text-xs font-mono">Projects</div>
      </div>

    </div>
  );
};
