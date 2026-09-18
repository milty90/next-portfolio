"use client";
import Link from "next/link";
export function Impressum() {
  return (
    <div
      id="impressum"
      className="overflow-hidden min-h-dvh flex flex-col transition-all duration-700"
    >
      <header className="sticky top-0 z-50 bg-bg-alt/20 backdrop-blur-md border-b border-line">
        <nav className="flex flex-row items-center font-bold justify-between px-7 p-4.5 max-w-180 mx-auto">
          <a className="flex font-space text-ink text-[1.1rem] gap-0.5">
            Milan<span className="text-blue">.</span>Tyopity
          </a>

          <div className="hidden md:block">
            <Link href="/" passHref>
              <button className="bg-transparent font-monospace flex items-center gap-1.5 text-[0.82rem] font-light text-ink-soft hover:text-ink px-5 py-2.5">
                ← Zurück zum Portfolio
              </button>
            </Link>
          </div>
          <div className="block md:hidden">
            <Link href="/" passHref>
              <button className="bg-transparent font-monospace flex items-center gap-1.5 text-[0.82rem] font-light text-ink-soft hover:text-ink pl-5 py-2.5">
                ← Zurück
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <section className="flex flex-1 overflow-hidden pt-5 md:py-15 transition-all duration-700">
        <div className="flex flex-col px-5 text-ink-soft text-[0.96rem] mb-0 md:max-w-180 mx-auto">
          <p className="text-blue font-mono pl-2 mb-3.5 tracking-wide">
            {"// impressum"}
          </p>
          <h1 className="text-ink text-[2.4rem] font-trafont font-bold tracking-tight mb-10">
            Impressum
          </h1>
          <p className="text-ink text-[1.05rem] font-semibold mb-2">
            Angaben gemäß § 5 TMG
          </p>
          <p>Milan Tyopity</p>
          <p>Zur Tiefmatte 7</p>
          <p>79241 Ihringen</p>
          <p>Deutschland</p>
          <p className="text-ink text-[1.05rem] font-semibold mt-9 mb-2">
            Kontakt:
          </p>
          <p>
            E-Mail:
            <a
              className="text-blue-soft pl-2"
              href="mailto:hallo@milantyopity.com"
            >
              hallo@milantyopity.com
            </a>
          </p>
          <p>
            Telefon:
            <a className="text-blue-soft pl-2" href="tel:+4915784590727">
              +49 1578 4590727
            </a>
          </p>

          <p className="text-ink text-[0.95rem] mt-9 mb-2 md:pr-25 sm:text-wrap w-fit tracking-widest">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle: <br />
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <div className="mt-auto ">
            <div className="border-t border-line md:w-160 mt-14 mb-3.5"></div>
            <p className="text-ink-soft/60 text-[0.78rem] mb-4 font-mono tracking-wide">
              © 2026 Milan Tyopity. gebaut mit Vite, Tailwind &amp; TS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
