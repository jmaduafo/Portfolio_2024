"use client";
import React, { useRef } from "react";
import TransitionCarousel from "./TransitionCarousel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ProcessTransition() {

  const processTerms = [
    "Transparency",
    "Honesty",
    "Communication",
    "Empathy",
    "Consideration",
  ];

  const carousel = useRef(null);

  useGSAP(() => {
    gsap.from(carousel.current, {
      y: "-8%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: carousel.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section className="mt-[6vh]">
      <TransitionCarousel
        classNameRotate="rotate-[4deg]"
        array={processTerms}
        ref={carousel}
      />
    </section>
  );
}

export default ProcessTransition;
