"use client";
import useOnScroll from "../hooks/useOnScroll";
import { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../types";
import { getProjectsData } from "@/app/utils/getProjectsData";
import VerticalProjectCard from "../ui/VerticalProjectCard";

export default function Portfolio() {
  const ref = useOnScroll<HTMLDivElement>();
  const [projectsData, setProjectsData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjectsData();
      if (data == null || data.length === 0) {
        setProjectsData(projects);
      } else {
        setProjectsData(data);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="portfolio" className="overflow-hidden py-10 ">
      <div className=" flex flex-col px-7 max-w-(--maxw) mx-auto">
        <div className=" flex flex-col items-start  text-ink">
          <h2 className="text-[2rem] mb-1 md:text-[2.6rem] font-bold ">
            Meine Projekte
          </h2>
          <div className="w-[25rem] mb-10 border-b-2 border-blue/70" />
        </div>
        <div
          className="flex flex-col justify-center md:justify-between gap-15 md:gap-20 py-6 opacity-100 md:opacity-0 md:translate-y-7.5 transition-all duration-700 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
          ref={ref}
        >
          {projectsData
            .sort((a, b) => (a.position > b.position ? 1 : -1))
            .map((p) => (
              <VerticalProjectCard
                isLeft={projectsData.indexOf(p)}
                key={p.title}
                title={p.title}
                desc={p.desc}
                img={p.img}
                tags={p.tags}
                code={p.code}
                live={p.live}
              />
            ))}
        </div>
        <div className="text-ink-soft max-w-(--maxw) mt-[3.75rem] border-b border-line"></div>
      </div>
    </section>
  );
}
