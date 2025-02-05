import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Blog from './components/Blog'
import AddBlog from './components/AddBlog'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './page/Home'
import BlogDetails from './components/Blog\'Details'
import BlogFavourite from './page/BlogFavourite'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddBlog/>}/>
        <Route path='/blog/:id' element={<BlogDetails/>}/>
        <Route path='/favourites' element={<BlogFavourite/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
