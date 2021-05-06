import React from 'react'

function ProjectCard (props) {

  return(
  <div className='card'>
    <div className='img-container'>
      <img alt={props.title} src={props.image} />
    </div>
    <div className='content'>
      <h2>{props.title}</h2>
    </div>
  </div>)
}

export default ProjectCard;
