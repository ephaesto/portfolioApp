import React from 'react';
import { Link } from 'react-router-dom';

const Linklist = ({navLinks}) => (
  <ul className="nav nav-tabs bg-dark">
    {
      navLinks.map((navLink) => {
        return (
          <li className="nav-item" key={navLink.id}>
            <Link className="nav-link" to={navLink.link}>{navLink.name}</Link>
          </li>
      )
      })
    }

  </ul>
);

export default Linklist;
