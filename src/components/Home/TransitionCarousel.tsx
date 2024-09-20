import React, { Fragment } from "react";
import StarSpin from "../StarSpin";

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
        <div className="flex items-center flex-nowrap gap-x-[3vw] w-fit animate-carousel-slower" ref={ref}>
          {allTerms.map((term, i) => {
            return (
              <Fragment key={`${term}_${i}`}>
                <h4 className="text-[8vw] uppercase tracking-tighter">{term}</h4>
                <StarSpin classNameSize="w-[6vw]" />
              </Fragment>
            );
          })}
        </div>
      </div>
  )
}

export default TransitionCarousel;
