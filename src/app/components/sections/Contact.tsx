"use client";
import useOnScroll from "../hooks/useOnScroll";
import ColorButton from "../ui/ColorButton";

export default function Contact() {
  const ref = useOnScroll<HTMLDivElement>();
  return (
    <section
      ref={ref}
      id="contact"
      className="overflow-hidden py-10 md:py-15 opacity-0 translate-y-7.5 transition-all duration-700 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
    >
      <div className="flex flex-col px-7 md:mb-8 md:gap-10 max-w-(--maxw) mx-auto">
        <div className="text-ink flex flex-col md:flex-row md:gap-4 lg:gap-40 justify-between">
          <div>
            <p className="text-blue font-mono mb-2 tracking-wide">
              {"Kontakt"}
            </p>
            <h2 className="text-[2rem] text-ink/80 md:text-[2.6rem] mb-4 md:mb-8 font-bold w-[15ch]">
              Lust, <span className="text-copper">gemeinsam</span> etwas zu
              bauen?
            </h2>

            <ColorButton
              color="transparent"
              height="py-3"
              border="hidden md:block border-2 border-blue hover:border-ink hover:text-bg"
              text="E-Mail senden"
              onClick={() => {
                window.location.href = "mailto:hallo@milantyopity.com";
              }}
            />
          </div>
          <div className="font-monospace mt-8 border-none overflow-hidden w-full md:w-[26rem]">
            <div className="font-inter md:text-[1rem] text-ink-faint  md:pt-4 md:px-0 md:pt-7">
              <p>
                <span className="text-ink-soft leading-6">{"name"}</span>:
                <span className="text-ink/80  ml-3.5 font-inter">
                  {"Milan Tyopity"}
                </span>
                ,
              </p>
              <p>
                <span className="text-ink-soft leading-6">{"email"}</span>:
                <a
                  className="text-blue-soft font-inter ml-4"
                  href="mailto:hallo@milantyopity.com"
                >
                  {"hallo@milantyopity.com"}
                </a>
                ,
              </p>
              <p>
                <span className="text-ink-soft leading-6 ">{"github"}</span>:
                <a
                  className="text-blue-soft ml-1"
                  href="https://github.com/milty90"
                  target="_blank"
                  rel="noopener"
                >
                  {" github.com/milty90"}
                </a>
                ,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
