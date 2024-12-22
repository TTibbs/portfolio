import React from "react";
import Header from "./Header";
import Skills from "./Skills";
import Intro from "./Intro";
import About from "./About";

const Home = () => {
  return (
    <>
      <Header />
      <section className="mt-32 mb-12 px-4 lg:px-20">
        <div className="flex flex-col-reverse gap-3 lg:flex-row items-start justify-between">
          <div className="flex flex-col w-full lg:w-[60%] space-y-3">
            <Intro />
            <Skills />
          </div>
          <About />
        </div>
      </section>
    </>
  );
};

export default Home;
