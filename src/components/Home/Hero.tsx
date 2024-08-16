import React from 'react'
import Header1 from '../Header1'
import Header6 from '../Header6'


function Hero() {
  return (
    <section>
        <div className='flex flex-col items-center pt-[8vh]'>
            <Header1 text='Jasmine'/>
            <Header1 text='Maduafokwa'/>
        </div>
        <div className='flex justify-end gap-[8em] mt-5'>
            <Header6 text='Frontend Developer'/>
            <Header6 text='UI Designer'/>
        </div>
    </section>
  )
}

export default Hero