"use client";

import React from "react";
import { ArrowUp, Mail, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#08090B] py-12 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Subtitle */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-white text-sm tracking-wider">
                AJAY TANDALE
              </span>
              <span className="text-[#E60000]">•</span>
              <span className="text-[#A7AAB2]">Software Engineer</span>
            </div>
            <p className="text-[#6E7280]">
              Linux • Automation • Containers • Infrastructure
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-[#A7AAB2]">
            {profile.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            )}
            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>

          {/* Back to top & Copyright */}
          <div className="flex items-center gap-4 text-center md:text-right">
            <span className="text-[#6E7280]">
              &copy; 2026 Ajay Tandale
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#111318] border border-white/10 text-[#A7AAB2] hover:text-white hover:border-white/20 transition-all"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Engineering System Notice */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6E7280] gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
            <span>Built with Next.js 16, TypeScript, &amp; Tailwind CSS</span>
          </div>
          <div>
            <span>RHCSA &amp; DO188 Credential ID: 260-010-335</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
