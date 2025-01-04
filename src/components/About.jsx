import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const About = () => {
  return (
    <section className="flex flex-col gap-4 border-2 bg-bgPrimary dark:bg-bgSecondary border-accent w-full lg:w-[35%] rounded-xl py-14 px-5 items-center text-textPrimary dark:text-textSecondary">
      <img
        src="/tward.jpg"
        alt="Terry Ward"
        className="w-44 h-48 md:w-60 md:h-60 rounded-full border-4 border-accent"
      />
      <h1 className="text-lg md:text-xl font-semibold">Terry Ward</h1>
      <p className="text-base md:text-lg font-semibold">
        Junior Full-Stack Developer
      </p>
      <div className="flex space-x-4 mt-5">
        <a
          href="https://github.com/TTibbs"
          className="hover:text-accentTwo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={35} />
        </a>
        <a
          href="https://www.linkedin.com/in/terry-www/"
          className="hover:text-accentTwo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={35} />
        </a>
        <a
          href="https://www.codewars.com/users/TTibbs"
          className="hover:text-accentTwo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiCodewars size={35} />
        </a>
      </div>
    </section>
  );
};

export default About;
