import React from 'react';
import './header.css';
import {Link} from "react-router-dom";

const Header = () => {

  return(
    <header className='header d-flex'>
      <h3>
        <Link to='/'>StarWars DB</Link>
      </h3>
      <ul className='d-flex'>
        <li>
          <Link to='/people/'>People</Link>
        </li>
        <li>
          <Link to='/planets/'>Planet</Link>
        </li>
        <li>
          <Link to='/starships/'>Starships</Link>
        </li>
        <li>
          <Link to='/login/'>Login</Link>
        </li>
        <li>
          <Link to='/secrets/'>Secrets</Link>
        </li>
      </ul>
    </header>
  )
};

export default Header;

