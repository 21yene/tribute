import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Photos from './pages/Photos'
import Donate from './pages/Donate'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element= {<Home/>}/>
      <Route path='photos' element= {<Photos/>}/>
      <Route path='contact' element= {<Contact/>}/>
      <Route path='about' element= {<About/>}/>
      <Route path='donate' element={<Donate/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App