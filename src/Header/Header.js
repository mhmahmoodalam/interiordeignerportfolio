import React from 'react'

const Header = () => {

    return (
        <header className="navigation_container">
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