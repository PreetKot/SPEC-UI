import React from "react";
import type { Metadata } from "next";
import Notificationcenter from "./_components/preview";

export const metadata: Metadata = {
  title: "Notification Center | Spec UI",
  description:
    "Spec UI's Notification Center component enables developers to build sleek and interactive notification panels with real-time alerts, updates, and announcements using React, Tailwind CSS, and Framer Motion. Perfect for SaaS dashboards, web apps, and admin panels. Fully customizable, accessible, and easy to integrate with any project.",
  keywords: [
    "Notification Center Component",
    "React Notifications UI",
    "Real-time Alerts React",
    "Tailwind CSS Notification Panel",
    "Spec UI Components",
    "Interactive Notification UI",
    "SaaS Dashboard Components",
    "React UI Kit",
    "Frontend Design System",
    "Accessible Notifications Component",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Real-time Updates UI",
    "Developer Tools",
    "Admin Panel Notification UI",
    "User Alerts React",
    "Spec UI",
    "Reusable React Components",
    "Motion UI React",
    "Frontend Engineer Tools",
  ],
  openGraph: {
    title:
      "Notification Center Component for React — Real-time Alerts & Updates UI | Spec UI",
    description:
      "Design interactive notification centers with Spec UI's React component. Real-time alerts, smooth animations, and accessible design using Tailwind CSS & Framer Motion.",
    url: "https://forgeui.in/components/notification-center",
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
      "Notification Center Component for React — Real-time Alerts & Updates UI | Spec UI",
    description:
      "Spec UI's Notification Center component enables developers to create real-time, accessible, and customizable notification panels in React apps.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <Notificationcenter />;
};

export default Page;
