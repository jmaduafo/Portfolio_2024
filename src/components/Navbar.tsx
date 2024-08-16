import React from "react";
import DarkLightSwitch from "./DarkLightSwitch";
import Link from "next/link";
import { rigata } from "@/fonts/font";

function Navbar() {
  return (
    <div className="">
      <header className="duration-300 sticky top-0 bg-lightBg dark:bg-darkBg">
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
          <button>Menu</button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
