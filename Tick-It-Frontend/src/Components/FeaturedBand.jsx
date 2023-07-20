import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function FeaturedBand() {
    const navigate = useNavigate()

    const[featuredBand, setFeaturedBand] = useState({})

    useEffect(() => {
        const getFeaturedBand = async () => {
            const response = await axios.get(`https://tick-it-back-production.up.railway.app/bands/3`)
            setFeaturedBand(response.data)
        }
        getFeaturedBand()
    }, [])

    const bandDetails = (id) => {
        navigate(`/bands/${id}`)
    }

    return (
        <div className='container-fluid w-50'>
            <div className="text-center">
                <h1>Featured Band</h1>
            </div>
            <div className="card d-flex align-items-center justify-content-center">
                <img src={featuredBand.logo} class="card-img-top" alt="Band Logo"/>
                <div className="card-body">
                    <h5 className="card-title">{featuredBand.name}</h5>
                    <p className="card-text">{featuredBand.genre}</p>
                    <button className="btn btn-primary" onClick={() => bandDetails(featuredBand.band_id)}>Band Details</button>
                </div>
            </div>
        </div>
    )
}