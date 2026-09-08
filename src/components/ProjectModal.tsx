"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, ShieldCheck, Terminal, Layers, CheckCircle2, GitBranch } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#111318] border border-white/15 rounded-2xl shadow-2xl overflow-y-auto flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#14171E] border-b border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E60000]" />
            <span className="text-xs font-mono text-[#A7AAB2] uppercase tracking-wider">
              {project.category} SPECIFICATION
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A7AAB2] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Badge */}
          <div>
            <div className="inline-block px-2.5 py-1 rounded text-xs font-mono bg-[#171A20] text-[#E60000] border border-white/10 mb-2">
              {project.badge}
            </div>
            <h2 id="modal-headline" className="text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-[#A7AAB2] font-mono mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <div className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
            {project.description}
          </div>

          {/* Architecture & Problem Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#0D0F14] border border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono text-white font-semibold mb-2">
                <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>PROBLEM & CONTEXT</span>
              </div>
              <p className="text-xs text-[#A7AAB2] leading-relaxed">
                {project.details.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0D0F14] border border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono text-white font-semibold mb-2">
                <Terminal className="w-3.5 h-3.5 text-[#EAB308]" />
                <span>SYSTEM ARCHITECTURE</span>
              </div>
              <p className="text-xs text-[#A7AAB2] leading-relaxed">
                {project.details.architecture}
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A7AAB2] mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              <span>KEY ENGINEERING DELIVERABLES</span>
            </h4>
            <div className="space-y-2">
              {project.details.keyDeliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D1D5DB] p-2.5 rounded-lg bg-[#14171E] border border-white/[0.06]"
                >
                  <span className="font-mono text-[#E60000] text-xs mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Hardening (if present) */}
          {project.details.securityHardening && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#A7AAB2] mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span>SECURITY HARDENING & DEFENSE</span>
              </h4>
              <div className="space-y-2">
                {project.details.securityHardening.map((sec, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-[#A7AAB2] p-2.5 rounded-lg bg-[#0E1015] border border-white/[0.06]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-1.5 shrink-0" />
                    <span>{sec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A7AAB2] mb-2.5">
              VERIFIED TECHNOLOGIES
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#171A20] text-white border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#14171E] border-t border-white/10 flex items-center justify-between">
          <div>
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E60000] hover:bg-[#FF1A1A] text-white text-xs font-mono font-medium transition-colors"
              >
                <GitBranch className="w-3.5 h-3.5" />
                <span>View Repository on GitHub</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            ) : (
              <span className="text-xs font-mono text-[#6E7280]">
                Controlled Academic / Research Lab
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-mono text-[#A7AAB2] hover:text-white bg-[#111318] border border-white/10 hover:border-white/20 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
