import React from 'react'
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import complexshape from '../assets/complexshape.png'

const Footer = () => {
  return (
    <div className=' px-3 md:space-x-8 lg:space-x-8 bg-dark-grey '>
      
      <div>
          <h2 clasName=' text-2xl md:text-4xl lg:text-5xl '>Contact</h2>
          <p>I woulds love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
          <div>
            <div>
              NAME
              <hr/>
            </div>
            <div>
              EMAIL
              <hr/>
            </div>
            <div>
              MESSAGE
              <hr/>
            </div>
            <div>
             SEND MESSAGE
              <hr/>
            </div>
        </div>
        </div>
      <hr/>
      <div>
        <h2>adamkeyes</h2>
        <div className='flex items-center justify-center'>
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
