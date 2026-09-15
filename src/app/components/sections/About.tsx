"use client";
import useOnScroll from "../hooks/useOnScroll";

export default function About() {
  const ref = useOnScroll<HTMLDivElement>();
  return (
    <section
      ref={ref}
      id="about"
      className="overflow-hidden py-15 opacity-0 translate-y-7.5 transition-all duration-700 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
    >
      <div className="grid grid-cols-1 px-7 md:grid-cols-2 gap-10 max-w-(--maxw) mx-auto items-start">
        <div className="max-w-[26rem]">
          <p className="text-ink font-semibold font-space text-2xl/normal mb-6">
            Ich glaube, guter Code sollte nicht nur{" "}
            <span className="hl text-copper">funktionieren</span> , er sollte
            sich auch lesen lassen wie ein gut geschriebener Satz.
          </p>
          <div className="about-text *:text-ink-soft text-[1.05rem]/[1.5]">
            <p className="mb-4">
              Mit Leidenschaft entwickle ich klare, ästhetische und funktionale
              Webanwendungen. Wenn der Editor mal Pause hat, erkunde ich neue
              Technologien oder verfolge aktuelle Design-Trends.
            </p>
            <p className="mb-4">
              Aktuell durchlaufe ich die Frontend-Weiterbildung bei DevKarriere.
              Dabei konzentriere ich mich darauf, praxistaugliche digitale
              Produkte zu entwickeln, die echten Mehrwert bieten.
            </p>
          </div>
        </div>
        <div className="font-monospace text-ink-faint text-[0.9rem] md:text-[1rem]">
          <p
            className="monospace mb-2.5"
            style={{
              fontSize: "0.78rem",
              color: "var(--ink-faint)",
              marginBottom: "6px",
            }}
          >
            womit ich am liebsten arbeite
          </p>
          <div className="mb-2.5 flex flex-wrap items-end gap-2.5">
            <span className="text-[1.5rem] text-ink font-semibold">HTML5 </span>
            <span className="text-[1.15rem] text-ink ">CSS3 </span>
            <span className="text-[1.15rem] text-ink">JavaScript </span>
            <span className="text-[0.82rem] text-ink-faint">SCSS </span>
            <span className="text-[1.5rem] text-ink font-semibold">React </span>
            <span className="text-[0.75rem] text-ink-faint">Vite </span>
            <span className="text-[0.75rem] text-ink-faint">
              Git &amp; GitHub{" "}
            </span>
            <span className="text-[1.5rem] text-ink font-semibold">
              TypeScript{" "}
            </span>

            <span className="text-[1.5rem] text-ink font-semibold">
              Tailwind CSS{" "}
            </span>
            <span className="text-[0.75rem] text-ink-faint">Netlify </span>
            <span className="text-[1.15rem] text-ink">Supabase </span>
          </div>
          <p className="font-mono">am Gößten am liebsten</p>
        </div>
      </div>
    </section>
  );
}
