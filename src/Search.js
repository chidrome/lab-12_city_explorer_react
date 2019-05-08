import React, { Component } from 'react'

export default class Search extends Component {
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
