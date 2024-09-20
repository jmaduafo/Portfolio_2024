import React, { Fragment } from "react";
import { spectralBridgeRegular } from "@/fonts/font";

function TransitionCarousel({ classNameRotate, array, ref }: { classNameRotate: string, array: string[], ref?: React.MutableRefObject<null>}) {

  const allTerms: string[] = [];

  let x = 0;

  while (x < 8) {
    array.forEach((term) => {
      allTerms.push(term);
    });

    x++;
  }

  return (
    <div className={`${classNameRotate} overflow-hidden px-6`}>
        <div className="flex items-center flex-nowrap gap-x-[6vw] w-fit animate-carousel-slower" ref={ref}>
          {allTerms.map((term, i) => {
            return (
              <Fragment key={`${term}_${i}`}>
                <h4 className={`text-[10vw] leading-[1] uppercase tracking-tighter whitespace-nowrap`}>{term}</h4>
                <h4 className={`text-[6vw] uppercase tracking-tighter whitespace-nowrap leading-[1]`}>&#9910;</h4>
                {/* <StarSpin classNameSize="w-[6vw]" /> */}
              </Fragment>
            );
          })}
        </div>
      </div>
  )
}

export default TransitionCarousel;
