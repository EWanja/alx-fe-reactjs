import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Blog from './components/Blog'
import NotFound from './components/NotFound'
import './App.css'

function App() {
  

  return (
    <Router>

      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/profile" style={{ marginRight: '10px' }}>Profile</Link>
        <Link to="/blog/1" style={{ marginRight: '10px' }}>Blog #1</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  )
}

export default App
