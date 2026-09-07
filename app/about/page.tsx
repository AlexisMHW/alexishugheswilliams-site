import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About Alexis Hughes-Williams | Nashville Entrepreneur & Founder",
  description:
    "Alexis Hughes-Williams is a Nashville entrepreneur, marketer, and founder of Place & Plenty and Something Sweet LLC, with a background in psychology and over 20 years of nonprofit experience.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-4 font-sans text-sm text-gold">About Alexis</p>
            <h1 className="font-serif text-4xl leading-tight text-forest md:text-5xl">
              More than one title.
            </h1>
            <p className="mt-4 max-w-md font-sans text-lg text-espresso/80">
              I&apos;m a Nashville entrepreneur and marketer with a
              background in psychology and more than twenty years of
              nonprofit experience. Everything I&apos;ve built since traces
              back to the same instinct: bring people together, and take care
              of them once they&apos;re there.
            </p>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/founder/emerald-founder-portrait.jpg"
              alt="Alexis Hughes-Williams"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Roots */}
        <section className="border-t border-espresso/10 bg-ivory px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl text-forest">Nashville, from the start.</h2>
            <p className="mt-4 font-sans text-espresso/80">
              Nashville is home base for everything I do. My professional
              path started in marketing and nonprofit work — more than two
              decades of it — where I learned how to build community with a
              plan behind it, not just good intentions. That combination,
              marketing instinct plus nonprofit patience, still shows up in
              how I run every one of my companies today.
            </p>
          </div>
        </section>

        {/* Something Sweet / hospitality roots */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl text-forest">
              Where it started: Something Sweet.
            </h2>
            <p className="mt-4 font-sans text-espresso/80">
              Something Sweet LLC is my oldest company, and it&apos;s the
              foundation for everything that came after — hospitality, food,
              baking, and the simple belief that a little something sweet
              makes people feel cared for. It&apos;s still going, and it
              still matters to how I think about every gathering I plan.
            </p>
          </div>
        </section>

        {/* Family & Place & Plenty */}
        <section className="border-t border-espresso/10 bg-forest px-6 py-16 text-cream">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/family/family-portrait.jpg"
                alt="Alexis Hughes-Williams with her family"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl">A house full of people.</h2>
              <p className="mt-4 font-sans text-cream/80">
                I&apos;m a wife and mother first, and a real-life host who has
                spent years coordinating family celebrations — the good kind
                of chaos that comes with a house full of people you love. It
                was that repeated experience, gathering after gathering, that
                led me to conceive of and personally build Place &amp;
                Plenty.
              </p>
              <p className="mt-4 font-serif text-xl italic text-gold">
                &ldquo;I built Place &amp; Plenty for you because I needed it
                too.&rdquo;
              </p>
              <a
                href="https://placeandplenty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-sans text-sm font-medium text-cream underline underline-offset-4"
              >
                Visit Place &amp; Plenty &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl text-forest">Beyond the table.</h2>
            <p className="mt-4 font-sans text-espresso/80">
              My work isn&apos;t only about hospitality. Through Girl,
              unKnown / OUR, unKnown Inc., I&apos;ve stayed involved in
              community leadership and advocacy — helping people be seen,
              supported, and given real opportunities to grow. It comes from
              the same place as everything else I build: a belief that
              people deserve to be taken care of.
            </p>
          </div>
        </section>

        {/* Wider portfolio */}
        <section className="border-t border-espresso/10 bg-ivory px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl text-forest">
              The rest of the portfolio.
            </h2>
            <p className="mt-4 font-sans text-espresso/80">
              AR Squared Inc. is the holding-company structure behind my
              broader portfolio of ventures. And outside of hospitality and
              technology, I co-own Cozy Home Services Inc. with my husband,
              Robert Calhoun Sr. — a different kind of home care, built
              alongside him.
            </p>
          </div>
        </section>

        {/* Life with Lexi */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <div className="relative h-20 w-20">
              <Image
                src="/images/life-with-lexi/logo-official.png"
                alt="Life with Lexi logo"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <h2 className="mt-4 font-serif text-3xl text-forest">
              The personal side of it all.
            </h2>
            <p className="mt-4 font-sans text-espresso/80">
              Life with Lexi is where I write about all of it in my own
              voice — building Place &amp; Plenty, what years of hospitality
              taught me, raising a family while running several companies,
              and why real homes matter more than perfect ones.
            </p>
          </div>
        </section>

        {/* Closing philosophy */}
        <section className="border-t border-espresso/10 bg-ivory px-6 py-20">
          <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/5] w-full overflow-hidden order-2 md:order-1">
              <Image
                src="/images/founder/editorial-portrait-black-white.jpg"
                alt="Alexis Hughes-Williams"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <p className="order-1 text-center font-serif text-2xl italic text-forest md:order-2 md:text-left">
              The work may take different forms. The purpose has always been
              people.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
