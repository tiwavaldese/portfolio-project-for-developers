import React from 'react'
import bitmap from '../assets/Bitmap.png'
import bitmap1 from '../assets/Bitmap(1).png'
import bitmap2 from '../assets/Bitmap(2).png'
import bitmap3 from '../assets/Bitmap(3).png'
import bitmap4 from '../assets/Bitmap(4).png'
import bitmap5 from '../assets/Bitmap(5).png'

const Content = () => {
  return (
    <div className=' space-x-0 md:space-x-8 '>
<div className='relative'>
  <div className='flex justify-center py-0 md:py-12 mb-6 md:mb-0'>
    <hr className='w-[300px] md:w-[750px] lg:w-[1110px]' />
  </div>
  
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-12 text-center md:text-start lg:text-start ml-0 md:ml-8 lg:ml-24 space-y-8 md:space-y-0 lg:space-y-0'>

    
    {/* First Row (Large) - HTML, CSS, JavaScript */}
    <div className='mb-2 md:mb-0'>
      <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>HTML</h2>
      <p className='my-2 md:my-4 lg:my-6'>4 Years Experience</p>
    </div>
    <div className='mb-4 md:mb-0'>
      <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>CSS</h2>
      <p className='my-2 md:my-4 lg:my-6'>4 Years Experience</p>
    </div>
    <div className='mb-4 md:mb-0'>
      <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>JavaScript</h2>
      <p className='my-2 md:my-4 lg:my-6'>4 Years Experience</p>
    </div>

    {/* Second Row (Large) - Accessibility, React, Sass */}
    <div className='mb-4 md:mb-0'>
      <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold sp'>Accessibility</h2>
      <p className='my-2 md:my-4 lg:my-6'>4 Years Experience</p>
    </div>
    <div className='mb-4 md:mb-0'>
      <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>React</h2>
      <p className='my-2 md:my-4 lg:my-6'>3 Years Experience</p>
    </div>
    <div className='mb-4 md:mb-0'>
      <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Sass</h2>
      <p className='my-2 md:my-4 lg:my-6'>3 Years Experience</p>
    </div>
  </div>
</div>

      < div className='flex justify-center '>
      < hr className='w-[300px] block md:hidden lg:hidden' />
      </div>
      <div className='flex flex-row px-20 py-20 gap-10 md:gap-72 justify-evenly '>
        <h2 className='flex text-start text-2xl md:text-4xl lg:text-5xl font-bold'>Projects</h2>
        <div className=' text-end '>
        <h2>CONTACT ME</h2>
        <div>
        <hr/>
        </div>
        </div>
        </div>
        <div className='w-[345] h-[253] left-[15]'>
        <img src={bitmap}/>
      </div>
      <div>
        <h2>DESIGN PORTFOLIO</h2>
       <div>
        <p>HTML</p>
        <p>CSS</p>
        </div>
      </div>
      <div>
        <div>
        <p>VIEW PROJEC</p>
        <hr/>
        </div>
        <div>
        <p>VIEW CODE</p>
        <hr/>
        </div>
      </div>
      
      <div  >
        <img src={bitmap1} className='w-345 h-253 left-15' />
        <h2>E-LEARNING LANDING PAGE</h2>
        <div>
          <p>HTML</p>
          <p>CSS</p>
        </div>
        <div>
        <div>
          <p>VIEW PROJECT</p>
          <hr/>
        </div>
        <div>
          <p>VIEW CODE</p>
          <hr/>
        </div>
        </div>
        </div>

        <div>
        <img src={bitmap2} className='w-345 h-253 left-15' />
        <h2>TODO WEB APP</h2>
        <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
        </div>
        <div>
        <div>
          <p>VIEW PROJECT</p>
          <hr/>
        </div>
        <div>
          <p>VIEW CODE</p>
          <hr/>
        </div>
        </div>
        </div>
        <div>
        <img src={bitmap3} className='w-345 h-253 left-15' />
        <h2>ENTERTAINMENT WEB APP</h2>
        <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
        </div>
        <div>
        <div>
          <p>VIEW PROJECT</p>
          <hr/>
        </div>
        <div>
          <p>VIEW CODE</p>
          <hr/>
        </div>
        </div>
        </div >
        <img src={bitmap4} className='w-345 h-253 left-15' />
        <h2>MEMORY GAME</h2>
        <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
        </div>
        <div>
        <div>
          <p>VIEW PROJECT</p>
          <hr/>
        </div>
        <div>
          <p>VIEW CODE</p>
          <hr/>
        </div>
        </div>
        <img src={bitmap5} className='w-345 h-253 left-15' />
        <h2>ART GALLERY SHOWCASE</h2>
        <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
        </div>
        <div>
        <div>
          <p>VIEW PROJECT</p>
          <hr/>
        </div>
        <div>
          <p>VIEW CODE</p>
          <hr/>
        </div>
        </div>
        <div>
          <h2>Contact</h2>
          <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
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
    </div>
  )
}

export default Content
