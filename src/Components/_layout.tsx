"use client"
import React from 'react'
import Image from 'next/image'
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import  { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
function Layot() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
    <motion.section
    style={{
      backgroundImage,
    }}
    className="flex min-h-screen  overflow-hidden  px-4 py-24 "
  >
    <div className=''>
    <Image
    className='ml-9 h-[300px] w-[400px]'
    src="/png-transparent-japan-torii-gate.png"
    alt=''
    height={1000}
    width={1000}
    />
     <Image
    className='ml-[500px] h-[300px] w-[400px]'
    src="/png-transparent-japan-torii-gate.png"
    alt=''
    height={1000}
    width={1000}
    />
     <Image
    className='ml-9 h-[300px] w-[400px]'
    src="/png-transparent-japan-torii-gate.png"
    alt=''
    height={1000}
    width={1000}
    />
    
    </div>
    <div className="absolute inset-0 z-0">
      <Canvas>
        <Stars radius={50} count={2500} factor={4} fade speed={2} />
      </Canvas>
    </div>
  </motion.section>
  </>
  )
}

export default Layot