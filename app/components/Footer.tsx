import {AiFillYoutube, AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineMobile} from 'react-icons/ai'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full max-h-[40vh] h-fit px-5 py-20 flex justify-center items-center bg-red-600 text-white'>
      <div className='w-full h-fit py-5 grid grid-rows-3 grid-cols-1'>
        <div className='w-full h-fit py-2 flex justify-center items-center gap-x-10 text-sm lg:text-base'>
          <Link href="/">
            <h4 className='hover:text-black duration-150 hover:scale-105'>About</h4>
          </Link>
          <Link href="/">
            <h4 className='hover:text-black duration-150 hover:scale-105'>Blog</h4>
          </Link>
          <Link href="/">
            <h4 className='hover:text-black duration-150 hover:scale-105'>Accessibility</h4>
          </Link>
          <Link href="/">
            <h4 className='hover:text-black duration-150 hover:scale-105'>Partners</h4>
          </Link>
        </div>
        <div className='w-full h-fit py-2 flex justify-center items-center gap-x-16 text-sm lg:text-base -translate-x-3'>
          <Link href="/">
            <AiFillYoutube className='h-8 w-8 hover:text-black cursor-pointer z-10'/>
          </Link>
          <Link href="/">
          <AiOutlineFacebook className='h-8 w-8 hover:text-black cursor-pointer z-10'/>
          </Link>
          <Link href="/">
          <AiOutlineInstagram className='h-8 w-8 hover:text-black cursor-pointer z-10'/>
          </Link>
          <Link href="/">
          <AiOutlineTwitter className='h-8 w-8 hover:text-black cursor-pointer z-10'/>
          </Link>
          <Link href="/">
          <AiOutlineMobile className='h-8 w-8 hover:text-black cursor-pointer z-10'/>
          </Link>
        </div>

      <div className='w-full text-center text-xs mt-10'>
        <h4>© 2023 Your Company, Inc. All rights reserved.</h4>
      </div>
      </div>
    </div>
  )
}

export default Footer
  