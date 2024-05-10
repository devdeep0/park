"use client"
import React from 'react'
import { ConnectWallet,darkTheme,} from "@thirdweb-dev/react"
function Header() {
  return (
    <div className=' w-full absolute flex justify-between items-center p-7 text-white h-[70px] z-10'>
    <div>
        logo
    </div>
    <div className='w-[500px] h-full flex justify-center items-center '>
        <ul className=' flex w-full justify-between items-center'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Support</li>
            
        <ConnectWallet
        theme={darkTheme({
          colors: {
            accentButtonText: "#010001",
            primaryButtonBg: "#0c0a12",
            primaryButtonText: "#ededef",
          },
        })}
        modalSize={"wide"} />
        </ul>
    </div>
   
</div>
  )
}

export default Header