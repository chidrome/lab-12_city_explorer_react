import React, { Component } from 'react'
import SearchForm from './SearchForm.js';
import Map from './Map';
import Result from './Result';



export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      queryData: '',
      lat: 47.6062095,
      long: -122.3320708,
      DarkSky: [],
      Movies: [],
      EventBrite: [],
      Yelp: []
    };
  }

  handleFormLocationRequest = (results) => {
    console.log(results);
    this.setState({ queryData: results.body.search_query, lat: results.body.latitude, long: results.body.longitude })
  }

  handleFormWeatherRequest = (results) => {
    console.log(results);
    this.setState({ DarkSky: results })
  }

  handleFormMovieRequest = (results) => {
    console.log(results);
    this.setState({ Movies: results })
  }

  handleFormEventsRequest = (results) => {
    console.log(results);
    this.setState({ EventBrite: results })
  }

  handleFormYelpRequest = (results) => {
    console.log(results);
    this.setState({ Yelp: results })
  }


  render() {
    return (
      <div>
        <SearchForm handler={this.handleFormLocationRequest} weatherHandler={this.handleFormWeatherRequest} moviesHandler={this.handleFormMovieRequest} eventsHandler={this.handleFormEventsRequest} yelpHandler={this.handleFormYelpRequest} />
        <Map lat={this.state.lat} long={this.state.long} />
        <Result darkSky={this.state.DarkSky} movies={this.state.Movies} yelp={this.state.Yelp} />
      </div>
    )
  }
}
