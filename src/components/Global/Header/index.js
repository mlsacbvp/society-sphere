import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to='/'>
        <img src="/society_logo.png" alt="logo" />
        <span className="logo-txt">
          SOCIETY SPHERE
        </span><br></br>
        <div className='logo-txt-subtitle'>
          <p>An MLSAC Initiative</p>
        </div>
      </Link>
    </nav>
  )
}

export default Header