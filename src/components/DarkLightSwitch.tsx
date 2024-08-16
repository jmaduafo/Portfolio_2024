'use client'
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function DarkLightSwitch() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }

  return (
    <div className="py-[1px] px-2 border-[1px] border-lightText dark:border-darkText rounded-full">
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      >
        {theme === "light" ? 'Light' : 'Dark'}
      </button>
    </div>
  );
}

export default DarkLightSwitch