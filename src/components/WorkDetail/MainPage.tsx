"use client";
import React from "react";
import { Projects } from "@/types/type";
import { spectralBridgeRegular } from "@/fonts/font";
import Image from "next/image";
import { profileEnd } from "console";

function MainPage({ project }: { project: Projects }) {
  return (
    <main>
      <section className="">
        <div className="overflow-hidden mt-[8vh]">
          <div className="flex flex-nowrap gap-[6vw] animate-carousel-slow">
            {[
              project.title,
              project.title,
              project.title,
              project.title,
              project.title,
              project.title,
              project.title,
            ].map((proj) => {
              return (
                <h1
                  className={`${spectralBridgeRegular.className} leading-[1] mb-[-.15em] text-[23vw] uppercase whitespace-nowrap`}
                >
                  {proj}
                </h1>
              );
            })}
          </div>
        </div>
        <div className="w-full object-cover">
          {project && project.introImage && (
            <Image src={project.introImage} alt={`${project.title} opening`} className="w-full h-full" placeholder="blur"/>
          )}
        </div>
      </section>
      <section></section>
    </main>
  );
}

export default MainPage;
