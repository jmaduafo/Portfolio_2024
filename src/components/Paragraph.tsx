import React from 'react'

type Text = {
    text: string;
}

function Paragraph({ text }: Text) {
  return (
    <p className='text-[15px]'>{text}</p>
  )
}

export default Paragraph