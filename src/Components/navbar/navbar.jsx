import React from 'react'
import './navbar.scss'
import './navQuery.scss'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="wrapper">
        <div className="nav_left">
          <div className="nav_name">
            <span>Olaroungbe <br /> Jamiu</span>
          </div>
          <div className="nav_folio">
            <span>Frontend Developer <br />Folio / 2021 - 2022</span>
          </div>
        </div>
        <div className="nav_right">
          <div className="nav_availability">
            <span>Available for freelance <br /> Work from dec 2022</span>
          </div>
          <div className="nav_button">
            <button>Contact me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
