import React from "react";
import { spectralBridgeRegular, satoshiLight } from "@/fonts/font";
import Image from "next/image";
import AboutIntro1 from "../../../public/images/general/about/aboutIntro1.jpg";
import AboutIntro2 from "../../../public/images/general/about/aboutIntro2.jpg";
import Paragraph from "../Paragraph";
import { items } from "@/utils/resume";

function MainPage() {
  return (
    <>
      {/* ABOUT ME SUMMARY */}
      <section className="mt-[5vh]">
        <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
          <p className={`${satoshiLight.className} text-[14px] md:text-[18px]`}>
            About me
          </p>
          <div className="flex-1">
            <h3
              className={`${spectralBridgeRegular.className} text-[5.5vw] leading-[1]`}
            >
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
              libero venenatis faucibus. <span className="italic">Nullam</span>{" "}
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna.
            </h3>
          </div>
        </div>
      </section>
      {/* PORTRAIT IMAGES WITH DETAILED PARAGRAPHS */}
      <section className="mt-[5vh]">
        <div className="flex flex-col md:flex-row items-end gap-6 md:pl-[8vw]">
          <div className="flex-1 object-cover">
            <Image src={AboutIntro1} alt="" className="w-full h-full" />
          </div>
          <div className="flex-[1.5]">
            <div className="w-full object-cover">
              <Image src={AboutIntro2} alt="" className="w-full h-full" />
            </div>
            <div className="mt-[4vh]">
              <h2
                className={`${spectralBridgeRegular.className} text-[10vw] md:text-[7vw] leading-[.9] uppercase`}
              >
                Persistence
              </h2>
              <h2
                className={`${spectralBridgeRegular.className} text-[10vw] md:text-[7vw] leading-[.9] uppercase`}
              >
                & Motivation
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-[5vw] mt-8 md:mt-[8vh] pr-0 pl-[8vw] md:pr-[6vw] md:pl-0">
          <div className="flex-1 hidden md:block"></div>
          <div className="flex-1">
            <div>
              <Paragraph text="Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum." />
            </div>
            <div className="mt-6">
              <Paragraph text="Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum." />
            </div>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <div>
              <Paragraph text="Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum." />
            </div>
            <div className="mt-6">
              <Paragraph text="Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum." />
            </div>
          </div>
        </div>
      </section>
      {/* RESUME SUMMARY */}
      <section className="mt-[7vw]">
        {items.map((item, l) => {
          return (
            <div className="flex" key={item.category}>
              <div className="flex-1 py-5">
                <Paragraph text={item.category} />
              </div>
              <div
                className={`flex-[3] border-y-[1px] border-t-lightText20 dark:border-t-darkText20 ${
                  l === items.length - 1 &&
                  "border-b-lightText20 dark:border-b-darkText20"
                } px-3 py-5`}
              >
                {item.list.map((list, i) => {
                  return (
                    <div
                      key={list.institution}
                      className={`${
                        i !== item.list.length - 1 ? "mb-8" : "mb-0"
                      } flex items-start justify-between gap-8`}
                    >
                      <div>
                        <p className="text-[18px]">
                          {list.institution},{" "}
                          <span className="italic">{list.location}</span>
                        </p>
                        <div>
                          <p className="text-[13.5px]">
                            {list.role
                              ? list.role
                              : `${list.primary_concentration}, ${list.primary_qualification}`}
                          </p>
                          {list.secondary_concentration ? (
                            <p className="text-[13.5px]">{`${list.secondary_qualification}, ${list.secondary_concentration}`}</p>
                          ) : null}
                        </div>
                      </div>
                      <p>{list.duration}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
      {/* SAMPLE MOCKUP IMAGES OF MY PAST WORKS */}
      <section></section>
      {/* CLOSING PARAGRAPH WITH SPOTIFY PLAYLIST */}
      <section></section>
    </>
  );
}

export default MainPage;
