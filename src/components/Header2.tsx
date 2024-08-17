import React from 'react'

type Header = {
  text: string;
}

function Header2({ text }: Header) {
  return (
    <h2 className='text-[15vw] leading-[1] tracking-tighter mb-[-.2em] uppercase'>{text}</h2>
  )
}

export default Header2