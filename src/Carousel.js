import React, { Component } from 'react'
import './App.css'
import Banner from './Banner'

class Carousel extends Component {

  state = {
    posts: [],
  }

  render() {
    return (
        <Banner />
    );
  }
}

export default Carousel