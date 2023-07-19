import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FeaturedVenue() {

    const navigate = useNavigate()

    const[featuredVenue, setFeaturedVenue] = useState({})

    useEffect(() => {
        const getFeaturedVenue = async () => {
            const response = await axios.get()
            setFeaturedVenue(response.data)
        }
        getFeaturedVenue()
    }, [])

    const venueDetails = (id) => {
        navigate('/venuedetails')
    }

    return(
        <div className='container-fluid w-50'>
            <div className="text-center">
                <h1>Featured Venue</h1>
            </div>
            <div className="card d-flex align-items-center justify-content-center">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary" onClick={() => venueDetails()}>Show Details</a>
                </div>
            </div>
        </div>
    )
}