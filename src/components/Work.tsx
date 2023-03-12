import React from "react";
import projectsData from "../../public/data/projects";
import ProjectCard from "./ProjectCard";

const Work = () => {
  return (
    <div id="work" className="">
      <div
        id="experience"
        className="mb-32 max-w-5xl mx-auto px-10 font-mono sm:flex sm:justify-start sm:items-center mt-20"
      >
        <div className="w-full">
          <div>
            <p className="text-3xl md:text-5xl font-semibold text-gray-100 tracking-wide mb-8">
              My Projects
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projectsData.map((item) => (
              <ProjectCard item={item} key={item.title}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
