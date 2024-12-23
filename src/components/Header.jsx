import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/TerryWard.CV.pdf";
    link.download = "Terry_Ward_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-zinc-800 text-zinc-100 shadow-lg shadow-accent">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        <h1
          className="text-accent font-bold text-lg md:text-xl lg:text-2xl select-none cursor-pointer"
          onClick={() => navigate("/")}
        >
          Terry W
        </h1>
        <nav className="hidden md:flex md:space-x-8">
          <Nav />
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="https://drive.google.com/uc?id=140lK9SqaLQcZr3kTKK1WxfdE8ZX7x-IE&export=download"
            className="text-xs md:text-sm lg:text-base py-2 px-3 rounded-lg bg-accent hover:bg-accentTwo transition-all duration-300 ease-linear focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
            aria-label="Download Resume"
          >
            Resume
          </Link>
          <ThemeToggle />
        </div>
        <button
          className="md:hidden text-accent focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-800 text-zinc-100 absolute top-full left-0 w-full py-4 px-4 shadow-lg">
          <Nav isMobile={true} onLinkClick={closeMobileMenu} />
          <div className="flex justify-between items-center mt-4">
            <Link
              to="https://drive.google.com/uc?id=140lK9SqaLQcZr3kTKK1WxfdE8ZX7x-IE&export=download"
              className="text-xs md:text-sm lg:text-base py-2 px-3 flex items-center gap-2 rounded-lg bg-accent hover:bg-accentTwo transition-all duration-300 ease-linear"
              onClick={handleDownload}
              aria-label="Download Resume"
            >
              Resume
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
