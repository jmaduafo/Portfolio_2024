import React from 'react'

type Text = {
    text: string;
    className?: string;
}

function Paragraph({ text, className }: Text) {
  return (
    <p className={`${className} text-[13.5px] sm:text-[15px] 2xl:text-[16.5px]`}>{text}</p>
  )
}

export default Paragraph