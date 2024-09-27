"use client";
import React, { Fragment, useRef } from "react";
import { offers } from "@/utils/offers";
import Image from "next/image";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Image1 from "@../../../public/images/general/home/process_image1.jpg";
import Image2 from "@../../../public/images/general/home/process_image2.jpg";
import { motion, useInView } from "framer-motion";

function ProcessTransition() {
  const EASING = [0.83, 0, 0.17, 1];

  const imageRef = useRef(null);
  const image = useInView(imageRef, { once: true });

  const drop = {
    initial: {
      height: "0%",
    },
    animate: {
      height: "auto",
      transition: {
        duration: 1.2,
        ease: EASING,
        delay: 1
      },
    },
  };

  return (
    <section className="mt-[6vh]">
      <div
        className="flex flex-col md:flex-row justify-between items-start gap-x-[18vw]"
        // ref={imageRef}
      >
        <div className="flex-1">
          <div className="object-cover object-top overflow-hidden">
            <motion.div
              variants={drop}
              initial="initial"
              animate={image && "animate"}
              className="w-full"
            >
              <Image
                src={Image1}
                alt="elegant poster with translucent brown cosmetic dropper"
                className="w-full"
                placeholder="blur"
              />
            </motion.div>
          </div>
          <div className="mt-10 mb-[6vh] flex md:mt-6 md:mb-0">
            <div className="flex-1 block md:hidden"></div>
            <div className="flex-[2]">
              <Paragraph text="I ensure to provide honesty and transparency for my clients from start to finish. With regular updates and check ups, I provide assurance for my clients so that they’re not left in the dark and so that communication is maintained throughout the design and/or development process. We don’t proceed to the next step until the client is satisfied about the outcome of what they’re investing in. " />
            </div>
          </div>
        </div>
        <div className="flex-[1.5]">
          <motion.div className="w-full object-cover object-top overflow-hidden">
            <motion.div
              variants={drop}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className=""
            >
              <Image
                src={Image2}
                alt="suede brown chair with macbook perched on top"
                className="w-full"
                placeholder="blur"
              />
            </motion.div>
          </motion.div>
          <div className="mt-6">
            <div className="flex justify-between py-1 border-b-[1px] border-b-lightText20 dark:border-b-darkText20">
              <Heading text="offer to clients" />
              <Heading text="starting" />
            </div>
            {offers.map((offer) => {
              return (
                <Fragment key={offer.service}>
                  <Listings service={offer.service} price={offer.price} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Listings({ service, price }: { service: string; price: number }) {
  return (
    <div className="py-2 border-b-[1px] border-b-lightText20 dark:border-b-darkText20 flex justify-between items-center">
      <p className="text-[17px] 2xl:text-[28px]">{service}</p>
      <p className="text-[17px] 2xl:text-[28px]">
        $ {Intl.NumberFormat("en-US").format(price)}
      </p>
    </div>
  );
}

export default ProcessTransition;
