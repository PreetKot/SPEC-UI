import React from "react";
import type { Metadata } from "next";
import Expandablecard from "./_components/preview";

export const metadata: Metadata = {
  title: "Expandable Card | Spec UI",
  description:
    "Spec UI's Expandable Card component enables developers to build interactive cards that expand and collapse with smooth animations using React, Tailwind CSS, and Framer Motion. Perfect for FAQs, product features, dashboards, and content previews. Fully customizable, accessible, and easy to integrate into modern web applications.",
  keywords: [
    "Expandable Card Component",
    "React Expand Collapse UI",
    "Framer Motion Expandable Card",
    "Tailwind CSS Cards",
    "Spec UI Components",
    "Animated Card Component",
    "Collapsible Card React",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Card Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Interactive Cards UI",
    "Developer Tools",
    "SaaS UI Components",
    "Content Toggle React",
    "Spec UI",
    "Reusable React Components",
    "Motion UI React",
    "Frontend Engineer Tools",
  ],
  openGraph: {
    title:
      "Expandable Card Component for React — Interactive & Smooth UI | Spec UI",
    description:
      "Design expandable and collapsible card interfaces with Spec UI's React component. Smooth animations, accessible design, and easy integration using Tailwind CSS & Framer Motion.",
    url: "https://forgeui.in/components/expandable-card",
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
      "Expandable Card Component for React — Interactive & Smooth UI | Spec UI",
    description:
      "Spec UI's Expandable Card component enables smooth, customizable expand/collapse cards in React apps. Built with TailwindCSS & Framer Motion.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <Expandablecard />;
};

export default Page;
