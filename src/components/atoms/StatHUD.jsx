import { Target, Trophy } from "lucide-react";
import { useState } from "react";

export const StatsHUD = ({ level, xp, xpProgress, xpToNextLevel, achievements, getProgressMessage }) => {
  const [showAchievements, setShowAchievements] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50 bg-black border-2 border-white p-4 rounded-lg font-mono max-w-xs">
      <div className="flex items-center gap-3 mb-2">
        <Target className="w-5 h-5" />
        <span className="text-sm">RECRUITER LEVEL {level}</span>
      </div>
      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mb-2">
        <div 
          className="h-full bg-white transition-all duration-500"
          style={{ width: `${xpProgress}%` }}
        />
      </div>
      <div className="text-xs text-gray-400 mb-3">
        {xp} XP • {xpToNextLevel} to next level
      </div>
      <div className="text-xs border-t border-white/20 pt-2 mb-2">
        {getProgressMessage()}
      </div>
      <div className="mt-3 text-xs border-t border-white/20 pt-3">
        <div 
          className="flex items-center gap-2 mb-1 cursor-pointer hover:text-gray-300"
          onClick={() => setShowAchievements(!showAchievements)}
        >
          <Trophy className="w-4 h-4" />
          <span>{achievements.length} Achievements</span>
          <span className="ml-auto">{showAchievements ? '▲' : '▼'}</span>
        </div>
        {showAchievements && (
          <div className="mt-2 space-y-1 max-h-40 overflow-y-auto">
            {achievements.length === 0 ? (
              <div className="text-[10px] text-gray-500">No achievements yet</div>
            ) : (
              achievements.map((ach, i) => (
                <div key={i} className="text-[10px] text-gray-400 flex items-start gap-1 py-1">
                  <span className="text-white">✓</span>
                  <span>{ach}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};