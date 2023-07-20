import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function FeaturedVenue() {

    const navigate = useNavigate()

    const[featuredVenue, setFeaturedVenue] = useState({})

    useEffect(() => {
        const getFeaturedVenue = async () => {
            const response = await axios.get(`https://tick-it-back-production.up.railway.app/venues/3`)
            setFeaturedVenue(response.data)
        }
        getFeaturedVenue()
    }, [])

    const venueDetails = (id) => {
        navigate(`/venues/${id}`)
    }

    return(
        <div className='container-fluid w-50'>
            <div className="text-center">
                <h1>Featured Venue</h1>
            </div>
            <div className="card d-flex align-items-center justify-content-center">
                <img src={featuredVenue.venue_photo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{featuredVenue.name}</h5>
                    <p className="card-text">{featuredVenue.address}</p>
                    <button className="btn btn-primary" onClick={() => venueDetails(featuredVenue.venue_id)}>Venue Details</button>
                </div>
            </div>
        </div>
    )
}