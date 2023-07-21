import Nav from './Nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Bands() {

    const navigate = useNavigate()
    const [bands, setBands] = useState([])

    useEffect(() => {
        const getBands = async () => {
            const response = await axios.get(`https://tick-it-back-production.up.railway.app/bands/`)
            setBands(response.data)
        }
        getBands()
    }, [])

    const bandDetails = (id) => {
        if(id === '1'){
            navigate(`/bands/7`)
        } else {
            let numberId = parseInt(id) - 1
            navigate(`/bands/${numberId}`)
        }
    }

    return(
        <div>
            <Nav />
            <div className="container-fluid my-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="fs-1 show-title">Bands</h1>
            </div>
            <div className="container text-center w-75">
                {bands.map((band, index) => 
                <div className="card d-flex justify-content-center align-items-center p-5 show-card mb-4" key={index}>
                    <img src={band.logo} className="card-img-top mb-3" alt="Show Poster"/>
                    <div className="card-body">
                        <h5 className="card-title mb-4">{band.name}</h5>
                        <p className="card-text mb-4">Genre: {band.genre}</p>
                        <button className="btn btn-primary" onClick={() => bandDetails(band.band_id)}>Band Details</button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}