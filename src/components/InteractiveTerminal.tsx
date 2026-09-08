"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, RotateCcw, Copy, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const initialLogs: CommandLog[] = [
    {
      id: "init-1",
      command: "whoami",
      output: <span className="text-[#22C55E]">ajay-tandale</span>,
    },
    {
      id: "init-2",
      command: "focus",
      output: (
        <span className="text-white">
          software-engineering &amp; cloud-infrastructure
        </span>
      ),
    },
    {
      id: "init-3",
      command: "systems",
      output: (
        <span className="text-[#38BDF8]">
          linux / rhel 9.x / kernel 5.14 / selinux-enforcing
        </span>
      ),
    },
    {
      id: "init-4",
      command: "automation",
      output: (
        <span className="text-[#EAB308]">
          bash / python / ansible playbooks / cron
        </span>
      ),
    },
    {
      id: "init-5",
      command: "containers",
      output: (
        <span className="text-[#F97316]">
          podman (do188 certified) / docker / rootless / openshift basics
        </span>
      ),
    },
  ];

  const [logs, setLogs] = useState<CommandLog[]>(initialLogs);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setLogs([]);
      setInputVal("");
      return;
    }

    let output: React.ReactNode;

    switch (trimmed) {
      case "whoami":
        output = <span className="text-[#22C55E]">ajay-tandale</span>;
        break;
      case "focus":
        output = (
          <span className="text-white">
            software-engineering &amp; cloud-infrastructure
          </span>
        );
        break;
      case "systems":
        output = (
          <span className="text-[#38BDF8]">
            linux / rhel 9.x / kernel 5.14 / selinux-enforcing
          </span>
        );
        break;
      case "automation":
        output = (
          <span className="text-[#EAB308]">
            bash / python / ansible playbooks / cron
          </span>
        );
        break;
      case "containers":
        output = (
          <span className="text-[#F97316]">
            podman (do188 certified) / docker / rootless / openshift basics
          </span>
        );
        break;
      case "certifications":
        output = (
          <div className="space-y-1 text-xs">
            <div className="text-white">• Red Hat Certified System Administrator (RHCSA) — 2026</div>
            <div className="text-white">• Red Hat Certified Developer in Cloud-native Applications (DO188) — 2026</div>
            <div className="text-white">• Networking and Web Technology — Infosys Springboard — 2025</div>
            <div className="text-[#A7AAB2]">• RHCE Training (Ansible Automation) — Red Hat Academy Curriculum</div>
            <div className="text-[#6E7280]">Verification ID: 260-010-335</div>
          </div>
        );
        break;
      case "cat resume.txt":
      case "resume":
        output = (
          <div className="text-xs space-y-1 text-[#D1D5DB]">
            <p>NAME: Ajay Tandale</p>
            <p>ROLE: Entry-Level Software Engineer (Linux/Red Hat/Containers)</p>
            <p>EMAIL: ajaytandale8983@gmail.com</p>
            <p>EDUCATION: B.Tech CS (2024-2027) | Diploma Comp Eng (2020-2023)</p>
            <p className="text-[#E60000]">PDF available at: /Ajay_Tandale_Resume.pdf</p>
          </div>
        );
        break;
      case "uname -a":
        output = (
          <span className="text-[#A7AAB2]">
            Linux rhel9-edge.local 5.14.0-427.el9.x86_64 #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux
          </span>
        );
        break;
      case "help":
        output = (
          <div className="text-xs text-[#A7AAB2] space-y-0.5">
            <div>Available commands:</div>
            <div className="text-white">
              whoami, focus, systems, automation, containers, certifications, resume, uname -a, clear, help
            </div>
          </div>
        );
        break;
      default:
        output = (
          <span className="text-[#E60000]">
            bash: {trimmed}: command not found. Type &apos;help&apos; for list of commands.
          </span>
        );
    }

    setLogs((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, command: trimmed, output },
    ]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputVal);
    }
  };

  const copySession = () => {
    const text = logs.map((l) => `$ ${l.command}`).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetTerminal = () => {
    setLogs(initialLogs);
  };

  return (
    <section id="terminal" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          category="SYSTEM DETAIL"
          title="Interactive Terminal Environment"
          subtitle="A live telemetry console demonstrating core engineering paradigms and command-line familiarity."
        />

        <div className="max-w-4xl mx-auto rounded-2xl bg-[#090B0E] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#111318] border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E60000]/80" />
              <span className="w-3 h-3 rounded-full bg-[#EAB308]/80" />
              <span className="w-3 h-3 rounded-full bg-[#22C55E]/80" />
              <div className="flex items-center gap-1.5 ml-2 text-xs text-[#A7AAB2]">
                <TerminalIcon className="w-3.5 h-3.5 text-[#E60000]" />
                <span>ajay@rhel9: ~ (bash)</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#A7AAB2]">
              <button
                type="button"
                onClick={copySession}
                className="p-1 hover:text-white transition-colors"
                title="Copy Terminal History"
                aria-label="Copy terminal text"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-[#22C55E]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
              <button
                type="button"
                onClick={resetTerminal}
                className="p-1 hover:text-white transition-colors"
                title="Reset Terminal"
                aria-label="Reset terminal session"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick command buttons strip */}
          <div className="px-4 py-2 bg-[#0D0F14] border-b border-white/[0.06] flex items-center gap-2 overflow-x-auto text-[11px]">
            <span className="text-[#6E7280] whitespace-nowrap">Quick Run:</span>
            {[
              "whoami",
              "focus",
              "systems",
              "automation",
              "containers",
              "certifications",
              "cat resume.txt",
              "clear",
            ].map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded bg-[#171A20] hover:bg-[#E60000] hover:text-white text-[#A7AAB2] transition-colors whitespace-nowrap border border-white/[0.06]"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div
            ref={scrollRef}
            className="p-4 sm:p-6 space-y-4 max-h-[380px] overflow-y-auto bg-[#090B0E] tech-grid-bg"
          >
            {logs.map((log) => (
              <div key={log.id} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#E60000] font-semibold">$</span>
                  <span className="text-white">{log.command}</span>
                </div>
                <div className="pl-4 text-[#A7AAB2] leading-relaxed">
                  {log.output}
                </div>
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-[#E60000] font-semibold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. 'help', 'focus')..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm placeholder-[#4B5162]"
                aria-label="Interactive terminal input prompt"
              />
              <span className="w-2 h-4 bg-[#E60000] animate-terminal-cursor hidden sm:inline-block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
