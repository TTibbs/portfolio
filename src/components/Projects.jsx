import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch("")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProjects(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching projects:", error);
  //       setLoading(false);
  //     });
  // }, []);

  if (loading)
    return (
      <div className="min-h-[95vh] grid place-items-center text-accent text-3xl">
        Loading projects...
      </div>
    );

  return (
    <section className="max-w-7xl mt-24 mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-accent text-center mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-md"
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-500 hover:text-blue-700"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
