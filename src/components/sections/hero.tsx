"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, ArrowUpRight, ShieldCheck, Mail } from "lucide-react";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import Image from "next/image";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full min-h-screen flex items-center")}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-[2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pt-12 md:pt-0">
            {!isLoading && (
              <div className="flex flex-col space-y-6">
                
                {/* Status Pill */}
                <BlurIn delay={0.3}>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-mono mx-auto lg:mx-0">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Available for Cloud &amp; DevOps Roles</span>
                  </div>
                </BlurIn>

                {/* Main Heading */}
                <BlurIn delay={0.5}>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display">
                    AJAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">TANDALE</span>
                  </h1>
                </BlurIn>

                {/* Professional Designation */}
                <BlurIn delay={0.7}>
                  <p className="text-lg sm:text-xl md:text-2xl font-mono text-zinc-300 font-medium">
                    Cloud Engineer <span className="text-blue-500">|</span> Linux <span className="text-cyan-500">|</span> AWS <span className="text-indigo-500">|</span> DevOps
                  </p>
                </BlurIn>

                {/* Professional Tagline */}
                <BlurIn delay={0.9}>
                  <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
                    &ldquo;Building secure, scalable infrastructure through Linux, cloud technologies, and automation.&rdquo;
                  </p>
                </BlurIn>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap gap-3 justify-center lg:justify-start items-center">
                  <BoxReveal delay={1.1} width="fit-content">
                    <Link href="#projects">
                      <Button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 shadow-lg shadow-blue-600/20 flex items-center gap-2">
                        <span>View Projects</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </BoxReveal>

                  <BoxReveal delay={1.2} width="fit-content">
                    <Link href="/Ajay_Tandale_Resume.pdf" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-zinc-200 flex items-center gap-2">
                        <File className="w-4 h-4 text-cyan-400" />
                        <span>Download Resume</span>
                      </Button>
                    </Link>
                  </BoxReveal>

                  <BoxReveal delay={1.3} width="fit-content">
                    <Link href="#contact">
                      <Button variant="ghost" className="text-zinc-300 hover:text-white hover:bg-zinc-800 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-indigo-400" />
                        <span>Contact Me</span>
                      </Button>
                    </Link>
                  </BoxReveal>

                  {/* Social Buttons */}
                  <div className="flex items-center gap-2 ml-0 sm:ml-2">
                    <Link href={config.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                      <Button variant="outline" size="icon" className="border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white">
                        <SiGithub className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href={config.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                      <Button variant="outline" size="icon" className="border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white">
                        <FaLinkedin className="w-4 h-4 text-blue-400" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Quick Trust Badges */}
                <BlurIn delay={1.4}>
                  <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-red-500" />
                      RHCSA Certified (EX200)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-red-500" />
                      DO188 Certified (EX188)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" />
                      AWS &amp; Terraform IaC
                    </span>
                  </div>
                </BlurIn>

              </div>
            )}
          </div>

          {/* Right Column: Professional Portrait */}
          <div className="lg:col-span-5 flex justify-center items-center">
            {!isLoading && (
              <BlurIn delay={0.8}>
                <div className="relative group">
                  {/* Glowing backdrop rings */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
                  
                  {/* Portrait container */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-zinc-700/80 bg-zinc-900/90 shadow-2xl backdrop-blur-sm">
                    <Image
                      src="/images/ajay-redhat-portrait.png"
                      alt="Ajay Tandale - Cloud Engineer"
                      fill
                      priority
                      className="object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent p-4 text-center">
                      <p className="text-white font-medium text-sm">Ajay Tandale</p>
                      <p className="text-zinc-400 font-mono text-xs">Red Hat Certified Administrator</p>
                    </div>
                  </div>
                </div>
              </BlurIn>
            )}
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
