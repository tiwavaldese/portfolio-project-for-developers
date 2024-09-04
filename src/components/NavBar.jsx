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
  <div className='relative top-0 w-screen flex flex-col items-center  justify-center md:items-start  md:flex-row md:justify-between px-0 md:px-0 lg:px-20 '>
    <h1 className='text-white text-2xl font-bold mb-2  md:mb-0 md:mr-8 mt-0 md:mt-8 px-0 md:px-8'>adamkeyes</h1>
   
    <div className='relative w-[200px]  md:w-[350px] lg:w-[450px]  h-[400px] md:h-[650px]'>
      <img src={image1} alt=''  className=' bg-[red] w-full h-full object-cover' />
      
      <div className='absolute inset-0 flex flex-col items-center md:items-end justify-start mt-0 md:mt-8  p-2'>
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
    <div className='text-white items-center justify-center md:items-start md:absolute lg:absolute flex flex-col gap-8 md:mr-8 md:my-32 py-10 md:py-0 px-0 md:px-8 '>
    <div>
    <h2 className='text-3xl md:text-6xl lg:text-7xl items-center md:items-start w-[300px] md:w-[370px] lg:w-[650px]  font-bold '>Nice to meet you! I’m Adam Keyes.</h2>
      <hr className='w-[180px] md:w-[340px] lg:w-[410px] border-[green] border-t-2 font-bold ml-12 md:ml-0 lg:ml-32' />
      </div>
      <p className='w-[300px] md:w-[350px]  '>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
     <div>
      <h2 className='text-white lg:text-[green] '>CONTACT ME</h2>
      <hr className='border-[green] border-t-2 mt-2 '/>
      </div>
      </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar



