import React from "react";
import Frameworkagnostic from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Framework Agnostic | Spec UI",
  description:
    "Spec UI's Framework Agnostic component is designed to be easily integrated across multiple frontend frameworks like React, Vue, Svelte, and more. Built with clean HTML, CSS, and accessible design patterns, it ensures seamless adoption in any tech stack. Perfect for developers building cross-platform UI libraries or maintaining multi-framework projects.",
  keywords: [
    "Framework Agnostic Component",
    "Cross-Framework UI Components",
    "Reusable UI Components",
    "Spec UI Components",
    "Framework Independent UI",
    "Frontend Design System",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Minimal UI Components",
    "Developer Tools",
    "Open Source UI Kit",
    "Universal UI Components",
    "HTML CSS UI Components",
    "Accessible UI Components",
    "SaaS UI Components",
    "Spec UI",
    "Reusable Frontend Components",
    "Frontend Engineer Tools",
  ],
  openGraph: {
    title:
      "Framework Agnostic UI Component — Cross-Framework Compatibility | Spec UI",
    description:
      "Design components that work seamlessly across React, Vue, Svelte, and more with Spec UI's Framework Agnostic component. Accessible, customizable, and tech stack independent.",
    url: "https://forgeui.in/components/framework-agnostic",
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
      "Framework Agnostic UI Component — Cross-Framework Compatibility | Spec UI",
    description:
      "Spec UI's Framework Agnostic component enables developers to build reusable UI blocks that work across multiple frontend frameworks.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <Frameworkagnostic />;
};

export default Page;
