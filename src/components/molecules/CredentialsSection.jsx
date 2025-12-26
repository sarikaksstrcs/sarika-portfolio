import { Award, Trophy } from "lucide-react";

export const CredentialsSection = () => {
  return (
    <section className="py-20 px-6 border-t-2 border-white/20">
      <h2 className="text-3xl md:text-6xl font-bold text-center mb-16 font-mono">
        // CREDENTIALS
      </h2>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="border-2 border-white/40 p-8 hover:bg-white hover:text-black transition-all group">
          <h3 className="text-2xl font-bold mb-6 font-mono">Education</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-white pl-4">
              <p className="font-bold font-mono">MCA • CGPA: 9.19/10</p>
              <p className="text-sm font-mono text-gray-400 group-hover:text-gray-600">CET • 2022-2024</p>
            </div>
            <div className="border-l-2 border-white pl-4">
              <p className="font-bold font-mono flex items-center gap-2">
                BSc CS • 92.02%
                <Trophy className="w-4 h-4" />
              </p>
              <p className="text-sm font-mono text-gray-400 group-hover:text-gray-600">University First Rank • 2019-2022</p>
            </div>
          </div>
        </div>
        
        <div className="border-2 border-white/40 p-8 hover:bg-white hover:text-black transition-all group">
          <h3 className="text-2xl font-bold mb-6 font-mono">Certifications</h3>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>UGC-NET (CS) 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>GATE (CS/DS) 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Microsoft Azure AI 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>AWS AI Practitioner 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>IBM Cybersecurity 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              <span className="font-bold">Extra Mile Award - TATA ELXSI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
