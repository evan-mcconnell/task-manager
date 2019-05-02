import React from 'react'; 
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <ul>
        <li>Here is a list</li>
        <li>It is very Listy</li>
        <Link to="/" >A Page </Link> ||
        <Link to="/" >B Page </Link>
      </ul>
    </div>
  )
}

export default Header;