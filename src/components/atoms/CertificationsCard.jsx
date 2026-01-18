import { Award, Trophy } from "lucide-react";
import { CERTIFICATIONS } from "../../constants/credentials";

export const CertificationsCard = () => {
  return (
    <div className="border-2 border-white/40 p-8 hover:bg-white hover:text-black transition-all group">
      <h3 className="text-2xl font-bold mb-6 font-mono">
        Certification & Awards
      </h3>

      <div className="space-y-3 text-sm font-mono">
        {CERTIFICATIONS.map((cert, idx) => {
          const Wrapper = cert.certificateUrl ? "a" : "div";

          return (
            <Wrapper
              key={idx}
              {...(cert.certificateUrl && {
                href: cert.certificateUrl,
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className={`flex items-start gap-2 ${
                cert.certificateUrl ? "hover:underline cursor-pointer" : "mb-2"
              }`}
            >
              {cert.isAward ? (
                <Trophy className="w-4 h-4 mt-0.5" />
              ) : (
                <Award className="w-4 h-4 mt-0.5" />
              )}

              <div>
                <span className={cert.isAward ? "font-bold" : ""}>
                  {cert.title}
                </span>
                <span className="ml-2 text-xs opacity-70">
                  ({cert.year})
                </span>

                {cert.certificateId && (
                  <div className="text-xs opacity-60">
                    Credential ID: {cert.certificateId}
                  </div>
                )}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
};
