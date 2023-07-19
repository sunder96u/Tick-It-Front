import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Upcoming from './Components/Upcoming'
import FeaturedVenue from './Components/FeaturedVenue'
import FeaturedBand from './Components/FeaturedBand'

function App() {

  return (
    <div className="app">
      <Nav />
      <Upcoming />
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6">
            <FeaturedVenue />
          </div>
          <div className="col-6">
            <FeaturedBand />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
