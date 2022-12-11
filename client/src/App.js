import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



// components

import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'



const App = () => {
  return (
    <div className='site-wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
