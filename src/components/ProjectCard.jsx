import React from "react";
import { Link } from "react-router-dom";

const TECH_COLORS = {
  React: "border-cyan-500",
  JavaScript: "border-yellow-500",
  TypeScript: "border-blue-500",
  Node: "border-green-500",
  Python: "border-blue-600",
  Django: "border-green-700",
  NextJS: "border-black",
  TailwindCSS: "border-blue-400",
  Redux: "border-purple-500",
  GraphQL: "border-pink-500",
  Firebase: "border-orange-500",
  MongoDB: "border-green-600",
  Solidity: "border-purple-600",
  Blockchain: "border-gray-700",
  Web3: "border-indigo-500",
  MetaMask: "border-orange-600",
  Express: "border-gray-500",
  PostgreSQL: "border-blue-700",
  "React Native": "border-teal-500",
  Expo: "border-indigo-600",
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
        {project.live_url && (
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
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`
                px-2 py-1 text-xs rounded-full 
                border 
                ${TECH_COLORS[tech] || "border-gray-500"}
                text-textPrimary dark:text-textSecondary
              `}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
