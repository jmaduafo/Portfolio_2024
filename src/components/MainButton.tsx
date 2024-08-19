"use client";

import React, { useState } from "react";
import { satoshiLight, satoshiLightItalic } from "@/fonts/font";

type Button = {
  text: string;
  fontSize?: string;
};

function MainButton({ text, fontSize }: Button) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer duration-500 flex justify-center items-center rounded-full border-[1px] text-[15px] border-lightText dark:border-darkText hover:text-lightBg hover:bg-lightText dark:hover:text-darkBg dark:hover:bg-darkText bg-transparent outline-none w-[12em] h-[2.5em]"
    >
      <div className="overflow-hidden">
        {isHovered ? (
          <div className="flex flex-nowrap gap-8 animate-carousel">
            {[text, text, text, text, text, text, text, text, text].map((word, i) => {
              return <p key={`${word}_${i}`} className={`${satoshiLight.className} ${fontSize} whitespace-nowrap`}>{word}</p>;
            })}
          </div>
        ) : (
          <p className={`${satoshiLight.className} ${fontSize}`}>{text}</p>
        )}
      </div>
    </div>
  );
}

export default MainButton;
