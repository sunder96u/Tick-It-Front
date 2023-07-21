import Nav from './Nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Venues() {

    const navigate = useNavigate()
    const [venues, setVenues] = useState([])

    useEffect(() => {
        const getVenues = async () => {
            const response = await axios.get(`https://tick-it-back-production.up.railway.app/venues/`)
            setVenues(response.data)
        }
        getVenues()
    }, [])

    const venueDetails = (key) => {
        navigate(`/venues/${key}`)
    }

    return(
        <div>
            <Nav />
            <div className="container-fluid my-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="fs-1 show-title">Venues</h1>
            </div>
            <div className="container text-center w-75">
                {venues.map((venue, index) => 
                <div className="card d-flex justify-content-center align-items-center p-5 show-card mb-4" key={index}>
                    <img src={venue.venue_photo} className="card-img-top mb-3" alt="Show Poster"/>
                    <div className="card-body">
                        <h5 className="card-title mb-4">{venue.name}</h5>
                        <p className="card-text mb-4">Type: {venue.type}</p>
                        <button className="btn btn-primary" onClick={() => venueDetails(venue.venue_id)}>Venue Details</button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}