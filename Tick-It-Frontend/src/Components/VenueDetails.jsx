import Nav from './Nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function VenueDetails() {

    const [venue, setVenue] = useState()
    let id = useParams()

    useEffect(() => {
        const getVenue = async () => {
            const response = await axios.get(`https://tick-it-back-production.up.railway.app/venues/${id.id}`)
            console.log(response)
            setVenue(response.data)
        }
        getVenue()
    }, [])


    return venue ? (
        <div className="container-fluid px-0">
            <Nav />
            <div className="container d-flex flex-column align-items-center justify-content-center my-5">
                <h1>{venue.name}</h1>
                <img src={venue.venue_photo} alt="venue_photo" className="my-5"/>
                <div className="container text-center w-50">
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Address:</h3>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="mb-0">{venue.address}</p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Type:</h3>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="mb-0">{venue.type}</p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Capacity:</h3>                            
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="mb-0">{venue.capacity}</p>    
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Phone:</h3>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="mb-0">{venue.contact}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <h1>Loading...</h1>
    )
}