"use client";
import React, { useState } from "react";
import Header5 from "../Header5";
import { Services } from "@/types/type";
import Paragraph from "../Paragraph";
import { spectralBridgeRegular } from "@/fonts/font";
import { MinusIcon, ArrowDownRightIcon } from "@heroicons/react/24/outline";

type List = {
  services: Services;
};

function ServicesList({ services }: List) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-[1px] border-b-lightText20 dark:border-b-darkText20">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer px-1 py-5 flex justify-between items-center w-full"
      >
        <div className="flex items-start gap-2">
          <p className={`${spectralBridgeRegular.className} text-[13px]`}>
            {services.id}.
          </p>
          <Header5 text={services.title} />
        </div>
        <div className="">
          {isOpen ? (
            <MinusIcon className="w-6 sm:w-9 md:w-12 xl:w-[3vw] duration-500 animate-appear" strokeWidth={1} />
          ) : (
            <ArrowDownRightIcon className="w-6 sm:w-9 md:w-12 xl:w-[3vw] duration-500 animate-appear" strokeWidth={1} />
          )}
        </div>
      </div>
      <div
        className={`${
          isOpen ? "scale-y-100" : "scale-y-0 hidden"
        } animate-appear overflow-hidden duration-500 pt-4 pb-5 px-3`}
      >
        <div className="w-[95%] sm:w-[90%] md:w-[80%]">
          <div className="flex flex-wrap gap-y-2 gap-x-3">
            {services.technologies.map((tech) => {
              return (
                <p
                  key={tech}
                  className="whitespace-nowrap rounded-full border-[1px] border-lightText60 dark:border-darkText60 py-[1px] px-2 text-[12.5px] capitalize"
                >
                  {tech}
                </p>
              );
            })}
          </div>
          <div className="mt-6">
            <Paragraph text={services.description} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
