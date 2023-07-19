import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Upcoming from './Components/Upcoming'
import FeaturedVenue from './Components/FeaturedVenue'
import FeaturedBand from './Components/FeaturedBand'
import BandDetails from './Components/BandDetails'
import VenueDetails from './Components/VenueDetails'
import ShowDetails from './Components/ShowDetails'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/banddetails" element={<BandDetails />}/>
        <Route exact path="/venuedetails" element={<VenueDetails />}/>
        <Route exact path="/showdetails" element={<ShowDetails />}/>
      </Routes>
    </div>
  )
}

export default App
