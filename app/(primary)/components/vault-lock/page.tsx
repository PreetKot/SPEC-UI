import React from "react";
import type { Metadata } from "next";
import Vaultlock from "./_components/preview";

export const metadata: Metadata = {
  title: "Vault Lock | Spec UI",
  description:
    "Spec UI's Vault Lock component enables developers to visually represent secure access states, encryption locks, and protected data vaults using React, Tailwind CSS, and Framer Motion. Perfect for fintech apps, security dashboards, SaaS platforms, and user account security flows. Fully customizable, accessible, and easy to integrate into your projects.",
  keywords: [
    "Vault Lock Component",
    "React Security Lock UI",
    "Encrypted Vault UI",
    "Tailwind CSS Security Components",
    "Spec UI Components",
    "Data Protection UI React",
    "Secure Access Visuals",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Security Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Fintech Security UI",
    "Developer Tools",
    "SaaS Dashboard Security",
    "Data Encryption Visualization",
    "Spec UI",
    "Reusable React Components",
    "Motion UI React",
    "Frontend Engineer Tools",
  ],
  openGraph: {
    title:
      "Vault Lock Component for React — Secure Access & Encryption UI | Spec UI",
    description:
      "Design sleek vault lock visuals with Spec UI's React component. Smooth animations, accessible design, and seamless integration using Tailwind CSS & Framer Motion.",
    url: "https://forgeui.in/components/vault-lock",
    siteName: "Spec UI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "Spec UI Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vault Lock Component for React — Secure Access & Encryption UI | Spec UI",
    description:
      "Spec UI's Vault Lock component helps developers build secure access UI visuals in React apps using TailwindCSS & Framer Motion.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <Vaultlock />;
};

export default Page;
