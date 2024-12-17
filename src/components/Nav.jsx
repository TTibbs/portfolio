import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaComment } from "react-icons/fa";

const navItems = [
  {
    path: "/",
    icon: <FaHome />,
    label: "Home",
  },
  {
    path: "/projects",
    icon: <FaBriefcase />,
    label: "Projects",
  },
  {
    path: "/contact",
    icon: <FaComment />,
    label: "Contact",
  },
];

const Nav = ({ isMobile = false, onLinkClick }) => {
  return (
    <ul
      className={`
        flex 
        ${isMobile ? "flex-col space-y-4" : "flex-row items-center space-x-6"}
      `}
    >
      {navItems.map((item) => (
        <li key={item.path} className="flex items-center justify-center">
          <Link
            to={item.path}
            onClick={onLinkClick}
            className="
              text-xs md:text-sm lg:text-base 
              w-28
              py-2 px-3 
              flex items-center gap-2 
              rounded-lg 
              bg-accent hover:bg-accentTwo 
              transition-all duration-300 ease-linear
              focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50
            "
          >
            {item.icon} {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
