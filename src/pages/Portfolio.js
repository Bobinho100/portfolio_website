import React from 'react'
import Projects from '../components/Projects'
import projectData from '../data/projectData.json'
import '../styles/Portfolio.css'

const Portfolio = () => {
    const ProjectList = () => projectData.map((project,i ) => (
        <Projects

            key={i}
            id = {project.id}
            title = {project.title}
            technologies = {project.technologies}
            image = {project.image}
            color = {project.bgColor}
            github = {project.github}
            view= {project.view}
            description = {project.description}



        />
    ))



  return (
    <section className='portfolio'>
        <h1  className='project-title'>My Projects</h1>
        <div>

            <h3 className='pageTitle'>{projectData.title}</h3>

        </div>
        <div className='row'>
            <ProjectList />

        </div>

    </section>
  )
}

export default Portfolio