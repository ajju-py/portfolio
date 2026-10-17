"use client";

import React, { useState } from "react";
import { Server, Shield, Box, Network, Cpu, Cloud, CheckCircle2 } from "lucide-react";

export const HeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>("linux");

  const nodes = [
    { id: "linux", title: "Red Hat Linux", type: "SYSTEMS", meta: "Services • Storage • SELinux", status: "Core skill", accent: "#E60000", x: 50, y: 50, icon: Server },
    { id: "cloud", title: "AWS Lab", type: "CLOUD", meta: "CLI • S3 • Terraform practice", status: "Learning lab", accent: "#EAB308", x: 18, y: 26, icon: Cloud },
    { id: "containers", title: "Podman / DO188", type: "CONTAINERS", meta: "Images • Volumes • Networks", status: "Certified", accent: "#38BDF8", x: 82, y: 26, icon: Box },
    { id: "automation", title: "Automation", type: "BASH & ANSIBLE", meta: "Scripts • Configuration", status: "Developing", accent: "#22C55E", x: 20, y: 76, icon: Cpu },
    { id: "networking", title: "Networking", type: "CONNECTIVITY", meta: "TCP/IP • DNS • Diagnostics", status: "Fundamentals", accent: "#A855F7", x: 80, y: 76, icon: Network },
  ];

  const activeNodeData = nodes.find((n) => n.id === activeNode) || nodes[0];

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#E60000]/10 via-transparent to-blue-500/5 rounded-2xl blur-xl pointer-events-none" />
      <div className="relative rounded-xl bg-[#0D0F14] border border-white/[0.09] shadow-2xl overflow-hidden font-mono">
        <div className="flex items-center justify-between px-4 py-3 bg-[#13161D] border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E60000]/80" /><span className="w-2.5 h-2.5 rounded-full bg-[#EAB308]/80" /><span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/80" />
            <span className="text-[11px] text-[#A7AAB2] ml-2">ajay://engineering-stack</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded border border-[#22C55E]/20"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" /><span>LAB_PROFILE</span></div>
        </div>
        <div className="relative p-6 sm:p-8 bg-[#0B0D12] tech-grid-bg min-h-[340px] flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full max-h-[300px] overflow-visible" aria-label="Interactive cloud and infrastructure learning diagram">
            <defs><linearGradient id="infraLine" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#E60000" stopOpacity="0.4" /><stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" /></linearGradient></defs>
            {nodes.slice(1).map((node) => <line key={node.id} x1="50" y1="50" x2={node.x} y2={node.y} stroke={node.accent} strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.5" />)}
            <circle cx="50" cy="50" r="14" fill="none" stroke="#E60000" strokeWidth="0.4" strokeOpacity="0.25" className="animate-pulse" /><circle cx="50" cy="50" r="22" fill="none" stroke="#E60000" strokeWidth="0.3" strokeOpacity="0.12" />
          </svg>
          <div className="absolute inset-0 p-4 pointer-events-none">
            {nodes.map((node) => {
              const isSelected = activeNode === node.id;
              const Icon = node.icon;
              return <div key={node.id} style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }} className="absolute pointer-events-auto">
                <button type="button" onClick={() => setActiveNode(node.id)} className={`group relative flex flex-col items-center p-2 sm:p-2.5 rounded-lg transition-all focus:outline-none focus:ring-1 focus:ring-white/40 ${isSelected ? "bg-[#171A20] border border-white/30 shadow-lg scale-105" : "bg-[#111318]/90 hover:bg-[#171A20] border border-white/10 hover:border-white/20"}`} title={`Inspect ${node.title}`}>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center transition-colors" style={{ backgroundColor: `${node.accent}15`, color: node.accent }}><Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></div>
                  <span className="mt-1 text-[10px] font-semibold text-white tracking-wider whitespace-nowrap">{node.title.split(" ")[0]}</span>
                  <span className="text-[8px] text-[#A7AAB2] whitespace-nowrap hidden sm:block">{node.type}</span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full border border-[#08090B]" style={{ backgroundColor: node.accent }} />
                </button>
              </div>;
            })}
          </div>
        </div>
        <div className="px-4 py-3 bg-[#111318] border-t border-white/[0.08] text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2"><span className="text-[#6E7280]">FOCUS_AREA:</span><span className="text-white font-semibold flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-[#22C55E]" />{activeNodeData.title}</span></div>
            <div className="text-[11px] text-[#A7AAB2]"><span style={{ color: activeNodeData.accent }}>{activeNodeData.status}</span><span className="mx-2 text-white/20">|</span><span>{activeNodeData.meta}</span></div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-white/[0.06] text-[10px] bg-[#090B0E] text-[#6E7280] divide-x divide-white/[0.06]">
          <div className="p-2 text-center"><span>CERT: </span><span className="text-[#F5F5F5]">RHCSA</span></div>
          <div className="p-2 text-center"><span>CONTAINER: </span><span className="text-[#38BDF8]">DO188</span></div>
          <div className="p-2 text-center"><span>CLOUD: </span><span className="text-[#EAB308]">AWS LAB</span></div>
          <div className="p-2 text-center"><span>CODE: </span><span className="text-[#22C55E]">GIT</span></div>
        </div>
      </div>
    </div>
  );
};
