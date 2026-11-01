"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent } from "../ui/card";
import { Terminal, Cloud, ShieldAlert, Cpu, Server, Layers } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  const highlights = [
    {
      icon: <Terminal className="w-6 h-6 text-red-500" />,
      title: "Enterprise Linux Foundation",
      description:
        "Red Hat Certified System Administrator (RHCSA EX200) with deep hands-on expertise in Red Hat Enterprise Linux 9.x, systemd service management, SELinux enforcement, and LVM dynamic storage volume orchestration.",
    },
    {
      icon: <Cloud className="w-6 h-6 text-amber-500" />,
      title: "AWS Cloud Engineering",
      description:
        "Architecting resilient cloud hosting solutions using Amazon S3, CloudFront Origin Access Control (OAC), least-privilege IAM policies, and infrastructure telemetry with Amazon CloudWatch.",
    },
    {
      icon: <Layers className="w-6 h-6 text-purple-500" />,
      title: "Infrastructure as Code & Automation",
      description:
        "Declarative provisioning with Terraform (modular state management) and idempotent multi-server configuration orchestration using Ansible playbooks, roles, and encrypted Ansible Vault.",
    },
    {
      icon: <Server className="w-6 h-6 text-cyan-500" />,
      title: "Containers & Cloud-Native",
      description:
        "Certified in Cloud-Native Applications (DO188) utilizing daemonless Podman for rootless container execution, multi-container pod deployment, Docker image optimization, and Red Hat OpenShift lab workflows.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-emerald-500" />,
      title: "Cybersecurity & Hardening",
      description:
        "Applying security-first engineering: Mandatory Access Control with SELinux targeted policies, firewalld network zones, SSH public-key enforcement, and continuous Linux audit logging.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-12"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-sans">
              <p>
                I am a Computer Science Engineering student based in{" "}
                <span className="text-white font-medium">Chhatrapati Sambhajinagar, Maharashtra, India</span>,
                focused on building secure, scalable cloud infrastructure and robust Linux systems.
              </p>
              <p>
                My technical journey is grounded in enterprise systems administration. Having earned the{" "}
                <span className="text-red-400 font-semibold font-mono">Red Hat Certified System Administrator (RHCSA EX200)</span> and{" "}
                <span className="text-red-400 font-semibold font-mono">Red Hat Certified Developer in Cloud-native Applications (DO188)</span>,
                I focus on practical implementations: managing file permissions, LVM storage hierarchies, systemd targets, and troubleshooting
                SELinux in enforcing mode.
              </p>
              <p>
                In the cloud ecosystem, I work with <span className="text-amber-400 font-medium">AWS</span> (Amazon S3, CloudFront, IAM, CloudWatch)
                and automate infrastructure provisioning through <span className="text-purple-400 font-medium">Terraform</span> and{" "}
                <span className="text-cyan-400 font-medium">Ansible</span>. Whether deploying multi-container stacks via rootless Podman or
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
          >
            <Card className="h-full bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-950/20">
              <CardContent className="p-6 flex flex-col space-y-3">
                <div className="p-2.5 w-fit rounded-xl bg-zinc-800/80 border border-zinc-700/60">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
