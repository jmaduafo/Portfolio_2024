import React from 'react'

function Heading({ text }: { text: string }) {
    return (
      <p className="mb-1 uppercase text-[14px] text-lightText60 dark:text-darkText60">
        {text}
      </p>
    );
  }

export default Heading