import type { Metadata } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/parisienne/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexis Hughes-Williams | Nashville Entrepreneur, Founder & Builder",
  description:
    "Alexis Hughes-Williams is a Nashville entrepreneur and founder of Place & Plenty and Something Sweet LLC, building thoughtful businesses around hospitality, identity, and community.",
  metadataBase: new URL("https://alexishugheswilliams.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Alexis Hughes-Williams | Nashville Entrepreneur, Founder & Builder",
    description:
      "Nashville entrepreneur, marketer, and builder creating thoughtful businesses around people, hospitality, identity, and everyday life.",
    url: "https://alexishugheswilliams.com",
    siteName: "Alexis Hughes-Williams",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream text-espresso">{children}</body>
    </html>
  );
}
