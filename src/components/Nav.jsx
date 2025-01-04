import React from "react";

const navItems = [
  {
    path: "#home",
    label: "Home",
  },
  {
    path: "#projects",
    label: "Projects",
  },
  {
    path: "#contact",
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
          <a
            href={item.path}
            onClick={onLinkClick}
            className="
              text-sm md:text-base lg:text-lg 
              w-28
              py-2 px-3 
              flex items-center justify-center
              rounded-lg 
              bg-accent hover:bg-accentTwo 
              transition-all duration-300 ease-linear
              focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50
            "
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
