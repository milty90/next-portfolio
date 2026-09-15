"use client";
import useOnScroll from "../hooks/useOnScroll";

export default function Career() {
  const ref = useOnScroll<HTMLDivElement>();
  return (
    <section
      id="career"
      className="overflow-hidden py-10 md:py-20 opacity-0 translate-y-7.5 transition-all duration-700 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
      ref={ref}
    >
      <div className="flex flex-col px-7 gap-10 max-w-(--maxw) mx-auto">
        <div className=" text-ink">
          <p className="text-blue font-mono pl-2 mb-2 tracking-wide">
            {"// timeline"}
          </p>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold">Werdegang</h2>
          <p className="text-ink-soft mt-2.5 text-[0.95rem] ">
            Ein kurzer Überblick
          </p>
        </div>
        <div className="flex flex-col divide-y divide-line text-ink">
          <div className="flex flex-col md:flex-row md:items-center  border-line gap-2 md:gap-6 py-8 ">
            <p className="md:w-35 text-blue-soft font-mono ">2025 — heute</p>
            <div>
              <h3 className="text-ink font-bold text-lg ">
                Frontend Developer Weiterbildung
              </h3>
              <span className="font-mono text-[0.85rem] text-ink-faint ">
                DevKarriere
              </span>
              <p className="text-ink-soft text-[0.95rem] max-w-[26rem] mt-5">
                Intensives Bootcamp mit Fokus auf moderne Frontend-Technologien,
                agile Entwicklungsmethoden und praxisnahe Projekte.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center h-fit border-line gap-2 md:gap-6 py-8 ">
            <p className="nowrap md:w-35 font-mono text-blue-soft">
              2023 — heute
            </p>
            <div>
              <h3 className="text-ink font-bold text-lg ">AOI Programmierer</h3>
              <span className="font-mono text-[0.85rem] text-ink-faint mb-2">
                Hekatron Manufacturing GmbH
              </span>
              <p className="text-ink-soft text-[0.95rem] mt-5 max-w-[26rem]">
                Eigenverantwortliche Programmierung und Betreuung von
                AOI-Prüfsystemen im THT-Bereich mit Fokus auf präziser
                Qualitätskontrolle, Minimierung von Pseudofehlern und
                kontinuierlicher Prozessoptimierung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
