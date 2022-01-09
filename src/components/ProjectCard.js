import React from 'react'

function ProjectCard (props) {

  return(
  <div className='custom-card col mt-4'>
    <div className='img-container'>
      <img alt={props.title} src={props.image} />
    </div>
    <div className='content'>
      <h2>{props.title}</h2>
      <p>{props.blurb}</p>
      <p><a href={props.deploy}>link</a> | <a href={props.github}>GitHub</a></p>
    </div>
  </div>)
}

export default ProjectCard;
