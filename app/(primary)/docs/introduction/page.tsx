import IntroductionPage from "@/components/docs/introductionpage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Introduction | Spec UI",
  description:
    "Spec UI, a beautifully crafted open-source React component library powered by Tailwind CSS and Framer Motion. Learn the core principles, philosophy, and how Spec UI helps developers build modern, accessible, and customizable UI components with ease.",
  keywords: [
    "Spec UI Introduction",
    "React Component Library",
    "Tailwind CSS UI Kit",
    "Open Source UI Components",
    "Spec UI Documentation",
    "Frontend Design System",
    "Framer Motion Components",
    "Reusable React Components",
    "Accessible UI Components",
    "Spec UI",
    "Developer Tools",
    "UI Library for React & Next.js",
    "Copy Paste UI Components",
    "Modern UI Kit",
    "Frontend Engineer Resources",
  ],
  openGraph: {
    title:
      "Introduction to Spec UI — Open Source React Component Library | Spec UI Docs",
    description:
      "Get an overview of Spec UI, an open-source React component library designed with Tailwind CSS and Framer Motion. Learn its core principles and how to integrate it into your frontend projects.",
    url: "https://forgeui.in/docs/introduction",
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
      "Introduction to Spec UI — Open Source React Component Library | Spec UI Docs",
    description:
      "Start building with Spec UI, an open-source React UI library built with Tailwind CSS & Framer Motion. Learn the core principles and how to use it in your projects.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function Introduction() {
  return <IntroductionPage />;
}
