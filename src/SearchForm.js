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
      lat: 0,
      long: 0,
      DarkSky: [],
      Movies: [],
      EventBrite: [],
      Yelp: []
    };
  }

  handleInputChange = (e) => { this.setState({ queryData: e.target.value }); }

  searchSubmitHandler = async (e) => {
    e.preventDefault();
    await superagent.get(`${SERVER_URL}/location`)
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

    this.apiCalls();
    
  }

  apiCalls = async () => {
    await this.getWeather();
    await this.getMovies();
    // await this.getEvents();
    await this.getYelp();
  }

  getWeather = async () => {
    await superagent.get(`${SERVER_URL}/weather`)
    .query({ queryData: this.state.queryData, lat: this.state.lat, long: this.state.long })
    .then(result => {
      this.setState({
        DarkSky: result.body
      })
      this.props.weatherHandler(result.body);
    })
    .catch(error => {
      console.log(`There was an error with your request to the backend ${error}`)
    });
  }

  getMovies = async () => {
    await superagent.get(`${SERVER_URL}/movies`)
    .then(result => {
      this.setState({
        Movies: result.body
      })
      this.props.moviesHandler(result.body);
    })
    .catch(error => {
      console.log(`There was an error with your request to the backend ${error}`)
    });
  }

  getEvents = async () => {
    await superagent.get(`${SERVER_URL}/events`)
    .query({ queryData: this.state.queryData, lat: this.state.lat, long: this.state.long })
    .then(result => {
      console.log(result);
      this.setState({
        EventsBrite: result.body
      })
      this.props.eventsHandler(result.body);
    })
    .catch(error => {
      console.log(`There was an error with your request to the backend ${error}`)
    });
  }

  getYelp = async () => {
    await superagent.get(`${SERVER_URL}/yelp`)
    .query({ queryData: this.state.queryData })
    .then(result => {
      this.setState({
        Yelp: result.body
      })
      this.props.yelpHandler(result.body);
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
