import React, { Component } from 'react'

export default class Yelp extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.restaurant.name}</h4>
        <img src={this.props.restaurant.image_url} alt='' />
        <link rel="stylesheet" href={this.props.restaurant.url} value="More Info" />
        <p>Rating: {this.props.restaurant.rating}</p>
        <p>Price: {this.props.restaurant.price}</p>
      </div>
    )
  }
}
