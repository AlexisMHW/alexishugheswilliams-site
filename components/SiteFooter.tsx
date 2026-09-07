import Link from "next/link";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "My Work", href: "/my-work" },
  { label: "Life with Lexi", href: "/life-with-lexi" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-espresso/10 bg-forest px-6 py-10 text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <p className="font-serif text-lg">Alexis Hughes-Williams</p>
        <ul className="flex flex-wrap justify-center gap-6 font-sans text-sm">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-gold">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="font-sans text-xs text-cream/60">
          &copy; {new Date().getFullYear()} Alexis Hughes-Williams
        </p>
      </div>
    </footer>
  );
}
