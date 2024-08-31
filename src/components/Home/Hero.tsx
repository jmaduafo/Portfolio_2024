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
      <div className="flex justify-center items-center md:justify-end gap-[8em] mt-5 md:pr-[6em]">
        <Header6 text="Frontend Developer" />
        <Header6 text="UI Designer" />
      </div>
      <div className="mt-6 flex flex-col-reverse md:flex-row gap-[8vw] items-start">
        <div className="flex-1 flex justify-end">
          <StarSpin classNameSize="w-[12vw]" />
        </div>
        <div className="flex-[2] lg:flex-[1.5] flex flex-col md:flex-row gap-8">
          <div className="translate-x-[10vw] md:translate-x-0 md:pl-0 max-w-[40vw] md:flex-1 object-cover">
            <Image
              src={HeroImage}
              alt="chairs and tables in a cozy room with plants"
              className="w-full h-full"
            />
          </div>
          <div className="flex-[3] flex justify-end">
            <div>
              <div className="w-[90%] sm:w-[70%] md:w-[60%]">
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
