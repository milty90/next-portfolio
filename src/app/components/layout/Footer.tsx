"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="border-t border-line">
        <div className="flex flex-col md:flex-row items-start  md:items-center  justify-between gap-4 px-7 py-7 max-w-(--maxw) mx-auto text-[0.86rem] text-ink-faint">
          <span className="font-mono text-ink-soft text-[0.74rem]  md:text-[0.86rem]">
            © 2026 Milan Tyopity. gebaut mit Next.js, Tailwind &amp; TS
          </span>
          <div className="gap-4 flex items-center justify-center">
            <Link
              href="https://github.com/milty90"
              target="_blank"
              rel="noopener"
              className="text-ink-soft hover:text-blue transition-colors duration-300"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/milty90/"
              target="_blank"
              rel="noopener"
              className="text-ink-soft hover:text-blue transition-colors duration-300"
            >
              LinkedIn
            </Link>
            <Link
              href="/impressum"
              className="text-ink-soft hover:text-blue transition-colors duration-300"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
