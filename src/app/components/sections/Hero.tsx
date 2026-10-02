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
      className="overflow-hidden pt-5 pb-2 md:py-21 opacity-0 translate-y-7.5 transition-all duration-700 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
    >
      <div className="grid grid-cols-1 px-7 md:grid-cols-2 gap-10 max-w-(--maxw) mx-auto items-start">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-ink text-center md:text-left text-[65px] -ml-1 md:text-[75px] lg:text-[85px] tracking-tight leading-[0.98]">
            <span className="font-light">
              Ihr neuer
              <br />
              Frontend
              <br />
              <span className="font-inter font-medium text-copper">
                Developer
              </span>
            </span>
          </h1>
          <p className="text-ink/80 text-center md:text-left text-[1.1rem]/[1.6] mt-6.5 mb-8.5 max-w-[22rem]">
            Hallo! Ich bin Milan, Softwareentwickler mit Schwerpunkt Web
            Development.
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
        <div className="relative flex flex-col lg:my-6 items-center justify-center ">
          <div className="relative size-[260px]  md:mx-auto md:w-[260px] md:h-auto lg:mx-0 lg:size-auto lg:ml-auto rounded-full  bg-transparent outline-5 outline-offset-5 outline-blue/50 overflow-hidden ">
            <Image
              src="/4K_me.png"
              alt="Porträt von Milan"
              loading="eager"
              width={1024}
              height={731}
              className=" md:max-w-sm bg-line/10  object-cover aspect-square object-[40%_0%] md:object-[79%_25%] lg:object-[44%_25%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
