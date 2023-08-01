"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Switch} from'@headlessui/react'

function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false)  
  const [enabled, setEnabled] = useState(false)

  useEffect(()=>{
    setMounted(true)
  },[])

  if(!mounted){
    return null
  }

  return (
    <div className="">
    <Switch
      checked={enabled}
      onChange={setEnabled}
      onClick={()=>setTheme(resolvedTheme === 'dark'? 'light': 'dark')}
        className={`bg-indigo-500
        relative inline-flex h-[20px] w-[37px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? 'translate-x-4 bg-black' : 'translate-x-0 bg-white'}
          pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  </div>
  );
}

export default ThemeButton;