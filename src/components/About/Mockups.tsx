import React from "react";
import Image from "next/image";
import AboutOutro1 from '../../../public/images/general/about/aboutOutro1.jpg'
import AboutOutro2 from '../../../public/images/general/about/aboutOutro2.jpg'

function Mockups() {
  return (
    <section className="mt-[8vh]">
      <div className="flex items-start gap-3 pl-[20vw]">
        <div className="flex-1 object-cover mt-16">
          <Image
            src={AboutOutro1}
            alt=""
            className="w-full h-full"
            placeholder="blur"
          />
        </div>
        <div className="flex-1 object-cover">
          <Image
            src={AboutOutro2}
            alt=""
            className="w-full h-full"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}

export default Mockups;
