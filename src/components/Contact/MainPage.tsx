import React from "react";
import { spectralBridgeRegular } from "@/fonts/font";
import Image from "next/image";

function MainPage() {
  return (
    <div>
      <section className="my-[8vh]">
        <div className="w-[60%] mx-auto">
          <h1
            className={`${spectralBridgeRegular.className} leading-[1] uppercase text-center text-[12vw]`}
          >
            Let's <span className="italic lowercase">get in</span> touch
          </h1>
          <div className="flex justify-end mt-16">
            <p className="relative w-fit italic lowercase text-right text-[24px] after:absolute after:top-full after:left-0 after:w-full after:h-[2px] after:bg-lightText dark:after:bg-darkText">
              <a>jmaduafokwa@hotmail.com</a>
            </p>
          </div>
          <div>
            <Image src='' alt='' placeholder="blur" className="w-full h-full"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
