"use client";
import useOnScroll from "../hooks/useOnScroll";

export default function Stack() {
  const ref = useOnScroll<HTMLDivElement>();
  return (
    <section
      ref={ref}
      id="stack"
      className="overflow-hidden py-10 md:py-15 opacity-0 translate-y-7.5 transition-all duration-700 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
    >
      <div className=" flex flex-col px-5 gap-10 max-w-(--maxw) mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center font-space text-ink-faint text-[0.9rem] md:text-[1rem] mb-7 md:mb-4 flex flex-wrap items-end gap-8">
            <span className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-blue-soft font-semibold">
              React{" "}
            </span>
            <span className="text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] text-ink font-semibold">
              Tailwind CSS
            </span>
            <span className="text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] text-ink-soft font-semibold">
              TypeScript
            </span>
            <span className="text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] text-ink font-semibold">
              HTML5{" "}
            </span>
            <span className="text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] text-blue-soft">
              CSS3{" "}
            </span>
          </div>
          <div className="flex justify-center items-center font-space text-ink-faint text-[0.9rem] md:text-[1rem] mb-2 flex flex-wrap items-end gap-8">
            <span className=" text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] text-ink">
              JavaScript{" "}
            </span>
            <span className="text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] text-ink-soft">
              SCSS{" "}
            </span>

            <span className="text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] text-blue-soft">
              Vite{" "}
            </span>
            <span className="text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] text-ink-soft">
              Git &amp; GitHub{" "}
            </span>

            <span className="text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] text-ink">
              Supabase{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
