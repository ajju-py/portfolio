"use client";

import { useInView } from "motion/react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { Github, Linkedin, Instagram, Award, Mail } from "lucide-react";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "GitHub",
    href: config.social.github,
    icon: <Github className="size-5" />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <Linkedin className="size-5" />,
  },
  {
    name: "Instagram",
    href: config.social.instagram,
    icon: <Instagram className="size-5" />,
  },
  {
    name: "Credly",
    href: config.social.credly,
    icon: <Award className="size-5 text-amber-500" />,
  },
  {
    name: "Email",
    href: `mailto:${config.email}`,
    icon: <Mail className="size-5" />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10 flex items-center gap-1">
      {show &&
        BUTTONS.map((button) => (
          <Link
            href={button.href}
            key={button.name}
            target={button.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={button.name}
          >
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              {button.icon}
            </Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
