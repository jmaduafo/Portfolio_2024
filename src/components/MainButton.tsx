import React from 'react'

type Button = {
    text: string;
}

function MainButton({ text }: Button) {
  return (
    <div className='group hover:bg-lightText dark:hover:bg-darkText flex items-center gap-1 w-fit p-1 border-[1px] border-lightText dark:border-darkText rounded-full'>
        <button className='group-hover:text-lightBg dark:group-hover:text-darkBg bg-transparent border-none outline-none px-6 py-1'>{text}</button>
        <div className='group-hover:scale-x-110 duration-100 ease-in w-6 h-6 rounded-full bg-lightText dark:bg-darkText'></div>
    </div>
  )
}

export default MainButton