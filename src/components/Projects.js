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
  const [currentProject, setCurrentProject] = useState(null)
  const [inViewRef, inView] = useInView({ triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' },
  };


  const showHandler = (id) => {
    setShow(!show)
    /*setCurrentProject(id)*/
  }
  const hideHandler = () => {

    setShow(false);

    setCurrentProject(null)
  }

  return (

    <>


      {!show ? (
                  <div className= 'container'
                     onMouseEnter={showHandler}
                      onMouseLeave ={hideHandler}
                       ref= {inViewRef}

                       >


                  <h3>{title}</h3>
                  <div className='image'>
                    <img src={image} alt='' />

                  </div>

                  <p>{}</p>
                  <p>View More</p>

            </div>



      ): (

        <div className='container1'
        onMouseEnter={showHandler}
         onMouseLeave={hideHandler}

         >
            <h3>{title}</h3>



            <div className='para'>
              <p>{description}</p>

            </div>

            <span>{`Made with : ${technologies}`}</span>
            <span className='span'>

                <a href={github} > github</a>


                <a href={view}>View</a>

            </span>


        </div>



      )

      }











    </>
  )










}

export default Projects