import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Projects from '../components/Projects'
import Portfolio from './Portfolio'
import '../styles/LandingPage.css'
import '../index.css'

const LandingPage = () => {
  return (

    <div className='landing-container'>
      <div className='page'>

        <Home />

      </div>
      <div className='page'>
        <About />


      </div>
      <div className='page'>
        <div className='portfolio-wrapper'>

          <Portfolio/>





        </div>


      </div>



    </div>


  )
}

export default LandingPage