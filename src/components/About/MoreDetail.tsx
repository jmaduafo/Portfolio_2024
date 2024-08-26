import React from 'react'
import { spectralBridgeRegular } from '@/fonts/font'
import Image from 'next/image'
import Paragraph from '../Paragraph'
import AboutIntro1 from '../../../public/images/general/about/aboutIntro1.jpg'
import AboutIntro2 from '../../../public/images/general/about/aboutIntro2.jpg'

function MoreDetail() {
  return (
    <section className="mt-[5vh]">
        <div className="flex flex-col md:flex-row items-end gap-6 md:pl-[8vw]">
          <div className="flex-1 object-cover">
            <Image
              src={AboutIntro1}
              alt=""
              className="w-full h-full"
              placeholder="blur"
            />
          </div>
          <div className="flex-[1.5]">
            <div className="w-full object-cover">
              <Image
                src={AboutIntro2}
                alt=""
                className="w-full h-full"
                placeholder="blur"
              />
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
  )
}

export default MoreDetail