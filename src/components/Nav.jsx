import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaComment } from "react-icons/fa";

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-3">
        <li className="rounded-lg bg-accent hover:bg-accentTwo transition-all duration-300 ease-linear">
          <Link
            to="/"
            className="text-xs md:text-sm lg:text-base py-2 px-3 flex items-center justify-center gap-2"
          >
            <FaHome /> Home
          </Link>
        </li>
        <li className="rounded-lg bg-accent hover:bg-accentTwo transition-all duration-300 ease-linear">
          <Link
            to="/projects"
            className="text-xs md:text-sm lg:text-base py-2 px-3 flex items-center justify-center gap-2"
          >
            <FaBriefcase /> Projects
          </Link>
        </li>
        <li className="rounded-lg bg-accent hover:bg-accentTwo transition-all duration-300 ease-linear">
          <Link
            to="/contact"
            className="text-xs md:text-sm lg:text-base py-2 px-3 flex items-center justify-center gap-2"
          >
            <FaComment /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
