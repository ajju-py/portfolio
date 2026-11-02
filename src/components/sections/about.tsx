"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "motion/react";
import Image from "next/image";
import { CheckCircle2, Award, Users, Terminal, Cloud } from "lucide-react";

export default function AboutSection() {
  const achievements = [
    {
      icon: <Award className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />,
      text: (
        <>
          <strong className="text-foreground font-semibold">RHCSA</strong> – Red Hat Certified System Administrator (EX200)
        </>
      ),
    },
    {
      icon: <Award className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />,
      text: (
        <>
          <strong className="text-foreground font-semibold">DO188</strong> – Red Hat Certified Developer in Cloud-native Applications
        </>
      ),
    },
    {
      icon: <Users className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />,
      text: (
        <>
          <strong className="text-foreground font-semibold">Mentorship:</strong> Helped 15+ college mates prepare for and pass DO188
        </>
      ),
    },
    {
      icon: <Terminal className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />,
      text: (
        <>
          <strong className="text-foreground font-semibold">Hands-on Experience:</strong> Linux systems administration, Podman, Docker, and infrastructure automation
        </>
      ),
    },
    {
      icon: <Cloud className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />,
      text: (
        <>
          <strong className="text-foreground font-semibold">Cloud &amp; IaC:</strong> Actively building and deploying with AWS, Terraform, and Ansible
        </>
      ),
    },
  ];

  return (
    <SectionWrapper id="about" className="w-full min-h-screen py-24 px-4 max-w-7xl mx-auto">
      <SectionHeader
        id="about"
        title={
          <>
            CURIOUS BY NATURE.
            <br />
            ENGINEER BY CHOICE.
          </>
        }
        desc="Personal Story & Engineering Philosophy"
        className="mb-14"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-card/90 dark:bg-card/80 border border-border/80 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Portrait & Credential Column */}
          <div className="lg:col-span-4 flex flex-col items-center text-center lg:sticky lg:top-24">
            <div className="relative size-44 sm:size-52 rounded-2xl overflow-hidden border-2 border-border/80 shadow-md">
              <Image
                src="/images/ajay-redhat-portrait.png"
                alt="Ajay Tandale"
                fill
                sizes="(max-width: 768px) 176px, 208px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="font-display font-bold text-lg text-foreground">Ajay Tandale</h3>
              <p className="text-xs font-mono text-muted-foreground">
                Chhatrapati Sambhajinagar, Maharashtra
              </p>
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
              <span className="text-[11px] font-mono font-medium text-red-500 border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 rounded-full">
                RHCSA (EX200)
              </span>
              <span className="text-[11px] font-mono font-medium text-red-500 border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 rounded-full">
                DO188 (EX188)
              </span>
            </div>
          </div>

          {/* Narrative & Achievements Column */}
          <div className="lg:col-span-8 space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed font-sans">
            {/* Main Introduction */}
            <p className="text-lg sm:text-xl font-medium text-foreground leading-snug">
              I&apos;m <span className="font-bold text-foreground">Ajay Tandale</span> — a Computer Science student and 2× Red Hat Certified professional building my expertise in <span className="text-foreground font-semibold">Linux</span>, <span className="text-foreground font-semibold">Cloud Engineering</span>, and <span className="text-foreground font-semibold">DevOps</span>.
            </p>

            {/* Story Paragraphs */}
            <p>
              My curiosity about computers started back in 3rd standard. What began as an interest in understanding how computers work gradually evolved into a passion for <span className="text-foreground font-medium">Linux</span>, <span className="text-foreground font-medium">networking</span>, <span className="text-foreground font-medium">cloud infrastructure</span>, and <span className="text-foreground font-medium">automation</span>.
            </p>

            <p>
              Instead of limiting myself to theoretical learning, I prefer experimenting, building practical projects, troubleshooting systems, and understanding what happens behind the scenes.
            </p>

            <p>
              From managing <span className="text-foreground font-medium">Linux environments</span> and working with <span className="text-foreground font-medium">containers (Podman &amp; Docker)</span> to exploring <span className="text-foreground font-medium">AWS</span>, <span className="text-foreground font-medium">Terraform</span>, and <span className="text-foreground font-medium">Ansible</span>, I&apos;m continuously developing the skills needed to build reliable and secure infrastructure.
            </p>

            <p>
              I also enjoy sharing technical knowledge and helping fellow students learn Linux and cloud-native technologies.
            </p>

            {/* Approach Callout Quote */}
            <div className="p-4 sm:p-5 rounded-xl border-l-4 border-primary bg-primary/5 text-foreground space-y-1">
              <p className="text-xs uppercase tracking-wider font-mono text-muted-foreground font-semibold">
                My Approach:
              </p>
              <p className="text-base sm:text-lg font-semibold italic text-foreground">
                &ldquo;I don&apos;t just learn how technology works. I build, break, troubleshoot, and make it work better.&rdquo;
              </p>
            </div>

            {/* Key Achievements */}
            <div className="pt-4 border-t border-border/80">
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
                Key Highlights &amp; Achievements
              </h4>
              <ul className="space-y-3 text-sm sm:text-base">
                {achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {item.icon}
                    <span className="leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
