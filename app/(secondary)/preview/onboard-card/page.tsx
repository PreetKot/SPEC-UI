import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import OnboardCard from "@/app/(primary)/components/onboard-card/_components/onboardcard";

export const metadata: Metadata = {
  title: "Onboarding Card Live Preview | Spec UI",
  description:
    "Explore Spec UI's Onboarding Card component in this interactive live preview. Built with React, Tailwind CSS, and Framer Motion, this component streamlines user onboarding flows with engaging animations and clean UI. Perfect for SaaS apps, dashboards, and product tours.",
  keywords: [
    "Onboarding Card Preview",
    "User Onboarding Component",
    "React Onboarding UI",
    "Spec UI Onboarding Card",
    "Framer Motion Animations",
    "Tailwind CSS Onboarding",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Onboarding Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "Spec UI",
  ],
  openGraph: {
    title: "Onboarding Card Live Preview | Spec UI",
    description:
      "Live interactive demo of Spec UI's Onboarding Card component. Simplify user onboarding with smooth animations and responsive design built with React, Tailwind CSS, and Framer Motion.",
    url: "https://forgeui.in/components/onboard-card/preview",
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
    title: "Onboarding Card Live Preview | Spec UI",
    description:
      "Experience Spec UI's Onboarding Card component in this live preview. Ideal for modern SaaS apps and user onboarding flows, crafted with React, Tailwind CSS, and Framer Motion.",
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
      <OnboardCard />
    </LivePreviewComponent>
  );
};

export default Preview;
