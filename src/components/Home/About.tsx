"use client";
import React, { useRef } from "react";
import { spectralBridgeRegular } from "@/fonts/font";
import Image1 from "../../../public/images/general/home/about_image.jpg";
import Image2 from "../../../public/images/general/home/about-screenshot.png";
import Image from "next/image";
import Paragraph from "../Paragraph";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function About() {
  const image1Div = useRef(null);
  const image1 = useRef(null);
  const image2Div = useRef(null);
  const image2 = useRef(null);

  useGSAP(() => {
    gsap.to(image1.current, {
      scale: 1.06,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(image2.current, {
      scale: 1.06,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: image2.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section className="py-[15vh]">
      <div>
        <h3
          className={`${spectralBridgeRegular.className} text-[5.5vw] pr-[15vw] leading-[1]`}
        >
          I promote <span className="italic">fresh</span> and creative{" "}
          <span className="italic">ideas</span> and bring them to life.
        </h3>
        <h3
          className={`${spectralBridgeRegular.className} text-[5.5vw] pl-[15vw] leading-[1]`}
        >
          With my skills, I <span className="italic">deliver </span>
          quality products from start to <span className="italic">
            finish
          </span>{" "}
          .
        </h3>
      </div>
      <div className="mt-10 flex flex-col-reverse md:flex-row gap-y-4 md:gap-y-0 md:max-h-screen">
        <div className="md:flex-1 object-cover object-center overflow-hidden">
          <Image
            src={Image1}
            alt="sjsh"
            className="w-full h-full"
            ref={image1}
          />
        </div>
        <div className="md:flex-1 flex justify-center items-center">
          <div className="w-full h-full md:w-[80%] md:h-[80%] object-cover object-left-top overflow-hidden">
            <Image
              src={Image2}
              alt="sjsh"
              className="w-full h-full"
              ref={image2}
            />
          </div>
        </div>
      </div>
      <div className="sm:flex mt-8">
        <div className="md:flex-[1] lg:flex-[1.5] hidden md:block"></div>
        <div className="md:flex-[1.5] lg:flex-[1] flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <Paragraph text="Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. " />
          </div>
          <div className="flex-1">
            <Paragraph text="Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum." />
            <div className="mt-3">
              <Paragraph text="Em quam semper libero, sit amet adipiscing sem neque sed ipsum. " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
