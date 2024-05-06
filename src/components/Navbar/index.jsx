"use client";
import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import BurgerMenu from "./BurgerMenu";
import MenuLinks from "./MenuLinks";

function Navbar() {
  const [isGlassy, setIsGlassy] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const glassyThreshold = 50;

      setIsGlassy(scrollPosition > glassyThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between pr-4 pl-6 md:px-8 py-2 md:py-6 ${
        isGlassy
          ? "bg-white bg-opacity-50 shadow-lg backdrop-blur-lg stroke-black text-black"
          : "bg-transparent text-white stroke-white"
      } transition-all duration-200`}>
      <div className="relative z-50">
        <Logo />
      </div>
      <div className="relative flex items-center">
        <div className="flex items-center gap-8">
          <div className="hidden md:block">
            <MenuLinks />
          </div>
        </div>
        <div className="block md:hidden">
          <BurgerMenu isGlassy={isGlassy} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
