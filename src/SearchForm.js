import React, { Component } from 'react'
import superagent from 'superagent';
import SERVER_URL from './constant/server.js';
import { Button, Form, Segment } from 'semantic-ui-react';
import SearchResults from './SearchResults';


export default class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      queryData: '',
      //defaulting this to Seattle
      lat: 47.6062095,
      long: -122.3320708,
      DarkSky: [],
      Movies: [],
      EventBrite: [],
      Yelp: []
    };
  }

  handleInputChange = (e) => { this.setState({ queryData: e.target.value }); }

  searchSubmitHandler = (e) => {
    e.preventDefault();
    superagent.get(`${SERVER_URL}/location`)
    .query({queryData: this.state.queryData})
    .then(result => {
      this.setState({
        lat: result.body.latitude,
        long: result.body.longitude
      })
      this.props.handler(result);
    })
    .catch(error => {
      console.log(`There was an error with your request to the backend ${error}`)
    });

    this.getWeather();
    this.getMovies();
    
  }

  getWeather = async () => {
    await superagent.get(`${SERVER_URL}/weather`)
    .query({ queryData: this.state.queryData, lat: this.state.lat, long: this.state.long })
    .then(result => {
      this.setState({
        DarkSky: result.body
      })
    })
    .catch(error => {
      console.log(`There was an error with your request to the backend ${error}`)
    });
  }

  getMovies = async () => {
    
    await superagent.get(`${SERVER_URL}/movies`)
    .query({ queryData: this.state.queryData, lat: this.state.lat, long: this.state.long })
    .then(result => {
      console.log('hi');
      console.log(result)
      this.setState({
        Movies: result.body
      })
      console.log(result);
      console.log(this.state.Movies)
    })
    .catch(error => {
      console.log(`There was an error with your request to the backend ${error}`)
    });
  }


  render() {
    return (
      <div>
        <Form onSubmit={this.searchSubmitHandler}>
          <Segment>
            <Form.Input placeholder='Enter City' onChange={this.handleInputChange}/>
            <Button>Search</Button>
          </Segment>
        </Form>
        <SearchResults queryData={this.state.queryData} lat={this.state.lat} long={this.state.long} />
      </div>
    )
  }
}
