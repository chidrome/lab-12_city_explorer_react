import React, { Component } from 'react'

export default class Map extends Component {
  render() {
    return (
      <div>
        <h6>Maps Placeholder Here</h6>
        <img src={"https://maps.googleapis.com/maps/api/staticmap?center=" + this.props.lat + "%2c%20" + this.props.long + "&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyA4qkc_7T4BMl0e1cprV506Uap8J8lPtxU"} alt=""/>
      </div>
    )
  }
}
