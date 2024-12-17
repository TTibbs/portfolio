import React from "react";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full py-5 px-20 text-zinc-100 bg-zinc-900 shadow-lg [box-shadow:0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm md:text-base text-center md:text-left">
          © {new Date().getFullYear()} Terry Ward. All rights reserved.
        </p>
        <div className="flex">
          <Link
            to="mailto:your-email@example.com"
            className="text-xs md:text-sm lg:text-base py-2 px-3 rounded-lg bg-accent hover:bg-accentTwo transition-all duration-300 ease-linear flex items-center justify-center gap-2"
          >
            <MdAlternateEmail /> Email Me
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
