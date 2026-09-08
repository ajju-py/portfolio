import React from "react";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./SectionHeading";

export const TimelineSection: React.FC = () => {
  const { timeline } = PORTFOLIO_DATA;

  return (
    <section id="journey" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          category="TIMELINE"
          title="Engineering Journey"
          subtitle="A factual progression from foundational hardware & programming to enterprise Linux and software engineering."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute top-2 bottom-2 left-4 sm:left-1/2 sm:-translate-x-1/2 w-[2px] bg-gradient-to-b from-[#E60000] via-white/10 to-[#E60000]/40" />

          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#08090B] border-2 border-[#E60000] shadow-md z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E60000]" />
                  </div>

                  {/* Spacer for Desktop Alignment */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content */}
                  <div
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven ? "sm:pr-10" : "sm:pl-10"
                    } w-full`}
                  >
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#111318] border border-white/[0.08] hover:border-white/20 transition-all shadow-sm group">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-semibold text-[#E60000] bg-[#E60000]/10 border border-[#E60000]/20">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-mono text-[#6E7280]">
                          {item.role}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#F5F5F5]">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#A7AAB2] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#171A20] text-[#D1D5DB] border border-white/[0.06]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
