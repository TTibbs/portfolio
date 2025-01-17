import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects";

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8" id="projects">
      <h2 className="text-3xl font-bold text-accent text-center mb-8">
        My Projects
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
