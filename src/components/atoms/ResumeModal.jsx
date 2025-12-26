import { Download, X } from "lucide-react";

export const ResumeModal = ({ show, onClose, onDownload }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
      <div className="bg-white text-black p-8 max-w-md w-full border-4 border-white">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold font-mono">RESUME DOWNLOAD</h3>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <p className="font-mono mb-6">
          Downloading my resume will earn you <strong>100 XP</strong> and unlock the "Ready to Hire" achievement!
        </p>
        <div className="space-y-4">
          <button
            onClick={onDownload}
            className="w-full px-6 py-3 bg-black text-white font-mono font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
            <Download size={20} />
            DOWNLOAD NOW (+100 XP)
          </button>
          <button
            onClick={onClose}
            className="w-full px-6 py-3 border-2 border-black font-mono font-bold hover:bg-gray-100 transition-all">
            MAYBE LATER
          </button>
        </div>
      </div>
    </div>
  );
};