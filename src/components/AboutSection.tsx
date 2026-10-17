import React from "react";
import { Terminal, Shield, Cpu, Code2, Cloud, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./SectionHeading";

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Terminal,
      title: "Linux & Red Hat",
      text: "RHCSA-certified foundation in Linux administration, services, storage, permissions, SELinux, firewalld and practical troubleshooting.",
    },
    {
      icon: Cloud,
      title: "Cloud Engineering",
      text: "Building AWS fundamentals through AWS CLI, S3 practice in a local AWS-compatible emulator, Terraform and Python/Boto3.",
    },
    {
      icon: Shield,
      title: "Containers & Security",
      text: "Red Hat DO188-certified container development, with focus on Podman workflows, networking, volumes and safer runtime practices.",
    },
    {
      icon: Cpu,
      title: "Automation & Tooling",
      text: "Learning to make operational tasks repeatable with Bash, Python, Ansible, Git and infrastructure-as-code workflows.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          category="ABOUT"
          title="Cloud, Linux & Infrastructure"
          subtitle="A systems-first engineering approach: understand the environment, automate the repeatable work, and verify the result."
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-[#111318] border border-white/[0.08] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E60000]/5 rounded-bl-full pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-4">Learning by building and verifying</h3>
              <div className="space-y-4 text-sm sm:text-base text-[#A7AAB2] leading-relaxed">
                <p>
                  I am pursuing a <span className="text-white font-medium">B.Tech in Computer Science</span> and preparing for entry-level cloud engineering, Linux and DevOps opportunities.
                </p>
                <p>
                  My current strengths are Linux and Red Hat fundamentals, backed by <span className="text-white font-medium">RHCSA</span> and <span className="text-white font-medium">DO188 / EX188</span> credentials. I am extending that foundation into AWS, Terraform and Python/Boto3 using hands-on exercises.
                </p>
                <p>
                  I document what I build, check the resulting system state, and distinguish local emulator results from behavior in real AWS environments. The goal is to understand the commands and architecture—not merely copy and paste them.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#F5F5F5]">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" /><span>RHCSA — Red Hat</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" /><span>DO188 / EX188 — Podman</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" /><span>B.Tech Computer Science</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" /><span>AWS CLI & Terraform learning lab</span></div>
              </div>
            </div>
            <div className="p-4 sm:p-5 rounded-lg bg-[#171A20] border-l-2 border-[#E60000] text-xs sm:text-sm text-[#A7AAB2] italic font-mono">
              “Build it. Inspect it. Test it. Document what actually happened.”
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return <div key={idx} className="p-5 rounded-xl bg-[#111318] border border-white/[0.08] hover:border-white/20 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#171A20] border border-white/10 flex items-center justify-center text-[#E60000] shrink-0 group-hover:bg-[#E60000] group-hover:text-white transition-colors"><Icon className="w-4 h-4" /></div>
                  <div><h4 className="text-sm font-semibold text-white group-hover:text-[#E60000] transition-colors">{pillar.title}</h4><p className="mt-1.5 text-xs text-[#A7AAB2] leading-relaxed">{pillar.text}</p></div>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
