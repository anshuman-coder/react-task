import React from 'react';
import logo from '../assets/cropped-Synergylabs-logo-with-name1-279x77-1.webp';

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_image">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="header_content">
        <h1 className="heading">React Task</h1>
      </div>
    </div>
  )
}


export default Header
