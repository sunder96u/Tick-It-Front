import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Shows from './Components/Shows'
import Nav from './Components/Nav'
import Upcoming from './Components/Upcoming'
import FeaturedVenue from './Components/FeaturedVenue'
import FeaturedBand from './Components/FeaturedBand'
import BandDetails from './Components/BandDetails'
import VenueDetails from './Components/VenueDetails'
import ShowDetails from './Components/ShowDetails'
import Admin from './Components/Admin'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/admin/*" element={<Admin />}/>
        <Route exact path="/shows" element={<Shows />}/>
        <Route exact path="/bands/:id" element={<BandDetails />}/>
        <Route exact path="/venues/:id" element={<VenueDetails />}/>
        <Route exact path="/shows/:id" element={<ShowDetails />}/>
      </Routes>
    </div>
  )
}

export default App
