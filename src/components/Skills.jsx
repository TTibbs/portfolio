import React from "react";

const Skills = () => {
  return (
    <section className="flex flex-col gap-5 border-2 bg-bgPrimary dark:bg-bgSecondary border-accent rounded-xl py-8 px-6 text-textPrimary dark:text-textSecondary">
      <h2 className="text-lg md:text-xl text-accent font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <i className="devicon-html5-plain-wordmark colored text-[55px] md:text-[75px]"></i>
        <i className="devicon-css3-plain-wordmark colored text-[55px] md:text-[75px]"></i>
        <i className="devicon-tailwindcss-original colored text-[55px] md:text-[75px]"></i>
        <i className="devicon-nodejs-plain-wordmark text-green-600 text-[55px] md:text-[75px]"></i>
        <i className="devicon-solidity-plain text-[55px] md:text-[75px]"></i>
        <i className="devicon-javascript-plain colored text-[55px] md:text-[75px]"></i>
        <i className="devicon-jest-plain colored text-[55px] md:text-[75px]"></i>
        <i className="devicon-react-original colored text-[55px] md:text-[75px]"></i>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
          className="w-[55px] md:w-[75px]"
          alt="vite.js logo"
        />
        <i className="devicon-nextjs-plain text-[55px] md:text-[75px]"></i>
        <i className="devicon-git-plain colored text-[55px] md:text-[75px]"></i>
        <i className="devicon-github-original text-[55px] md:text-[75px]"></i>
        <i className="devicon-express-original text-[55px] md:text-[75px]"></i>
        <i className="devicon-postgresql-plain-wordmark colored text-[55px] md:text-[75px]"></i>
        <i className="devicon-supabase-plain colored text-[55px] md:text-[75px]"></i>
        <i className="devicon-vercel-original-wordmark text-[55px] md:text-[75px]"></i>
      </div>
    </section>
  );
};

export default Skills;
