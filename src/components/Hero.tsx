"use client";

import React from "react";
import { ArrowRight, Download, Mail, Terminal, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { HeroVisual } from "./HeroVisual";

export const Hero: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient technical effects */}
      <div className="absolute inset-0 tech-grid-bg opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] hero-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111318] border border-white/10 shadow-sm text-xs font-mono text-[#A7AAB2]">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-[#F5F5F5]">{profile.status}</span>
              <span className="text-white/20">|</span>
              <span className="text-[#E60000] font-semibold">RHCSA #260-010-335</span>
            </div>

            {/* Main Confident Display Heading */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-mono tracking-widest text-[#E60000] uppercase font-semibold flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#E60000]" />
                <span>{profile.role}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.05]">
                AJAY <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-[#A7AAB2]">
                  TANDALE
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-[#D1D5DB] font-medium tracking-tight pt-1 max-w-xl">
                Building with{" "}
                <span className="text-white font-semibold underline decoration-[#E60000]/60 decoration-2 underline-offset-4">
                  Linux
                </span>
                , automation, containers & infrastructure.
              </p>
            </div>

            {/* Narrative Summary */}
            <p className="text-sm sm:text-base text-[#A7AAB2] leading-relaxed max-w-xl">
              {profile.summary}
            </p>

            {/* Technical Chips / Sub-specializations */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-[#A7AAB2]">
              <span className="px-2.5 py-1 rounded bg-[#111318] border border-white/[0.08] text-white">
                RHEL 9.x
              </span>
              <span className="px-2.5 py-1 rounded bg-[#111318] border border-white/[0.08] text-white">
                Ansible & Bash
              </span>
              <span className="px-2.5 py-1 rounded bg-[#111318] border border-white/[0.08] text-white">
                Podman (DO188)
              </span>
              <span className="px-2.5 py-1 rounded bg-[#111318] border border-white/[0.08] text-white">
                TCP/IP & Wireshark
              </span>
              <span className="px-2.5 py-1 rounded bg-[#111318] border border-white/[0.08] text-white">
                Python & SQL
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#E60000] hover:bg-[#FF1A1A] text-white font-semibold text-sm shadow-lg shadow-[#E60000]/20 transition-all hover:shadow-[#E60000]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href={profile.resumeUrl}
                download="Ajay_Tandale_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#111318] hover:bg-[#171A20] text-[#F5F5F5] font-medium text-sm border border-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-[#A7AAB2]" />
                <span>Download Resume</span>
              </a>

              {/* Additional CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-sm text-[#A7AAB2] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Bottom Proof Strip */}
            <div className="pt-4 border-t border-white/[0.08] w-full grid grid-cols-3 gap-4 max-w-lg text-xs">
              <div>
                <div className="font-mono font-bold text-white text-sm sm:text-base">
                  RHCSA 2026
                </div>
                <div className="text-[#6E7280] text-[11px]">System Admin</div>
              </div>
              <div>
                <div className="font-mono font-bold text-white text-sm sm:text-base">
                  DO188
                </div>
                <div className="text-[#6E7280] text-[11px]">Cloud-Native Dev</div>
              </div>
              <div>
                <div className="font-mono font-bold text-white text-sm sm:text-base">
                  1st Rank
                </div>
                <div className="text-[#6E7280] text-[11px]">Technical Quiz</div>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Engineering Visual */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
