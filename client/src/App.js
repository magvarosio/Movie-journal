import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



// components

import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import MovieSingle from './components/pages/movies/MovieSingle'
import SearchMovie from './components/common/SearchMovie'


const App = () => {
  return (
    <div className='site-wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:movieId" element={<MovieSingle />} />
          <Route path="/search" element={<SearchMovie />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
