import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { pressAppearances } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Press & Recognition | Alexis Hughes-Williams",
  description:
    "Media appearances and recognition for Alexis Hughes-Williams and Something Sweet LLC, including Channel 5 News, Today in Nashville, and cityCURRENT.",
  alternates: { canonical: "/press" },
};

export default function Press() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <p className="font-sans text-sm text-gold">Press &amp; Recognition</p>
          <h1 className="mt-2 font-serif text-4xl leading-tight text-forest md:text-5xl">
            Stories that highlight the work.
          </h1>
          <p className="mt-4 font-sans text-lg text-espresso/80">
            A few of the places Alexis and Something Sweet LLC have shown up
            over the years.
          </p>
        </section>

        {/* Appearances */}
        <section className="border-t border-espresso/10 bg-ivory px-6 py-16">
          <div className="mx-auto max-w-4xl space-y-8">
            {pressAppearances.map((item) => (
              <div
                key={item.outlet + item.context}
                className="flex flex-col gap-6 border border-espresso/10 bg-cream sm:flex-row"
              >
                <div className="relative aspect-[4/3] w-full sm:aspect-square sm:w-56 sm:shrink-0">
                  <Image
                    src={item.image}
                    alt={`${item.outlet} — ${item.context}`}
                    fill
                    sizes="(min-width: 640px) 224px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6">
                  <h2 className="font-serif text-2xl text-forest">{item.outlet}</h2>
                  <p className="mt-2 font-sans text-espresso/80">{item.context}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing note */}
        <section className="border-t border-espresso/10 px-6 py-16 text-center">
          <p className="mx-auto max-w-2xl font-sans text-espresso/70">
            For media, speaking, or press inquiries, visit the{" "}
            <Link
              href="/contact"
              className="font-medium text-forest underline underline-offset-4"
            >
              contact page
            </Link>
            .
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
