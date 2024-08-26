import React from 'react'
import { satoshiLight, spectralBridgeRegular } from '@/fonts/font'

function AboutMe() {
  return (
    <section className="mt-[8vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
        <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
          <p className={`${satoshiLight.className} text-[14px] md:text-[18px]`}>
            About me
          </p>
          <div className="flex-1">
            <h3
              className={`${spectralBridgeRegular.className} indent-[10%] text-[5.5vw] leading-[1]`}
            >
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
              libero venenatis faucibus. <span className="italic">Nullam</span>{" "}
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna.
            </h3>
          </div>
        </div>
      </section>
  )
}

export default AboutMe