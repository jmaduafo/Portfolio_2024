"use client";
import React, { useRef } from "react";
import TransitionCarousel from "./TransitionCarousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function FooterTransition() {
  const carousel = useRef(null);

  const closingTerms = [
    "Let's Talk",
    "Let's Talk",
    "Let's Talk",
    "Let's Talk",
    "Let's Talk",
  ];

  useGSAP(() => {
    // gsap.to(carousel.current, {
    //     y: "-15%",
    //     ease: "power1.inOut",
    //     scrollTrigger: {
    //         trigger: carousel.current,
    //         start: "top bottom",
    //         end: "bottom ",
    //         scrub: true,
    //         markers: true
    //     }
    // });
  });

  return (
    <section className="mt-[6vh] my-[10vh]">
      <TransitionCarousel
        classNameRotate="rotate-[-5deg]"
        array={closingTerms}
        ref={carousel}
      />
    </section>
  );
}

export default FooterTransition;
