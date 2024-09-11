"use client";
import React, { useRef } from "react";
import Header2 from "../Header2";
import { allProjects } from "@/utils/works";
import IndividualWork from "./IndividualWork";
import { motion, useInView } from "framer-motion";

function Works() {
  const header1Ref = useRef(null);
  const header1 = useInView(header1Ref, { once: true });
  const header2Ref = useRef(null);
  const header2 = useInView(header2Ref, { once: true });

  return (
    <section className="py-[10vh]" id="works">
      <div>
        <div className="sticky top-[8vh]">
          <div className="">
            <motion.div
              // variants={headerVariant1}
              className=""
              ref={header1Ref}
              initial={{ y: "80%", opacity: 0 }}
              animate={
                header1 && {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.2,
                    delay: 0.1,
                    ease: [0.83, 0, 0.17, 1],
                  },
                }
              }
            >
              <Header2 text="Selected" />
            </motion.div>
          </div>
          <div className="flex justify-center">
            <motion.div
              ref={header2Ref}
              initial={{ y: "100%", opacity: 0 }}
              animate={
                header2 && {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.2,
                    delay: 0.15,
                    ease: [0.83, 0, 0.17, 1],
                  },
                }
              }
            >
              <Header2 text="Projects" />
            </motion.div>
          </div>
        </div>
        {allProjects?.map((work) => {
          return (
            <div key={work.title}>
              <IndividualWork work={work} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Works;
