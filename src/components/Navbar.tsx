import React from "react";
import DarkLightSwitch from "./DarkLightSwitch";
import Link from "next/link";
import { rigata } from "@/fonts/font";

function Navbar() {
  return (
    <div className="relative">
      <header className="sticky top-0 bg-lightBg dark:bg-darkBg">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <p className={`${rigata.className} text-[3em] tracking-tighter`}>
              JM
            </p>
          </Link>
          <DarkLightSwitch />
          <button>Menu</button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
