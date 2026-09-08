"use client";

import React, { useState } from "react";
import {
  Server,
  Cpu,
  Box,
  Network,
  GitBranch,
  Code2,
  Terminal,
  CheckCircle,
  Copy,
  Check,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const BentoGrid: React.FC = () => {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <section id="stack" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          category="TECHNICAL BENTO"
          title="Core Engineering Stack"
          subtitle="A grounded technical stack built on Linux systems administration, automation, containerization, and software problem-solving. No inflated percentages — just practical capabilities."
        />

        {/* Asymmetric Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Card 1: LINUX & RHEL (Large: col-span-12 lg:col-span-8) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-8 group relative rounded-2xl bg-[#111318] border border-white/[0.08] hover:border-white/20 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/60 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E60000]/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#171A20] border border-white/10 text-[11px] font-mono text-[#E60000]">
                  <Server className="w-3.5 h-3.5" />
                  <span>LINUX / SYSTEMS CORE</span>
                </div>
                <span className="text-[11px] font-mono text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded border border-[#22C55E]/20">
                  RHCSA Certified 2026
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Red Hat Enterprise Linux 9.x
              </h3>
              <p className="text-sm text-[#A7AAB2] leading-relaxed mb-6 max-w-2xl">
                Certified administration of enterprise Linux environments. Experienced in kernel parameters, systemd services, LVM storage allocation, strict SELinux targeted policies, and custom Firewalld rules.
              </p>

              {/* Technologies Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "RHEL 9.x",
                  "SELinux Enforcing",
                  "Firewalld Zones",
                  "SSH Hardening",
                  "LVM & File Systems",
                  "Systemd Units",
                  "User/Group ACLs",
                  "Cron Schedules",
                  "Journalctl Logs",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#171A20] border border-white/[0.06] text-[#F5F5F5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Terminal snippet sub-box */}
            <div className="rounded-lg bg-[#0A0C10] border border-white/[0.08] p-3.5 font-mono text-xs text-[#A7AAB2] relative">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-[10px] text-[#6E7280]">
                <span>rhel9.local / admin-session</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      "systemctl status firewalld --no-pager\ngetenforce\nlvs -o lv_name,vg_name,lv_size",
                      "linux-cmd"
                    )
                  }
                  className="flex items-center gap-1 hover:text-white transition-colors"
                  aria-label="Copy terminal snippet"
                >
                  {copiedSnippet === "linux-cmd" ? (
                    <Check className="w-3 h-3 text-[#22C55E]" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                  <span>{copiedSnippet === "linux-cmd" ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <div className="space-y-1 overflow-x-auto text-[11px] sm:text-xs">
                <div>
                  <span className="text-[#E60000]"># </span>
                  <span className="text-white">getenforce</span>{" "}
                  <span className="text-[#22C55E]"># Enforcing</span>
                </div>
                <div>
                  <span className="text-[#E60000]"># </span>
                  <span className="text-white">firewall-cmd --get-active-zones</span>{" "}
                  <span className="text-[#6E7280]"># internal, drop</span>
                </div>
                <div>
                  <span className="text-[#E60000]"># </span>
                  <span className="text-white">systemctl is-active sshd</span>{" "}
                  <span className="text-[#38BDF8]"># active (running)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: AUTOMATION & SCRIPTING (Medium: col-span-12 lg:col-span-4) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-4 group relative rounded-2xl bg-[#111318] border border-white/[0.08] hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/60">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#171A20] border border-white/10 text-[11px] font-mono text-[#EAB308]">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AUTOMATION</span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Bash, Ansible & Python
              </h3>
              <p className="text-xs sm:text-sm text-[#A7AAB2] leading-relaxed mb-5">
                Automating repetitive operations: user provisioning, batch permission verification, log sanitization, and structured Ansible playbooks for system state convergence.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {["Bash Shell", "Ansible Playbooks", "Python", "Cron Automation", "YAML"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#171A20] border border-white/[0.06] text-[#D1D5DB]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-lg bg-[#0A0C10] border border-white/[0.08] p-3 font-mono text-[11px] text-[#A7AAB2]">
              <span className="text-[#6E7280]"># automation/audit.sh</span>
              <p className="text-white mt-1">
                for u in $(cat users.txt); do useradd -m -s /bin/bash &quot;$u&quot;; done
              </p>
            </div>
          </div>

          {/* Card 3: CONTAINERS & CLOUD-NATIVE (Medium: col-span-12 lg:col-span-4) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-4 group relative rounded-2xl bg-[#111318] border border-white/[0.08] hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/60">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#171A20] border border-white/10 text-[11px] font-mono text-[#38BDF8]">
                  <Box className="w-3.5 h-3.5" />
                  <span>CONTAINERS</span>
                </div>
                <span className="text-[10px] font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-1.5 py-0.5 rounded border border-[#38BDF8]/20">
                  DO188 Certified
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Podman & Docker
              </h3>
              <p className="text-xs sm:text-sm text-[#A7AAB2] leading-relaxed mb-5">
                Red Hat DO188 certified container skills. Building container images, configuring rootless user namespaces, mounting persistent storage with SELinux flags (`:Z`), and container networking.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {["Podman", "Docker", "Rootless Mode", "Volumes (:Z)", "Container Bridges", "OpenShift Basics"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#171A20] border border-white/[0.06] text-[#D1D5DB]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-lg bg-[#0A0C10] border border-white/[0.08] p-3 font-mono text-[11px] text-[#A7AAB2]">
              <span className="text-[#38BDF8]">$ </span>
              <span className="text-white">podman run -d --name db -v /data:/var/lib/mysql:Z</span>
            </div>
          </div>

          {/* Card 4: NETWORKING & PROTOCOLS (Medium: col-span-12 lg:col-span-4) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-4 group relative rounded-2xl bg-[#111318] border border-white/[0.08] hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/60">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#171A20] border border-white/10 text-[11px] font-mono text-[#A855F7]">
                  <Network className="w-3.5 h-3.5" />
                  <span>NETWORKING</span>
                </div>
                <span className="text-[10px] font-mono text-[#A7AAB2] bg-white/[0.05] px-1.5 py-0.5 rounded">
                  Infosys 2025
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                TCP/IP & Packet Analysis
              </h3>
              <p className="text-xs sm:text-sm text-[#A7AAB2] leading-relaxed mb-5">
                Practical comprehension of OSI layer 2 through 7 flows. Packet inspection with Wireshark, routing tables, DNS resolution, DHCP leasing, and HTTP/HTTPS network dynamics.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {["TCP/IP", "Wireshark", "DNS / DHCP", "HTTP/HTTPS", "Routing Tables", "VLAN Basics"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#171A20] border border-white/[0.06] text-[#D1D5DB]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-lg bg-[#0A0C10] border border-white/[0.08] p-3 font-mono text-[11px] text-[#A7AAB2]">
              <span className="text-[#A855F7]">$ </span>
              <span className="text-white">tshark -i eth0 -f &quot;tcp port 443&quot; -c 10</span>
            </div>
          </div>

          {/* Card 5: VERSION CONTROL & WORKFLOW (Small: col-span-12 lg:col-span-4) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-4 group relative rounded-2xl bg-[#111318] border border-white/[0.08] hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/60">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#171A20] border border-white/10 text-[11px] font-mono text-[#F97316]">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>DEV TOOLS</span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Git & GitHub Workflows
              </h3>
              <p className="text-xs sm:text-sm text-[#A7AAB2] leading-relaxed mb-5">
                Disciplined branch workflows, semantic commit hygiene, repository management, and structured documentation of infrastructure configurations.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {["Git Version Control", "GitHub", "Branch Strategies", "Technical Docs"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#171A20] border border-white/[0.06] text-[#D1D5DB]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-lg bg-[#0A0C10] border border-white/[0.08] p-3 font-mono text-[11px] text-[#A7AAB2]">
              <span className="text-[#F97316]">$ </span>
              <span className="text-white">git checkout -b infra/rhel-hardening</span>
            </div>
          </div>

          {/* Card 6: SOFTWARE ENGINEERING & PROBLEM SOLVING (Large: col-span-12 lg:col-span-12) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-12 group relative rounded-2xl bg-[#111318] border border-white/[0.08] hover:border-white/20 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#171A20] border border-white/10 text-[11px] font-mono text-[#22C55E] mb-3">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>SOFTWARE ENGINEERING & FOUNDATIONS</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Systematic Problem Solving & Application Architecture
                </h3>
                <p className="text-sm text-[#A7AAB2] leading-relaxed mb-4 max-w-3xl">
                  Applying computer science principles to build resilient software. Solid grounding in data structures, algorithms, relational database schemas with SQL, Python programming, and methodical system troubleshooting.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Problem Solving",
                    "Python",
                    "C Fundamentals",
                    "SQL Queries & Schemas",
                    "System Troubleshooting",
                    "Debugging & Trace Analysis",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#171A20] border border-white/[0.06] text-[#F5F5F5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 rounded-xl bg-[#0B0D12] border border-white/[0.08] p-4 text-xs font-mono">
                <div className="text-[#6E7280] pb-2 mb-2 border-b border-white/[0.06] text-[11px]">
                  engineering_approach.py
                </div>
                <div className="space-y-1 text-[11px]">
                  <p className="text-[#38BDF8]">def solve_engineering_problem():</p>
                  <p className="text-[#A7AAB2] pl-4">1. Understand OS & network context</p>
                  <p className="text-[#A7AAB2] pl-4">2. Isolate failure domain (strace/logs)</p>
                  <p className="text-[#A7AAB2] pl-4">3. Design clean, modular logic</p>
                  <p className="text-[#22C55E] pl-4">return reliable_solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
