import React, { Fragment } from "react";
import { offers } from "@/utils/offers";
import Image from "next/image";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Image1 from "@../../../public/images/general/home/process_image1.jpg";
import Image2 from "@../../../public/images/general/home/process_image2.jpg";

function ProcessTransition() {
  return (
    <section className="mt-[6vh]">
      <div className="flex justify-between items-start gap-x-[18vw]">
        <div className="flex-1">
          <div className="">
            <Image src={Image1} alt="" className="w-full" placeholder="blur" />
          </div>
          <div className="mt-6">
            <Paragraph text="I ensure to provide honesty and transparency for my clients from start to finish. With regular updates and check ups, I provide assurance for my clients so that they’re not left in the dark and so that communication is maintained throughout the design and/or development process. We don’t proceed to the next step until the client is satisfied about the outcome of what they’re investing in. " />
          </div>
        </div>
        <div className="flex-[1.5]">
          <div className="w-full object-cover object-top">
            <Image src={Image2} alt="" className="w-full" placeholder="blur" />
          </div>
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
      {/* <Paragraph text={service} />
      <Paragraph text={`$ ${Intl.NumberFormat("en-US").format(price)}`} /> */}
      <p className="text-[17px]">{service}</p>
      <p className="text-[17px]">$ {Intl.NumberFormat("en-US").format(price)}</p>
    </div>
  );
}

export default ProcessTransition;
