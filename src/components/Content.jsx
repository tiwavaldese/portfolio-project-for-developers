import React from 'react'
import bitmap from '../assets/Bitmap.png'
import bitmap1 from '../assets/Bitmap(1).png'
import bitmap2 from '../assets/Bitmap(2).png'
import bitmap3 from '../assets/Bitmap(3).png'
import bitmap4 from '../assets/Bitmap(4).png'
import bitmap5 from '../assets/Bitmap(5).png'

const Content = () => {
  return (
    <div>
     
      <div className='relative'>
        <hr/>
        <div>
          <div>HTML</div>
          <p>4 Years Experience</p>
        </div>
        <div>
          <div>CSS</div>
          <p>4 Years Experience</p>
        </div>
        <div>
          <div>Javascript</div>
          <p>4 Years Experience</p>
        </div>
        <div>
          <div>Accessibility</div>
          <p>4 Years Experience</p>
        </div>
        <div>
          <div>React</div>
          <p>3 Years Experience</p>
        </div>
        <div>
          <div>Sass</div>
          <p>3 Years Experience</p>
        </div>
      <hr/>
      </div>
      <div>
        <h2>Projects</h2>
        <div>
        <h2>CONTACT ME</h2>
        <hr/>
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
