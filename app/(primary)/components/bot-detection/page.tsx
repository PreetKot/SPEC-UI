import React from "react";
import type { Metadata } from "next";
import Botdetection from "./_components/preview";

export const metadata: Metadata = {
  title: "Bot Detection | Spec UI",
  description:
    "Spec UI's Bot Detection Animation component helps developers build engaging bot-detection visuals for forms and login screens using React, Tailwind CSS, and Framer Motion. Perfect for CAPTCHAs, verification steps, and secure user flows. Fully customizable, accessible, and easy to integrate into any web application. Enhance user trust with smooth animations and modern UI.",
  keywords: [
    "Bot Detection Animation",
    "React CAPTCHA UI",
    "Framer Motion Bot Detection",
    "Tailwind CSS Verification UI",
    "Spec UI Components",
    "Animated Security Component",
    "Bot Protection UI",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Security UI",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Secure Forms UI",
    "Developer Tools",
    "SaaS UI Components",
    "Verification Animation React",
    "Spec UI",
    "Reusable React Components",
    "Motion UI React",
    "Frontend Engineer Tools",
  ],
  openGraph: {
    title:
      "Bot Detection Animation Component for React — Secure & Interactive UI | Spec UI",
    description:
      "Design interactive bot-detection animations with Spec UI's React component. Smooth, accessible, and easy-to-integrate visual verification flows using Tailwind CSS & Framer Motion.",
    url: "https://forgeui.in/components/bot-detection",
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
      "Bot Detection Animation Component for React — Secure & Interactive UI | Spec UI",
    description:
      "Spec UI's Bot Detection Animation component enables smooth, customizable security visuals for React apps. Built with TailwindCSS & Framer Motion.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <Botdetection />;
};

export default Page;
