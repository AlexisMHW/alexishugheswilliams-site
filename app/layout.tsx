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
  metadataBase: new URL("https://www.alexishugheswilliams.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Alexis Hughes-Williams | Nashville Entrepreneur, Founder & Builder",
    description:
      "Nashville entrepreneur, marketer, and builder creating thoughtful businesses around people, hospitality, identity, and everyday life.",
    url: "https://www.alexishugheswilliams.com",
    siteName: "Alexis Hughes-Williams",
    type: "website",
    images: [
      {
        url: "/images/founder/emerald-founder-portrait.jpg",
        width: 681,
        height: 676,
        alt: "Alexis Hughes-Williams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexis Hughes-Williams | Nashville Entrepreneur, Founder & Builder",
    description:
      "Nashville entrepreneur, marketer, and builder creating thoughtful businesses around people, hospitality, identity, and everyday life.",
    images: ["/images/founder/emerald-founder-portrait.jpg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.alexishugheswilliams.com/#alexis",
      name: "Alexis Hughes-Williams",
      url: "https://www.alexishugheswilliams.com/",
      image:
        "https://www.alexishugheswilliams.com/images/founder/emerald-founder-portrait.jpg",
      homeLocation: { "@type": "Place", name: "Nashville, Tennessee" },
      description:
        "Nashville entrepreneur, marketer, builder, hospitality entrepreneur, and community advocate.",
      affiliation: [
        { "@id": "https://www.somethingsweetllc.com/#organization" },
        { "@id": "https://www.yourcozyhome.co/#organization" },
        { "@id": "https://www.girlunknown.org/#organization" },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://placeandplenty.com/#organization",
      name: "Place & Plenty",
      url: "https://placeandplenty.com/",
      founder: { "@id": "https://www.alexishugheswilliams.com/#alexis" },
    },
    {
      "@type": "Organization",
      "@id": "https://www.somethingsweetllc.com/#organization",
      name: "Something Sweet LLC",
      url: "https://www.somethingsweetllc.com/",
      member: { "@id": "https://www.alexishugheswilliams.com/#alexis" },
    },
    {
      "@type": "Organization",
      "@id": "https://www.arsqd.com/#organization",
      name: "AR Squared Inc.",
      url: "https://www.arsqd.com/",
      founder: { "@id": "https://www.alexishugheswilliams.com/#alexis" },
    },
    {
      "@type": "Organization",
      "@id": "https://www.yourcozyhome.co/#organization",
      name: "Cozy Home Services Inc.",
      url: "https://www.yourcozyhome.co/",
      member: { "@id": "https://www.alexishugheswilliams.com/#alexis" },
    },
    {
      "@type": "Organization",
      "@id": "https://www.girlunknown.org/#organization",
      name: "Girl, unKnown / OUR, unKnown Inc.",
      member: { "@id": "https://www.alexishugheswilliams.com/#alexis" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream text-espresso">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
