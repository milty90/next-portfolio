"use client";
import useOnScroll from "../hooks/useOnScroll";
import ColorButton from "../ui/ColorButton";

export default function Contact() {
  const ref = useOnScroll<HTMLDivElement>();
  return (
    <section
      ref={ref}
      id="contact"
      className="overflow-hidden py-10 md:py-20 opacity-0 translate-y-7.5 transition-all duration-700 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
    >
      <div className="flex flex-col px-7 md:gap-10 max-w-(--maxw) mx-auto">
        <div className="text-ink flex flex-col md:flex-row gap-4 lg:gap-40 justify-between">
          <div>
            <p className="text-blue font-mono pl-2 mb-2 tracking-wide">
              {"// kontakt"}
            </p>
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold w-[15ch]">
              Lust, gemeinsam etwas zu bauen?
            </h2>
            <p className="text-ink-soft my-5.5  text-[0.95rem] max-w-[26rem]">
              Aktuell bin ich für neue Projekte oder Vollzeit Herausforderungen
              verfügbar. Kontaktieren Sie mich gerne!
            </p>
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
          <div className=" border font-monospace mt-8 border-none  rounded-2xl overflow-hidden w-full md:w-[26rem]">
            <div className="flex items-center font-monospace text-sm gap-2.5 px-4 py-3 text-ink-faint w-[23rem] border-b border-line">
              <span className="bg-blue ml-2 w-2 h-2 rounded-full"></span>
              contact.json
            </div>
            <div className="font-monospace text-xs md:text-[0.8rem] lg:text-[0.9rem]  md:ml-2 text-ink-faint  pt-4 md:px-0 md:pt-7 lg:px-7">
              <p>{"{"}</p>
              <p className="ln">
                &nbsp;&nbsp;
                <span className="text-ink-soft leading-6">
                  {'"name"'}
                </span>:{" "}
                <span className="text-copper">{'"Milan Tyopity"'}</span>,
              </p>
              <p className="ln">
                &nbsp;&nbsp;
                <span className="text-ink-soft leading-6">
                  {'"email"'}
                </span>:{" "}
                <a className="text-copper" href="mailto:hallo@milantyopity.com">
                  {'"hallo@milantyopity.com"'}
                </a>
                ,
              </p>
              <p className="ln">
                &nbsp;&nbsp;
                <span className="text-ink-soft leading-6">
                  {'"github"'}
                </span>:{" "}
                <a
                  className="text-copper"
                  href="https://github.com/milty90"
                  target="_blank"
                  rel="noopener"
                >
                  {'"github.com/milty90"'}
                </a>
                ,
              </p>
              <p className="ln">
                &nbsp;&nbsp;
                <span className="text-ink-soft leading-6">
                  {'"status"'}
                </span>: <span className="text-copper">{'"verfügbar"'}</span>
              </p>
              <p className="ln">{"}"}</p>
            </div>
            <div
              className={` md:px-4 pt-3.5 pb-0 flex items-center justify-end `}
            >
              <button
                className="bg-transparent flex items-center md:mb-3 gap-2 text-ink px-5 py-2.5 font-semibold text-[0.86rem] rounded-4xl whitespace-nowrap  hover:bg-ink hover:text-bg transition-color duration-400 "
                onClick={() => {
                  window.open("https://github.com/milty90", "_blank");
                }}
              >
                <span>GitHub</span>
              </button>
            </div>
          </div>
        </div>
        <p className="text-ink-soft font-monospace text-[0.95rem] "></p>
      </div>
    </section>
  );
}
