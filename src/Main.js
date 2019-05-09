import React, { Component } from 'react'
import SearchForm from './SearchForm.js';
import Map from './Map';



export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      queryData: '',
      lat: 47.6062095,
      long: -122.3320708
    };
  }

  handleForm = (results) => {
    this.setState({ queryData: results.body.search_query, lat: results.body.latitude, long: results.body.longitude })
  }

  render() {
    return (
      <div>
        <SearchForm handler={this.handleForm} />
        <Map lat={this.state.lat} long={this.state.long} />
      </div>
    )
  }
}
