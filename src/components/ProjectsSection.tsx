"use client";

import React, { useState } from "react";
import {
  Server,
  ShoppingBag,
  Radio,
  Box,
  ArrowUpRight,
  GitBranch,
  Terminal,
  Shield,
  Layers,
} from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { SectionHeading } from "./SectionHeading";
import { ProjectModal } from "./ProjectModal";

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (category: string) => {
    switch (category) {
      case "Infrastructure":
        return Server;
      case "Software":
        return ShoppingBag;
      case "Networking":
        return Radio;
      case "Containers":
        return Box;
      default:
        return Terminal;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          category="PROJECTS"
          title="Featured Engineering Projects"
          subtitle="Real systems administration labs, software architectures, and controlled networking research."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => {
            const Icon = getProjectIcon(project.category);
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-[#111318] border border-white/[0.08] hover:border-white/20 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 hover:-translate-y-1 overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#E60000]/5 rounded-bl-full group-hover:bg-[#E60000]/10 transition-colors pointer-events-none" />

                <div>
                  {/* Top Metadata Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#171A20] border border-white/10 flex items-center justify-center text-[#E60000] group-hover:bg-[#E60000] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono text-[#A7AAB2] uppercase tracking-wider">
                        0{idx + 1} // {project.category}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-[#D1D5DB] bg-[#171A20] border border-white/10 px-2 py-0.5 rounded">
                      {project.badge}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-xs font-mono text-[#E60000] mb-3">
                    {project.subtitle}
                  </p>

                  {/* Short Summary */}
                  <p className="text-sm text-[#A7AAB2] leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6 text-xs text-[#D1D5DB]">
                    {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#E60000] font-mono text-xs">▹</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#171A20] text-[#D1D5DB] border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:text-[#E60000] transition-colors focus:outline-none"
                  >
                    <span>Inspect Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-[#A7AAB2] hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <GitBranch className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Repo</span>
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-[#6E7280]">
                        Lab Research
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Viewer */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
