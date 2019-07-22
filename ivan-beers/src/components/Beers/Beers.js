import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Beers.css';

class Beers extends Component {
  constructor(){
      super();
      this.state = { listOfBeers: [] };
  }

  getAllBeers = () =>{
    axios.get(`http://localhost:5000/all`)
    .then(responseFromApi => {
      this.setState({
        listOfBeers: responseFromApi.data
      })
    })
  }

  searchOneBeer(e) {
    const filter = e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1);
    this.setState({
      filterQuery: filter
    });
    axios.get(`http://localhost:5000/search?q=${filter}`).then(
      responseFromApi => {
        this.setState({
          listOfBeers: responseFromApi.data
        });
      }
    );
  }

  componentDidMount() {
    this.getAllBeers();
  }

  
  render(){
    return(
        <div>
          <input className="search-beer" type="search" name="searchBox" placeholder="Search Beer" onChange={e => this.searchOneBeer(e)} value={this.state.filterQuery}/>
          <div class="containerB">
            {this.state.listOfBeers.map( beer => {
              return (
                <div class="container-in">
                <div className="container-pict">
                  <img src={beer.image_url} className="beer-pict"></img>
                </div>
                <div className="container-text key={beer._id}">
                  <h2 className="name-beers"><Link to={`/detail/${beer._id}`} className="link">{beer.name}</Link></h2>
                  <h3 className="tagline">{beer.tagline}</h3>
                  <p><span className="contributed">Created by:</span> {beer.contributed_by}</p>
                </div>
              </div>
            )})
          }
        </div>
          </div>
    )
  }
}

export default Beers;