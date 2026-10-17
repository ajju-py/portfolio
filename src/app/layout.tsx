import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ajaytandale.in"),
  title: "Ajay Tandale | Cloud & Linux Engineer",
  description: "Ajay Tandale is a Computer Science student and Red Hat certified professional focused on Linux, containers, automation and developing cloud engineering skills.",
  keywords: ["Ajay Tandale", "Cloud Engineer", "Linux", "Red Hat", "RHCSA", "DO188", "AWS", "Terraform", "Podman", "Ansible", "DevOps", "Cloud Security"],
  authors: [{ name: "Ajay Tandale", url: "https://github.com/ajju-py" }],
  creator: "Ajay Tandale",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ajaytandale.in",
    title: "Ajay Tandale | Cloud & Linux Engineer",
    description: "Linux, Red Hat, container development and hands-on cloud engineering labs.",
    siteName: "Ajay Tandale Portfolio",
  },
  twitter: { card: "summary", title: "Ajay Tandale | Cloud & Linux Engineer", description: "Linux, Red Hat, container development and hands-on cloud engineering labs." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#08090B] text-[#F5F5F5] antialiased selection:bg-[#E60000] selection:text-white flex flex-col font-sans">{children}</body>
    </html>
  );
}
