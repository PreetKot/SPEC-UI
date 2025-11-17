import React from "react";
import type { Metadata } from "next";
import { GiStrikingDiamonds } from "react-icons/gi";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import LivePreviewComponent from "@/components/layout/livepreview";
import SocialCard from "@/app/(primary)/components/social-card/_components/social-card";

export const metadata: Metadata = {
  title: "Social Card Live Preview | Spec UI",
  description:
    "Interact with Spec UI's Social Card component in this live preview. Built with React, Tailwind CSS, and Framer Motion, this component showcases personal profiles, creator bios, and social links with sleek animations. Ideal for portfolios, landing pages, and personal websites.",
  keywords: [
    "Social Card Preview",
    "Creator Profile UI",
    "React Social Component",
    "Spec UI Social Card",
    "Tailwind CSS Profile Card",
    "Framer Motion Animations",
    "UI Component Preview",
    "React UI Playground",
    "Interactive Profile Card Demo",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Open Source UI Kit",
    "Spec UI",
    "Personal Portfolio UI",
  ],
  openGraph: {
    title: "Social Card Live Preview | Spec UI",
    description:
      "Live interactive demo of Spec UI's Social Card component. Showcase creator profiles and social links with a sleek, animated UI built using React, Tailwind CSS, and Framer Motion.",
    url: "https://forgeui.in/components/social-card/preview",
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
    title: "Social Card Live Preview | Spec UI",
    description:
      "See Spec UI's Social Card component in action with this live preview. Perfect for portfolios, creator bios, and personal websites.",
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
      <SocialCard
        image="/pfp.png"
        title="Social Card"
        name="creator.exe"
        pitch="Explore my latest projects and connect for collaboration opportunities"
        icon={<GiStrikingDiamonds />}
        buttons={[
          {
            label: "Twitter",
            icon: <FaXTwitter />,
            link: "https://x.com/specui",
          },
          {
            label: "Github",
            icon: <FaGithub />,
            link: "https://github.com/specui",
          },
        ]}
      />
    </LivePreviewComponent>
  );
};

export default Preview;
