import React from 'react'
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import complexshape from '../assets/complexshape.png'

const Footer = () => {
  return (
    <div>
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
