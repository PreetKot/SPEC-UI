import React from "react";
import type { Metadata } from "next";
import LivePreviewComponent from "@/components/layout/livepreview";
import AnimatedOTP from "@/app/(primary)/components/animated-otp/_components/animated-otp";

export const metadata: Metadata = {
  title: "Animated OTP Input Live Preview | Spec UI",
  description:
    "Interact with Spec UI's Animated OTP Input component in this live preview. Built with React, Tailwind CSS, and Framer Motion, this OTP input ensures smooth animations, responsive design, and a seamless user experience. Copy-paste ready for your projects.",
  keywords: [
    "Animated OTP Preview",
    "OTP Input Component Demo",
    "React OTP Animation",
    "Spec UI OTP Input",
    "Framer Motion OTP Field",
    "Tailwind CSS OTP Input",
    "UI Component Preview",
    "React UI Playground",
    "Interactive OTP Component",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "Spec UI",
  ],
  openGraph: {
    title: "Animated OTP Input Live Preview | Spec UI",
    description:
      "See Spec UI's Animated OTP Input component in action with this live interactive demo. Built with React, Tailwind CSS & Framer Motion for smooth animations and accessibility.",
    url: "https://forgeui.in/components/animated-otp/preview",
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
    title: "Animated OTP Input Live Preview | Spec UI",
    description:
      "Live demo of Spec UI's Animated OTP Input component with smooth animations, responsive UI, and accessible design.",
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
      <AnimatedOTP />
    </LivePreviewComponent>
  );
};

export default Preview;
