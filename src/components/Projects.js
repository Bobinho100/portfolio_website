import React from 'react'
import '../styles/Projects.css'
import {useInView} from "react-intersection-observer"
import { useState } from 'react'
import Modal from "react-modal"
import {motion} from "framer-motion"
import Wordle from '../images/wordle_image.png'
//import closeModal from '../images/close.svg'

const Projects = ({technologies, title, image, color, id, github, view, description}) => {
  const [show, setShow] = useState(false)

  const showHandler = () => {
    setShow(!show)
  }

  return (
    <>
        <div className='container'>
          <h3>{title}</h3>
          <div className='image'>
            <img src={image} alt='' />

          </div>

          <p>{description}</p>
          <p>View</p>





        </div>


    </>
  )










}

export default Projects