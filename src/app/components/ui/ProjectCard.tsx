interface ProjectCardProps {
  size?: string;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  code: string;
  live: string;
}

export default function ProjectCard({
  size = "small",
  title,
  desc,
  img,
  tags,
  code,
  live,
}: ProjectCardProps) {
  return (
    <div className={`flex flex-col overflow-hidden max-h-150 rounded ${size}`}>
      <div className={` relative overflow-hidden rounded-t-3xl ${size}`}>
        <div className="absolute inset-0 bg-bg/10"></div>
        <img
          className="object-cover  rounded-t-3xl pt-1 px-1 "
          src={img}
          alt={title}
          loading="lazy"
        />
      </div>
      <div
        className={` overflow-hidden bg-linear-to-t from-gray-800 from-50% to-transparent border-b border-blue/80 rounded-2xl ${size}`}
      >
        <div className="p-6 pt-5 flex flex-col gap-2">
          <h3 className="text-[1.5rem] text-ink font-bold tracking-tight  mb-1">
            {title}
          </h3>

          <p className="text-ink-soft text-[0.95rem] max-w-[45ch] mb-2">
            {desc}
          </p>
          <div className="flex gap-1.5 text-[0.75rem] text-ink-soft font-mono flex-wrap">
            {tags.map((t) => (
              <span
                className="text-[0.75rem] border rounded-2xl text-ink border-blue/80 px-3 py-1 "
                key={t}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="text-ink-soft font-semibold font-mono flex pl-1 gap-3 mt-2">
            <a
              href={code}
              target="_blank"
              rel="noopener"
              className={`hover:text-copper transition-color duration-300 ${code === "denied" ? "pointer-events-none opacity-30" : ""}`}
            >
              Code ↗
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener"
              className={`hover:text-copper transition-color duration-300 ${live === "denied" ? "pointer-events-none opacity-30" : ""}`}
              aria-label="Live version"
            >
              Live ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
