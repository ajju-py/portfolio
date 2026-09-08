import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { BentoGrid } from "@/components/BentoGrid";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { TimelineSection } from "@/components/TimelineSection";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { CurrentFocus } from "@/components/CurrentFocus";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090B] text-[#F5F5F5] selection:bg-[#E60000] selection:text-white">
      {/* Background ambient gradient glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(230,0,0,0.06),rgba(255,255,255,0))] z-0" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <BentoGrid />
        <CertificationsSection />
        <ProjectsSection />
        <EducationSection />
        <TimelineSection />
        <InteractiveTerminal />
        <CurrentFocus />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
