import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Upcoming from './Components/Upcoming'
import FeaturedVenue from './Components/FeaturedVenue'
import FeaturedBand from './Components/FeaturedBand'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Nav />
      <Upcoming />
      <div className="app-featured">
        <FeaturedVenue />
        <FeaturedBand />
      </div>
    </div>
  )
}

export default App
