"use client";
import React, { useRef } from "react";
import { spectralBridgeRegular } from "@/fonts/font";
import Image1 from "../../../public/images/general/home/about_image4.jpg";
import Image2 from "../../../public/images/general/home/about_image3.jpg";
import Image from "next/image";
import Paragraph from "../Paragraph";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { easeInOut, motion, useInView } from "framer-motion";

function About() {
  const image1 = useRef(null);
  const image2Div = useRef(null);
  const image2 = useRef(null);

  const topRef = useRef(null);
  const top = useInView(topRef, { once: true });

  useGSAP(() => {
    gsap.to(image1.current, {
      y: "10%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    var tl = gsap.timeline({
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image2Div.current,
        start: "top bottom",
        end: "+=3000px",
        scrub: true,
      },
    });

    tl.from(image2Div.current, {
      yPercent: 10,
    }).to(image2Div.current, {
      yPercent: -5,
    });
  });

  // fresh span
  const topline1 = "I promote fresh and creative";
  // ideas span
  const topline2 = "ideas and bring them to life.";
  // deliver span
  const bottomline1 = "With my skills, I deliver quality";
  // finish span
  const bottomline2 = "products from start to finish.";

  const EASING = [0.83, 0, 0.17, 1];
  const DELAY = 0.01;

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="py-[15vh]">
      <div>
        <div className="overflow-hidden">
          <h3
            ref={topRef}
            className={`${spectralBridgeRegular.className} text-[5.5vw] pr-[15vw] leading-[1] overflow-hidden`}
          >
            {topline1.split("").map((letter, i) => {
              return (
                <motion.span
                  initial={{ y: "100%", rotateZ: 5 }}
                  animate={
                    top && {
                      y: 0,
                      rotateZ: 0,
                      transition: {
                        duration: 0.6,
                        delay: i * DELAY,
                        ease: EASING,
                      },
                    }
                  }
                  key={`${letter}_${i}`}
                  className="inline-block"
                >
                  {letter === " " ? <span className="mr-[1vw]"></span> : letter}
                </motion.span>
              );
            })}
          </h3>
          <h3
            ref={topRef}
            className={`${spectralBridgeRegular.className} text-[5.5vw] pr-[15vw] leading-[1] overflow-hidden`}
          >
            {topline2.split("").map((letter, i) => {
              return (
                <motion.span
                  initial={{ y: "100%", rotateZ: 5 }}
                  animate={
                    top && {
                      y: 0,
                      rotateZ: 0,
                      transition: {
                        duration: 0.6,
                        delay: i * DELAY,
                        ease: EASING,
                      },
                    }
                  }
                  key={`${letter}_${i}`}
                  className="inline-block"
                >
                  {letter === " " ? <span className="mr-[1vw]"></span> : letter}
                </motion.span>
              );
            })}
          </h3>
        </div>
        <div className="">
          <h3
            ref={topRef}
            className={`${spectralBridgeRegular.className} text-[5.5vw] pl-[15vw] leading-[1] overflow-hidden`}
          >
            {bottomline1.split("").map((letter, i) => {
              return (
                <motion.span
                  initial={{ y: "100%", rotateZ: 5 }}
                  animate={
                    top && {
                      y: 0,
                      rotateZ: 0,
                      transition: {
                        duration: 0.6,
                        delay: i * DELAY,
                        ease: EASING,
                      },
                    }
                  }
                  key={`${letter}_${i}`}
                  className="inline-block"
                >
                  {letter === " " ? <span className="mr-[1vw]"></span> : letter}
                </motion.span>
              );
            })}
          </h3>
          <h3
            ref={topRef}
            className={`${spectralBridgeRegular.className} text-[5.5vw] pl-[15vw] leading-[1] overflow-hidden`}
          >
            {bottomline2.split("").map((letter, i) => {
              return (
                <motion.span
                  initial={{ y: "100%", rotateZ: 5 }}
                  animate={
                    top && {
                      y: 0,
                      rotateZ: 0,
                      transition: {
                        duration: 0.6,
                        delay: i * DELAY,
                        ease: EASING,
                      },
                    }
                  }
                  key={`${letter}_${i}`}
                  className="inline-block"
                >
                  {/* bottomline2.slice(i, i + 6) === "finish" ? <span className="italic">{bottomline2.slice(i, i + 6)}</span> :  */}
                  {letter === " " ? <span className="mr-[1vw]"></span> : letter}
                </motion.span>
              );
            })}
          </h3>
        </div>
      </div>
      <div className="mt-10 flex flex-col-reverse md:flex-row gap-y-4 md:gap-y-0 md:max-h-screen">
        <div className="md:flex-1 object-cover object-center overflow-hidden">
          <Image
            src={Image1}
            alt="sjsh"
            className="w-full h-full scale-110"
            ref={image1}
            placeholder="blur"
          />
        </div>
        <div className="md:flex-1 flex justify-center items-center">
          <div
            className="w-full h-full md:w-[70%] md:h-[80%] object-cover object-left-top overflow-hidden"
            ref={image2Div}
          >
            <Image
              src={Image2}
              alt="sjsh"
              className="w-full h-full"
              ref={image2}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <motion.div
        className="sm:flex mt-8"
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="md:flex-[1] lg:flex-[1.5] hidden md:block"></div>
        <div className="md:flex-[1.5] lg:flex-[1] flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <Paragraph text="As a designer and developer, I like to add compelling elements to my websites, such as scrolling animations and interaction to increase user engagement. I prioritize aesthetics and functionality, implementing the best SEO practices. " />
          </div>
          <div className="flex-1">
            <Paragraph text="Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum." />
            <div className="mt-3">
              <Paragraph text="Em quam semper libero, sit amet adipiscing sem neque sed ipsum. " />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
