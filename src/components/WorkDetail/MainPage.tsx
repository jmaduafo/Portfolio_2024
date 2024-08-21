"use client";
import React from "react";
import { Projects } from "@/types/type";
import { spectralBridgeRegular } from "@/fonts/font";
import Image from "next/image";
import { profileEnd } from "console";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Paragraph from "../Paragraph";

function MainPage({ project }: { project: Projects }) {
  return (
    <main>
      {/* CAROUSEL WITH TOP IMAGE */}
      <section className="mt-[8vh]">
        <div className="overflow-hidden">
          <div className="flex flex-nowrap gap-[6vw] animate-carousel-slow">
            {[
              project?.title,
              project?.title,
              project?.title,
              project?.title,
              project?.title,
              project?.title,
              project?.title,
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
          {project && project?.introImage && (
            <Image
              src={project.introImage}
              alt={`${project.title} opening`}
              className="w-full h-full"
              placeholder="blur"
            />
          )}
        </div>
      </section>
      <section className="my-[9vh] flex flex-col md:flex-row gap-8">
        {/* WEBSITE, GITHUB, TOOLS, YEAR, DURATION, AND ROLES */}
        <div className="flex-1">
          {/* VISIT WEBSITE AND GITHUB */}
          <div className="flex items-center gap-[8em]">
            <div className="group flex items-center gap-2">
              <p className="">
                <a href={project?.website} target="_blank">
                  Visit Website
                </a>
              </p>
              <div className="group-hover:translate-x-1 duration-300">
                <ArrowUpRightIcon className="w-4" strokeWidth={1} />
              </div>
            </div>
            <div className="group flex items-center gap-2">
              <p className="">
                <a href={project?.github} target="_blank">
                  Visit Github
                </a>
              </p>
              <div className="group-hover:translate-x-1 duration-300">
                <ArrowUpRightIcon className="w-4" strokeWidth={1} />
              </div>
            </div>
          </div>
          {/* TOOLS AND TECHNOLOGIES */}
          <div className="mt-6">
            <Heading text="tools" />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 w-full lg:w-[70%]">
              {project?.technologies?.map((proj) => {
                return (
                  <p
                    key={proj}
                    className="text-[13px] whitespace-nowrap border-[1px] px-2 py-[1px] border-lightText60 dark:border-darkText60 rounded-full"
                  >
                    {proj}
                  </p>
                );
              })}
            </div>
          </div>
          {/* YEAR & DURATION */}
          <div className="flex gap-20 mt-6">
            <div>
              <div>
                <Heading text="Year" />
                {project.year && <Paragraph text={project?.year} />}
              </div>
              <div className="mt-3">
                <Heading text="Duration" />
                {project.duration && <Paragraph text={project?.duration} />}
              </div>
            </div>
            <div>
              <Heading text="Roles" />
              <div className="">
                {project?.roles?.map((role) => {
                  return <Paragraph text={role} className="capitalize" />;
                })}
              </div>
            </div>
          </div>
        </div>
        {/* PARAGRAPH SECTION */}
        <div className="flex-1 lg:flex-[1.5] flex flex-col gap-y-6">
          {project?.description1?.map((desc) => {
            return <Paragraph text={desc} />;
          })}
        </div>
      </section>
      <section>
        {project?.imagesMiddle && (
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex-1">
              <div className="mb-3">
                <Image
                  src={project?.imagesMiddle[0]}
                  alt=""
                  placeholder="blur"
                />
              </div>
              <div>
                <Image
                  src={project?.imagesMiddle[1]}
                  alt=""
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex-1">
              <Image src={project?.imagesMiddle[2]} alt="" placeholder="blur" />
            </div>
          </div>
        )}
      </section>
      <section className="my-[8vh]">
        {/* PARAGRAPH SECTION */}
        <div className="flex flex-col gap-y-6 w-full sm:w-[80%] lg:w-[60%] mx-auto">
          {project?.description2?.map((desc) => {
            return <Paragraph text={desc} className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%]" />;
          })}
        </div>
      </section>
      <section>
        {project?.imagesOutro && (
          <div className="">
            <div className="mb-3">
              <Image src={project?.imagesOutro[0]} alt="" placeholder="blur" />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 object-cover">
                <Image
                  src={project?.imagesOutro[1]}
                  alt=""
                  placeholder="blur"
                />
              </div>
              <div className="flex-1 object-cover">
                <Image
                  src={project?.imagesOutro[2]}
                  alt=""
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

function Heading({ text }: { text: string }) {
  return (
    <p className="mb-1 uppercase text-[14px] text-lightText60 dark:text-darkText60">
      {text}
    </p>
  );
}

export default MainPage;
