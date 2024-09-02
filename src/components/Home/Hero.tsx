import React from "react";
import Header1 from "../Header1";
import Header6 from "../Header6";
import Image from "next/image";
import StarSpin from "../StarSpin";
import Paragraph from "../Paragraph";
import HeroImage from "../../../public/images/general/home/hero_image.jpg";
import MainButton from "../MainButton";

function Hero() {
  return (
    <section className="py-[8vh]">
      <div className="flex flex-col items-center">
        <Header1 text="Jasmine" />
        <Header1 text="Maduafokwa" />
      </div>
      <div className="flex justify-center items-center md:justify-end gap-[5em] xs:gap-[8em] mt-5 md:pr-[6em]">
        <Header6 text="Frontend Developer" />
        <Header6 text="UI Designer" />
      </div>
      <div className="mt-6 flex flex-col-reverse md:flex-row gap-[8vw] items-start">
        <div className="flex-1 flex justify-end">
          <StarSpin classNameSize="w-[30vw] xs:w-[20vw] sm:w-[15vw] md:w-[12vw]" />
        </div>
        <div className="md:flex-[2.5] lg:flex-[1.5] flex flex-col xs:flex-row xs:mt-[4vh] md:mt-0 gap-8">
          <div className="translate-x-[10vw] xs:translate-x-0 md:pl-0 max-w-[40vw] md:flex-[1.5] object-cover">
            <Image
              src={HeroImage}
              alt="chairs and tables in a cozy room with plants"
              className="w-full h-full"
            />
          </div>
          <div className="flex-[3] flex justify-end xs:items-end md:items-baseline xs:py-[4vh] md:py-0">
            <div className="w-[80%] xs:w-full">
              <div className="w-[90%] sm:w-[80%] md:w-[60%]">
                <Paragraph text="My full stack development and design expertise allows me to build projects from the ground up, transforming ideas into powerful, user-centric solutions that elevate my clients' brands and drive their success." />
              </div>
              <div className="mt-3">
                <MainButton text="Learn More" link="/about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
