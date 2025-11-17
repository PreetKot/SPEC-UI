import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import PrivacyPolicyPage from "@/components/docs/privacypolicy";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Spec UI",
  description:
    "Read Spec UI's Privacy Policy to understand how we collect, use, and protect your personal information when you use our open-source React components library built with Tailwind CSS and Framer Motion. Transparency, data protection, and user privacy are our priorities.",
  keywords: [
    "Spec UI Privacy Policy",
    "Privacy Policy",
    "Data Protection",
    "User Privacy",
    "Spec UI Data Usage",
    "Open Source UI Library Policy",
    "React Components Privacy",
    "Tailwind CSS UI Components",
    "Spec UI Documentation",
    "Spec UI",
    "Developer Tools Policy",
    "Frontend Design System Policy",
  ],
  openGraph: {
    title: "Privacy Policy | Spec UI — Open Source UI Components Library",
    description:
      "Learn how Spec UI collects, uses, and protects your data. Read our Privacy Policy to stay informed about data privacy when using Spec UI's React component library.",
    url: "https://forgeui.in/privacy-policy",
    siteName: "Spec UI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "Spec UI Privacy Policy Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Spec UI — Open Source UI Components Library",
    description:
      "Understand how Spec UI handles your data. Read our Privacy Policy for transparency on data collection, usage, and privacy practices.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "legal",
};

const PrivacyPolicy = () => {
  return (
    <main>
      <Navbar />
      <PrivacyPolicyPage />
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
