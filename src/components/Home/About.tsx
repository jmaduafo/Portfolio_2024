import React from "react";
import { satoshiMediumItalic, spectralBridgeRegular } from "@/fonts/font";
import Image1 from "../../../public/images/general/home/about_image.jpg";
import Image2 from "../../../public/images/general/home/about-screenshot.png";
import Image from "next/image";
import Paragraph from "../Paragraph";

function About() {
  return (
    <section className="py-[10vh]">
      <div>
        <h3
          className={`${spectralBridgeRegular.className} text-[5.5vw] pr-[15vw] leading-[1]`}
        >
          Lorem ipsum dolor sit amet, consecte adipiscing elit.
        </h3>
        <h3
          className={`${spectralBridgeRegular.className} text-[5.5vw] pl-[15vw] leading-[1]`}
        >
          Aenean commodo ligula eget dolor. Aenean massa.
        </h3>
      </div>
      <div className="mt-10 flex md:flex-row gap-y-4 md:gap-y-0 flex-col-reverse md:max-h-screen">
        <div className="md:flex-1 object-cover object-center">
          <Image src={Image1} alt="sjsh" className="w-full h-full" />
        </div>
        <div className="bg-accent object-cover object-left-top md:flex-1 flex justify-center items-center">
          <Image
            src={Image2}
            alt="sjsh"
            className="w-full h-full md:w-[70%] md:h-[70%]"
          />
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
