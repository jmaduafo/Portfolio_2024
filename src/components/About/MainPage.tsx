import React from "react";
import { spectralBridgeRegular, satoshiLight } from "@/fonts/font";
import Image from "next/image";
import AboutIntro1 from "../../../public/images/general/about/aboutIntro1.jpg";
import AboutIntro2 from "../../../public/images/general/about/aboutIntro2.jpg";
import Paragraph from "../Paragraph";

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
      <section></section>
      {/* SAMPLE MOCKUP IMAGES OF MY PAST WORKS */}
      <section></section>
      {/* CLOSING PARAGRAPH WITH SPOTIFY PLAYLIST */}
      <section></section>
    </>
  );
}

export default MainPage;
