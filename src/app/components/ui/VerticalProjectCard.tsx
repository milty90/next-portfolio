import Image from "next/image";
import ColorButton from "./ColorButton";
interface ProjectCardProps {
  isLeft?: number;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  code: string;
  live: string;
}

export default function ProjectCard({
  isLeft = 0,
  title,
  desc,
  img,
  tags,
  code,
  live,
}: ProjectCardProps) {
  console.log(isLeft);
  return (
    <div
      className={`flex flex-col p-6 shadow-sm bg-panel/80 border border-line/30 rounded-3xl justify-between items-center overflow-hidden ${isLeft % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}  md:gap-30`}
    >
      <div>
        <Image
          className="mb-4 rounded-lg sepia-10 shadow-xs"
          width={350}
          height={280}
          src={img}
          alt={title}
          loading="eager"
        />
      </div>
      <div>
        <div className=" flex flex-col gap-2">
          <h3 className="text-[1.5rem] ml-2 text-ink font-bold tracking-tight mb-3">
            {title}
          </h3>
          <div className="flex flex-wrap max-w-[26rem] gap-1.5 text-[0.75rem] text-ink-soft mb-3 font-mono ">
            {tags.map((t) => (
              <span
                className="text-[0.75rem] bg-blue/20 rounded-2xl text-ink px-3 py-1  "
                key={t}
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-ink-soft text-[0.93rem] max-w-[28rem] leading-6 mb-2">
            {desc}
          </p>

          <div className="text-ink-soft font-inter flex gap-3 md:gap-5 ml-1 mt-2">
            <ColorButton
              color="transparent"
              height="py-2"
              border="border-2 border-blue hover:border-ink hover:text-bg"
              text="Code"
              onClick={() => {
                window.open(code, "_blank");
              }}
            />
            <ColorButton
              disabled={live === "denied"}
              color="transparent"
              height="py-2"
              border={`hover:border-ink hover:text-bg ${live === "denied" ? "opacity-50 cursor-not-allowed" : ""}`}
              text="Projekt ansehen"
              onClick={() => {
                window.open(live, "_blank");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
