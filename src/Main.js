import React, { Component } from 'react'
import Search from './Search.js';
import Map from './Map.js';
import Result from './Result.js';
import superagent from 'superagent';

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      long: 0,
      lat: 0
    }
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
