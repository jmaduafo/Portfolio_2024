import React from 'react'
import { spectralBridgeRegular } from '@/fonts/font'
import Image from 'next/image'
import Paragraph from '../Paragraph'
import AboutMain from '../../../public/images/general/about/aboutMain.jpg'

function Intro() {
  return (
    <section>
        <div className="flex justify-center mt-[8vh]">
          <div className="w-[75%] sm:w-[70%] lg:w-[65%] flex justify-center items-center flex-col">
            <h1 className={`${spectralBridgeRegular.className} dark:mix-blend-exclusion z-[10] text-[10vw] sm:text-[8vw] lg:text-[6.5vw] mb-[-6vh] text-center leading-[.9]`}>
                Turning innovative ideas into products
            {/* Your path begins with self-discovery */}
            </h1>
            <div className="sm:w-[80%] lg:w-[60%] object-cover">
              <Image
                src={AboutMain}
                alt=""
                className="w-full h-full contrast-125"
                placeholder="blur"
              />
            </div>
            <div className="sm:w-[65%] lg:w-[50%] mt-8">
              <Paragraph
                text="Remember how far you’ve come, not just how far you have to go. You are not where you want to be, but neither are you where you used to be"
                className="text-center"
              />
              <Paragraph
                text="- Rick Warren"
                className="text-right mt-2"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Intro