import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css'
import Hooks from './Hooks'
import Banner from './Banner'

class App extends Component {

  state = {
    posts: [],
  }

  render() {

    return (
      <div>
        <Banner />
        <Hooks />
      </div>
    );
  }
}

export default App