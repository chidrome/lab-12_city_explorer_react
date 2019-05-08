import React, { Component } from 'react'
import superagent from 'superagent';
import SERVER_URL from './constant/server';
import Search from './Search.js';
import Map from './Map.js';
import Result from './Result.js';


export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      long: 0,
      lat: 0,
    }
  }

  componentDidMount = () => {
    this.getLocation();
  }

  getLocation = () => {
    superagent.get(`${SERVER_URL}/location`)
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(`There was an error with your request to the backend ${error}`)
    });
  }
  


  render() {
    return (
      <div>
        <Search />
        <Map long={this.state.long} lat={this.state.lat} />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </div>
    )
  }
}
