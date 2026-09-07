import Image from "next/image";
import Link from "next/link";
import { editorialNotes, ventures, pressItems } from "@/lib/site-data";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { LaptopPhoneMockup } from "@/components/LaptopPhoneMockup";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="paper-texture mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_.95fr] md:items-center md:py-24">
          <div>
            <p className="mb-4 font-sans text-sm text-gold">
              People &middot; Hospitality &middot; Opportunity
            </p>
            <h1 className="font-serif text-4xl leading-tight text-forest md:text-5xl">
              Alexis Hughes-Williams
            </h1>
            <p className="mt-4 max-w-md font-sans text-lg text-espresso/80">
              Nashville entrepreneur, marketer, and builder creating thoughtful
              businesses around people, hospitality, identity, and everyday life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/my-work"
                className="bg-forest px-6 py-3 font-sans text-sm text-cream hover:bg-forest-deep"
              >
                Explore My Work
              </Link>
              <Link
                href="/life-with-lexi"
                className="border border-forest px-6 py-3 font-sans text-sm text-forest hover:bg-forest hover:text-cream"
              >
                Life with Lexi
              </Link>
            </div>
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

        <section className="border-t border-espresso/10 bg-ivory px-6 py-16">
          <div className="editorial-rule mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl text-forest">
              More than one title. One connected body of work.
            </h2>
            <p className="mt-5 font-serif text-xl leading-relaxed text-espresso/85 md:text-2xl">
              I&apos;ve spent more than twenty years building programs, brands,
              businesses, and experiences around people.
            </p>
            <p className="mt-4 max-w-2xl font-sans leading-relaxed text-espresso/75">
              Sometimes that has looked like community work. Sometimes it has
              looked like a box of cookies, a house made cozier, or software
              built to help someone welcome people well. The form changes. The
              instinct does not.
            </p>
          </div>
        </section>

        <section className="bg-forest px-6 py-16 text-cream">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl">
              Where hospitality became a calling.
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-cream/80">
              From homemade treats to modern solutions, the work has always
              been about the same thing &mdash; creating meaningful
              experiences for people.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="bg-ivory text-espresso">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/something-sweet/tea-party-display.jpg"
                    alt="A tiered tea party dessert display with macarons, cupcakes, and cookies by Something Sweet LLC"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 right-3 w-28 border-2 border-ivory shadow-md">
                    <Image
                      src="/images/something-sweet/television-appearance-cookies.jpg"
                      alt="From the archives: an early Something Sweet television appearance"
                      width={200}
                      height={260}
                      className="h-auto w-full object-cover"
                    />
                    <p className="bg-espresso py-1 text-center font-sans text-[10px] uppercase tracking-wide text-cream">
                      From the archives
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-forest">
                    <a href="https://www.somethingsweetllc.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                      Something Sweet LLC
                    </a>
                  </h3>
                  <p className="mt-1 font-sans text-sm text-gold">
                    The beginning of the hospitality story.
                  </p>
                  <p className="mt-3 font-sans text-sm text-espresso/80">
                    Something Sweet is foundational proof of Alexis&apos;s
                    experience in hospitality, food, baking, and creating
                    memorable experiences for people.
                  </p>
                  <a
                    href="https://www.somethingsweetllc.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-sans text-sm font-medium text-forest underline underline-offset-4"
                  >
                    Explore Something Sweet &rarr;
                  </a>
                </div>
              </div>

              <div className="bg-ivory text-espresso">
                <div className="relative w-full bg-cream p-6 pb-10">
                  <LaptopPhoneMockup
                    laptopSrc="/images/place-and-plenty/homepage-screenshot.png"
                    laptopAlt="The Place & Plenty homepage, placeandplenty.com"
                    phoneSrc="/images/place-and-plenty/hosting-hub-screen.jpg"
                    phoneAlt="The Place & Plenty hosting hub screen on mobile"
                  />
                </div>
                <div className="p-6 pt-0">
                  <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    What I&apos;m building now
                  </p>
                  <h3 className="font-serif text-xl text-forest">
                    <a href="https://placeandplenty.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                      Place &amp; Plenty
                    </a>
                  </h3>
                  <p className="mt-1 font-sans text-sm text-gold">
                    Hospitality, thoughtfully reimagined.
                  </p>
                  <p className="mt-3 font-sans text-sm text-espresso/80">
                    A consumer home-hosting platform for everything between
                    &ldquo;people are coming&rdquo; and the doorbell ringing.
                    Personally conceived and built by Alexis Hughes-Williams.
                  </p>
                  <a
                    href="https://placeandplenty.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-sans text-sm font-medium text-forest underline underline-offset-4"
                  >
                    Explore Place & Plenty &rarr;
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-10 text-center font-serif text-xl italic text-gold">
              Same heart. A larger table.
            </p>
          </div>
        </section>

        <section className="border-t border-espresso/10 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="font-sans text-sm text-gold">Selected work</p>
            <h2 className="mt-2 max-w-2xl font-serif text-3xl text-forest">
              Community, stewardship, and home.
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-espresso/75">
              The wider portfolio reflects other parts of the same commitment:
              helping people feel seen, supported, and at home.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {ventures.slice(2).map((v) => (
                <div key={v.name} className="flex flex-col border border-espresso/10 bg-ivory">
                  <div className="relative aspect-square w-full bg-cream">
                    <Image src={v.image} alt={v.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-serif text-xl text-forest">
                      <a href={v.href} className="hover:text-gold">{v.name}</a>
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-espresso/75">{v.description}</p>
                    <p className="mt-3 font-sans text-sm italic text-espresso/65">
                      {v.relationship}
                    </p>
                    <a
                      href={v.href}
                      target={v.href.startsWith("http") ? "_blank" : undefined}
                      rel={v.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-4 font-sans text-sm font-medium text-forest underline underline-offset-4"
                    >
                      {v.href_is_temporary ? "View community work" : `Visit ${v.name.replace(" Inc.", "")}`} &rarr;
                    </a>
                    {v.href_is_temporary && (
                      <p className="mt-2 font-sans text-xs text-espresso/55">
                        Official website link withheld while the domain is unavailable.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-espresso/10 bg-ivory px-6 py-16 text-center">
          <p className="mx-auto max-w-2xl font-serif text-2xl italic text-forest">
            The work may take different forms. The purpose has always been
            people.
          </p>
        </section>

        <section className="border-t border-espresso/10 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="font-sans text-sm text-gold">Press &amp; Recognition</p>
            <h2 className="mt-2 font-serif text-3xl text-forest">
              Stories that highlight the work.
            </h2>
            <p className="mt-3 max-w-xl font-sans text-espresso/80">
              Something Sweet LLC and Alexis have been featured across
              Nashville media, sharing hospitality, creativity, and community.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {pressItems.map((item) => (
                <div key={item.outlet} className="border border-espresso/10 bg-ivory">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.image}
                      alt={item.description}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-serif text-lg text-forest">{item.outlet}</p>
                    <p className="mt-1 font-sans text-sm text-espresso/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/press"
              className="mt-6 inline-block font-sans text-sm font-medium text-forest underline underline-offset-4"
            >
              View Press &amp; Recognition &rarr;
            </Link>
          </div>
        </section>

        <section className="border-t border-espresso/10 bg-ivory px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="font-script text-3xl text-gold">Life with Lexi</p>
            <h2 className="mt-2 font-serif text-3xl text-forest">
              Notes from the life behind the work.
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {editorialNotes.map((note) => (
                <article key={note.title} className="border-t border-gold pt-5">
                  <p className="font-sans text-xs uppercase tracking-[0.16em] text-gold">
                    {note.category}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-forest">{note.title}</h3>
                  <p className="mt-3 font-sans leading-relaxed text-espresso/75">{note.excerpt}</p>
                </article>
              ))}
            </div>
            <Link href="/life-with-lexi" className="mt-8 inline-block font-sans font-medium text-forest underline underline-offset-4">
              Read Life with Lexi &rarr;
            </Link>
          </div>
        </section>

        <section className="border-t border-espresso/10 bg-forest px-6 py-16 text-cream">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
            <h2 className="font-serif text-3xl">
              Everything begins around the table.
            </h2>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/life-with-lexi/food/fall-breakfast-board.jpg"
                alt="A fall breakfast spread with biscuits, bread, and fruit"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-forest px-6 py-20 text-cream">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="font-script text-3xl text-gold">A larger table</p>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl">Building something thoughtful?</h2>
              <p className="mt-3 max-w-2xl font-sans text-cream/75">
                For media, speaking, partnerships, business, or community work,
                choose the conversation that fits.
              </p>
            </div>
            <Link href="/contact" className="inline-block bg-cream px-6 py-3 font-sans font-medium text-forest hover:bg-gold hover:text-cream">
              Contact Alexis
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
