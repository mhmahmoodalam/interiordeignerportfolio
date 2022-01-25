import React from 'react'
import logo from '../assets/FerhaLogo_no_wm.png';

const Header = () => {

    return (
        <header className="navigation_container">
            <img src={logo} alt ='logo' className='nav_logo'/>
            <div className='navigation_item navigation_item_selected'>
              Home
            </div>
            <div className='navigation_item'>
              About Me
            </div>
            <div className='navigation_item'>
              Projects
            </div>
            <div className='navigation_item'>
              Contact Now
            </div>
      </header>
    )
}

export default Header