import React from 'react'
import ProjectCard from './ProjectCard'

const projectinfo = [
  {
    id: 1,
    title: 'babysittr',
    image: 'images/sittrscreenshot.jpg',
    github: 'https://github.com/artemissorrow/babysittr',
    deploy: 'https://artemissorrow.github.io/babysittr/'
  },
  {
    id: 2,
    title: 'Movie Bucket List',
    image: 'images/moviescreenshot.jpg',
    github: 'https://github.com/artemissorrow/group-project-2',
    deploy: 'https://patient-wave-6474.herokuapp.com/'
  },
  {
    id: 3,
    title: 'Employee Directory',
    image: 'images/directoryscreenshot.jpg',
    github: 'https://github.com/artemissorrow/employee-directory',
    deploy: 'https://artemissorrow.github.io/employee-directory/'
  },
  {
    id: 4,
    title: 'Day Planner',
    image: 'images/plannerscreenshot.jpg',
    github: 'https://github.com/artemissorrow/day-planner',
    deploy: 'https://artemissorrow.github.io/day-planner/'
  },
  {
    id: 5,
    title: 'Budget Tracker',
    image: 'images/budgetscreenshot.jpg',
    github: 'https://github.com/artemissorrow/budget-tracker',
    deploy: 'https://ancient-tor-53184.herokuapp.com/'
  },
  {
    id: 6,
    title: 'ReadMe Generator',
    image: 'images/readmescreenshot.jpg',
    github: 'https://github.com/artemissorrow/readme-generator',
    deploy: 'https://www.youtube.com/watch?v=dsPYMw6DipU'
  }
]

function ProjectContainer () {
  return ( 
    <div>
      <h1 className="indent">...projects</h1>
      <div className='row row-cols-3 justify-content-center'>
        {projectinfo.map(each => (
          <ProjectCard
            id={each.id}
            title={each.title}
            image={each.image}
            github={each.github}
            deploy={each.deploy}
          />
        ))}
      </div>
      </div>
  )
}

export default ProjectContainer
