import { config } from "@/data/config";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { cn } from "@/lib/utils";

export default function GitHubStars({ className }: { className?: string }) {
  return (
    <Link
      href={config.social.github}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "!relative cursor-can-hover border-2 border-black/30 dark:border-white/30 rounded-lg size-10 flex items-center justify-center text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-all hover:scale-105 active:scale-95 shrink-0",
        className
      )}
      aria-label="GitHub Profile"
    >
      <SiGithub size={20} />
    </Link>
  );
}
