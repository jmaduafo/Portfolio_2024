"use client";
import React, { useState } from "react";
import Header5 from "../Header5";
import { Services } from "@/types/type";
import Paragraph from "../Paragraph";
import { spectralBridgeRegular } from "@/fonts/font";
import { MinusIcon, ArrowDownRightIcon } from "@heroicons/react/24/outline";
import { easeInOut, motion } from "framer-motion";

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
        <div className="flex items-start gap-[1vw]">
          <p className={`${spectralBridgeRegular.className} text-[13px] 2xl:text-[28px]`}>
            {services.id}.
          </p>
          <Header5 text={services.title} />
        </div>
        <div className="">
          {isOpen ? (
            <MinusIcon
              className="w-6 sm:w-9 md:w-12 xl:w-[3vw] duration-500 animate-appear"
              strokeWidth={1}
            />
          ) : (
            <ArrowDownRightIcon
              className="w-6 sm:w-9 md:w-12 xl:w-[3vw] duration-500 animate-appear"
              strokeWidth={1}
            />
          )}
        </div>
      </div>
      <motion.div
        initial={{ height: isOpen ? 0 : "auto" }}
        animate={{
          height: isOpen ? "auto" : 0,
          transition: {
            duration: 0.6,
            ease: [0.83, 0, 0.17, 1],
          },
        }}
        className="overflow-hidden"
      >
        <motion.div className={`overflow-hidden duration-500 pt-4 pb-5 px-3`}>
          <div className="w-[95%] sm:w-[90%] md:w-[80%]">
            <div className="flex flex-wrap gap-y-2 gap-x-3">
              {services.technologies.map((tech) => {
                return (
                  <p
                    key={tech}
                    className="whitespace-nowrap rounded-full border-[1px] border-lightText60 dark:border-darkText60 py-[1px] px-2 2xl:px-5 text-[13.5px] 2xl:text-[20px] capitalize"
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
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ServicesList;
