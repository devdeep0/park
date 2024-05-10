"use client"
import React from 'react'
import Image from 'next/image'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Marquee from "react-fast-marquee";



function Main() {
  
  return (
    <div className='flex flex-col   h-screen '>

   {/* ------------------------------BACKGROUND IMAGE----------------------------- */}
   <Parallax pages={1.57} style={{ top: '0', left: '0' }}>
   <ParallaxLayer offset={0} speed={2.5}
   
    className='z-0 relative '>
        <Image
        className='w-full'
        src='/goku/egor-klyuchnyk-digital-art-illustration-artwork-fictional-characters-hd-wallpaper-9931376d83c4d9dab9a87a5719e69065.jpg'
        alt=''
        height={2000}
        width={2000}
        />
      </ParallaxLayer>

      {/* --------------------------------------    DRAGON  *------------------------ */}

     <ParallaxLayer
   offset={0} speed={1}
   className='absolute z-10 left-1/2 transform -translate-x-1/2 '>
    <div
     className='absolute z-10 left-1/2 transform -translate-x-1/2 top-20'>

    <Image
        className='h-[680px] w-[700px]'
        src='/goku/pngegg_4.png'
        alt=''
        height={1000}
        width={1000}
        />
    </div>
    </ParallaxLayer>
    {/* -------------------------------------------cards --------------------------------------- */}
    
    <ParallaxLayer offset={0} speed={2.5}
    className='flex absolute z-0  gap-9 top-[1000px]'>
      <div className='flex absolute z-10 justify-evenly gap-9 top-[1000px] w-[1700px] '>
      <div className=''>
    <Image
        className='h-[400px] w-[380px] z-10 absolute hover:-translate-x-40 ease-in-out duration-300 cursor-pointer hover:grayscale hover:opacity-50'
        src='/goku/comic-flying-island-with-minecraft-art-vector-art-hd-no-background-465569832.jpeg'
        alt=''
        height={1000}
        width={1000}
        />
         <Image
        className='h-[400px] w-[380px]'
        src='/goku/cd.png'
        alt=''
        height={1000}
        width={1000}
        />
         {/* <Image
        className='h-[60px] w-[90px] absolute bottom-[167px]  left-[350px]'
        src='/goku/pngegg_2.png'
        alt=''
        height={1000}
        width={1000}
        /> */}
        
        <button className='absolute h-[40px] bottom-[180px] bg-red-600 font-bold text-white-700 w-[70px] rounded-lg left-[350px] z-0 text-xl'>Play</button>
    </div>



    <div className=''>
    <Image
        className='h-[400px] w-[380px] z-10 absolute hover:-translate-x-40 ease-in-out duration-300 cursor-pointer hover:grayscale hover:opacity-50'
        src='/goku/comic-flying-island-with-minecraft-art-vector-art-hd-no-background-465569832.jpeg'
        alt=''
        height={1000}
        width={1000}
        />
         <Image
        className='h-[400px] w-[380px]'
        src='/goku/cd.png'
        alt=''
        height={1000}
        width={1000}
        />
         {/* <Image
        className='h-[60px] w-[90px] absolute bottom-[167px]  left-[350px]'
        src='/goku/pngegg_2.png'
        alt=''
        height={1000}
        width={1000}
        /> */}
        
        <button className='absolute h-[40px] bottom-[180px] bg-red-600 font-bold text-white-700 w-[70px] rounded-lg left-[890px] z-0 text-xl'>Play</button>
    </div>
    <div className=''>
    <Image
        className='h-[400px] w-[380px] z-10 absolute hover:-translate-x-40 ease-in-out duration-300 cursor-pointer hover:grayscale hover:opacity-50'
        src='/goku/comic-flying-island-with-minecraft-art-vector-art-hd-no-background-465569832.jpeg'
        alt=''
        height={1000}
        width={1000}
        />
         <Image
        className='h-[400px] w-[380px]'
        src='/goku/cd.png'
        alt=''
        height={1000}
        width={1000}
        />
         {/* <Image
        className='h-[60px] w-[90px] absolute bottom-[167px]  left-[350px]'
        src='/goku/pngegg_2.png'
        alt=''
        height={1000}
        width={1000}
        /> */}
        
        <button className='absolute h-[40px] bottom-[180px] bg-red-600 font-bold text-white-700 w-[70px] rounded-lg right-[195px] z-0 text-xl'>Play</button>
    </div>
    </div>

    </ParallaxLayer>
    
{/* -----------------------------------------------------------side -------------------------------------- */}
<ParallaxLayer offset={0} speed={2}
className='absolute top-[1000px] z-10'>
  <div
  className='absolute top-[1100px] right-0'>
  <Image
        className='h-[1100px] w-[500px]'
        src='/goku/pngegg_7.png'
        alt=''
        height={1000}
        width={1000}
        />
  </div>
</ParallaxLayer>



{/* ----------------------------------------------------------clouds------------------------------------------ */}
{/* <ParallaxLayer offset={0} speed={2}
>
  <div className='rotate-12 absolute top-[1300px]  '>
    <Marquee speed={10}>
    <div className='flex gap-9'>
    <div>
    <Image
        className='h-[250px] w-[400px]'
        src='/goku/pngegg_2.png'
        alt=''
        height={1000}
        width={1000}
        />
    </div>
    <div>
    <Image
        className='h-[250px] w-[400px] '
        src='/goku/pngegg_2.png'
        alt=''
        height={1000}
        width={1000}
        />
    </div>
    <div>
    <Image
        className='h-[250px] w-[400px]'
        src='/goku/pngegg_2.png'
        alt=''
        height={1000}
        width={1000}
        />
    </div>
    </div>
    </Marquee>
  </div>
</ParallaxLayer> */}
    </Parallax>
    </div>
  )
}

export default Main