import React from 'react'
import background from "../assets/adrien-olichon-unsplash.jpg"

function Header () {
  return (
    <div className='jumbotron jumbotron-fluid custom-jumbotron py-5' style={{ backgroundImage: `url(${background})` }}>
      <div className='container'>
        <h1 className="lightup">Artemis Morrow</h1>
        <hr className="my-1" />
        <p>
          <ul className='nav justify-content-end'>
            <li className='nav-item'>
              <a className='nav-link' href='/about'>
              <h2 className="lightup">About</h2>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/projects'>
              <h2 className="lightup">Projects</h2>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
              <h2 className="lightup">Contact</h2>
              </a>
            </li>
            {/* <li className='nav-item'>
              <a className='nav-link' href='#'>
              <h2>Resume</h2>
              </a>
            </li> */}
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Header
