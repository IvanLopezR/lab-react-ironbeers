import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="menu">
          <div className="container">
            <img src="/img/beers.png"/>
            <div className="sub-container">
              <Link className="link" to={'./Beers'}><h2>All Beers</h2></Link>
              <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla maxime rerum voluptatem, veniam ipsum beatae qui reiciendis distinctio ipsa! Voluptatibus expedita omnis ut aliquid sed eveniet voluptatum, beatae voluptate excepturi!</p>
            </div>
          </div>
        
          <div className="container">
            <img src="/img/new-beer.png"/>
            <div className="sub-container">
              <Link className="link" to={'/new-beers'}><h2>New Beers</h2></Link>
              <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias in illum beatae doloribus, porro distinctio hic quas culpa voluptate voluptates deserunt sit labore totam dolor nisi officiis incidunt. Nobis, deleniti!</p>
            </div>
          </div>
        
          <div className="container">
            <img src="/img/random-beer.png"/>
            <div className="sub-container">
              <Link className="link" to={'/random-beers'}> <h2>Random Beers</h2> </Link>
              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem nobis ipsa, perferendis consequatur iste placeat ullam voluptas accusantium inventore, perspiciatis reprehenderit saepe magni sapiente esse ducimus rem harum optio!</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}