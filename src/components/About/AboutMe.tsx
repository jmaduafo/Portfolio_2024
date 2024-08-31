import React from "react";
import { satoshiLight, spectralBridgeRegular } from "@/fonts/font";

function AboutMe() {
  return (
    <section className="mt-[8vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
      <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
        <p className={`${satoshiLight.className} text-[14px] md:text-[18px]`}>
          About me
        </p>
        <div className="flex-1">
          <h3
            className={`${spectralBridgeRegular.className} indent-[10%] text-[5.5vw] leading-[1]`}
          >
            I'm <span className="italic">Jasmine Maduafokwa</span>, a full stack developer with a focus
             on <span className="italic">frontend</span> technologies
            combined with a passion for {" "}
            <span className="italic">user interface</span> design and other design
            mediums that allow me to create digital, <span className="italic">engaging experiences</span>.
          </h3>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
