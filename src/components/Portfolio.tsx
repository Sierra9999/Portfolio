import React from 'react'
import {CardProps,Card} from './Card'

const projectList : Array<CardProps> = [
  {
    title : 'Activos Gym',
    imgPath : '',
    description : 'Elevate your fitness journey with our personalized workouts and supportive community.',
    liveDemoUrl : 'https://activos-gym.vercel.app/',
    repoUrl : 'https://github.com/Sierra9999/activos-gym',
  }
]
const Portfolio = () => {
  return (<>
    <div id="portfolio" className='portfolio'>
        <h1>PORTFOLIO</h1>
    </div>
    <section className='projects'>
      {projectList.map((project, index) => <Card key={index} {...project} />)}
    </section>
    </>
  )
}

export default Portfolio