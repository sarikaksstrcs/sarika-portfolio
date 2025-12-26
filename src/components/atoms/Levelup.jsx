export const LevelUp = ({ showLevelUp, level }) => {
    
    {showLevelUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="text-6xl font-bold animate-level-up">
            <div className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)]">
              LEVEL UP!
            </div>
            <div className="text-4xl text-center mt-4">Recruiter Level {level}</div>
          </div>
        </div>
      )}    
};