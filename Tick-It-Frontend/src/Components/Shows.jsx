import Nav from './Nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Shows() {

    const navigate = useNavigate()
    const [shows, setShows] = useState([])

    useEffect(() => {
        const getShows = async () => {
            const response = await axios.get(`https://tick-it-back-production.up.railway.app/shows/`)
            setShows(response.data)
        }
        getShows()
    }, [])

    const showDetails = (key) => {
        navigate(`${key}`)
    }

    return(
        <div>
            <Nav />
            <div className="container-fluid my-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="fs-1">Shows</h1>
            </div>
            <div className="container text-center w-75">
                {shows.map((show, index) => 
                <div className="card d-flex justify-content-center align-items-center p-5" key={index}>
                    <img src={show.poster} className="card-img-top mb-3" alt="Show Poster"/>
                    <div className="card-body">
                        <h5 className="card-title mb-4">{show.title}</h5>
                        <p className="card-text mb-4">Time: {show.time}</p>
                        <p className="card-text mb-4">Price: ${show.starting_price}</p>
                        <button className="btn btn-primary" onClick={() => showDetails(show.show_id)}>Show Details</button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}