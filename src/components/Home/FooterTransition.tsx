import React from "react";
import TransitionCarousel from "./TransitionCarousel";

function FooterTransition() {

  const closingTerms = [
    "Let's Talk",
    "Let's Talk",
    "Let's Talk",
    "Let's Talk",
    "Let's Talk",
  ];

  return (
    <section className="mt-[6vh] my-[10vh]">
      <TransitionCarousel
        classNameRotate="rotate-[-5deg]"
        array={closingTerms}
      />
    </section>
  );
}

export default FooterTransition;
