import React, { Component } from 'react'
import axios from "axios";
import '../Beer/Beer.css'

export default class RandomBeer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    getRandomBeer = () =>{
        const {params} = this.props.match;
        axios.get(`http://localhost:5000/random`)
        .then(responseFromApi => {
          const beer = responseFromApi.data
          this.setState(beer);
          console.log(this.state);   
        })
      }

      componentDidMount() {
        this.getRandomBeer();
    }

    render() {
        return (
            <div class="container-beer">
                <div className="width-one">
                    <div className="container-pict-beer">
                        <img src={this.state.image_url} alt={this.state.name} className="one-beer"/>
                    </div>
                    <div className="container-data-column">
                        <div className="left-info">
                            <div className="title-beer">
                                <h2>{this.state.name}</h2>
                            </div>
                            <div>
                                <h3 className="tagline tagline-one">{this.state.tagline}</h3>
                            </div>
                        </div>
                        <div>
                            <div className="attenuation">
                                <h2>{this.state.attenuation_level}</h2>
                            </div>
                            <div className="brewed">
                                {this.state.first_brewed}
                            </div>
                        </div>
                    </div>
                    <div className="description-one">
                        {this.state.description}
                    </div>
                    <div>
                        <h5 className="contributed-one">{this.state.contributed_by}</h5>
                    </div>
                </div>
            </div>
        )
    }
}