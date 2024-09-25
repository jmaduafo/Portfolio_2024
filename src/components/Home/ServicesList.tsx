"use client";
import React, { forwardRef, useRef } from "react";
import { Services } from "@/types/type";
import Paragraph from "../Paragraph";
import { spectralBridgeRegular } from "@/fonts/font";
import { allServices } from "@/utils/services";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import StarSpin from "../StarSpin";

type List = {
  services: Services;
};

const ServicesList = forwardRef<HTMLDivElement, List>(({ services }, ref) => {
  const image = useRef(null);

  useGSAP(() => {
    gsap.to(image.current, {
      y: "25%",
      scrollTrigger: {
        trigger: image.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <div
      ref={ref}
      className={`px-3 py-6 ${
        services.id !== allServices.length &&
        "border-b-[1px] border-b-lightText20 dark:border-b-darkText20"
      } flex flex-col h-[45vh]`}
    >
      <div className="flex items-center gap-8">
        <StarSpin classNameSize="w-[36px]" />
        <h6
          className={`${spectralBridgeRegular.className} text-[36px] leading-[1]`}
        >
          {services.title}
        </h6>
      </div>
      <div className="mt-auto">
        {/* <div>

          </div> */}
        <div className="w-[75%]">
          {/* <Paragraph text={services.description} /> */}
          <p className="text-[16px]">{services.description}</p>
        </div>
      </div>
    </div>
  );
});

export default ServicesList;
