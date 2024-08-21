import React from 'react'

type Text = {
    text: string;
    className?: string;
}

function Paragraph({ text, className }: Text) {
  return (
    <p className={`${className} text-[15px]`}>{text}</p>
  )
}

export default Paragraph