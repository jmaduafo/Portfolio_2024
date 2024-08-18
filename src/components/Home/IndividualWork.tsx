import React from "react";
import { Projects } from "@/types/type";
import Image from "next/image";
import { spectralBridgeRegular } from "@/fonts/font";

type Work = {
  readonly work: Projects;
};

function IndividualWork({ work }: Work) {
  return (
    <div className={`flex ${work?.position} mb-[10vh]`}>
      <div className={`max-w-[30vw]`}>
        <div className={`object-cover`}>
          {work?.mainImage && (
            <Image
              src={work?.mainImage}
              alt={`${work?.title} project`}
              className="w-full"
              placeholder="blur"
            />
          )}
        </div>
        <div className="flex flex-row-reverse justify-between items-start mt-1">
          <p className="">{work?.year}</p>
          <h5 className={`${spectralBridgeRegular.className} text-[36px]`}>
            {work?.title}
          </h5>
        </div>
        <div className="flex gap-x-3 gap-y-2 items-center flex-wrap mt-[-5px]">
          {work?.roles?.map((role) => {
            return (
              <p
                className="py-[1px] whitespace-nowrap px-2 border-[1px] rounded-full border-lightText dark:border-darkText text-[13px] capitalize"
                key={role}
              >
                {role}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default IndividualWork;
