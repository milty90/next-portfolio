"use client";
import Image from "next/image";
import ColorButton from "../ui/ColorButton";
import useOnScroll from "../hooks/useOnScroll";

export default function Hero() {
  const ref = useOnScroll<HTMLDivElement>();
  return (
    <section
      ref={ref}
      id="hero"
      className="overflow-hidden pt-5 pb-2 md:py-25 opacity-0 translate-y-7.5 transition-all duration-700 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
    >
      <div className="grid grid-cols-1 px-7 md:grid-cols-2 gap-8 lg:gap-10 max-w-(--maxw) mx-auto items-center">
        <div>
          <h1 className="text-ink text-[55px] md:text-[85px] font-bold tracking-tight leading-[0.98] mt-2">
            Ich baue
            <br />
            Interfaces,
            <br />
            keine <span className="italic text-copper">Ausreden.</span>
          </h1>
          <p className="text-ink-soft text-[1.1rem]/[1.6] mt-6.5 mb-8.5 max-w-[22rem]">
            Ich bringe Design mit sauberem Code zum Leben. Schauen Sie sich
            meine aktuellsten Projekte unten an!
          </p>
          <div className="flex flex-row gap-3.5">
            <ColorButton
              color="transparent"
              height="py-3"
              border="border-2 border-blue hover:border-ink hover:text-bg"
              text="Portfolio ansehen"
              onClick={() => {
                const portfolioSection = document.getElementById("portfolio");
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
            <ColorButton
              color="transparent"
              height="py-3"
              border="hidden md:block hover:border-ink hover:text-bg"
              text="Kontakt aufnehmen"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </div>
        </div>
        <div className="relative flex justify-center pb-0">
          <div className="absolute w-[80%] h-[98%] top-[2%] right-[2%] z-0 bg-[radial-gradient(circle_at_70%_25%,var(--color-copper)_0%,rgba(198,139,87,0)_42%),radial-gradient(circle_at_25%_80%,var(--color-blue)_0%,rgba(61,90,138,0)_50%)] blur-[38px] opacity-55"></div>
          <div className="relative sm:w-3/4 z-1 md:w-3/4 md:ml-auto rounded-3xl bg-panel outline-2 outline-offset-3 outline-line overflow-hidden ">
            <Image
              src="/me.jpg"
              alt="Porträt von Milan"
              loading="eager"
              width={1024}
              height={731}
              className="w-full object-cover aspect-3/4 md:aspect-2/4 lg:aspect-3/4 object-[44%_25%] filter contrast-[1.04] saturate-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
