import React from 'react'
import { spectralBridgeRegular } from '@/fonts/font'
import Image from 'next/image'
import Paragraph from '../Paragraph'
import AboutMain from '../../../public/images/general/about/aboutMain.jpg'
import AboutMain2 from '../../../public/images/general/about/aboutMain2.jpg'
import AboutMain3 from '../../../public/images/general/about/aboutMain3.jpg'

function Intro() {
  return (
    <section>
        <div className="flex justify-center mt-[8vh]">
          <div className="w-[75%] sm:w-[70%] lg:w-[65%] flex justify-center items-center flex-col">
            <h1 className={`${spectralBridgeRegular.className} dark:mix-blend-exclusion z-[10] text-[10vw] sm:text-[8vw] lg:text-[6.5vw] mb-[-6vh] text-center leading-[.9]`}>
              Cum sociis natoque penatibus et magnis
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
                text="Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum."
                className="text-center"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Intro