import React from "react";
import { Link } from "react-router-dom";

const TECH_COLORS = {
  Solidity: "border-purple-600",
  React: "border-cyan-500",
  JavaScript: "border-yellow-500",
  TailwindCSS: "border-blue-400",
  Node: "border-green-500",
  Express: "border-gray-500",
  PostgreSQL: "border-blue-700",
  Supabase: "border-green-400",
  Jest: "border-green-600",
  Supertest: "border-red-500",
  "React Context": "border-cyan-400",
  Axios: "border-blue-500",
  "React Native": "border-teal-500",
  Expo: "border-indigo-600",
  Redux: "border-purple-500",
  NativeWind: "border-blue-500",
  TypeScript: "border-blue-500",
  Remix: "border-black",
  Netlify: "border-teal-600",
  Render: "border-indigo-500",
  "Visual Studio Code": "border-blue-600",
  Git: "border-orange-500",
  GitHub: "border-gray-800",
  Vercel: "border-black",
};

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col gap-2 h-full shadow-lg shadow-accent bg-bgPrimary dark:bg-bgSecondary border-2 border-accent rounded-lg p-4 hover:shadow-accentTwo transition-all duration-300 ease-linear">
      <h3 className="text-xl text-textPrimary dark:text-textSecondary font-semibold">
        {project.name}
      </h3>
      <p className="text-textPrimary dark:text-textSecondary mt-2 line-clamp-2">
        {project.description}
      </p>
      <div className="mt-4">
        {project?.live_url && (
          <Link
            to={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textPrimary dark:text-textSecondary py-2 px-3 rounded-lg border-2 border-accent hover:text-textSecondary hover:border-accentTwo hover:bg-accentTwo transition-all duration-300 ease-linear mr-4"
          >
            Live Project
          </Link>
        )}
        {project.github_url && (
          <Link
            to={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textPrimary dark:text-textSecondary py-2 px-3 rounded-lg border-2 border-accent hover:text-textSecondary hover:border-accentTwo hover:bg-accentTwo transition-all duration-300 ease-linear"
          >
            GitHub
          </Link>
        )}
      </div>
      {project.technologies && (
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className={`py-1 px-2 text-xs rounded-full border ${
                TECH_COLORS[tech] || "border-gray-500"
              } text-textPrimary dark:text-textSecondary`}
            >
              {" "}
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
