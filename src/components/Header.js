import React from 'react'
import Link  from 'react-router-dom'
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
              <Link className='nav-link' to='/about'>
              <h2 className="lightup">About</h2>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/projects'>
              <h2 className="lightup">Projects</h2>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='#contact'>
              <h2 className="lightup">Contact</h2>
              </Link>
            </li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Header
