"use client";

import { useState } from "react";
import Link from "next/link";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "My Work", href: "/my-work" },
  { label: "Life with Lexi", href: "/life-with-lexi" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-espresso/10 bg-cream">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-lg tracking-wide text-forest">
          Alexis Hughes-Williams
        </Link>

        <ul className="hidden gap-8 font-sans text-sm text-espresso md:flex">
          {nav.slice(1).map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-forest">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-forest transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-forest transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-forest transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-espresso/10 bg-cream px-6 py-4 font-sans text-sm md:hidden"
        >
          {nav.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-espresso hover:text-forest"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
