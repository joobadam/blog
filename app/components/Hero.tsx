"use client"

import React,{useLayoutEffect, useRef} from 'react'
import Start from './Start'
import Image from 'next/image'
import trainer1 from '../assets/trainer4.png'
import { gsap } from "gsap/dist/gsap";
import Mesh2 from './Mesh2'

const Hero = () => {

  const trainerRef = useRef(null)
  const helloRef = useRef(null)
  const buttonRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(()=>{
      gsap.to(".hello",{
        opacity:1,
        x:0,
        duration:1.2,
        delay:1,
        stagger:0.2
      })
    })
      gsap.to(buttonRef.current,{
        opacity:1,
        y:0,
        duration:1.2,
        delay:1.5,
    })
  
    return () => ctx.revert()
  }, [])

  const nameText = `I'm Mike,`
  const buttonText = `Let's go`

  return (
    <div className='w-full hero h-screen text-white relative'>
        <Start/>
          <Mesh2/>
        <div>
          <Image src={trainer1} alt="trainer" className="w-full h-full object-contain  absolute top-0 sm:translate-x-[10%]" ref={trainerRef}/>
        </div>
        <div className='absolute top-0 left-0 h-screen w-full flex justify-center items-start flex-col px-5 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl gap-y-2 overflow-hidden uppercase md:pl-20 lg:pl-32 gradient -translate-y-[30%]' ref={helloRef}>
          <div className='hello'>
            <span className='gradient'>Hello there!</span>
          </div>
          <div className='hello'>
            <span className='gradient'>{nameText}</span>
          </div>
          <div className='hello'>
            <span className='gradient'>
            a personal trainer
            </span>
          </div>
        </div>
        <div>
          <button className='h-[40px] w-[250px] bg-indigo-500 rounded-xl font-semibold shadow-2xl absolute bottom-[10%] left-[15%]  hover:scale-105 hover:bg-indigo-300 duration-150 translate-y-[100%] opacity-0' ref={buttonRef}>{buttonText}</button>
        </div>
    </div>
  )
}

export default Hero