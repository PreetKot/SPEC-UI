import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | Spec UI",
  description:
    "Explore the official Spec UI documentation to learn how to install, customize, and build modern, accessible React components using Tailwind CSS and Framer Motion. Get started with setup guides, usage instructions, and best practices for frontend developers.",
  keywords: [
    "Spec UI Documentation",
    "React Component Library Guide",
    "Tailwind CSS UI Library",
    "Open Source UI Components",
    "Spec UI Docs",
    "Frontend Design System",
    "Reusable React Components",
    "Framer Motion UI Components",
    "Accessible UI Components",
    "Spec UI",
    "Developer Tools",
    "Next.js UI Library",
    "Copy Paste UI Components",
    "Modern UI Kit Documentation",
    "Frontend Developer Resources",
  ],
  openGraph: {
    title: "Spec UI Documentation — React Component Library Guide | Spec UI",
    description:
      "Browse Spec UI's official documentation to integrate open-source React components with Tailwind CSS and Framer Motion. Learn setup, usage, and best practices.",
    url: "https://forgeui.in/docs",
    siteName: "Spec UI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "Spec UI Documentation Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spec UI Documentation — React Component Library Guide | Spec UI",
    description:
      "Official Spec UI documentation for integrating React UI components with Tailwind CSS. Find installation guides, usage patterns, and developer resources.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function DocsPage() {
  redirect("/docs/introduction");
}
