"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "motion/react";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto py-24 px-4">
      <SectionHeader
        id="contact"
        className="mb-14"
        title="Get In Touch"
        desc="Let's build secure cloud infrastructure &amp; automated pipelines together"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Contact Information</h3>
              <p className="text-sm font-mono text-zinc-400 mt-1">
                Reach out for cloud engineering, Linux administration, and automation inquiries.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <Link
                href={`mailto:${config.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/40 hover:border-blue-500/50 hover:bg-zinc-800/80 transition-all group"
              >
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-mono text-zinc-400">Direct Email</p>
                  <p className="text-sm font-mono text-white group-hover:text-blue-400 transition-colors truncate">
                    {config.email}
                  </p>
                </div>
              </Link>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/40">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-400">Location</p>
                  <p className="text-sm text-zinc-200">Chhatrapati Sambhajinagar, Maharashtra, India</p>
                </div>
              </div>

              {/* LinkedIn */}
              <Link
                href={config.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/40 hover:border-blue-500/50 hover:bg-zinc-800/80 transition-all group"
              >
                <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400 group-hover:scale-105 transition-transform">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-400">LinkedIn Profile</p>
                  <p className="text-sm font-mono text-white group-hover:text-blue-400 transition-colors">
                    linkedin.com/in/ajay-tandale
                  </p>
                </div>
              </Link>

              {/* GitHub */}
              <Link
                href={config.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/40 hover:border-zinc-500/50 hover:bg-zinc-800/80 transition-all group"
              >
                <div className="p-3 rounded-lg bg-zinc-700/20 text-white group-hover:scale-105 transition-transform">
                  <SiGithub className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-400">GitHub Profile</p>
                  <p className="text-sm font-mono text-white group-hover:text-cyan-400 transition-colors">
                    github.com/ajju-py
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <Card className="bg-zinc-900/60 border-zinc-800 backdrop-blur-md rounded-2xl shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-blue-400" />
                <span>Send a Message</span>
              </CardTitle>
              <CardDescription className="text-zinc-400 font-sans text-sm">
                Have a question or collaboration proposal? Fill out the form below or email me directly at{" "}
                <a
                  href={`mailto:${config.email}`}
                  className="text-blue-400 hover:underline font-mono"
                >
                  {config.email}
                </a>.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
