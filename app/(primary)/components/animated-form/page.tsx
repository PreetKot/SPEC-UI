import React from "react";
import Animatedform from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animated Form | Spec UI",
  description:
    "Spec UI's Animated Form component helps developers create visually engaging and interactive forms with smooth animations using React, Tailwind CSS, and Framer Motion. Perfect for modern web apps, landing pages, and SaaS products, it ensures a seamless user experience with accessible and customizable design patterns. Easily copy-paste and integrate this high-quality form component into your projects.",
  keywords: [
    "Animated Form Component",
    "React Form Animation",
    "Framer Motion Forms",
    "Tailwind CSS Forms",
    "Spec UI Components",
    "UI Animation Library",
    "Smooth Form Transitions",
    "React UI Kit",
    "Open Source UI Components",
    "Frontend Design System",
    "Accessible React Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Beautiful Forms UI",
    "Developer Tools",
    "SaaS UI Components",
    "Interactive Forms React",
    "Spec UI",
    "React Form UI",
    "Reusable Form Components",
    "Motion UI React",
    "Frontend Engineer Tools",
  ],
  openGraph: {
    title:
      "Animated Form Component for React — Smooth UI/UX with Framer Motion | Spec UI",
    description:
      "Build stunning animated forms with Spec UI's React component. Smooth UX, accessible design, and easy integration with Tailwind CSS & Framer Motion. Perfect for modern web apps and SaaS products.",
    url: "https://forgeui.in/components/animated-form",
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
      "Animated Form Component for React — Smooth UI/UX with Framer Motion | Spec UI",
    description:
      "Spec UI's Animated Form component enables smooth, accessible, and customizable forms in React apps. Powered by TailwindCSS & Framer Motion.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};
const Page = () => {
  return <Animatedform />;
};

export default Page;
