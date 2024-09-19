import React from 'react'
import Header3 from '../Header3'

function ProcessTransition() {
    const line1 = "Ensuring the utmost customer"
    const line2 = "satisfaction, I seek to be transparent"
    const line3 = "with my design and development"
    const line4 = "process and what my clients should"
    const line5 = "expect."

  return (
    <section className='my-[10vh]'>
        <Header3 phrase={line1}/>
        <Header3 phrase={line2}/>
        <Header3 phrase={line3}/>
        <Header3 phrase={line4}/>
        <Header3 phrase={line5}/>
    </section>
  )
}

export default ProcessTransition