import Image from "next/image";
import Link from "next/link";
import { ventures, lifeWithLexiPillars, pressItems } from "@/lib/site-data";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { LaptopPhoneMockup } from "@/components/LaptopPhoneMockup";


function AssetPending({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-1 border border-dashed border-espresso/25 bg-ivory px-4 text-center">
      <span className="font-sans text-xs uppercase tracking-wide text-espresso/50">
        Asset pending
      </span>
      <span className="font-sans text-sm text-espresso/70">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
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
              src="/images/life-with-lexi/at-home.jpg"
              alt="Alexis Hughes-Williams"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="border-t border-espresso/10 bg-ivory px-6 py-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl text-forest">
              More than one title. One connected body of work.
            </h2>
            <p className="mt-4 font-sans text-espresso/80">
              Across business, family, and community, Alexis creates spaces,
              experiences, and opportunities that bring people together. What
              drives the work has never changed &mdash; people.
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
                  <h3 className="font-serif text-xl text-forest">Something Sweet LLC</h3>
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
                  <h3 className="font-serif text-xl text-forest">Place & Plenty</h3>
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
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {ventures.map((v) => (
                <div key={v.name} className="flex flex-col border border-espresso/10 bg-ivory">
                  <div className="relative aspect-square w-full bg-cream">
                    {v.image ? (
                      <Image src={v.image} alt={v.name} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                    ) : (
                      <AssetPending label={`${v.name} image`} />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-serif text-base text-forest">{v.name}</h3>
                    <p className="mt-1 font-sans text-xs text-espresso/70">{v.description}</p>
                    <p className="mt-2 font-sans text-xs italic text-espresso/60">
                      {v.relationship}
                    </p>
                    <a
                      href={v.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 font-sans text-xs font-medium text-forest underline underline-offset-4"
                    >
                      Visit website &rarr;
                    </a>
                    {v.href_is_temporary && (
                      <p className="mt-2 font-sans text-[11px] text-espresso/50">
                        Temporary link pending site repair.
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

        <section className="border-t border-espresso/10 px-6 py-16">
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
              <div className="relative h-24 w-24">
                <Image
                  src="/images/life-with-lexi/logo-official.png"
                  alt="Life with Lexi logo"
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
              <h2 className="mt-3 font-serif text-3xl text-forest">
                A fuller life, on purpose.
              </h2>
              <p className="mt-3 font-sans text-espresso/80">
                A look into the people, moments, and everyday joys that keep
                this work grounded and inspired.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-4 font-sans text-sm">
                {lifeWithLexiPillars.map((p) => (
                  <li key={p.name}>
                    <p className="font-medium text-forest">{p.name}</p>
                    <p className="text-espresso/70">{p.description}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/life-with-lexi"
                className="mt-6 inline-block font-sans text-sm font-medium text-forest underline underline-offset-4"
              >
                Read Life with Lexi &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
