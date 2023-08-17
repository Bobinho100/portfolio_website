import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import {FaBars}  from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'


const Navbar = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const togglehamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

  return (
    <>
        <div className='header'>
            <NavLink to= '/'>
                <h3>Bernard Website</h3>


            </NavLink>

            <button className='hamburger'    onClick={ togglehamburger}  >

                {hamburgerOpen ? <GrClose className='closeMenu' />:

                    <FaBars  className='openMenu'/>

                    }

            </button>

            <nav className={`navigation ${hamburgerOpen ? 'open': 'closed'}`}>



                <NavLink to = '/about'   onClick={()=> setHamburgerOpen(!hamburgerOpen)}  >About</NavLink>
                <NavLink to= '/projects'  onClick={()=> setHamburgerOpen(!hamburgerOpen)}    >Projects</NavLink>




            </nav>


        </div>


    </>
  )
}

export default Navbar