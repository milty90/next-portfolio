"use client";
import useOnScroll from "../hooks/useOnScroll";

export default function Values() {
  const ref = useOnScroll<HTMLDivElement>();
  return (
    <section
      ref={ref}
      id="values"
      className="overflow-hidden py-10 md:py-20 opacity-0 translate-y-7.5 transition-all duration-700 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
    >
      <div className="wrap px-7 max-w-(--maxw) mx-auto">
        <div className="text-ink mb-10 md:mb-15 reveal">
          <p className="text-blue font-mono pl-2 mb-2 tracking-wide">
            {"// warum ich"}
          </p>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold">
            Warum mit mir arbeiten
          </h2>
        </div>
        <div className="flex flex-col divide-y divide-line justify-start text-ink">
          <div className="grid md:grid-flow-col items-center justify-between  gap-4 py-10 ">
            <div className="grid md:grid-flow-col items-center justify-between gap-2 md:gap-20">
              <span className=" text-blue-soft font-mono max-w-[2rem]">01</span>
              <h3 className="text-ink font-bold md:w-[10rem] text-lg">
                Sauberer Code
              </h3>
            </div>
            <p className="text-ink-soft text-[0.95rem] max-w-[26rem] mr-0 md:mr-20  ">
              Strukturierter, gut lesbarer Code steht bei mir an erster Stelle
              für eine nachhaltige Entwicklung, an der auch andere Freude haben.
            </p>
          </div>
          <div className="grid md:grid-flow-col justify-between items-center  gap-4 py-10 ">
            <div className="grid md:grid-flow-col items-center justify-between gap-2 md:gap-20">
              <span className=" text-blue-soft font-mono max-w-[2rem]">02</span>
              <h3 className="text-ink font-bold md:w-[10rem] text-lg">
                Schnelles Lernen
              </h3>
            </div>
            <p className="text-ink-soft text-[0.95rem] max-w-[26rem] mr-0 md:mr-20">
              Neue Technologien lerne ich zügig und wende sie sofort in realen
              Anwendungsszenarien an.
            </p>
          </div>
          <div className="grid md:grid-flow-col justify-between  md:items-center gap-4 py-10 ">
            <div className="grid md:grid-flow-col items-center justify-between gap-2 md:gap-20">
              <span className=" text-blue-soft font-mono max-w-[2rem]">03</span>
              <h3 className="text-ink font-bold md:w-[10rem] text-lg">
                Blick fürs Detail
              </h3>
            </div>
            <p className="text-ink-soft text-[0.95rem] max-w-[26rem] mr-0 md:mr-20">
              Kleine Animationen, sauberes Spacing, durchdachte Zustände gutes
              Design steckt in den Details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
