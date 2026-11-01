"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";
import { GitFork, Star, ExternalLink, GitBranch, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { config } from "@/data/config";

interface RepoItem {
  name: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
}

const verifiedRepos: RepoItem[] = [
  {
    name: "REDHAT-RHCSA-EX200",
    url: "https://github.com/ajju-py/REDHAT-RHCSA-EX200",
    description:
      "Enterprise Red Hat Enterprise Linux 9.3 hands-on practice repository for RHCSA EX200: LVM storage, SELinux enforcement, systemd targets, firewalld, and Bash automation scripts.",
    language: "Shell",
    languageColor: "#89e051",
  },
  {
    name: "carbon-intelligence-platform",
    url: "https://github.com/ajju-py/carbon-intelligence-platform",
    description:
      "Automated corporate carbon emission tracking & analytics platform with predictive calculations across Scope 1, 2, and 3 emission factors.",
    language: "Python",
    languageColor: "#3572A5",
  },
  {
    name: "Building-passport-Ghar-ki-pehchan",
    url: "https://github.com/ajju-py/Building-passport-Ghar-ki-pehchan",
    description:
      "Digital building lifecycle and compliance record management system with secure document attestation.",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
  {
    name: "SahmatiPay",
    url: "https://github.com/ajju-py/SahmatiPay",
    description:
      "Digital consent verification architecture integrating financial account aggregation workflows.",
    language: "JavaScript",
    languageColor: "#f1e05a",
  },
  {
    name: "StudyBuddy-AI",
    url: "https://github.com/ajju-py/StudyBuddy-AI",
    description:
      "Intelligent study planning and algorithmic companion leveraging conversational NLP models.",
    language: "Python",
    languageColor: "#3572A5",
  },
];

export default function GitHubActivitySection() {
  return (
    <SectionWrapper id="github-activity" className="w-full min-h-screen py-24 px-4 max-w-7xl mx-auto">
      <SectionHeader
        id="github"
        title="GitHub Repositories"
        desc="Verified Open-Source Code &amp; Infrastructure Labs"
        className="mb-12"
      />

      {/* Profile Overview Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
          <div className="p-4 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 text-white">
            <SiGithub className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span>ajju-py</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Verified
              </span>
            </h3>
            <p className="text-sm font-mono text-zinc-400 mt-1">
              Linux systems administration, cloud infrastructure code, and automation repositories
            </p>
          </div>
        </div>

        <Link href={config.social.github} target="_blank" rel="noopener noreferrer">
          <Button className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 gap-2 font-mono text-sm px-6">
            <span>Visit @ajju-py on GitHub</span>
            <ExternalLink className="w-4 h-4 text-cyan-400" />
          </Button>
        </Link>
      </motion.div>

      {/* Repository Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {verifiedRepos.map((repo, idx) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-950/20 flex flex-col justify-between">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <CardTitle className="text-base font-bold text-white hover:text-blue-400 transition-colors">
                      <Link href={repo.url} target="_blank" rel="noopener noreferrer" className="break-all">
                        {repo.name}
                      </Link>
                    </CardTitle>
                  </div>
                  <Link href={repo.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${repo.name}`}>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 hover:text-white transition-colors shrink-0" />
                  </Link>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                <p className="text-sm text-zinc-400 leading-relaxed font-sans line-clamp-3">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pt-2 border-t border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span className="text-zinc-300">{repo.language}</span>
                  </div>
                  <span className="text-zinc-500">Public Repo</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

