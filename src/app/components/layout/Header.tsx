"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ColorButton from "../ui/ColorButton";

const links = [
  { href: "#about", label: "Über mich" },
  { href: "#stack", label: "Stack" },
  { href: "#portfolio", label: "Portfolio" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg-alt/20 backdrop-blur-md border-b border-line">
      <nav className="flex flex-row items-center font-bold justify-between px-7 p-4 max-w-(--maxw) mx-auto">
        <Link
          href="#top"
          className="flex font-space text-ink text-[1.1rem] gap-0.5"
        >
          Milan<span className="text-blue">.</span>Tyopity
        </Link>

        <ul
          className={`absolute top-15.5 left-0 bg-bg-alt/95 w-full pl-10 py-5 flex-col justify-center gap-7.5 ${
            open ? "flex" : "hidden"
          } md:bg-transparent md:pl-0 md:py-0 md:relative md:top-0 md:flex md:flex-row md:w-auto md:gap-7.5 md:justify-end`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-ink/85 text-[0.9rem] gap-4 tracking-wide font-normal relative text-ink-soft hover:text-blue transition-colors duration-300 hover:text-blue-soft transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
          <Image src="menu.svg" alt="Menu" width={24} height={24} />
        </button>

        <div className="hidden md:block">
          <ColorButton
            color="transparent"
            text="CV anfordern"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Milan_Tyopity_CV.pdf";
              link.download = "Milan_Tyopity_CV.pdf";
              link.click();
            }}
          />
        </div>
      </nav>
    </header>
  );
}
