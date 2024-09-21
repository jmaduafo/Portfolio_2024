"use client";
import React, { SetStateAction, useState } from "react";
import { processes } from "@/utils/process";
import { spectralBridgeRegular } from "@/fonts/font";
import Image from "next/image";
import Test from "../../../public/images/general/home/test.jpg";
import { easeInOut, motion } from "framer-motion";

function Process() {
  const [index, setIndex] = useState<number | undefined>();

  function borderCondition(index: number) {
    if (index === 0) {
      return `border-b-[1px] border-b-lightText20 dark:border-b-darkText20 xl:border-r-[1px] xl:border-r-lightText20 xl:dark:border-r-darkText20`;
    } else if (index === 1) {
      return "border-b-[1px] border-b-lightText20 dark:border-b-darkText20 sm:border-r-[1px] sm:border-r-lightText20 sm:dark:border-r-darkText20 xl:border-r-[0px]";
    } else if (index === 2) {
      return "border-b-[1px] border-b-lightText20 dark:border-b-darkText20 sm:border-r-[0px] xl:border-b-[0px] xl:border-r-[1px] xl:border-r-lightText20 xl:dark:border-r-darkText20";
    } else if (index === 3) {
      return "border-b-none dark:border-b-none sm:border-r-none sm:dark:border-r-none xl:border-r-none xl:dark:border-r-none";
    }
  }

  function changeIndex(i: number) {
    if (index === i) {
      setIndex(undefined);
    } else {
      setIndex(i);
    }
  }

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: easeInOut,
        duration: 0.6,
        delay: 0.5,
      },
    },
  };

  const curve = {
    initial: {
      borderTopLeftRadius: "0%",
    },
    animate: {
      borderTopLeftRadius: "100%",
      transition: {
        ease: [0.83, 0, 0.17, 1],
        duration: 1,
        delay: 0.7,
      },
    },
  };

  return (
    <section className="my-[20vh]">
      <motion.div
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full md:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
      >
        <motion.div
          variants={curve}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="p-8 flex items-end bg-lightText text-lightBg dark:bg-darkText dark:text-darkBg h-[30vh] sm:h-auto lg:h-[55vh]"
        >
          <h4 className="text-[40px] 2xl:text-[60px]">PROCESS</h4>
        </motion.div>
        {processes.map((item, i) => {
          return (
            <div
              key={item.title}
              onClick={() => changeIndex(i)}
              className={`${
                index === i
                  ? "text-lightBg bg-lightText dark:text-darkBg dark:bg-darkText"
                  : "text-lightText bg-transparent dark:text-darkText dark:bg-transparent"
              } cursor-pointer group hover:bg-lightText hover:text-lightBg dark:hover:bg-darkText dark:hover:text-darkBg duration-300 flex flex-col px-3 py-8 sm:p-8 lg:h-[55vh] ${borderCondition(
                i
              )}`}
            >
              <div>
                <h5
                  className={`${spectralBridgeRegular.className} text-[30px] 2xl:text-[48px] leading-[1] mb-[5vh] lg:mb-0`}
                >
                  0{i + 1}.<span className="ml-4">{item.title}</span>
                </h5>
              </div>
              <motion.div
                initial={{ opacity: index === i ? 0 : 1, y: "5%" }}
                animate={{
                  opacity: index === i ? 1 : 0,
                  y: "0%",
                  transition: {
                    duration: 0.4,
                    ease: easeInOut,
                  },
                }}
                className="mt-auto"
              >
                <p className="text-[14px] sm:text-[15px] 2xl:text-[24px]">{item.description}</p>
              </motion.div>
            </div>
          );
        })}
        <div className="object-cover lg:h-[55vh]">
          <Image
            src={Test}
            alt="spanish buildings with a blue sky between"
            placeholder="blur"
            className="w-full h-full rounded-br-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Process;

type List = {
  key: string;
  setIsOn: React.Dispatch<SetStateAction<boolean>>;
  isOn: boolean;
  i: number;
  item: {
    title: string;
    description: string;
  };
};

// function ProcessList({ key, setIsOn, isOn, i, item}: List) {
//     return (
//         <div
//               key={key}
//               onClick={() => setIsOn((prev: any) => !prev)}
//               className={`cursor-pointer group hover:bg-lightText hover:text-lightBg dark:hover:bg-darkText dark:hover:text-darkBg duration-300 flex flex-col px-0 py-8 sm:p-8 lg:h-[55vh] ${borderCondition(
//                 i
//               )}`}
//             >
//               <div>
//                 <h5
//                   className={`${spectralBridgeRegular.className} text-[30px] leading-[1] mb-[5vh] lg:mb-0`}
//                 >
//                   0{i + 1}.<span className="ml-4">{item.title}</span>
//                 </h5>
//               </div>
//               <div className="mt-auto invisible">
//                 <p className="text-[14px] sm:text-[15px]">{item.description}</p>
//               </div>
//             </div>
//     )
// }
