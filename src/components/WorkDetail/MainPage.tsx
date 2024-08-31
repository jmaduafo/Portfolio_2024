"use client";
import React, { useRef, Fragment } from "react";
import { Projects } from "@/types/type";
import { spectralBridgeRegular } from "@/fonts/font";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Paragraph from "../Paragraph";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function MainPage({ project }: { project: Projects }) {
  const introImageDiv = useRef(null)
  const introImage = useRef(null)
  const middleImageDiv1 = useRef(null)
  const middleImageDiv2 = useRef(null)
  const middleImage1 = useRef(null)
  const middleImage2 = useRef(null)
  const middleImage3 = useRef(null)
  const outroImageDiv1 = useRef(null)
  const outroImageDiv2 = useRef(null)
  const outroImage1 = useRef(null)
  const outroImage2 = useRef(null)
  const outroImage3 = useRef(null)

  useGSAP(() => {
    gsap.to(introImage.current, {
      scale: 1.06,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: introImageDiv.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

    gsap.to(middleImage1.current, {
      scale: 1.06,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: middleImageDiv1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
    gsap.to(middleImage2.current, {
      scale: 1.06,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: middleImageDiv1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
    gsap.to(middleImage3.current, {
      scale: 1.06,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: middleImageDiv2.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
    gsap.to(outroImage1.current, {
      scale: 1.06,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: outroImageDiv1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
    gsap.to(outroImage2.current, {
      scale: 1.06,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: outroImageDiv2.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
    gsap.to(outroImage3.current, {
      scale: 1.06,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: outroImageDiv2.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
  })
  return (
    <>
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
        <div className="w-full object-cover overflow-hidden" ref={introImageDiv}>
          {project && project?.introImage && project?.title && (
            <Image
              src={project?.introImage}
              alt={`${project?.title} opening`}
              className="w-full h-full"
              placeholder="blur"
              ref={introImage}
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
                <a
                  href={`https://github.com/${project.github}`}
                  target="_blank"
                >
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
        {/* INTRO PARAGRAPH SECTION */}
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
      {/* SET OF IMAGES AFTER THE INTRO IMAGE */}
      <section>
        {project?.imagesMiddle && (
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex-1" ref={middleImageDiv1}>
              <div className="mb-3 overflow-hidden">
                <Image
                  src={project?.imagesMiddle[0]}
                  alt=""
                  unoptimized={
                    project.imagesMiddle[0].src
                      .split("/")
                      .pop()
                      ?.split(".")
                      .pop() === "gif" ?? false
                  }
                  placeholder={
                    project.imagesMiddle[0].src
                      .split("/")
                      .pop()
                      ?.split(".")
                      .pop() === "gif"
                      ? "empty"
                      : "blur"
                  }
                  ref={middleImage1}
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  src={project?.imagesMiddle[1]}
                  alt=""
                  unoptimized={
                    project.imagesMiddle[1].src
                      .split("/")
                      .pop()
                      ?.split(".")
                      .pop() === "gif" ?? false
                  }
                  placeholder={
                    project.imagesMiddle[1].src
                      .split("/")
                      .pop()
                      ?.split(".")
                      .pop() === "gif"
                      ? "empty"
                      : "blur"
                  }
                  ref={middleImage2}
                />
              </div>
            </div>
            <div className="flex-1 overflow-hidden" ref={middleImageDiv2}>
              <Image
                src={project?.imagesMiddle[2]}
                alt=""
                unoptimized={
                  project.imagesMiddle[2].src
                    .split("/")
                    .pop()
                    ?.split(".")
                    .pop() === "gif" ?? false
                }
                placeholder={
                  project.imagesMiddle[2].src
                    .split("/")
                    .pop()
                    ?.split(".")
                    .pop() === "gif"
                    ? "empty"
                    : "blur"
                }
                ref={middleImage3}
              />
            </div>
          </div>
        )}
      </section>
      {/* SECOND PARAGRAPH */}
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
      {/* LAST SET OF IMAGES */}
      <section>
        {project?.imagesOutro && (
          <div className="">
            <div className="mb-3 w-full object-cover overflow-hidden" ref={outroImageDiv1}>
              <Image
                src={project?.imagesOutro[0]}
                alt=""
                className="w-full h-full"
                // ONLY UNOPTIMIZE IF IMAGE IS A GIF
                unoptimized={
                  project.imagesOutro[0].src
                    .split("/")
                    .pop()
                    ?.split(".")
                    .pop() === "gif" ?? false
                }
                // ONLY ADD A BLUR PLACEHOLDER IF IMAGE IS NOT A GIF
                placeholder={
                  project.imagesOutro[0].src
                    .split("/")
                    .pop()
                    ?.split(".")
                    .pop() === "gif"
                    ? "empty"
                    : "blur"
                }
                ref={outroImage1}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3" ref={outroImageDiv2}>
              <div className="flex-1 object-cover overflow-hidden">
                <Image
                  src={project?.imagesOutro[1]}
                  alt=""
                  className="w-full h-full"
                  unoptimized={
                    project.imagesOutro[1].src
                      .split("/")
                      .pop()
                      ?.split(".")
                      .pop() === "gif" ?? false
                  }
                  placeholder={
                    project.imagesOutro[1].src
                      .split("/")
                      .pop()
                      ?.split(".")
                      .pop() === "gif"
                      ? "empty"
                      : "blur"
                  }
                  ref={outroImage2}
                />
              </div>
              <div className="flex-1 object-cover overflow-hidden">
                <Image
                  src={project?.imagesOutro[2]}
                  alt=""
                  className="w-full h-full"
                  unoptimized={
                    project.imagesOutro[2].src
                      .split("/")
                      .pop()
                      ?.split(".")
                      .pop() === "gif" ?? false
                  }
                  placeholder={
                    project.imagesOutro[2].src
                      .split("/")
                      .pop()
                      ?.split(".")
                      .pop() === "gif"
                      ? "empty"
                      : "blur"
                  }
                  ref={outroImage3}
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
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
