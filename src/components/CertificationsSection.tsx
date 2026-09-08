import React from "react";
import { Award, CheckCircle, ExternalLink, ShieldCheck, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./SectionHeading";

export const CertificationsSection: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          category="CREDENTIALS"
          title="Certifications & Validated Training"
          subtitle="Officially verified technical certifications and structured engineering coursework with direct verification credentials."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const isRedHat = cert.issuer.includes("Red Hat");
            const isTraining = cert.type === "training";

            return (
              <div
                key={cert.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  cert.highlight
                    ? "bg-[#13161E] border border-white/15 hover:border-[#E60000]/60 shadow-lg shadow-black/40 hover:-translate-y-1"
                    : "bg-[#111318] border border-white/[0.08] hover:border-white/20 hover:-translate-y-0.5"
                }`}
              >
                {/* Header Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium ${
                        isTraining
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : isRedHat
                          ? "bg-[#E60000]/10 text-[#FF4D4D] border border-[#E60000]/25"
                          : "bg-white/[0.06] text-[#D1D5DB] border border-white/10"
                      }`}
                    >
                      {isTraining ? (
                        <BookOpen className="w-3 h-3" />
                      ) : (
                        <ShieldCheck className="w-3 h-3" />
                      )}
                      <span>{isTraining ? "TECHNICAL TRAINING" : "VERIFIED CERTIFICATION"}</span>
                    </span>
                    <span className="text-xs font-mono text-[#A7AAB2]">{cert.year}</span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-mono text-[#A7AAB2] mb-4">
                    Issuer: <span className="text-[#F5F5F5]">{cert.issuer}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A7AAB2] leading-relaxed mb-5">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#171A20] text-[#D1D5DB] border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Metadata & Verification Link */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <div>
                    {cert.certId ? (
                      <span className="text-[#6E7280]">
                        ID: <span className="text-white">{cert.certId}</span>
                      </span>
                    ) : (
                      <span className="text-[#6E7280]">Verified Academic</span>
                    )}
                  </div>

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#E60000] hover:text-[#FF3333] hover:underline transition-colors group"
                    >
                      <span>Verify Credly</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-[#6E7280] text-[11px]">
                      {isTraining ? "Completed Curriculum" : "Academic Credential"}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
