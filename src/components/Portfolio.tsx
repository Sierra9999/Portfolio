import React from 'react'
import {CardProps,Card} from './Card'

const projectList : Array<CardProps> = [
  {
    title : 'Activos Gym',
    imgPath : '/Projects/gym.png',
    description : 'Elevate your fitness journey with our personalized workouts and supportive community.',
    liveDemoUrl : 'https://activos-gym.vercel.app/',
    repoUrl : 'https://github.com/Sierra9999/activos-gym',
  },
  {
    title : 'SynergyWire',
    imgPath : '/Projects/blog.png',
    description : 'A blog on software development with a focus on ecommerce solutions.',
    liveDemoUrl : 'https://www.synergywire.dev/',
    repoUrl : 'https://github.com/SynergyWire/SynergyWire-Blog',
  }
]
const Portfolio = () => {
  return (<>
    <div id="portfolio" className='portfolio'>
        <h1>PORTFOLIO & <br />
        LIVE WORKS</h1>
    </div>
    <section className='projects'>
      {projectList.map((project, index) => <Card key={index} {...project} />)}
    </section>
    </>
  )
}

export default Portfolio