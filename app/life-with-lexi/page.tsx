import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { editorialNotes } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Life with Lexi | Alexis Hughes-Williams",
  description:
    "Life with Lexi is the personal and editorial layer of Alexis Hughes-Williams's work — home, family, hospitality, and the everyday moments behind the business.",
  alternates: { canonical: "/life-with-lexi" },
};

const pillars = [
  {
    name: "At Home",
    description: "Everyday moments that matter.",
    images: [
      { src: "/images/life-with-lexi/at-home.jpg", alt: "Alexis Hughes-Williams at home" },
      {
        src: "/images/life-with-lexi/holiday-at-home.jpg",
        alt: "Alexis Hughes-Williams at home during the holidays",
      },
      {
        src: "/images/life-with-lexi/holiday-lights.jpg",
        alt: "Alexis Hughes-Williams among holiday lights",
      },
    ],
  },
  {
    name: "Love & Family",
    description: "The people who make it all meaningful.",
    images: [
      {
        src: "/images/family/family-portrait.jpg",
        alt: "Alexis Hughes-Williams with her family",
      },
      {
        src: "/images/family/marriage-portrait.jpg",
        alt: "Alexis Hughes-Williams and her husband",
      },
      {
        src: "/images/family/marriage-portrait-alternate.jpg",
        alt: "Alexis Hughes-Williams and her husband, alternate portrait",
      },
    ],
  },
  {
    name: "Around the Table",
    description: "Food, fellowship, and good company.",
    images: [
      {
        src: "/images/life-with-lexi/food/tablescape-vintage-china.jpg",
        alt: "A vintage china table setting with gold flatware and florals",
      },
      {
        src: "/images/life-with-lexi/food/tablescape-outdoor.jpg",
        alt: "An outdoor table setting with pink florals and vintage china",
      },
      {
        src: "/images/life-with-lexi/food/tea-service.jpg",
        alt: "A heart-shaped sugar cube being added to a cup of tea",
      },
      {
        src: "/images/life-with-lexi/food/fall-breakfast-board.jpg",
        alt: "A fall breakfast spread with biscuits, bread, and fruit",
      },
      {
        src: "/images/life-with-lexi/food/sunday-snack-board.jpg",
        alt: "A Sunday snack board with cookies, cheese, and fruit",
      },
      {
        src: "/images/life-with-lexi/food/sandwich-plate-at-home.jpg",
        alt: "A sandwich and pasta salad plate at home",
      },
    ],
  },
  {
    name: "Building It",
    description: "Purpose in progress, on and off the clock.",
    images: [
      {
        src: "/images/something-sweet/founder-television-studio.jpg",
        alt: "Alexis Hughes-Williams representing Something Sweet LLC in a television studio",
      },
      {
        src: "/images/press/citycurrent-radio-interview.jpg",
        alt: "Alexis Hughes-Williams being interviewed on cityCURRENT radio",
      },
      {
        src: "/images/press/panel-speaking.jpg",
        alt: "Alexis Hughes-Williams speaking on a panel",
      },
    ],
  },
  {
    name: "With Purpose",
    description: "A bigger table for the next generation.",
    images: [
      {
        src: "/images/girl-unknown/logo-mark.png",
        alt: "Girl, unKnown Inc. logo",
      },
      {
        src: "/images/girl-unknown/retreat.jpg",
        alt: "Two women at a Girl, unKnown Inc. community event",
      },
      {
        src: "/images/girl-unknown/walk-for-health-group.jpg",
        alt: "A group at a Girl, unKnown Inc. walk for health event",
      },
    ],
  },
];

export default function LifeWithLexi() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <div className="relative mx-auto h-28 w-28">
            <Image
              src="/images/life-with-lexi/logo-official.png"
              alt="Life with Lexi logo"
              fill
              sizes="112px"
              className="object-contain"
            />
          </div>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-forest md:text-5xl">
            A fuller life, on purpose.
          </h1>
          <p className="mt-4 font-sans text-lg text-espresso/80">
            This is the personal and editorial layer behind everything I
            build — home, family, hospitality, and the everyday moments that
            keep it all grounded.
          </p>
        </section>

        <section className="border-t border-espresso/10 bg-forest px-6 py-16 text-cream">
          <div className="mx-auto max-w-6xl">
            <p className="font-script text-3xl text-gold">Notes from my life</p>
            <h2 className="mt-2 max-w-2xl font-serif text-3xl md:text-4xl">
              The thinking behind the things I build.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {editorialNotes.map((note) => (
                <article key={note.title} className="border-t border-gold/70 pt-5">
                  <p className="font-sans text-xs uppercase tracking-[0.16em] text-gold">
                    {note.category}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl">{note.title}</h3>
                  <p className="mt-4 font-sans leading-relaxed text-cream/75">
                    {note.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars */}
        {pillars.map((pillar, i) => (
          <section
            key={pillar.name}
            className={
              i % 2 === 0
                ? "border-t border-espresso/10 bg-ivory px-6 py-16"
                : "border-t border-espresso/10 px-6 py-16"
            }
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="font-serif text-3xl text-forest">{pillar.name}</h2>
              <p className="mt-1 font-sans text-espresso/70">{pillar.description}</p>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                {pillar.images.map((img) => (
                  <div key={img.src} className="relative aspect-square overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className={
                        img.src.endsWith(".png") ? "object-contain bg-cream" : "object-cover"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Closing note */}
        <section className="border-t border-espresso/10 bg-forest px-6 py-16 text-center text-cream">
          <p className="mx-auto max-w-2xl font-serif text-2xl italic text-gold">
            A fuller life is not a perfectly arranged one. It is a life with
            room for people, purpose, work, rest, and the stories still being written.
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
