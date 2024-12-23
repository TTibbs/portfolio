import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { fetchProjects } from "../utils/api";
import Loading from "./Loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchProjects()
      .then(({ data: { projects } }) => {
        setProjects(projects);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading loading={loading}></Loading>;
  }

  return (
    <section className="max-w-7xl mt-24 mx-auto px-4 py-8">
      {error && <p>{error.msg}</p>}
      <h2 className="text-3xl font-bold text-accent text-center mb-8">
        My Projects
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.project_id} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
