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
      <div className="flex flex-col md:flex-row px-7 gap-10 max-w-(--maxw) mx-auto px-7 justify-between items-center md:items-start ">
        <div className="max-w-[26rem]">
          <p className="text-ink font-semibold font-space text-xl md:text-2xl/normal mb-6">
            Ich liebe es, neue Dinge zu lernen und Ideen in die Realität zu
            bringen. Und wenn der Editor mal Pause hat, probiere ich neue
            Technologien aus oder schaue mir aktuelle Design-Trends an.
          </p>
        </div>
        <div className="font-monospace text-ink-faint text-[1rem] md:text-[1rem]">
          <div className=" text-ink/90 max-w-[26rem] md:text-lg/[1.5]">
            <p className="my-4">
              Aktuell mache ich die Frontend-Weiterbildung bei DevKarriere und
              setze das Gelernte gleich in eigenen Projekten um.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
