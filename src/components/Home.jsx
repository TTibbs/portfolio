import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <section className="mt-40 flex flex-col items-center justify-center gap-5">
        <div className="flex items-center justify-center">
          <img
            src="https://readme-typing-svg.demolab.com?font=Montserrat&weight=700&size=42&duration=4000&pause=1000&color=6D40FF&background=FFFFFF00&center=true&vCenter=true&random=false&width=750&lines=Hi%20I'm%20Terry;Junior%20Full-Stack%20Developer;Always%20Learning%20Something%20New"
            alt="Typing SVG"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
