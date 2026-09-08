"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto fallback link
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formState.subject || `Message from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="09"
          category="GET IN TOUCH"
          title="LET'S BUILD SOMETHING USEFUL."
          subtitle="I'm interested in opportunities involving software engineering, Linux systems, automation, containers and infrastructure."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111318] border border-white/[0.08] space-y-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Contact Channels
              </h3>

              {/* Email item */}
              <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-[#171A20] border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#111318] border border-white/10 flex items-center justify-center text-[#E60000]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#6E7280]">
                      EMAIL
                    </div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-[#E60000] transition-colors break-all"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(profile.email, "email")}
                  className="p-2 text-[#A7AAB2] hover:text-white hover:bg-white/10 rounded-lg transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#22C55E]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone item */}
              <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-[#171A20] border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#111318] border border-white/10 flex items-center justify-center text-[#E60000]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#6E7280]">
                      PHONE
                    </div>
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-[#E60000] transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(profile.phone, "phone")}
                  className="p-2 text-[#A7AAB2] hover:text-white hover:bg-white/10 rounded-lg transition-colors shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-[#22C55E]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#171A20] border border-white/[0.06]">
                <div className="w-9 h-9 rounded-lg bg-[#111318] border border-white/10 flex items-center justify-center text-[#E60000]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#6E7280]">
                    LOCATION
                  </div>
                  <div className="text-xs sm:text-sm text-white">
                    {profile.location}
                  </div>
                </div>
              </div>

              {/* Verified Links */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                {profile.linkedinUrl && (
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#171A20] hover:bg-[#0077B5]/20 hover:border-[#0077B5]/40 text-xs font-mono text-white border border-white/10 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-[#A7AAB2]" />
                  </a>
                )}

                {profile.githubUrl && (
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#171A20] hover:bg-white/10 text-xs font-mono text-white border border-white/10 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub @ajju-py</span>
                    <ExternalLink className="w-3 h-3 text-[#A7AAB2]" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111318] border border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A7AAB2] mb-6">
                <MessageSquare className="w-4 h-4 text-[#E60000]" />
                <span>SEND A DIRECT MESSAGE</span>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#171A20] border border-[#22C55E]/30 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Draft Prepared in Email Client!
                  </h4>
                  <p className="text-xs text-[#A7AAB2] max-w-md mx-auto">
                    If your email client didn&apos;t open automatically, you can always write to{" "}
                    <a href={`mailto:${profile.email}`} className="text-white underline">
                      {profile.email}
                    </a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-mono text-[#E60000] hover:underline"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="sender-name"
                        className="block text-xs font-mono text-[#A7AAB2] mb-1.5"
                      >
                        YOUR NAME
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#171A20] border border-white/10 text-white text-sm focus:border-[#E60000] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="sender-email"
                        className="block text-xs font-mono text-[#A7AAB2] mb-1.5"
                      >
                        YOUR EMAIL
                      </label>
                      <input
                        id="sender-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#171A20] border border-white/10 text-white text-sm focus:border-[#E60000] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message-subject"
                      className="block text-xs font-mono text-[#A7AAB2] mb-1.5"
                    >
                      SUBJECT / TOPIC
                    </label>
                    <input
                      id="message-subject"
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="Software Engineering / Infrastructure role"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#171A20] border border-white/10 text-white text-sm focus:border-[#E60000] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message-body"
                      className="block text-xs font-mono text-[#A7AAB2] mb-1.5"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="message-body"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Hi Ajay, I reviewed your RHCSA credentials and background..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#171A20] border border-white/10 text-white text-sm focus:border-[#E60000] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#E60000] hover:bg-[#FF1A1A] text-white font-semibold text-sm shadow-md transition-all hover:shadow-lg hover:shadow-[#E60000]/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
