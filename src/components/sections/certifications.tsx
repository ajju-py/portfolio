"use client";

import React, { useState } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { verifiedCertifications, credlyProfileUrl, Certification } from "@/data/certifications";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { ExternalLink, CheckCircle2, ShieldCheck, Calendar, Award } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function CertificationsSection() {
  const [filter, setFilter] = useState<"all" | "certification" | "course">("all");

  const displayed = verifiedCertifications.filter((cert) => {
    if (filter === "all") return true;
    return cert.category === filter;
  });

  return (
    <SectionWrapper id="certifications" className="w-full min-h-screen py-24 px-4 max-w-7xl mx-auto">
      <SectionHeader
        id="certifications"
        title="Certifications & Badges"
        desc="Verified Credentials via Credly"
        className="mb-8"
      />

      {/* Filter Tabs & Credly Profile Link */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
        <div className="flex items-center gap-2 bg-secondary/30 p-1.5 rounded-full border border-border/60">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              filter === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All Credentials ({verifiedCertifications.length})
          </button>
          <button
            onClick={() => setFilter("certification")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              filter === "certification"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Certifications (EX200 / EX188)
          </button>
          <button
            onClick={() => setFilter("course")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              filter === "course"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Academy Courses
          </button>
        </div>

        <Link href={credlyProfileUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="gap-2 border-primary/40 hover:bg-primary/10 text-xs h-9">
            <Award className="w-4 h-4 text-primary" />
            <span>VIEW ALL CERTIFICATIONS</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((cert, index) => (
          <CertificationCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
  const [imgSrc, setImgSrc] = useState(cert.badgeImage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="flex flex-col h-full bg-card/60 backdrop-blur-md border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] group">
        <CardHeader className="pb-3 flex-row gap-4 items-start space-y-0">
          <div className="relative size-16 shrink-0 rounded-xl bg-background/80 border border-border/60 p-1 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgSrc}
              alt={cert.name}
              onError={() => setImgSrc(cert.fallbackImage)}
              className="size-full object-contain drop-shadow"
              loading="lazy"
            />
          </div>
          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline" className="font-mono text-[10px] uppercase border-primary/30 text-primary">
                {cert.code}
              </Badge>
              {cert.category === "certification" && (
                <Badge className="bg-red-500/10 text-red-500 dark:text-red-400 border border-red-500/20 text-[10px] gap-1 px-1.5 py-0">
                  <ShieldCheck className="w-3 h-3" />
                  Verified Exam
                </Badge>
              )}
            </div>
            <CardTitle className="text-base font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {cert.name}
            </CardTitle>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Issuer: <strong>{cert.issuer}</strong></span>
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 flex-1 text-xs">
          <div className="flex items-center gap-4 text-[11px] text-muted-foreground border-y border-border/40 py-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-muted-foreground/70" />
              <span>Issued: {cert.issued}</span>
            </div>
            {cert.expires && (
              <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-mono">
                <span>Expires: {cert.expires}</span>
              </div>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed line-clamp-3">
            {cert.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {cert.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="text-[10px] bg-secondary/50 text-foreground/80 px-2 py-0.5 rounded-md border border-border/50"
              >
                {skill}
              </span>
            ))}
            {cert.skills.length > 4 && (
              <span className="text-[10px] text-muted-foreground px-1 py-0.5">
                +{cert.skills.length - 4} more
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-2 border-t border-border/40">
          <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button
              variant="default"
              size="sm"
              className="w-full gap-2 text-xs font-medium group-hover:bg-primary transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Verify Credential
              <ExternalLink className="w-3 h-3 ml-auto opacity-70 group-hover:opacity-100" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
