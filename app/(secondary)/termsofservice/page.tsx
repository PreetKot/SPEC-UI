import React from "react";
import TermsOfServicePage from "@/components/docs/termsofservice";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service | Spec UI",
  description:
    "Review Spec UI's Terms of Service to understand your rights, responsibilities, and the rules for using our open-source React component library built with Tailwind CSS and Framer Motion. Ensure proper usage and compliance while integrating Spec UI components into your projects.",
  keywords: [
    "Spec UI Terms of Service",
    "Terms of Service",
    "Usage Policy",
    "Open Source UI Components License",
    "Spec UI Documentation",
    "React Component Library Terms",
    "Tailwind CSS UI Components",
    "Developer Tools Usage Terms",
    "Frontend Design System Terms",
    "Spec UI",
    "Component Library Usage Rights",
    "Spec UI Legal Policy",
  ],
  openGraph: {
    title: "Terms of Service | Spec UI — Open Source UI Components Library",
    description:
      "Understand the rules, rights, and responsibilities for using Spec UI's open-source React component library. Read our Terms of Service for detailed guidelines.",
    url: "https://forgeui.in/terms-of-service",
    siteName: "Spec UI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "Spec UI Terms of Service Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Spec UI — Open Source UI Components Library",
    description:
      "Review Spec UI's Terms of Service to understand the guidelines and responsibilities when using our open-source React components.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "legal",
};

const TermsOfService = () => {
  return (
    <main>
      <Navbar />
      <TermsOfServicePage />
      <Footer />
    </main>
  );
};

export default TermsOfService;
