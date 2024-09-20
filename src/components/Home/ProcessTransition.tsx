import React from "react";
import TransitionCarousel from "./TransitionCarousel";

function ProcessTransition() {

  const processTerms = [
    "Transparency",
    "Honesty",
    "Communication",
    "Empathy",
    "Consideration",
  ];

  return (
    <section className="mt-[6vh]">
      <TransitionCarousel
        classNameRotate="rotate-[4deg]"
        array={processTerms}
      />
    </section>
  );
}

export default ProcessTransition;
