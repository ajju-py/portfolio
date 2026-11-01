"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Terminal, Cloud, ShieldAlert, Cpu, Server, Layers } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function AboutSection() {
  const highlights = [
    {
      icon: <Terminal className="w-5 h-5 text-red-500" />,
      title: "Enterprise Linux Foundation",
      description:
        "Red Hat Certified System Administrator (RHCSA EX200) with hands-on expertise in RHEL 9, systemd service management, SELinux enforcement, and LVM storage volume orchestration.",
    },
    {
      icon: <Cloud className="w-5 h-5 text-amber-500" />,
      title: "AWS Cloud Engineering",
      description:
        "Architecting resilient cloud hosting solutions using Amazon S3, CloudFront Origin Access Control (OAC), least-privilege IAM policies, and infrastructure telemetry with Amazon CloudWatch.",
    },
    {
      icon: <Layers className="w-5 h-5 text-purple-500" />,
      title: "Infrastructure as Code & Automation",
      description:
        "Declarative provisioning with Terraform (modular state management) and idempotent multi-server configuration orchestration using Ansible playbooks, roles, and encrypted Ansible Vault.",
    },
    {
      icon: <Server className="w-5 h-5 text-cyan-500" />,
      title: "Containers & Cloud-Native",
      description:
        "Certified in Cloud-Native Applications (DO188) utilizing daemonless Podman for rootless container execution, multi-container pod deployment, Docker image optimization, and Red Hat OpenShift lab workflows.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-emerald-500" />,
      title: "Cybersecurity & Hardening",
      description:
        "Applying security-first engineering: Mandatory Access Control with SELinux targeted policies, firewalld network zones, SSH public-key enforcement, and continuous Linux audit logging.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      title: "Academic Background",
      description:
        "Currently pursuing B.Tech in Computer Science at Maharashtra Institute of Technology (Expected 2027), holding a prior Diploma in Computer Engineering (2020–2023) with 1st Rank in Technical Quiz.",
    },
  ];

  return (
    <SectionWrapper id="about" className="w-full min-h-screen py-24 px-4 max-w-7xl mx-auto">
      <SectionHeader
        id="about"
        title="About Me"
        desc="Technical Background & Cloud Engineering Focus"
        className="mb-12"
      />

      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-2xl bg-card/60 border border-border/80 backdrop-blur-md relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative shrink-0">
              <div className="relative size-36 sm:size-44 rounded-2xl overflow-hidden border-2 border-border/80 shadow-lg">
                <Image
                  src="/images/ajay-redhat-portrait.png"
                  alt="Ajay Tandale"
                  fill
                  sizes="(max-width: 768px) 144px, 176px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-2.5 text-center">
                <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-muted-foreground border border-border/60 bg-secondary/40 px-2.5 py-0.5 rounded-full">
                  RHCSA · DO188
                </span>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed font-sans">
              <p>
                I am a Computer Science Engineering student based in{" "}
                <span className="text-foreground font-medium">Chhatrapati Sambhajinagar, Maharashtra, India</span>,
                focused on building secure, scalable cloud infrastructure and robust Linux systems.
              </p>
              <p>
                My technical journey is grounded in enterprise systems administration. Having earned the{" "}
                <span className="text-red-500 font-semibold font-mono">Red Hat Certified System Administrator (RHCSA EX200)</span> and{" "}
                <span className="text-red-500 font-semibold font-mono">Red Hat Certified Developer in Cloud-native Applications (DO188)</span>,
                I focus on practical implementations: managing file permissions, LVM storage hierarchies, systemd targets, and troubleshooting
                SELinux in enforcing mode.
              </p>
              <p>
                In the cloud ecosystem, I work with <span className="text-amber-500 font-medium">AWS</span> (Amazon S3, CloudFront, IAM, CloudWatch)
                and automate infrastructure provisioning through <span className="text-purple-500 font-medium">Terraform</span> and{" "}
                <span className="text-cyan-500 font-medium">Ansible</span>. Whether deploying multi-container stacks via rootless Podman or
                configuring custom firewall policies, my goal is to deliver reliable, repeatable, and audited infrastructure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Engineering Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 p-6 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-secondary/40 border border-border/40">
                {item.icon}
              </div>
              <h4 className="font-display font-semibold text-foreground text-sm">
                {item.title}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
