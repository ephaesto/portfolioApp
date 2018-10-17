import React from 'react';
import { NavLink } from 'react-router-dom'

const Linklist = ({navLinks,HeightNavbar}) => (
  <ul className="nav flexCenter nav-tabs nav-item">
    {
      navLinks.map((navLink) => {
        return (
          <li className="nav-item" key={navLink.id}>
            <NavLink exact activeClassName='active' className="nav-link" to={navLink.link} onClick={(e)=>HeightNavbar()}>{navLink.name}</NavLink>
          </li>
      )
      })
    }

  </ul>
);

export default Linklist;
