import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { spectralBridgeRegular } from "@/fonts/font";

type Open = {
  readonly menuOpen: boolean;
  readonly setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
      route: "/#services",
      title: "services",
    },
    {
      route: "/contact",
      title: "contact",
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
          <XMarkIcon
            onClick={() => setMenuOpen(false)}
            className="w-[12vw] sm:w-[10vw] md:w-[8vw] lg:w-[6vw] text-lightText dark:text-darkText cursor-pointer"
            strokeWidth={0.8}
          />
        </div>
        <nav className="mt-10">
          <ul>
            {navLinks.map((link, i) => {
              return link.route ? (
                <div key={link.title} className="flex items-start justify-center gap-5">
                  {i % 2 === 0 ? (
                    <p
                      className={`${spectralBridgeRegular.className} text-[20px]`}
                    >{`( ${i + 1} )`}</p>
                  ) : null}
                  <li
                    className={`${spectralBridgeRegular.className} relative px-2 text-[16vw] overflow-hidden sm:text-[13vw]  md:text-[10vw]
                    lg:text-[8vw] xl:text-[6vw] leading-[1] uppercase text-lightText dark:text-darkText text-center
                    hover:after:visible after:z-[-1] ${!setMenuOpen && 'hover:after:invisible'} hover:after:animate-appear after:absolute after:invisible after:transform after:translate-x-[-50%] after:translate-y-[-50%] after:top-1/2 after:left-1/2 after:content-lightSlash after:scale-y-50 after:  `}
                    onClick={() => setMenuOpen(false)}
                  >
                    <Link href={link.route}>{link.title}</Link>
                  </li>
                  {i % 2 !== 0 ? (
                    <p
                      className={`${spectralBridgeRegular.className} text-[20px]`}
                    >{`( ${i + 1} )`}</p>
                  ) : null}
                </div>
              ) : (
                <div key={link.title} className="flex items-start justify-center gap-5">
                  {i % 2 === 0 ? (
                    <p
                      className={`${spectralBridgeRegular.className} text-[20px]`}
                    >{`( ${i + 1} )`}</p>
                  ) : null}
                  <li
                    className={`${spectralBridgeRegular.className} text-[16vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw] xl:text-[6vw] leading-[1] uppercase text-lightText  dark:text-darkText text-center`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.title}
                  </li>
                  {i % 2 !== 0 ? (
                    <p
                      className={`${spectralBridgeRegular.className} text-[20px]`}
                    >{`( ${i + 1} )`}</p>
                  ) : null}
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Menu;
