import React from 'react'
import MidleA from './MiddleA'
import Image from 'next/image'
import pic2 from '../assets/pic2.avif'
import { Mesh } from './Mesh'


const Offers = () =>  {
  return (
    <div className='w-full h-screen offers relative text-white'>
        <MidleA/>
        <div className='absolute bottom-0 md:w-[40%] md:h-[auto] md:px-2'>
          <Image src={pic2} alt="training" className=' object-cover'/>
        </div>
        <Mesh/>
        <div className='absolute top-5 right-20 w-[40%] font-semibold text-sm md:text-2xl lg:text-3xl '>
          <h3>
          Ready to achieve your fitness goals? <br /> Join my training sessions, and together, we'll stay motivated and conquer challenges. <br /> Let's make progress and celebrate success! 
          </h3>
        </div>
    </div>
  )
}

export default Offers