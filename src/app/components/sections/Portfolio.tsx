"use client";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import ProjectCard from "../ui/ProjectCard";
import { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../types";
import { getProjectsData } from "@/app/utils/getProjectsData";

export default function Portfolio() {
  const ref = useRevealOnScroll<HTMLDivElement>();
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
      <div className="wrap px-7 max-w-(--maxw) mx-auto">
        <div className="text-ink">
          <p className=" text-blue font-mono pl-2 mb-2 tracking-wide">
            {"// portfolio"}
          </p>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold ">
            Meine Projekte
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 opacity-100 md:opacity-0 md:translate-y-7.5 transition-all duration-700 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
          ref={ref}
        >
          {projectsData
            .sort((a, b) => (a.position > b.position ? 1 : -1))
            .map((p) => (
              <ProjectCard
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
      </div>
    </section>
  );
}
