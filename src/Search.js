import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      queryData: ''
    }
  }

  searchHandler = () => {
    
  }

  render() {
    return (
      <div>
        <form action="post">
          <input type="text" required/>
          <input type="submit" value="search" />
        </form>
      </div>
    )
  }
}
