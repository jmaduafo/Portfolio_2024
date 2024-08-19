import React from "react";
import StarSpin from "./StarSpin";
import { spectralBridgeRegular } from "@/fonts/font";
import Header5 from "./Header5";
import MainButton from "./MainButton";
import Header6 from "./Header6";

function Footer() {
  const links = [
    {
      title: "email",
      href: "mailto:jmaduafokwa@hotmail.com",
    },
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/jasmine-maduafokwa-48070a180/",
    },
    {
      title: "instagram",
      href: "https://www.instagram.com",
    },
    {
      title: "behance",
      href: "https://www.behance.net/jasminemaduafo",
    },
  ];

  const leftSide = [
    {
      title: "design & development",
      content: "Jasmine Maduafokwa",
    },
    {
      title: "based in",
      content: "united states & nigeria",
    },
  ];
  return (
    <footer className="mb-[20px]">
      <div className="flex justify-center mb-[8vh]">
        <StarSpin classNameSize="w-[8vw]" />
      </div>
      <div className="flex flex-col-reverse md:flex-row md:justify-between gap-y-6">
        <div className="flex-1 flex flex-row justify-between md:justify-normal md:flex-col md:gap-y-1">
          {links.map((link) => {
            return (
              <p key={link.title} className="text-[14px] md:text-[18px] capitalize">
                <a href={link.href} target="_blank">
                  {link.title}
                </a>
              </p>
            );
          })}
        </div>
        <div className="flex-1">
          <h5
            className={`${spectralBridgeRegular.className} text-[8vw] md:text-[4vw] leading-[1]`}
          >
            Any questions? Interested in utilizing my services? Don’t hesitate
            to hit me up!
          </h5>
          <div className="mt-2">
            <MainButton text="Email Me" fontSize="text-[16px]" email="jmaduafokwa@hotmail.com"/>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap mt-8 gap-y-3 gap-x-6">
        <div className="flex items-center gap-10">
          <div>
            <p className="text-[14px] text-lightText60 dark:text-darkText60">Design & Development</p>
            <p className="text-[14px] text-lightText dark:text-darkText">Jasmine Maduafokwa</p>
          </div>
          <div>
            <p className="text-[14px] text-lightText60 dark:text-darkText60">Based In</p>
            <p className="text-[14px] text-lightText dark:text-darkText">United States & Nigeria</p>
          </div>
        </div>
        <div>
          <p className="text-[14px] text-lightText60 dark:text-darkText60"><span className="text-[14px] animate-ping text-green-500 mr-1">&#x2022;</span>Available for work</p>
          <p className="text-[14px] text-lightText dark:text-darkText">Freelance, Full-time</p>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-[12px]">All Rights Reserved &copy; 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
