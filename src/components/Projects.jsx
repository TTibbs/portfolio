import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../data/projects";

const Projects = () => {
  return (
    <section className="max-w-7xl mt-24 mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-accent text-center mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
