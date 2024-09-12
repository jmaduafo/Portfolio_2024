import React from "react";
import StarSpin from "../StarSpin";
import { spectralBridgeRegular } from "@/fonts/font";

function PreLoading() {
  const name = "Jasmine";
  
  return (
    <section className="z-[100] bg-lightBg dark:bg-darkBg w-full h-screen flex items-end justify-center overflow-hidden">
        {name.split("").map((nom, i) => {
          return name[i] === "i" ? (
            <div
              key={`${nom}_${i}`}
              className="flex flex-col items-center justify-center gap-y-10"
            >
              <StarSpin classNameSize="w-[7vw]" />
              <p
                className={`${spectralBridgeRegular.className} uppercase text-[25vw] leading-[.85] tracking-tight mb-[-.2em]`}
              >
                {nom}
              </p>
            </div>
          ) : (
            <div key={`${nom}_${i}`}>
              <p
                className={`${spectralBridgeRegular.className} uppercase text-[25vw] leading-[.85] tracking-tight mb-[-.2em]`}
              >
                {nom}
              </p>
            </div>
          );
        })}
    </section>
  );
}

export default PreLoading;
