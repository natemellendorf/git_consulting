import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import Carousel from './Carousel'
import App from './App'
import Stories from './Stories'
import './index.css'

ReactDOM.render(<Carousel />, document.getElementById('carousel'))
ReactDOM.render(<Navbar />, document.getElementById('navbar'))
ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Stories />, document.getElementById('posts'))
