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
      <div className="flex flex-col w-3/4 md:w-full md:items-start justify-between md:px-7 md:mb-8 md:gap-10 max-w-(--maxw) mx-auto">
        <div className="text-ink flex flex-col md:px-0 md:flex-row md:gap-4 lg:gap-40 justify-between">
          <div>
            <p className="text-blue font-mono mb-2 pl-1 tracking-wide">
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

          <div className="flex items-center gap-8 pt-4 md:pb-7 md:pt-0">
            <div
              onClick={() => {
                window.location.href = "mailto:hallo@milantyopity.com";
              }}
              className="mb-2 border-4 rounded-full border-copper p-1 size-16 hover:-translate-y-1 hover:cursor-pointer transition delay-100 duration-100 ease-out"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
                    stroke="#6f5575"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>

            <div
              onClick={() => {
                window.open("https://github.com/milty90", "_blank");
              }}
              className="mb-2 border-3 rounded-full border-ink-soft p-1 size-16 hover:-translate-y-1 hover:cursor-pointer transition ease-out"
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#a6a2a0"
                    fill-rule="evenodd"
                    d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z"
                    clip-rule="evenodd"
                  ></path>
                </g>
              </svg>{" "}
            </div>
            <div
              onClick={() => {
                window.open("https://www.linkedin.com/in/milty90", "_blank");
              }}
              className="mb-2 border-4 rounded-full border-blue p-1.5 size-16 hover:-translate-y-1 hover:cursor-pointer transition delay-100 duration-100 ease-out"
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#3d5a8a"
                    d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
