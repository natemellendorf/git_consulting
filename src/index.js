import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import Carousel from './Carousel'
import App from './App'
import Blog from './Blog'
import './index.css'

ReactDOM.render(<Carousel />, document.getElementById('banner'))
ReactDOM.render(<Navbar />, document.getElementById('navbar'))
ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<Blog />, document.getElementById('posts'))
