import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { contactCategories, contactEmail } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | Alexis Hughes-Williams",
  description:
    "Get in touch with Alexis Hughes-Williams for media, speaking, partnerships, Place & Plenty, Something Sweet, or community inquiries.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <p className="font-sans text-sm text-gold">Contact</p>
          <h1 className="mt-2 font-serif text-4xl leading-tight text-forest md:text-5xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-4 font-sans text-lg text-espresso/80">
            Pick the category that fits best, and it&apos;ll open a message
            addressed directly to Alexis — no forms, no middleman.
          </p>
        </section>

        {/* Categories */}
        <section className="border-t border-espresso/10 bg-ivory px-6 py-16">
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {contactCategories.map((cat) => (
              <a
                key={cat.label}
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(cat.subject)}`}
                className="flex flex-col justify-between border border-espresso/10 bg-cream p-6 transition-colors hover:border-forest"
              >
                <div>
                  <h2 className="font-serif text-xl text-forest">{cat.label}</h2>
                  <p className="mt-2 font-sans text-sm text-espresso/70">
                    {cat.description}
                  </p>
                </div>
                <span className="mt-4 font-sans text-sm font-medium text-forest underline underline-offset-4">
                  Send an email &rarr;
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Privacy note */}
        <section className="px-6 py-16 text-center">
          <p className="mx-auto max-w-xl font-sans text-sm text-espresso/60">
            These links open your own email app, addressed directly to
            Alexis. Nothing you write is stored or shared by this website.
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
