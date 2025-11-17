import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import StatsCard from "@/app/(primary)/components/stats-card/_components/statscard";

export const metadata: Metadata = {
  title: "Stats Card Live Preview | Spec UI",
  description:
    "Explore Spec UI's Stats Card component in this live interactive preview. Built with React, Tailwind CSS, and Framer Motion, this component beautifully displays key metrics, analytics, and performance stats in a clean, responsive layout. Perfect for dashboards, SaaS apps, and admin panels.",
  keywords: [
    "Stats Card Preview",
    "Analytics UI Component",
    "React Dashboard Cards",
    "Spec UI Stats Card",
    "Tailwind CSS Analytics UI",
    "Framer Motion Metrics UI",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Stats Component Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "Spec UI",
    "SaaS Dashboard UI",
    "Performance Metrics Card",
  ],
  openGraph: {
    title: "Stats Card Live Preview | Spec UI",
    description:
      "Live demo of Spec UI's Stats Card component. Display key metrics and analytics with a clean, responsive UI built using React, Tailwind CSS, and Framer Motion.",
    url: "https://forgeui.in/components/stats-card/preview",
    siteName: "Spec UI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "Spec UI Component Preview Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stats Card Live Preview | Spec UI",
    description:
      "Experience Spec UI's Stats Card component in this live interactive preview. Perfect for SaaS dashboards and analytics panels, crafted with React, Tailwind CSS, and Framer Motion.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Preview = () => {
  return (
    <LivePreviewComponent>
      <StatsCard />
    </LivePreviewComponent>
  );
};

export default Preview;
