import React, { Component } from 'react'

export default class MovieDB extends Component {
  render() {
    const posterUrl = `https://image.tmdb.org/t/p/w200${this.props.movie.image_url}`
    return (
      <div>
        <h4>{this.props.movie.title}</h4>
        <img src={posterUrl} alt={this.props.movie.title} />
        <p>{this.props.movie.overview}</p>
      </div>
    )
  }
}
