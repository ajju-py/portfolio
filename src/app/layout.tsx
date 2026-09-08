import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ajaytandale.dev"),
  title: "Ajay Tandale | Software Engineer | Linux • Automation • Containers",
  description:
    "Entry-level Software Engineer with a strong Linux/Red Hat foundation (RHCSA, Cloud-native DO188) and hands-on experience in automation, scripting, containers, networking, and system troubleshooting.",
  keywords: [
    "Ajay Tandale",
    "Software Engineer",
    "Linux Engineer",
    "Red Hat",
    "RHCSA",
    "DO188",
    "Automation",
    "Python",
    "Bash Scripting",
    "Ansible",
    "Docker",
    "Podman",
    "OpenShift",
    "Networking",
    "TCP/IP",
    "RHEL 9",
    "Systems Engineering",
  ],
  authors: [{ name: "Ajay Tandale", url: "https://github.com/ajju-py" }],
  creator: "Ajay Tandale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ajaytandale.dev",
    title: "Ajay Tandale | Software Engineer | Linux • Automation • Containers",
    description:
      "Entry-level Software Engineer with a strong Linux/Red Hat foundation and hands-on experience in automation, scripting, containers, networking, and systems troubleshooting.",
    siteName: "Ajay Tandale Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajay Tandale — Software Engineer & Linux Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Tandale | Software Engineer | Linux • Automation • Containers",
    description:
      "Entry-level Software Engineer with a strong Linux/Red Hat foundation and hands-on experience in automation, scripting, containers, and networking.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#08090B] text-[#F5F5F5] antialiased selection:bg-[#E60000] selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
