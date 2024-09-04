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
  <div className='relative top-0 w-screen flex flex-col items-center  justify-center md:items-start  md:flex-row md:justify-between px-4 md:px-8'>
    <h1 className='text-white text-xl font-bold mb-2  md:mb-0 md:mr-8'>adamkeyes</h1>
   
    <div className='relative w-[250px] h-[400px]'>
      <img src={image1} alt='' className='w-full h-full object-cover' />
      
      <div className='absolute inset-0 flex flex-col items-center justify-start p-2'>
        <div className='flex items-center space-x-2'>
          <a href="https://github.com/yourusername" aria-label="GitHub">
            <FiGithub className='text-white text-xl' />
          </a>
          <a href="https://complexshape.com" aria-label="Complex Shape">
            <img src={complexshape} className='w-6 h-6' alt='Complex Shape' />
          </a>
          <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn">
            <FaLinkedin className='text-white text-xl' />
          </a>
          <a href="https://twitter.com/yourusername" aria-label="Twitter">
            <FaTwitter className='text-white text-xl' />
          </a>
        </div>
      </div>
    </div>
    <div className='text-white md:absolute flex flex-col gap-8 md:mr-8 md:my-24 md:top-0 '>
    <div>
    <h2 className='text-2xl w-[180px] md:w-[110px] '>Nice to meet you! I’m Adam Keyes.</h2>
      <hr/>
      </div>
      <p className='w-[200px]'>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
     <div>
      <h2>CONTACT ME</h2>
      <hr/>
      </div>
      </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar



