import React, { Suspense } from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

async function CopyrightYear() {
  const year = new Date().getFullYear();
  return <>{year}</>;
}

function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-4 border-t border-border/80 px-4 py-8 sm:flex-row md:px-8 sm:justify-between bg-card/40 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-xs text-muted-foreground text-center sm:text-left">
        <p>
          ©{" "}
          <Suspense fallback={null}>
            <CopyrightYear />
          </Suspense>{" "}
          {config.author}. All rights reserved.
        </p>
        <span className="hidden sm:inline text-border">|</span>
        <p className="text-[11px] text-muted-foreground/70">
          Built with Next.js &amp; Three.js.
        </p>
      </div>

      <SocialMediaButtons />

      <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 z-10">
        {footer.map((link, index) => {
          const { title, href } = link;
          return (
            <Link
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              href={href}
              key={`l_${index}`}
            >
              <Button variant="link" size="sm" className="h-auto p-1 text-xs">
                {title}
              </Button>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
