import NextjsInstallationPage from "@/components/docs/nextjsinstallationpage";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Install Next.js | Spec UI",
  description:
    "Learn how to seamlessly integrate Spec UI into your Next.js project. Follow this comprehensive installation guide to set up Tailwind CSS, import components, and start building beautiful UIs with React and Framer Motion.",
  keywords: [
    "Spec UI Installation",
    "Next.js Component Library",
    "Install Spec UI Next.js",
    "Tailwind CSS Setup Guide",
    "React UI Components",
    "Next.js UI Library",
    "Frontend Design System",
    "Spec UI Documentation",
    "UI Library for Next.js",
    "Component Installation Guide",
    "Framer Motion in Next.js",
    "Spec UI",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Next.js Developer Tools",
  ],
  openGraph: {
    title:
      "Install Spec UI in Next.js — Step-by-Step Setup Guide | Spec UI Docs",
    description:
      "Integrate Spec UI into your Next.js projects with this simple installation guide. Setup Tailwind CSS and start building modern, animated UI components in minutes.",
    url: "https://forgeui.in/docs/nextjs-installation",
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
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Install Spec UI in Next.js — Step-by-Step Setup Guide | Spec UI Docs",
    description:
      "Follow this step-by-step guide to install Spec UI in your Next.js project. Learn how to setup Tailwind CSS and start using beautiful, reusable components instantly.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const NextjsInstallation = () => {
  return <NextjsInstallationPage />;
};

export default NextjsInstallation;
