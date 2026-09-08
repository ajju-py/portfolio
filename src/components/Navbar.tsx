"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Journey", href: "#journey" },
    { label: "Terminal", href: "#terminal" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090B]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-[#F5F5F5] font-mono font-medium tracking-tight text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E60000] rounded py-1 px-1.5"
            aria-label="Ajay Tandale Portfolio Home"
          >
            <div className="w-7 h-7 rounded bg-[#171A20] border border-white/10 flex items-center justify-center text-xs font-bold group-hover:border-[#E60000]/60 transition-colors">
              <span className="text-[#E60000]">A</span>
              <span>T</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-white tracking-wide">
                AJAY.T
              </span>
              <span className="text-[#6E7280] hidden sm:inline text-xs">
                / sys
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-1.5 text-xs lg:text-sm font-medium text-[#A7AAB2]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-white/[0.05] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E60000]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#terminal"
              className="px-2.5 py-1.5 rounded-md text-xs font-mono text-[#A7AAB2] bg-[#111318] border border-white/10 hover:text-white hover:border-white/20 transition-all flex items-center gap-1.5"
              title="Interactive Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-[#E60000]" />
              <span>rhel9:~$</span>
            </a>

            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              download="Ajay_Tandale_Resume.pdf"
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[#171A20] hover:bg-[#E60000] text-white border border-white/10 hover:border-[#E60000] transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#A7AAB2] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              download="Ajay_Tandale_Resume.pdf"
              className="inline-flex sm:hidden items-center gap-1 px-2.5 py-1 rounded text-xs font-medium bg-[#171A20] text-white border border-white/10"
              aria-label="Download Resume"
            >
              <FileText className="w-3 h-3" />
              <span>CV</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-[#111318] border border-white/10 text-[#A7AAB2] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E60000]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#08090B]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-[#A7AAB2] hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              download="Ajay_Tandale_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium bg-[#E60000] text-white font-mono"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-xs font-mono text-[#A7AAB2] bg-[#111318] border border-white/10"
            >
              <span>Contact: ajaytandale8983@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
