"use client";

import React from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { EDUCATION, ACHIEVEMENTS } from "@/data/constants";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { GraduationCap, Trophy, Calendar, MapPin, Award } from "lucide-react";
import { motion } from "motion/react";

export default function EducationAchievementsSection() {
  return (
    <SectionWrapper id="education" className="w-full min-h-screen py-24 px-4 max-w-7xl mx-auto">
      <SectionHeader
        id="academic"
        title="Education &amp; Achievements"
        desc="Academic Qualifications &amp; Milestone Honors"
        className="mb-12"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Education */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Education</h3>
              <p className="text-sm font-mono text-zinc-400">Formal Engineering Foundation</p>
            </div>
          </div>

          <div className="space-y-4">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                      <CardTitle className="text-lg font-bold text-white">
                        {edu.degree}
                      </CardTitle>
                      <Badge variant="secondary" className="w-fit font-mono text-xs bg-zinc-800 text-zinc-300 border-zinc-700">
                        <Calendar className="w-3 h-3 mr-1 text-cyan-400 inline" />
                        {edu.period}
                      </Badge>
                    </div>
                    <div className="text-sm font-medium text-blue-400">
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-xs text-zinc-500 font-mono gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      {edu.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Achievements */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Achievements</h3>
              <p className="text-sm font-mono text-zinc-400">Recognitions &amp; Certifications</p>
            </div>
          </div>

          <div className="space-y-4">
            {ACHIEVEMENTS.map((ach, idx) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <CardTitle className="text-base font-bold text-white flex items-center gap-2">
                        <Award className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{ach.title}</span>
                      </CardTitle>
                      <Badge variant="outline" className="font-mono text-xs border-amber-500/30 text-amber-400 shrink-0">
                        {ach.year}
                      </Badge>
                    </div>
                    <div className="text-xs font-mono text-zinc-400">
                      Issuer: <span className="text-zinc-300">{ach.issuer}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                      {ach.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
