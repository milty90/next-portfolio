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

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();

    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", `#${id}`);
    }

    setOpen(false);
  };

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
          } md:bg-transparent  md:py-0 md:relative md:top-0 md:flex md:flex-row md:justify-center md:gap-7.5`}
        >
          {links.map((l) => {
            const id = l.href.replace("#", "");

            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-ink/85 text-[0.9rem] gap-4 tracking-wide font-normal relative text-ink-soft hover:text-blue transition-colors duration-300 hover:text-blue-soft transition-colors duration-300"
                  onClick={(e) => handleNavClick(e, id)}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-row items-center gap-4">
          <div className="block md:hidden">
            <Link href="/requestcv">
              <ColorButton color="transparent" text="CV" />
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Image src="menu.svg" alt="Menu" width={24} height={24} />
          </button>
        </div>

        <div className="hidden md:block">
          <Link href="/requestcv">
            <ColorButton color="transparent" text="CV anfordern" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
