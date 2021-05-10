import React, { Component } from 'react'
import './App.css'
import Posts from './Posts'

class Blog extends Component {

  state = {
    posts: [],
  }

  render() {
    return (
      <div id="posts">
        <Posts />
      </div>
    );
  }
}

export default Blog