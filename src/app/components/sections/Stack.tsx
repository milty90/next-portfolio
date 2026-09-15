"use client";
import useOnScroll from "../hooks/useOnScroll";

export default function Stack() {
  const ref = useOnScroll<HTMLDivElement>();
  return (
    <section
      ref={ref}
      id="stack"
      className="overflow-hidden py-10 md:py-20 opacity-0 translate-y-7.5 transition-all duration-700 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
    >
      <div className=" flex flex-col px-7 gap-10 max-w-(--maxw) mx-auto">
        <div className=" text-ink">
          <p className=" text-blue font-mono pl-2 mb-2 tracking-wide">
            {" // stack"}
          </p>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold ">
            Werkzeuge &amp; Technologien
          </h2>
        </div>
        <div className="rounded-3xl bg-panel p-6 md:p-8">
          <p className="font-monospace text-ink-faint text-[0.9rem] mb-7">
            <span className="text-blue">import</span> {"{ skills } "}
            <span className="text-blue">from</span>{" "}
            <span className="text-copper">{'" ./milan"'}</span>;
          </p>
          <div className="chip-row flex flex-wrap gap-4 py-0">
            <span className="font-mono text-ink bg-[#17181b]/50 gap-2 px-4 py-3 rounded-3xl text-[0.86rem]  flex items-center">
              <span className="w-2 h-2 inline-block rounded-xs bg-blue"></span>
              HTML5
            </span>
            <span className="font-mono text-ink bg-[#17181b]/50 gap-2 px-4 py-3 rounded-2xl text-[0.86rem]  flex items-center">
              <span className="w-2 h-2 inline-block rounded-xs bg-blue"></span>
              CSS3
            </span>
            <span className="font-mono text-ink bg-[#17181b]/50 gap-2 px-4 py-3 rounded-3xl text-[0.86rem]  flex items-center">
              <span className="w-2 h-2 inline-block rounded-xs bg-blue"></span>
              JavaScript
            </span>
            <span className="font-mono text-ink bg-[#17181b]/50 gap-2 px-4 py-3 rounded-xl text-[0.86rem]  flex items-center">
              <span className="w-2 h-2 inline-block rounded-xs bg-blue"></span>
              React
            </span>
            <span className="font-mono text-ink bg-[#17181b]/50 gap-2 px-4 py-3 rounded-xl text-[0.86rem]  flex items-center">
              <span className="w-2 h-2 inline-block rounded-xs bg-blue"></span>
              TypeScript
            </span>

            <span className="font-mono text-ink bg-[#17181b]/50 gap-2 px-4 py-3 rounded-md text-[0.86rem]  flex items-center">
              <span className="w-2 h-2 inline-block rounded-xs bg-blue"></span>
              SCSS
            </span>
            <span className="font-mono text-ink bg-[#17181b]/50 gap-2 px-4 py-3 rounded-2xl text-[0.86rem]  flex items-center">
              <span className="w-2 h-2 inline-block rounded-xs bg-blue"></span>
              Tailwind CSS
            </span>
            <span className="font-mono text-ink bg-[#17181b]/50 gap-2 px-4 py-3 rounded-xl text-[0.86rem]  flex items-center">
              <span className="w-2 h-2 inline-block rounded-xs bg-blue"></span>
              Vite
            </span>
            <span className="font-mono text-ink bg-[#17181b]/50 gap-2 px-4 py-3 rounded-3xl text-[0.86rem]  flex items-center">
              <span className="w-2 h-2 inline-block rounded-xs bg-blue"></span>
              Git &amp; GitHub
            </span>
            <span className="font-mono text-ink bg-[#17181b]/50 gap-2 px-4 py-3 rounded-xl text-[0.86rem]  flex items-center">
              <span className="w-2 h-2 inline-block rounded-xs bg-blue"></span>
              Netlify
            </span>
            <span className="font-mono text-ink bg-[#17181b]/50 gap-2 px-4 py-3 rounded-md text-[0.86rem]  flex items-center">
              <span className="w-2 h-2 inline-block rounded-xs bg-blue"></span>
              Supabase
            </span>
            <span className="font-mono text-ink bg-[#17181b]/50 gap-2 px-4 py-3 rounded-xl text-[0.86rem]  flex items-center">
              <span className="w-2 h-2 inline-block rounded-xs bg-blue"></span>
              Canva
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
