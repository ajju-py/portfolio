import React from "react";
import { Terminal, Cpu, Box, Code, Sparkles, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./SectionHeading";

export const CurrentFocus: React.FC = () => {
  const { currentFocus } = PORTFOLIO_DATA;

  const getFocusIcon = (iconName: string) => {
    switch (iconName) {
      case "terminal":
        return Terminal;
      case "cpu":
        return Cpu;
      case "box":
        return Box;
      case "code":
        return Code;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="08"
          category="CURRENT FOCUS"
          title="Currently Building & Deepening"
          subtitle="Proactive technical growth areas bridging system engineering discipline with modern software development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentFocus.map((item, idx) => {
            const Icon = getFocusIcon(item.icon);
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-[#111318] border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#171A20] border border-white/10 flex items-center justify-center text-[#E60000] mb-4 group-hover:bg-[#E60000] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#A7AAB2] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-[#E60000]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E60000] animate-pulse" />
                  <span>Active Exploration</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
