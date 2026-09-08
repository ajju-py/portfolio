import React from "react";
import { Terminal, Shield, Cpu, Code2, Network, CheckCircle2, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./SectionHeading";

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Terminal,
      title: "RHEL & Systems Administration",
      text: "RHCSA certified with practical lab depth across RHEL 9.x: SELinux policies, Firewalld configurations, systemd services, LVM storage, and SSH hardening.",
    },
    {
      icon: Cpu,
      title: "Automation & Scripting",
      text: "Practical automation using Bash shell scripts and Ansible playbooks for user management, system auditing, reproducible environments, and scheduled task pipelines.",
    },
    {
      icon: Shield,
      title: "Containers & Cloud-Native",
      text: "Certified in cloud-native applications with DO188. Hands-on deployment of rootless container pods, custom bridge networking, persistent volume mounts, and Podman tooling.",
    },
    {
      icon: Code2,
      title: "Software & Problem Solving",
      text: "Undergraduate Computer Science studies blending fundamental data structures, algorithms, Python programming, and SQL database models with systems-level understanding.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          category="ABOUT"
          title="Engineering Profile"
          subtitle="Bridging core Linux infrastructure with modern software engineering principles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Narrative Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-[#111318] border border-white/[0.08] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E60000]/5 rounded-bl-full pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-4">
                Systems-Minded Software Engineer
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#A7AAB2] leading-relaxed">
                <p>
                  I am a Computer Science undergraduate at{" "}
                  <span className="text-white font-medium">
                    Maharashtra Institute of Technology
                  </span>{" "}
                  (Class of 2027) with an academic foundation built on a 3-year Diploma in Computer Engineering.
                </p>
                <p>
                  Rather than viewing software as isolated code in an editor, I focus on how applications interact with the host OS, the kernel, container runtimes, and the underlying network. As an{" "}
                  <span className="text-white font-medium">
                    RHCSA certified administrator
                  </span>{" "}
                  and{" "}
                  <span className="text-white font-medium">
                    Red Hat Certified Cloud-native Developer
                  </span>
                  , I bring real hands-on experience running and securing Linux workloads.
                </p>
                <p>
                  My toolkit combines Bash and Ansible for automation, Python and SQL for application logic and data modeling, Docker and Podman for containerized isolation, and Wireshark with TCP/IP for network-level diagnostics.
                </p>
              </div>

              {/* Bulleted verification items */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#F5F5F5]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                  <span>RHCSA Certified (2026)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                  <span>DO188 Cloud-Native Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                  <span>B.Tech Computer Science (2024–2027)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                  <span>Diploma Computer Engineering (2020–2023)</span>
                </div>
              </div>
            </div>

            {/* Quote / Ethos Box */}
            <div className="p-4 sm:p-5 rounded-lg bg-[#171A20] border-l-2 border-[#E60000] text-xs sm:text-sm text-[#A7AAB2] italic font-mono">
              &ldquo;Reliable software requires an intimate respect for the environment it runs in — from kernel parameters and user permissions to network sockets and container namespaces.&rdquo;
            </div>
          </div>

          {/* Right Engineering Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#111318] border border-white/[0.08] hover:border-white/20 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#171A20] border border-white/10 flex items-center justify-center text-[#E60000] shrink-0 group-hover:bg-[#E60000] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-[#E60000] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-[#A7AAB2] leading-relaxed">
                        {pillar.text}
                      </p>
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
