import React from "react";
import { allProjects } from "@/utils/works";
import { motion } from "framer-motion";
import Prev from "../Prev";
import Next from "../Next";
import Link from "next/link";
import { titleConverter } from "@/utils/workTitleConverter";
import Image from "next/image";

function PrevNext({ index }: { index: number }) {
  // From 0 => 4 (length of 5) 5 % 5 = 0; 0 % 5 = 0; 4 % 5 = 4
  let prevIndex = (index + allProjects.length - 1) % allProjects.length;
  let nextIndex = (index + 1) % allProjects.length;

  const variant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: .7,
            ease: [0.25, 1, 0.5, 1],
            delay: 0.3
        }
    }
  }

  return (
    <section className="mt-[6vh] mb-[4vh]">
      <motion.div variants={variant} initial="initial" whileInView="animate" viewport={{ once: true }} className="flex flex-col sm:flex-row justify-between sm:items-center">
        {/* PREVIOUS PROJECT */}
        <Link href={`/works/${titleConverter(allProjects[prevIndex].title)}`}>
          <div className="relative cursor-pointer flex justify-between sm:justify-normal items-center gap-8 hover:gap-10 duration-500 group">
            <Prev className="w-[8vw] sm:w-[6vw] leading-[1] mix-blend-multiply dark:mix-blend-exclusion" />
            <h5 className="text-[9vw] sm:text-[4vw] tracking-tight uppercase mix-blend-multiply dark:mix-blend-exclusion">
              {allProjects[prevIndex].title}
            </h5>
            {allProjects[prevIndex].introImage ? (
              <div className="z-[-1] duration-300 invisible group-hover:visible absolute transform translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 w-[30vw] sm:w-[15vw] object-cover">
                <Image
                  src={allProjects[prevIndex].introImage}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            ) : null}
          </div>
        </Link>
        {/* NEXT PROJECT */}
        <Link className="mt-4 sm:mt-0" href={`/works/${titleConverter(allProjects[nextIndex].title)}`}>
          <div className="relative cursor-pointer flex justify-between sm:justify-normal items-center gap-8 hover:gap-10 duration-500 group">
            <h5 className="text-[9vw] sm:text-[4vw] tracking-tight uppercase mix-blend-multiply dark:mix-blend-exclusion">
              {allProjects[nextIndex].title}
            </h5>
            <Next className="w-[8vw] sm:w-[6vw] leading-[1] mix-blend-multiply dark:mix-blend-exclusion" />
            {allProjects[nextIndex].introImage ? (
              <div className="z-[-1] duration-300 invisible group-hover:visible absolute transform translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 w-[30vw] sm:w-[15vw] object-cover">
                <Image
                  src={allProjects[nextIndex].introImage}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            ) : null}
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default PrevNext;
