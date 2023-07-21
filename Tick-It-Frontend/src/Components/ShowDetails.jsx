import Nav from './Nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

export default function ShowDetails() {

    const [show, setShow] = useState()
    let key = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getShow = async () => {
            const response = await axios.get(`https://tick-it-back-production.up.railway.app/shows/${key.id}`)
            setShow(response.data)
        }
        getShow()
    }, [])

    return show ? (
        <div>
            <Nav />
            <div className="container d-flex flex-column align-items-center justify-content-center my-5 show-details">
                <h1>{show.title}</h1>
                <img src={show.poster} alt="poster" className="my-5"/>
                <div className="container text-center w-50">
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Venue:</h3>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <Link to='/venue/' className="link-opacity-50-hover">{show.venue_id}</Link>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Band:</h3>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <Link to='/banddetails' className="link-opacity-50-hover">{show.band_id}</Link>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Time:</h3>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="mb-0">{show.time}</p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Starting Price:</h3>                            
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="mb-0">${show.starting_price}</p>    
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    ) : <div className="text-center">
            <h1>Wow, This is taking a while!</h1>
        </div>
}