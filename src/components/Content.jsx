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
      < hr className='w-[300px]  block md:hidden lg:hidden' />
      </div>
      <div className='flex flex-row px-3 md:px-2 lg:px-16 py-20 gap-20  md:gap-0 lg:gap-0 justify-between '>
        <h2 className='flex  text-2xl md:text-5xl lg:text-6xl font-bold'>Projects</h2>
        <div className=' '>
        <h2>CONTACT ME</h2>
        <div>
        <hr className='border-[green] mt-2 border-t-2 '/>
        </div>
        </div>
        </div>
        <div className='flex flex-col md:flex-row px-3 lg:px-16  gap-3 lg:gap-1 lg:flex-row justify-between'>
          <div className='flex flex-col'>
        <div className='flex justify-center '>
        <img className=' w-[300px] md:w-[350px] lg:w-[540px] h-[253px] lg:h-[400px] ' src={bitmap}/>
      </div>
      <div className=' py-5 px-2 '>
        <h2 className=' text-2xl md:text-2xl lg:text-4xl '>DESIGN PORTFOLIO</h2>
       <div className='flex flex-row gap-10 py-2'>
        <p>HTML</p>
        <p>CSS</p>
        </div>
      </div>
      <div className='flex flex-row gap-10 px-2 ' >
        <div className='block lg:hidden'>
        <p>VIEW PROJECT</p>
        <hr className='w-[100px]  md:w-[100px] my-2 border-[green] border-t-2 font-bold ' />
        </div>
        <div className='block lg:hidden'>
        <p>VIEW CODE</p>
        <hr className='w-[100px] md:w-[90px] my-2 border-[green] border-t-2 font-bold ' />
        </div>
      </div>
      </div>
      <div className='flex flex-col'>
      <div className='flex justify-center'>
        <img className=' w-[300px] md:w-[350px] lg:w-[540px] h-[253px] lg:h-[400px] ' src={bitmap1}  />
        </div>
        <div className=' py-5 px-2 '>
        <h2 className=' text-1xl md:text-2xl lg:text-4xl '>E-LEARNING LANDING PAGE</h2>
        <div className='flex flex-row gap-10 py-2'>
          <p>HTML</p>
          <p>CSS</p>
        </div>
        </div>
        <div className='flex flex-row px-2 gap-10'>
        <div className='block lg:hidden'>
          <p>VIEW PROJECT</p>
          <hr className='w-[100px] md:w-[110px] my-2 border-[green] border-t-2 font-bold ' />
        </div>
        <div className='block lg:hidden'>
          <p>VIEW CODE</p>
          <hr className='w-[100px] md:w-[90px] my-2 border-[green] border-t-2 font-bold ' />
        </div>
        </div>
        </div>
        
</div>
        <div>
        <img src={bitmap2} className='w-345 h-253 left-15' />
        <h2 className=' text-2xl md:text-4xl lg:text-5xl ' >TODO WEB APP</h2>
        <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
        </div>
        <div>
        <div>
          <p>VIEW PROJECT</p>
          <hr className='w-[100px] md:w-[340px] my-2 border-[green] border-t-2 font-bold ' />
        </div>
        <div>
          <p>VIEW CODE</p>
          <hr className='w-[100px] md:w-[340px] my-2 border-[green] border-t-2 font-bold ' />
        </div>
        </div>
        </div>
        <div>
        <img src={bitmap3} className='w-345 h-253 left-15' />
        <h2 className=' text-2xl md:text-4xl lg:text-5xl '>ENTERTAINMENT WEB APP</h2>
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
        <h2 className=' text-2xl md:text-4xl lg:text-5xl '>MEMORY GAME</h2>
        <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
        </div>
        <div>
        <div>
          <p>VIEW PROJECT</p>
          <hr className='w-[100px] md:w-[340px] my-2 border-[green] border-t-2 font-bold ' />
        </div>
        <div>
          <p>VIEW CODE</p>
          <hr className='w-[100px] md:w-[340px] my-2 border-[green] border-t-2 font-bold ' />
        </div>
        </div>
        <img src={bitmap5} className='w-345 h-253 left-15' />
        <h2 className=' text-2xl md:text-4xl lg:text-5xl '>ART GALLERY SHOWCASE</h2>
        <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
        </div>
        <div>
        <div>
          <p>VIEW PROJECT</p>
          <hr className='w-[100px] md:w-[340px] my-2 border-[green] border-t-2 font-bold ' />
        </div>
        <div>
          <p>VIEW CODE</p>
          <hr className='w-[100px] md:w-[340px] my-2 border-[green] border-t-2 font-bold ' />
        </div>
        </div>
        <div>
          <h2 className=' text-2xl md:text-4xl lg:text-5xl '>Contact</h2>
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
