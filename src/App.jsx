import React from 'react'
import './index.css';
import NavBar from './components/NavBar'
import Content from './components/Content';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';


const App = () => {
  return (
    < div className='bg-black text-white  '>
      <NavBar/>
      <Content/>
      <Footer/>
      
    </div>
  )
}

export default App
