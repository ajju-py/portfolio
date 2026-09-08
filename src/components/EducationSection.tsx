import React from "react";
import { GraduationCap, Trophy, Award, MapPin, Calendar } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./SectionHeading";

export const EducationSection: React.FC = () => {
  const { education, achievements } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          category="ACADEMICS & HONORS"
          title="Education & Achievements"
          subtitle="A solid academic background in computer science with verified competitive recognition."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education Cards (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#111318] border border-white/[0.08] hover:border-white/20 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#171A20] border border-white/10 flex items-center justify-center text-[#E60000] group-hover:bg-[#E60000] group-hover:text-white transition-colors">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.degree}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A7AAB2]">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-1.5 text-xs font-mono text-[#A7AAB2]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#6E7280]" />
                      <span>{item.period}</span>
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded uppercase font-semibold ${
                        item.status === "Expected"
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#A7AAB2] leading-relaxed pl-0 sm:pl-10.5">
                  <span className="text-[#6E7280]">Key Focus: </span>
                  {item.focus}
                </p>

                <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-[#6E7280] pl-0 sm:pl-10.5">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Honors & Recognition Cards (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-[#14171E] border border-white/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#E60000]/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-2 text-xs font-mono text-[#E60000] font-semibold mb-4">
                <Trophy className="w-4 h-4" />
                <span>HONORS & RECOGNITION</span>
              </div>

              <div className="space-y-6">
                {achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E60000]" />
                      <h4 className="text-sm font-bold text-white">
                        {ach.title}
                      </h4>
                    </div>
                    <div className="text-xs font-mono text-[#E60000]">
                      {ach.organization}
                    </div>
                    <p className="text-xs text-[#A7AAB2] leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Ethos Box */}
            <div className="p-5 rounded-2xl bg-[#111318] border border-white/[0.08] text-xs font-mono text-[#A7AAB2] space-y-2">
              <div className="text-white font-semibold">Continuous Engineering Discipline</div>
              <p className="text-[11px] leading-relaxed text-[#6E7280]">
                Balancing structured university coursework in Computer Science with rigorous industry certifications and hands-on laboratory practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
