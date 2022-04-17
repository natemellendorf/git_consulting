import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import App from './App'
import Blog from './Blog'
import './index.css'
import Banner from './Banner'

ReactDOM.render(<Banner />, document.getElementById('banner'))
ReactDOM.render(<Navbar />, document.getElementById('navbar'))
ReactDOM.render(<App />, document.getElementById('app'))
// ReactDOM.render(<Blog />, document.getElementById('posts'))
