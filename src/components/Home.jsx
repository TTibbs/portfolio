import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const Home = () => {
  return (
    <>
      <Header />
      <section className="mt-32 mb-12 px-4 lg:px-20">
        <div className="flex flex-col-reverse gap-3 lg:flex-row items-start justify-between">
          <div className="flex flex-col w-full lg:w-[60%] space-y-6">
            <div className="flex flex-col gap-3 border-2 bg-bgPrimary dark:bg-bgSecondary border-accent rounded-xl py-8 px-6 text-textSecondary">
              <h2 className="text-lg md:text-xl text-accent font-bold mb-4">
                Hello World!
              </h2>
              <p className="text-lg md:text-xl text-textPrimary dark:text-textSecondary leading-relaxed">
                I'm Terry Ward, a driven and skilled Junior Full-Stack
                Developer. I create intuitive web applications with clean,
                efficient code. Check out my projects and connect with me below!
              </p>
            </div>
            <div className="flex flex-col gap-5 border-2 bg-bgPrimary dark:bg-bgSecondary border-accent rounded-xl py-8 px-6 text-textPrimary dark:text-textSecondary">
              <h2 className="text-lg md:text-xl text-accent font-bold mb-4">
                Skills
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  className="w-[70px]"
                  alt="html5 logo"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  className="w-[70px]"
                  alt="css 3 logo"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  className="w-[70px]"
                  alt="tailwind css logo"
                />
                <i
                  class="devicon-nodejs-plain-wordmark text-green-600"
                  style={{ fontSize: "70px" }}
                ></i>
                <i
                  class="devicon-solidity-plain"
                  style={{ fontSize: "70px" }}
                ></i>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  className="w-[70px] rounded-lg"
                  alt="javascript logo"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  className="w-[70px] rounded-lg"
                  alt="typescript logo"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
                  className="w-[70px]"
                  alt="jest logo"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  className="w-[70px]"
                  alt="react logo"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  className="w-[70px]"
                  alt="vite.js logo"
                />
                <i
                  className="devicon-nextjs-plain"
                  style={{ fontSize: "70px" }}
                ></i>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  className="w-[70px]"
                  alt="git logo"
                />
                <i
                  class="devicon-github-original"
                  style={{ fontSize: "70px" }}
                ></i>
                <i
                  className="devicon-express-original"
                  style={{ fontSize: "70px" }}
                ></i>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                  className="w-[70px]"
                  alt="postgreSQL logo"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
                  className="w-[70px]"
                  alt="supabase logo"
                />
                <i
                  class="devicon-vercel-original-wordmark"
                  style={{ fontSize: "70px" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-2 bg-bgPrimary dark:bg-bgSecondary border-accent w-full lg:w-[35%] rounded-xl py-14 px-5 items-center text-textPrimary dark:text-textSecondary">
            <img
              src="/src/assets/tward.jpg"
              alt="Terry Ward"
              className="w-44 h-48 md:w-60 md:h-60 rounded-full border-4 border-accent"
            />
            <h1 className="text-lg md:text-xl font-semibold">Terry Ward</h1>
            <p className="text-base md:text-lg font-semibold">
              Junior Full-Stack Developer
            </p>
            <div className="flex space-x-4 mt-5">
              <Link
                to="https://github.com/TTibbs"
                className="hover:text-accentTwo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={35} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/terry-www/"
                className="hover:text-accentTwo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={35} />
              </Link>
              <Link
                to="https://www.codewars.com/users/TTibbs"
                className="hover:text-accentTwo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodewars size={35} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
