import React from "react";
import DarkLightSwitch from "./DarkLightSwitch";
import Link from "next/link";
import { rigata } from "@/fonts/font";

function Navbar() {
  return (
    // bg-lightBg dark:bg-darkBg
      <header className="z-[99] duration-300 sticky top-0 bg-transparent mix-blend-multiply dark:mix-blend-difference">
        <div className="flex justify-between items-center">
          {/* JASMINE'S INITIAL LOGO */}
          <Link href={"/"}>
            <p className={`${rigata.className} text-[3em] tracking-tighter`}>
              JM
            </p>
          </Link>
          {/* DARK MODE/LIGHT MODE TOGGLE */}
          <DarkLightSwitch />
          {/* MENU BUTTON */}
          <button className="">Menu</button>
        </div>
      </header>
  );
}

export default Navbar;
