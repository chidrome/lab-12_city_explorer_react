import React, { Component } from 'react';
// import superagent from 'superagent';
// import SERVER_URL from './constant/server.js';

export default class SearchResults extends Component {
  constructor(props){
    super(props)
    this.state = {
      DarkSky: [],
      Movie: [],
      EventBrite: [],
      Yelp: []
    }
  }

  

  render() {
    return (
      <div>
        {/* <p>{this.state.DarkSky}</p> */}
      </div>
    )
  }
}
