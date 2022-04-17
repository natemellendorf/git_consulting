import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Offcanvas from './Offcanvas'
import Blog from './Blog'

class App extends Component {
  render() {
    return (
        <Router>
          <Routes>
            {/* <Route exact path="/blog" element={<Blog />} /> */}
          </Routes>
          <Blog />
          <Offcanvas />
        </Router>
    );
  }
}

export default App