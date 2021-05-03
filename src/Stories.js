import React, { Component } from 'react'
import './App.css'
import Hooks from './Hooks'

class Stories extends Component {

  state = {
    posts: [],
  }

  render() {
    return (
      <div id="stories">
        <Hooks />
      </div>
    );
  }
}

export default Stories