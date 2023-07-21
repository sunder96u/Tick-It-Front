import Nav from './Nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function BandDetails() {

    const [band, setBand] = useState()
    let key = useParams()

    useEffect(() => {
        const getBand = async() => {
            const response = await axios.get(`https://tick-it-back-production.up.railway.app/bands/${key.id}`)
            setBand(response.data)
        }
        getBand()
    }, [])

    return band ? (
        <div>
            <Nav />
            <div className="container d-flex flex-column align-items-center justify-content-center my-5">
                <h1>{band.name}</h1>
                <img src={band.logo} alt="logo" className="my-5"/>
                <div className="container text-center w-50">
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Genre:</h3>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="mb-0">{band.genre}</p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    ) : (
        <h1>Loading...</h1>
    )
}