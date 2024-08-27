import React, { Fragment } from "react";
import Top1 from "../../../public/images/services/top1.png";
import Top2 from "../../../public/images/services/top2.png";
import Bottom1 from "../../../public/images/services/bottom1.png";
import Bottom2 from "../../../public/images/services/bottom2.jpg";
import Bottom3 from "../../../public/images/services/bottom3.jpg";
import Header2 from "../Header2";
import Image from "next/image";
import ServicesList from "./ServicesList";
import { allServices } from "@/utils/services";
import { spectralBridgeRegular } from "@/fonts/font";

function Services() {
  const topImages = [
    {
      alt: "laptop sitting on a cozy desk",
      image: Top1,
      ref: "",
    },
    {
      alt: "phone against a rock and branch",
      image: Top2,
      ref: "",
    },
  ];

  const bottomImages = [
    {
      alt: "a laptop sitting on the edge of a wooden chair",
      image: Bottom1,
      ref: "",
    },
    {
      alt: "aesthetic sculpture with sky blue wall background",
      image: Bottom2,
      ref: "",
    },
    {
      alt: "a blue door surrounded by stone wall",
      image: Bottom3,
      ref: "",
    },
  ];

  return (
    <section className="mb-[15vh] pt-[6vh]" id='services'>
      {/* SERVICE HEADER WITH SURROUNDING IMAGES */}
      <div className="mb-[10vh]">
        <div className="flex justify-evenly items-end">
          {topImages.map((img) => {
            return (
              <div
                key={img.alt}
                className="w-[15vw] sm:w-[13vw] md:w-[10vw] object-cover object-center"
              >
                <Image
                  src={img.image}
                  alt={img.alt}
                  placeholder="blur"
                  className="w-full h-full"
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mb-[5vh]">
          <Header2 text="services" />
        </div>
        <div className="flex justify-around items-start">
          {bottomImages.map((img) => {
            return (
              <div
                key={img.alt}
                className="w-[15vw] sm:w-[13vw] md:w-[10vw] object-cover object-center"
              >
                <Image
                  src={img.image}
                  alt={img.alt}
                  placeholder="blur"
                  className="w-full h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* LISTED SERVICES*/}
      <div className="flex justify-end">
        <div className="border-t-[1px] border-t-lightText20 dark:border-t-darkText20 w-full md:w-[70%]">
          {allServices.map((item) => {
            return (
              <Fragment key={item.title}>
                <ServicesList services={item} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
