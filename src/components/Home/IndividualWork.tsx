import React from "react";
import { Projects } from "@/types/type";
import Image from "next/image";
import Paragraph from "../Paragraph";
import { spectralBridgeRegular } from "@/fonts/font";

type Work = {
  work: Projects;
};

function IndividualWork({ work }: Work) {
  return (
    <div className="max-w-[8vw]">
      <div>
        {work?.mainImage && (
          <Image src={work?.mainImage} alt={`${work?.title} project`} />
        )}
      </div>
      <p className="mt-1">{work?.year}</p>
      <h5 className={`${spectralBridgeRegular.className} text-[26px] mt-2`}>
        {work?.title}
      </h5>
      <div className="mt-2 flex gap-4 items-center">
        {work?.roles?.map((role) => {
          return (
            <p
              className="py-[1px] px-2 border-[1px] border-lightText dark:border-darkText text-[14px] capitalize"
              key={role}
            >
              {role}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default IndividualWork;
