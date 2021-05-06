import React from 'react'

function Footer () {
  return (
    <div className='text-center footer' id="contact">
      <div className='container p-4'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
            <h5><a href="mailto:c.artemis.morrow@gmail.com">c.artemis.morrow@gmail.com</a></h5>
          </div>
          <div class='col-lg-3 col-md-6 mb-4 mb-md-0'>
            <h5>267.277.3166</h5>
          </div>

          <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
            <h5><a href="https://github.com/artemissorrow" target="_blank"><i className="fab fa-github-alt"></i> GitHub</a></h5>
          </div>

          <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
            <h5><a href="https://www.linkedin.com/in/artemis-m-a13628aa/" target="_blank"><i class="fab fa-linkedin-in"></i> LinkedIn</a></h5>
          </div>
        </div>
        <div className='text-center p-3'>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
