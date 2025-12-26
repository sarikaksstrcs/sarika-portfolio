export const Footer = ({ level, setShowResumeModal }) => {
  return (
    <footer className="py-12 px-6 border-t-2 border-white/20 text-center font-mono">
      <p className="mb-4 text-xl">Ready to hire? Let's connect!</p>
      <button
        onClick={() => setShowResumeModal(true)}
        className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-all mb-4 font-bold">
        DOWNLOAD RESUME (+100 XP)
      </button>
      <p className="text-xs text-gray-600 mt-6">© 2025 K S SARIKA • Level {level} Recruiter</p>
    </footer>
  );
};