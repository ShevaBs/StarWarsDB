import React from 'react';
import './header.css';

const Header = () => {

  return(
    <header className='header d-flex'>
      <h3>
        <a href='/'>StarWars DB</a>
      </h3>
      <ul className='d-flex'>
        <li>
          <a href='#'>People</a>
        </li>
        <li>
          <a href='#'>Planet</a>
        </li>
        <li>
          <a href='#'>Starships</a>
        </li>
      </ul>
    </header>
  )
};

export default Header;
