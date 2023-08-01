import React from 'react'
import Image from 'next/image'
import logo1 from '../assets/logo/keiser-logo.svg'
import logo2 from '../assets/logo/biotech.png'
import logo3 from '../assets/logo/apple.svg'
import logo4 from '../assets/logo/polar.png'
import logo5 from '../assets/logo/powerade.svg'
import logo6 from '../assets/logo/underarmour.svg'
import logo7 from '../assets/logo/mastercard.svg'
import logo8 from '../assets/logo/jbl.svg'

const Sponsors = () => {
  return (
    <div className=''>
            <div className="logos flex gap-x-[80%] ">
      <div className="logos-slide ">
        <Image src={logo1} alt='logo1' className=' logoimg'/>
        <Image src={logo2} alt='logo1' className=' logoimg'/>
        <Image src={logo3} alt='logo1' className=' logoimg'/>
        <Image src={logo4} alt='logo1' className=' logoimg'/>
        <Image src={logo5} alt='logo1' className=' logoimg'/>
        <Image src={logo6} alt='logo1' className=' logoimg'/>
        <Image src={logo7} alt='logo1' className=' logoimg'/>
        <Image src={logo8} alt='logo1' className=' logoimg'/>
      </div>
      <div className="logos-slide">
        <Image src={logo1} alt='logo1' className=' logoimg'/>
        <Image src={logo2} alt='logo1' className=' logoimg'/>
        <Image src={logo3} alt='logo1' className=' logoimg'/>
        <Image src={logo4} alt='logo1' className=' logoimg'/>
        <Image src={logo5} alt='logo1' className=' logoimg'/>
        <Image src={logo6} alt='logo1' className=' logoimg'/>
        <Image src={logo7} alt='logo1' className=' logoimg'/>
        <Image src={logo8} alt='logo1' className=' logoimg'/>
      </div>

    </div>
    </div>
  )
}

export default Sponsors