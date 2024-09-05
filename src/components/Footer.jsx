import React from 'react'
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import complexshape from '../assets/complexshape.png'

const Footer = () => {
  return (
    <div className=' px-3 py-10 md:space-x-8 lg:space-x-8 bg-dark-grey '>
      
      <div className='flex flex-col lg:flex-row px-0 lg:px-16 lg:justify-between'>
        <div className=' flex flex-col items-center '>
          <h2 clasName=' text-3xl md:text-5xl lg:text-6xl font-bold' >Contact</h2>
          <p className=' py-4 w-[300px] md:w-[500px] lg:w-[400px] text-center  '>I woulds love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
          </div>
          <div className='flex flex-col  items-justify md:items-center lg:items-end '>
            <div className=' py-8 '>
              <span className=' ml-3 '>NAME</span>
              <hr className=' w-[300px] md:w-[500px] mt-3 '/>
            </div>
            <div className=' py-6 '>
            <span className=' ml-3 '>EMAIL</span>

              <hr className=' w-[300px] md:w-[500px] mt-3 '/>
            </div>
            <div className=' py-6 '>
            <span className=' ml-3 '>MESSAGE</span>
              <hr className=' w-[300px] md:w-[500px] mt-20  '/>
            </div>
            <div className='flex flex-col items-end justify-end py-8 ml-0 md:ml-96 '>
             SEND MESSAGE
             <div className='flex justify-end'>
              <hr className='w-[120px]  my-2 border-[green] border-t-2 font-bold '/>
            </div>
            </div>
        </div>
        </div>
        <div className='flex justify-center'>
        <hr className='w-[300px] md:w-[500px] lg:w-[1110px]  my-2  border-t-2 font-bold '/>
        </div>
      <div className='flex flex- px-0 md:px-32 lg:px-14 mt-7 md:flex-row lg:flex-row justify-center items-center  md:justify-between lg:justify-between '>
        <h2>adamkeyes</h2>
        <div className='flex items-center py-4 md:py-0 lg:py-0 gap-5 justify-center'>
          <FiGithub />
          <img src={complexshape} className='text-black' alt='' />
          <FaLinkedin />
          <FaTwitter />
        </div>
      </div>
    </div>
  )
}

export default Footer
