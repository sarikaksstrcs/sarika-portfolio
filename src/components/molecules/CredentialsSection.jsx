import { CertificationsCard } from "../atoms/CertificationsCard";
import { EducationCard } from "../atoms/EducationCard";


export const CredentialsSection = () => {
  return (
    <section className="py-20 px-6 border-t-2 border-white/20">
      <h2 className="text-3xl md:text-6xl font-bold text-center mb-16 font-mono">
        // CREDENTIALS
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <EducationCard />
        <CertificationsCard />
      </div>
    </section>
  );
};
