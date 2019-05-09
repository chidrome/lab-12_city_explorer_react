import React, { Component } from 'react'

export default class DarkSky extends Component {


  render() {

    return (
      <div>
        <h4>{this.props.forecast.time}</h4>
        <p>{this.props.forecast.forecast}</p>
      </div>
    )
  }
}
