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

  return (
    <section className="mt-[6vh]">
      <div className="flex justify-between items-center">
        {/* PREVIOUS PROJECT */}
        <Link href={`/works/${titleConverter(allProjects[prevIndex].title)}`}>
          <div className="relative cursor-pointer flex items-center gap-8 hover:gap-10 duration-500 group">
            <Prev className="w-[6vw] leading-[1] mix-blend-color-dodge dark:mix-blend-exclusion" />
            <h5 className="text-[4vw] uppercase mix-blend-color-dodge dark:mix-blend-exclusion">
              {allProjects[prevIndex].title}
            </h5>
            {allProjects[prevIndex].introImage ? (
              <div className="z-[-1] duration-300 invisible group-hover:visible absolute transform translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 w-[15vw] object-cover">
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
        <Link href={`/works/${titleConverter(allProjects[nextIndex].title)}`}>
          <div className="relative cursor-pointer flex items-center gap-8 hover:gap-10 duration-500 group">
            <h5 className="text-[4vw] uppercase mix-blend-color-dodge dark:mix-blend-exclusion">
              {allProjects[nextIndex].title}
            </h5>
            <Next className="w-[6vw] leading-[1] mix-blend-color-dodge dark:mix-blend-exclusion" />
            {allProjects[nextIndex].introImage ? (
              <div className="z-[-1] duration-300 invisible group-hover:visible absolute transform translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 w-[15vw] object-cover">
                <Image
                  src={allProjects[nextIndex].introImage}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            ) : null}
          </div>
        </Link>
      </div>
    </section>
  );
}

export default PrevNext;
