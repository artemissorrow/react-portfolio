import React from 'react'
import headshot from '../assets/headshotpro.jpg'
import resume from '../assets/ArtemisMorrowResume.pdf'

function About () {
  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-2 justify-content-start'>
          <img
            src={headshot}
            alt='headshot'
            className='headshot rounded-circle'
          />
        </div>
        <div className='col-10'>
          <h1>...about</h1>
          <p>
            Artemis Morrow is a newly-minted web developer with a strong
            aesthetic sense and creative background. She received a BA in
            Theatre from SUNY College at Plattsburgh with a particular focus on
            costume design and construction in May of 2006.
          </p>
          <p>
            After almost two decades of experimenting with basic HTML, she
            decided to channel her enjoyment of problem-solving and making
            things into learning to code in 2020. She looks forward to bringing
            her wide-ranging and varied work experience into the exciting,
            growing world of programming.
          </p>
          <div className='text-center download-link'>
            <a href={resume} target="_blank">
              <h2 className='lightup'>download resume</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
