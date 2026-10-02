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
      className={`flex flex-col w-3/4 md:w-full justify-center items-start md:items-center  overflow-hidden ${isLeft % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}  md:gap-20`}
    >
      <div>
        <Image
          className={`object-cover mb-4 rounded-xl ${isLeft % 2 === 0 ? "md:mr-4" : "md:mb-0 md:ml-1"} `}
          width={350}
          height={280}
          src={img}
          alt={title}
          loading="eager"
        />
      </div>
      <div className={`overflow-hidden from-gray-800 from-50% `}>
        <div className="  flex flex-col gap-2">
          <h3 className="text-[1.5rem] ml-2 text-ink font-bold tracking-tight my-3">
            {title}
          </h3>
          <div className="flex gap-1.5 text-[0.75rem] text-ink-soft mb-3 font-mono flex-wrap">
            {tags.map((t) => (
              <span
                className="text-[0.75rem] bg-blue/20 rounded-2xl text-ink px-3 py-1 "
                key={t}
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-ink-soft text-[0.93rem] leading-6 md:line-clamp-3 max-w-[28rem] mb-2">
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
