import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 flex items-center justify-between py-5 px-20 text-zinc-100 shadow-lg shadow-accent">
      <h1 className="text-accent font-bold text-lg md:text-xl lg:text-2xl">
        Terry W
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
