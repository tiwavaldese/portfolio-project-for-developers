import React from 'react'
import './index.css';
import NavBar from './components/NavBar'
import Content from './components/Content';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <NavBar/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
