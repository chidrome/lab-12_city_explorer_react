import React, { Component } from 'react'

export default class Map extends Component {
  render() {
    return (
      <div>
        <img src={"https://maps.googleapis.com/maps/api/staticmap?center=" + this.props.lat + "%2c%20" + this.props.long + `&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`} alt=""/>
      </div>
    )
  }
}
