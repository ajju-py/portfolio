import React from "react";

interface SectionHeadingProps {
  number: string;
  category: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  category,
  title,
  subtitle,
  align = "left",
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono tracking-wider uppercase mb-3 bg-[#111318] border border-white/10 text-[#A7AAB2] ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <span className="text-[#E60000] font-semibold">{number}</span>
        <span className="text-white/30">•</span>
        <span>{category}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F5F5]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-[#A7AAB2] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
