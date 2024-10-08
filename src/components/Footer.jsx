import React,  { useState } from 'react'
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import complexshape from '../assets/complexshape.png'
import ContactForm from './ContactForm';

const Footer = () => {
  const [clickedIcon, setClickedIcon] = useState(null);
  const handleIconClick = (icon) => {
    setClickedIcon(icon); 
  };

  return (
    <div className=' px-3 py-10 md:space-x-8 lg:space-x-8 bg-dark-grey '>
      
      <div id='contact-form' className='flex flex-col lg:flex-row px-0 lg:px-16 lg:justify-between'>
        <div className=' flex flex-col items-center '>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Contact</h2>
          <p className=' py-4 w-[300px] md:w-[500px] lg:w-[400px] text-center  '>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
          </div>
          <div className='flex flex-col  items-justify md:items-center lg:items-end '>
            <div className='flex flex-col justify-center'>
            
            </div>
            <ContactForm/>
        </div>
        </div>
        <div className='flex justify-center'>
        <hr className='w-[300px] md:w-[500px] lg:w-[1110px]  my-2  border-t-2 font-bold '/>
        </div>
      <div className='flex flex-col px-0 md:px-32 lg:px-20 mt-7 md:flex-row lg:flex-row justify-center items-center  md:justify-between lg:justify-between '>
        <h2>adamkeyes</h2>
        <div className='flex items-center py-4 md:py-0 lg:py-0 gap-5 justify-center'>
        <a href="https://github.com/yourusername" aria-label="GitHub">
          <FiGithub  className={`cursor-pointer ${clickedIcon === 'github' ? 'text-green-500' : 'text-white'}`}
        onClick={() => handleIconClick('github')} 
        size={20} />
        </a>
        <a href="https://complexshape.com" aria-label="Complex Shape">
          <img src={complexshape} 
        className={`cursor-pointer ${clickedIcon === 'complexshape' ? 'text-green-500' : 'text-white'}`} 
        alt='' 
        onClick={() => handleIconClick('complexshape')} />
        </a>
        <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn">
          <FaLinkedin className={`cursor-pointer ${clickedIcon === 'linkedin' ? 'text-green-500' : 'text-white'}`} 
        onClick={() => handleIconClick('linkedin')} 
        size={20} />
 </a>
 <a href="https://twitter.com/yourusername" aria-label="Twitter">
          <FaTwitter  className={`cursor-pointer ${clickedIcon === 'twitter' ? 'text-green-500' : 'text-white'}`} 
        onClick={() => handleIconClick('twitter')} 
        size={20} />
        </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
