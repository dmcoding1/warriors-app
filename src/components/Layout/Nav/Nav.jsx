import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/home">Strona Główna</Link>
      </li>
      <li>
        <Link to="/add-warrior">Dodaj Wojownika</Link>
      </li>
      <li>
        <Link to="/my-warriors">Moja Lista</Link>
      </li>
    </ul>
  );
};

export default Nav;
