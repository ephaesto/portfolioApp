import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>
        <ul className="nav nav-tabs bg-dark">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Another link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </header>
    );
  }

}

export default Header;
