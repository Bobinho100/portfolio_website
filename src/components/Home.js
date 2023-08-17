import React from 'react'
import '../styles/Home.css'
import classes from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect'
/*import About from './About'*/
import SocialIcons from './SocialIcons'
/*import Wordle from '../images/wordle_image.png'*/
import BubbleAnimation from './BubbleAnimation'

const Home = () => {
  return (
    <>


        <section className='landing' >
        <div className='bubble-animation'>
                    <BubbleAnimation />

                </div>

            <div className='textContainer'>



                <img src= 'https://www.dbmaestro.com/wp-content/uploads/2021/06/18-devops-quotes.png'  alt = '' />
                <h1 className='name'>
                    Bernard Aire
                </h1>
                <div className={classes.description}>
                <Typewriter
                className="description"
                onInit={(typewriter) => {
                typewriter
                    .changeDelay(80)
                    .typeString("I'm a Software Engineering Student")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Code. ")
                    .pauseFor(500)
                    .typeString("Create. ")
                    .pauseFor(500)
                    .typeString("Innovate.")
                    .deleteAll()
                    .typeString("I'm a Student")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("I'm a full Stack Developer")
                    .pauseFor(1500)
                    .deleteAll()
                    .pasteString('I am a software Engineering Student')

                    .start();
                }}
            />



                </div>
            </div>




        </section>

        <SocialIcons />




    </>


  )
}

export default Home