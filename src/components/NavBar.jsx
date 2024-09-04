import React from 'react'
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import complexshape from '../assets/complexshape.png'
import image1 from '../assets/image-1.png'

const NavBar = () => {
  return (
    <div>
   <nav>
  <div className='relative top-5   w-screen flex items-center justify-center'>
    <div className='relative  w-[300px] h-[400px]'>
      <img src={image1} alt='' className='w-full h-full object-cover' />
      <div className='absolute inset-0  flex flex-col items-center justify-center'>
        <h1 className='text-white text-xl font-bold mb-2'>adamkeyes</h1>
        <div className='flex items-center space-x-2'>
          <a href="https://github.com/yourusername" aria-label="GitHub">
            <FiGithub className='text-white text-xl' />
          </a>
          <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn">
            <FaLinkedin className='text-white text-xl' />
          </a>
          <a href="https://twitter.com/yourusername" aria-label="Twitter">
            <FaTwitter className='text-white text-xl' />
          </a>
          <a href="https://complexshape.com" aria-label="Complex Shape">
            <img src={complexshape} className='w-6 h-6' alt='Complex Shape' />
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
{/*       
      <nav>
  <div className='relative h-screen inset-0 w-screen'>
    <img src={image1} alt='' className='absolute inset-0 w-custom-width h-custom-height object-cover' />
    <div className='absolute  top-5  items-center flex justify-center'>
      <div className='flex flex-col items-center'>
        <h1>adamkeyes</h1>
        <div className='flex items-center space-x-4 mt-4'>
          <FiGithub />
          <img src={complexshape} className='text-black' alt='' />
          <FaLinkedin />
          <FaTwitter />
        </div>
      </div>
    </div>
  </div>
</nav> */}
    </div>
  )
}

export default NavBar



