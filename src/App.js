import React, { Component } from 'react'
import './App.css'
import Offcanvas from './Offcanvas'

class App extends Component {

  state = {
    posts: [],
  }

  render() {
    return (
      <div>
        <Offcanvas />
      </div>
    );
  }
}

export default App