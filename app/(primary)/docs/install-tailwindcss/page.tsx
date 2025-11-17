import TailwindInstallationPage from "@/components/docs/tailwindinstallationpage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Install Tailwind CSS | Spec UI",
  description:
    "Set up Tailwind CSS in your Spec UI project with this detailed installation guide. Learn how to configure Tailwind, optimize it for React components, and start building responsive, modern UIs with ease.",
  keywords: [
    "Tailwind CSS Installation",
    "Setup Tailwind CSS Spec UI",
    "Tailwind CSS Next.js Guide",
    "Tailwind Configuration",
    "Responsive UI with Tailwind",
    "Spec UI Tailwind Setup",
    "Frontend Design System",
    "Spec UI Documentation",
    "React Tailwind Integration",
    "UI Library Tailwind CSS",
    "Developer Tools",
    "Spec UI",
    "Reusable React Components",
    "Copy Paste UI Components",
    "Next.js Tailwind Setup",
  ],
  openGraph: {
    title: "Install Tailwind CSS for Spec UI — Full Setup Guide | Spec UI Docs",
    description:
      "Follow this step-by-step guide to install and configure Tailwind CSS for your Spec UI project. Build beautiful, responsive UIs with React and Tailwind.",
    url: "https://forgeui.in/docs/tailwind-installation",
    siteName: "Spec UI",
    images: [
      {
        url: "https://forgeui.in/forgeui-ogimage-v2.png",
        width: 1200,
        height: 630,
        alt: "Spec UI Documentation Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Install Tailwind CSS for Spec UI — Full Setup Guide | Spec UI Docs",
    description:
      "Learn how to install Tailwind CSS for Spec UI with this easy-to-follow guide. Configure Tailwind with React to start building modern, responsive UIs.",
    images: ["https://forgeui.in/forgeui-ogimage-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};
const TailwindInstallation = () => {
  return <TailwindInstallationPage />;
};

export default TailwindInstallation;
