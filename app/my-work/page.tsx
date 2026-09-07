import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { LaptopPhoneMockup } from "@/components/LaptopPhoneMockup";

export const metadata: Metadata = {
  title: "My Work | Alexis Hughes-Williams",
  description:
    "An overview of Alexis Hughes-Williams's ventures: Place & Plenty, Something Sweet LLC, Girl unKnown / OUR unKnown Inc., AR Squared Inc., and Cozy Home Services Inc.",
  alternates: { canonical: "/my-work" },
};

export default function MyWork() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <p className="font-sans text-sm text-gold">My Work</p>
          <h1 className="mt-2 font-serif text-4xl leading-tight text-forest md:text-5xl">
            One connected body of work.
          </h1>
          <p className="mt-4 font-sans text-lg text-espresso/80">
            Hospitality, technology, community, and home care — different
            forms, same purpose. Here&apos;s what I&apos;ve built and what
            I&apos;m building now.
          </p>
        </section>

        {/* Place & Plenty — current priority */}
        <section className="border-t border-espresso/10 bg-forest px-6 py-16 text-cream">
          <div className="mx-auto max-w-6xl">
            <p className="font-sans text-sm text-gold">Current work</p>
            <h2 className="mt-2 font-serif text-3xl">
              <a href="https://placeandplenty.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Place &amp; Plenty
              </a>
            </h2>
            <p className="mt-1 font-sans text-cream/70">
              Home Hosting. Made Simple.
            </p>
            <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
              <div className="relative w-full max-w-md">
                <LaptopPhoneMockup
                  laptopSrc="/images/place-and-plenty/homepage-screenshot.png"
                  laptopAlt="The Place & Plenty homepage, placeandplenty.com"
                  phoneSrc="/images/place-and-plenty/hosting-hub-screen.jpg"
                  phoneAlt="The Place & Plenty hosting hub screen on mobile"
                />
              </div>
              <div>
                <p className="font-sans text-cream/80">
                  A consumer home-hosting platform for everything between
                  &ldquo;people are coming&rdquo; and the doorbell ringing.
                  Place &amp; Plenty helps real hosts coordinate invitations,
                  RSVPs, guests, menus, shopping, contributions, and
                  gathering-day details, all within one connected plan.
                </p>
                <p className="mt-4 font-sans text-cream/80">
                  I personally conceived and built Place &amp; Plenty after
                  years of coordinating my own family&apos;s gatherings. Less
                  scrambling. More gathering.
                </p>
                <p className="mt-4 font-serif text-xl italic text-gold">
                  &ldquo;The preparation serves the people. The people are
                  the point.&rdquo;
                </p>
                <a
                  href="https://placeandplenty.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-cream px-6 py-3 font-sans text-sm text-forest hover:bg-gold hover:text-cream"
                >
                  Visit Place &amp; Plenty &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Something Sweet — hospitality origin */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="font-sans text-sm text-gold">Where it started</p>
            <h2 className="mt-2 font-serif text-3xl text-forest">
              <a href="https://www.somethingsweetllc.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Something Sweet LLC
              </a>
            </h2>
            <p className="mt-1 font-sans text-espresso/70">
              The beginning of the hospitality story.
            </p>
            <p className="mt-4 max-w-2xl font-sans text-espresso/80">
              Something Sweet is my oldest and most publicly established
              company — foundational proof of my experience in hospitality,
              food, baking, branding, and creating memorable experiences for
              people. It&apos;s still active today.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/something-sweet/floral-cake-cupcakes.jpg"
                  alt="A floral-decorated cake and cupcakes made by Something Sweet LLC"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/something-sweet/dessert-table.jpg"
                  alt="A dessert table of cupcakes and cookies from Something Sweet LLC"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/something-sweet/pumpkin-pie-display.jpg"
                  alt="A pumpkin pie displayed on a rustic wood stand with florals, by Something Sweet LLC"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/something-sweet/founder-television-studio.jpg"
                  alt="Alexis Hughes-Williams representing Something Sweet LLC in a television studio"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <p className="mt-8 text-center font-serif text-xl italic text-gold">
              Same heart. A larger table.
            </p>

            <div className="mt-6 text-center">
              <a
                href="https://www.somethingsweetllc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-sans text-sm font-medium text-forest underline underline-offset-4"
              >
                Visit Something Sweet LLC &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Girl, unKnown / OUR, unKnown Inc. */}
        <section id="girl-unknown" className="scroll-mt-8 border-t border-espresso/10 bg-ivory px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="font-sans text-sm text-gold">Community leadership</p>
            <h2 className="mt-2 font-serif text-3xl text-forest">
              Girl, unKnown / OUR, unKnown Inc.
            </h2>
            <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="font-sans text-espresso/80">
                  My work isn&apos;t only about hospitality. Girl, unKnown /
                  OUR, unKnown Inc. is evidence of my community leadership
                  and advocacy — helping people be seen, supported, and given
                  opportunities to grow.
                </p>
                <a
                  href="#girl-unknown"
                  className="mt-4 inline-block font-sans text-sm font-medium text-forest underline underline-offset-4"
                >
                  View Girl, unKnown here &rarr;
                </a>
                <p className="mt-2 max-w-md font-sans text-xs text-espresso/55">
                  The official website link is temporarily withheld while the domain is unavailable.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/girl-unknown/logo-mark.png"
                    alt="Girl, unKnown Inc. logo"
                    fill
                    sizes="(min-width: 768px) 20vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/girl-unknown/retreat.jpg"
                    alt="Two women at a Girl, unKnown Inc. community event"
                    fill
                    sizes="(min-width: 768px) 20vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden col-span-2">
                  <Image
                    src="/images/girl-unknown/walk-for-health-group.jpg"
                    alt="A group at a Girl, unKnown Inc. walk for health event"
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AR Squared + Cozy Home — restrained treatment */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="font-sans text-sm text-gold">The rest of the portfolio</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col border border-espresso/10 bg-ivory sm:flex-row">
                <div className="relative aspect-square w-full sm:w-40 sm:shrink-0">
                  <Image
                    src="/images/ar-squared/logo.png"
                    alt="AR Squared Inc. logo"
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-forest">
                    <a href="https://www.arsqd.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">AR Squared Inc.</a>
                  </h3>
                  <p className="mt-2 font-sans text-sm text-espresso/80">
                    The holding-company structure supporting my broader
                    portfolio of ventures.
                  </p>
                  <p className="mt-2 font-sans text-xs italic text-espresso/60">
                    Founded by Alexis Hughes-Williams.
                  </p>
                  <a
                    href="https://www.arsqd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-sans text-sm font-medium text-forest underline underline-offset-4"
                  >
                    Visit AR Squared &rarr;
                  </a>
                </div>
              </div>

              <div className="flex flex-col border border-espresso/10 bg-ivory sm:flex-row">
                <div className="relative aspect-square w-full sm:w-40 sm:shrink-0">
                  <Image
                    src="/images/cozy-home/logo.png"
                    alt="Cozy Home Services Inc. logo"
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-forest">
                    <a href="https://www.yourcozyhome.co" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Cozy Home Services Inc.</a>
                  </h3>
                  <p className="mt-2 font-sans text-sm text-espresso/80">
                    A Nashville home-services company bringing construction,
                    function, color, design, and decor together so a house feels
                    like home.
                  </p>
                  <p className="mt-2 font-sans text-sm italic text-espresso/65">
                    I co-own Cozy Home Services Inc. with my husband, Robert Calhoun Sr.
                  </p>
                  <a
                    href="https://www.yourcozyhome.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-sans text-sm font-medium text-forest underline underline-offset-4"
                  >
                    Visit Cozy Home Services &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing philosophy */}
        <section className="border-t border-espresso/10 bg-ivory px-6 py-16 text-center">
          <p className="mx-auto max-w-2xl font-serif text-2xl italic text-forest">
            The work may take different forms. The purpose has always been
            people.
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
