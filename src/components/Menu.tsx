import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { spectralBridgeRegular } from "@/fonts/font";

type Open = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Menu({ menuOpen, setMenuOpen }: Open) {
  const navLinks = [
    {
      route: "/",
      title: "home",
    },
    {
      route: "/about",
      title: "about",
    },
    {
      route: "/#works",
      title: "works",
    },
    {
      route: "/contact",
      title: "contact",
    },
    {
      route: null,
      title: "resume",
    },
  ];
  return (
    <section
      className={`${
        menuOpen ? "visible" : "invisible"
      } flex justify-center items-center z-[100] fixed top-0 left-0 w-full h-screen bg-lightBg dark:bg-darkBg pt-[1vw]`}
    >
      <div>
        <div className="flex justify-center">
          <XMarkIcon onClick={() => setMenuOpen(false)} className="w-[6vw] text-lightText dark:text-darkText cursor-pointer" strokeWidth={.8} />
        </div>
        <nav className="mt-10">
          <ul>
            {navLinks.map((link) => {
              return link.route ? (
                <li
                  className={`${spectralBridgeRegular.className} text-[16vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] xl:text-[6vw] leading-[1] uppercase text-lightText dark:text-darkText text-center`}
                  key={link.title}
                >
                  <Link href={link.route}>{link.title}</Link>
                </li>
              ) : (
                <li
                  className={`${spectralBridgeRegular.className} text-[16vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] xl:text-[6vw] leading-[1] uppercase text-lightText  dark:text-darkText text-center`}
                  key={link.title}
                >
                  {link.title}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Menu;
