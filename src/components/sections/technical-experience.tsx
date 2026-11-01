"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { TECHNICAL_SKILL_CATEGORIES } from "@/data/constants";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { Cloud, Cog, Server, Box, Globe, Code2 } from "lucide-react";

export default function TechnicalExperienceSection() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cloud className="w-5 h-5 text-amber-400" />;
      case 1:
        return <Cog className="w-5 h-5 text-purple-400" />;
      case 2:
        return <Server className="w-5 h-5 text-red-400" />;
      case 3:
        return <Box className="w-5 h-5 text-cyan-400" />;
      case 4:
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 5:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Server className="w-5 h-5 text-zinc-400" />;
    }
  };

  return (
    <SectionWrapper id="skills-matrix" className="w-full min-h-screen py-24 px-4 max-w-7xl mx-auto">
      <SectionHeader
        id="technical-skills"
        title="Technical Experience"
        desc="Categorized Systems, Cloud &amp; Automation Competencies"
        className="mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECHNICAL_SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-950/20 flex flex-col justify-between">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/60 w-fit">
                    {getCategoryIcon(idx)}
                  </div>
                  <Badge variant="outline" className="font-mono text-xs border-zinc-700 text-zinc-400">
                    {category.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold tracking-tight text-white">
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 hover:border-blue-500/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
