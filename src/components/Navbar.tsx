import React from "react";
import DarkLightSwitch from "./DarkLightSwitch";
import Link from "next/link";
import { rigata } from "@/fonts/font";

function Navbar() {
  return (
    <header>
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
  );
}

export default Navbar;
