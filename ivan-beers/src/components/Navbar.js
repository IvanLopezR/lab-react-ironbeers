import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Link className="link" to={'/'}>
          <div className="links">
              <img className="home-logo" src="/img/home.png" /> 
          </div>
        </Link>
    </React.Fragment>
    )
  }
}