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
      <div className='flex flex-row px-14 md:px-2 lg:px-16 py-20 gap-20  md:gap-0 lg:gap-0 justify-between '>
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
        <div className='flex justify-center relative '>
        <img className=' w-[300px] md:w-[350px] lg:w-[540px] h-[253px] lg:h-[400px] transition object-cover duration-300 ease-in-out hover:shadow-xl ' src={bitmap}/>
        <div 
      className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 lg:hover:opacity-100 transition-opacity duration-300 ease-in-out'>
<div>
      <span className='text-white text-xl'>VIEW PROJECT</span>
    <hr className='w-[130px] my-2 border-[green] border-t-2 font-bold '/>
    </div>
    <div className=' mt-10 '>
      <span className='text-white text-xl'>VIEW CODE</span>
    <hr className='w-[100px] my-2 border-[green] border-t-2 font-bold '/>
    </div>
    </div>
      </div>
      <div className=' py-5 px-2 flex flex-col items-center md:items-start lg:items-start '>
        <h2 className=' text-2xl md:text-3xl lg:text-4xl '>DESIGN PORTFOLIO</h2>
       <div className='flex flex-row gap-10 py-2'>
        <p>HTML</p>
        <p>CSS</p>
        </div>
      </div>
      <div className='flex flex-row gap-10 px-2 items-center md:items-start lg:items-start justify-center md:justify-start' >
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
      <div className='flex justify-center relative'>
        <img className=' w-[300px] md:w-[350px] lg:w-[540px] h-[253px] lg:h-[400px] transition object-cover duration-300 ease-in-out hover:shadow-xl ' src={bitmap1}  />
        <div 
      className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 lg:hover:opacity-100 transition-opacity duration-300 ease-in-out'>
      <div>
      <span className=' text-xl text-[green] font-normal '>VIEW PROJECT</span>
      <hr className='w-[130px] my-2 border-[green] border-t-2 font-bold '/>
      </div>
      <div className=' mt-10'>
      <span className='text-white text-xl '>VIEW CODE</span>
    <hr className='w-[100px] my-2 border-[green] border-t-2 font-bold '/>
    </div>
    </div>
        </div>
        <div className=' py-5 px-2 flex flex-col items-center md:items-start lg:items-start '>
        <h2 className=' text-2xl md:text-2xl lg:text-4xl '>E-LEARNING LANDING PAGE</h2>
        <div className='flex flex-row gap-10 py-2'>
          <p>HTML</p>
          <p>CSS</p>
        </div>
        </div>
        <div className='flex flex-row px-2 gap-10  items-center md:items-start lg:items-start justify-center md:justify-start'>
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
<div className='flex flex-col md:flex-row px-3 lg:px-16  gap-3 lg:gap-1 lg:flex-row justify-between'>
        <div className='flex flex-col'>
        <div className='flex justify-center'>
        <img className=' w-[300px] md:w-[350px] lg:w-[540px] h-[253px] lg:h-[400px] '  src={bitmap2} />
        </div>
        <div className=' py-5 px-2 flex flex-col items-center md:items-start lg:items-start '>
        <h2 className=' text-2xl md:text-3xl lg:text-4xl ' >TODO WEB APP</h2>
        <div className='flex flex-row gap-10 py-2'>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
        </div>
        </div>
        <div className='flex flex-row px-2 gap-10  items-center md:items-start lg:items-start justify-center md:justify-start'>
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
        <div className='flex flex-col'>
        <div className='flex justify-center'>
        <img className=' w-[300px] md:w-[350px] lg:w-[540px] h-[253px] lg:h-[400px] ' src={bitmap3}  />
        </div>
        <div className=' py-5 px-2 flex flex-col items-center md:items-start lg:items-start '>
        <h2 className=' text-2xl md:text-3xl lg:text-4xl '>ENTERTAINMENT WEB APP</h2>
        <div className='flex flex-row py-2 gap-10'>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
        </div>
        </div>
        <div className='flex flex-row px-2 gap-10  items-center md:items-start lg:items-start justify-center md:justify-start'>
        <div className='block lg:hidden'>
          <p>VIEW PROJECT</p>
          <hr className='w-[100px] md:w-[110px] my-2 border-[green] border-t-2 font-bold ' />
        </div>
        <div className='block lg:hidden'>
          <p>VIEW CODE</p>
          <hr className='w-[100px] md:w-[90px] my-2 border-[green] border-t-2 font-bold ' />
        </div>
        </div>
        </div >
        </div>
        <div className='flex flex-col md:flex-row mb-14 px-3 lg:px-16  gap-3 lg:gap-1 lg:flex-row justify-between'>
        <div className='flex flex-col'>
        <div className='flex justify-center'>
        <img className=' w-[300px] md:w-[350px] lg:w-[540px] h-[253px] lg:h-[400px] ' src={bitmap4} />
        </div>
        <div className=' py-5 px-2 flex flex-col items-center md:items-start lg:items-start '>
        <h2 className=' text-2xl md:text-3xl lg:text-4xl '>MEMORY GAME</h2>
        <div className='flex flex-row py-2 gap-10'>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
        </div>
        </div>
        <div className='flex flex-row px-2 gap-10  items-center md:items-start lg:items-start justify-center md:justify-start'>
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
        <div className='flex flex-col'>
        <div className='flex justify-center'>
        <img className=' w-[300px] md:w-[350px] lg:w-[540px] h-[253px] lg:h-[400px] ' src={bitmap5}  />
        </div>
        <div className=' py-5 px-2 flex flex-col items-center md:items-start lg:items-start '>
        <h2 className=' text-2xl md:text-3xl lg:text-4xl '>ART GALLERY SHOWCASE</h2>
        <div className='flex flex-row py-2 gap-10'>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
        </div>
        </div>
        <div className='flex flex-row px-2 gap-10  items-center md:items-start lg:items-start justify-center md:justify-start'>
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
        
    </div>
  )
}

export default Content
