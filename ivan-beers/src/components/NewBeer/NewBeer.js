import React, { Component } from 'react'
import './NewBeer.css';
import axios from 'axios';

export default class NewBeer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            tagline: "",
            description: "",
            brewed: "",
            attenuation: "",
            contributed_by: "",
            image_url: ""
        };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const tagline = this.state.tagline;
        const description = this.state.description;
        const brewed = this.state.brewed;
        const attenuation = this.state.attenuation;
        const contributed_by = this.state.contributed_by;
        const image_url = this.state.image_url;

        axios.post("http://localhost:5000/new", { name, tagline, description, brewed, attenuation, image_url, contributed_by})
        .then( () => {
            // this.props.getData();
            this.setState({name: "", tagline: "", description: "", brewed: "", attenuation: "", image_url: "", contributed_by: ""});
        })
        .catch( error => console.log(error) )
      }
    
      handleChange = (event) => {  
          const {name, value} = event.target;
          this.setState({[name]: value});
      }

    render() {
        return (
            <div className="container-beer form-new">
                <form onSubmit={this.handleFormSubmit}>
                    <div>
                        <label>Name</label>
                        <input className="input-form" name="name" value={this.state.name} onChange={e=>this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label>Tagline</label>
                        <input className="input-form" name="tagline" value={this.state.tagline} onChange={e=>this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label>Description</label>
                        <input className="input-form" name="description" value={this.state.description} onChange={e=>this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label>First Brewed</label>
                        <input className="input-form" name="brewed" value={this.state.brewed} onChange={e=>this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label>Attenuation Level</label>
                        <input className="input-form" name="attenuation" value={this.state.attenuation} onChange={e=>this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label>Contributed By</label>
                        <input className="input-form" name="contributed_by" value={this.state.contributed_by} onChange={e=>this.handleChange(e)}></input>
                    </div>
                    <div>
                        <label>Image URL</label>
                        <input className="input-form" name="image_url" value={this.state.image_url} onChange={e=>this.handleChange(e)}></input>
                    </div>
                    <div className="btn-end">
                        <button className="btn-form">ADD NEW</button>
                    </div>
                </form> 
            </div>
        )
    }
}