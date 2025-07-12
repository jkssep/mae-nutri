import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Ebook from './pages/Ebook'
import Newsletter from './pages/Newsletter'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

