import Image from "next/image";

export function LaptopPhoneMockup({
  laptopSrc,
  laptopAlt,
  phoneSrc,
  phoneAlt,
}: {
  laptopSrc: string;
  laptopAlt: string;
  phoneSrc: string;
  phoneAlt: string;
}) {
  return (
    <div className="relative w-full pb-[10%]">
      {/* Laptop */}
      <div className="relative mx-auto w-full max-w-2xl">
        <div className="rounded-t-xl border-[6px] border-b-0 border-espresso bg-espresso p-1.5 shadow-xl">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-cream">
            <Image
              src={laptopSrc}
              alt={laptopAlt}
              fill
              sizes="(min-width: 768px) 42vw, 90vw"
              className="object-cover object-top"
            />
          </div>
        </div>
        {/* Laptop base */}
        <div className="mx-auto h-3 w-full rounded-b-md bg-espresso" />
        <div className="mx-auto h-1.5 w-1/3 rounded-b-lg bg-espresso/70" />
      </div>

      {/* Phone, overlapping bottom-right */}
      <div className="absolute -bottom-2 right-0 w-[26%] max-w-[170px] sm:right-4 md:right-8">
        <div className="rounded-[1.4rem] border-[5px] border-espresso bg-espresso p-0.5 shadow-xl">
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1rem] bg-cream">
            <Image
              src={phoneSrc}
              alt={phoneAlt}
              fill
              sizes="170px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
