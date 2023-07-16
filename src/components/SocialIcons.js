import React from 'react'
import '../styles/SocialIcons.css'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'

const SocialIcons = () => {
  return (
    <>

        <div className='socialIcons'>
            <a className='icon'  aria-hidden ='true'   href='https://github.com/Bobinho100'>

            </a>

            <a className='icon'  aria-hidden ='true'   href='https://linkedin.com/in/bernard-aire-125951233'>
                <AiFillGithub />
            </a>

            <a className=''  aria-hidden ='true'   href='https://github.com/Bobinho100'>
                <FaLinkedin />
            </a>

        </div>




    </>
  )
}

export default SocialIcons