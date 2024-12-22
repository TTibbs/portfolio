import React from "react";

const Intro = () => {
  return (
    <section className="flex flex-col gap-3 border-2 bg-bgPrimary dark:bg-bgSecondary border-accent rounded-xl py-8 px-6 text-textSecondary">
      <h2 className="text-lg md:text-xl text-accent font-bold mb-4">
        Hello World!
      </h2>
      <p className="text-lg md:text-xl text-textPrimary dark:text-textSecondary leading-relaxed">
        I'm Terry Ward, a driven and skilled Junior Full-Stack Developer. I
        create intuitive web applications with clean, efficient code. Check out
        my projects and connect with me below!
      </p>
    </section>
  );
};

export default Intro;
