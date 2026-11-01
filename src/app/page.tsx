"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import CertificationsSection from "@/components/sections/certifications";
import ProjectsSection from "@/components/sections/projects";
import TechnicalExperienceSection from "@/components/sections/technical-experience";
import EducationAchievementsSection from "@/components/sections/education-achievements";
import GitHubActivitySection from "@/components/sections/github-activity";
import ContactSection from "@/components/sections/contact";

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode space-y-12 sm:space-y-20")}>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: About Me */}
        <AboutSection />

        {/* Section 3: Interactive 3D Skills Keyboard */}
        <SkillsSection />

        {/* Section 4: Certifications */}
        <CertificationsSection />

        {/* Section 5: Projects */}
        <ProjectsSection />

        {/* Section 6: Technical Experience */}
        <TechnicalExperienceSection />

        {/* Section 7 & 8: Education & Achievements */}
        <EducationAchievementsSection />

        {/* Section 9: GitHub Activity */}
        <GitHubActivitySection />

        {/* Section 10: Contact */}
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
