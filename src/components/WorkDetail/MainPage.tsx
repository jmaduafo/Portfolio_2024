"use client";
import React, { Fragment } from "react";
import { Projects } from "@/types/type";
import { spectralBridgeRegular } from "@/fonts/font";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Paragraph from "../Paragraph";

function MainPage({ project }: { project: Projects }) {

    console.log(project.imagesMiddle && project.imagesMiddle[0].src.split('/').pop()?.split('.').pop())

  return (
    <main>
      {/* CAROUSEL WITH TOP IMAGE */}
      <section className="mt-[8vh]">
        <div className="overflow-hidden">
          <div className="flex flex-nowrap gap-[15vw] animate-carousel-slow">
            {[
              project?.title,
              project?.title,
              project?.title,
              project?.title,
              project?.title,
              project?.title,
              project?.title,
            ].map((proj, i) => {
              return (
                <h1
                  key={`${proj}_${i}`}
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
        {/* INFO ABOUT WEBSITE, GITHUB, TOOLS, YEAR, DURATION, ROLES, AND DESC */}
      <section className="my-[9vh] flex flex-col md:flex-row gap-8">
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
          <div className="flex gap-20 mt-6">
          {/* YEAR & DURATION */}
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
          {/* ROLES */}
            <div>
              <Heading text="Roles" />
              <div className="">
                {project?.roles?.map((role) => {
                  return (
                    <Fragment key={role}>
                      <Paragraph text={role} className="capitalize" />
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* FIRST PARAGRAPH SECTION */}
        <div className="flex-1 lg:flex-[1.5] flex flex-col gap-y-6">
          {project?.description1?.map((desc) => {
            return (
              <Fragment key={desc}>
                <Paragraph text={desc} />
              </Fragment>
            );
          })}
        </div>
      </section>
      <section>
        {project?.imagesMiddle && (
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex-1">
              <div className="mb-3">
                <Image src={project?.imagesMiddle[0]} alt="" unoptimized={project.imagesMiddle[0].src.split('/').pop()?.split('.').pop() === 'gif' ?? false} />
              </div>
              <div>
                <Image src={project?.imagesMiddle[1]} alt="" unoptimized={project.imagesMiddle[1].src.split('/').pop()?.split('.').pop() === 'gif' ?? false} />
              </div>
            </div>
            <div className="flex-1">
              <Image src={project?.imagesMiddle[2]} alt="" unoptimized={project.imagesMiddle[2].src.split('/').pop()?.split('.').pop() === 'gif' ?? false} />
            </div>
          </div>
        )}
      </section>
      <section className="my-[8vh]">
        {/* PARAGRAPH SECTION */}
        <div className="flex flex-col gap-y-6 w-full sm:w-[80%] lg:w-[60%] mx-auto">
          {project?.description2?.map((desc) => {
            return (
              <Fragment key={desc}>
                <Paragraph
                  text={desc}
                  className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%]"
                />
              </Fragment>
            );
          })}
        </div>
      </section>
      <section>
        {project?.imagesOutro && (
          <div className="">
            <div className="mb-3 w-full object-cover">
              <Image
                src={project?.imagesOutro[0]}
                alt=""
                className="w-full h-full"
                unoptimized={project.imagesOutro[0].src.split('/').pop()?.split('.').pop() === 'gif' ?? false}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 object-cover">
                <Image
                  src={project?.imagesOutro[1]}
                  alt=""
                  className="w-full h-full"
                  unoptimized={project.imagesOutro[1].src.split('/').pop()?.split('.').pop() === 'gif' ?? false}
                />
              </div>
              <div className="flex-1 object-cover">
                <Image
                  src={project?.imagesOutro[2]}
                  alt=""
                  className="w-full h-full"
                  unoptimized={project.imagesOutro[2].src.split('/').pop()?.split('.').pop() === 'gif' ?? false}
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
