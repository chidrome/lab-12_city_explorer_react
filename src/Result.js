import React, { Component } from 'react'
import DarkSky from './componenents/DarkSky';
import MovieDB from './componenents/MovieDB';
import Yelp from './componenents/Yelp';

export default class Result extends Component {
  render() {
    const allWeather = this.props.darkSky.map((forecast, i) => {
      return (
          <DarkSky
          key={i}
          forecast={forecast}
          />
      )
    })
    const allMovies = this.props.movies.map((movie, i) => {
      return (
        <MovieDB
        key={i}
        movie={movie}
        />
      )
    })

    const yelp = this.props.yelp.map((restaurant, i) => {
      return (
        <Yelp
        key={i}
        restaurant={restaurant}
        />
      )
    })
  
    return (
      <div>
        {allWeather}
        {allMovies}
        {yelp}
      </div>
    )
  }
}
