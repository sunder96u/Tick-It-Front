import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FeaturedBand() {
    const navigate = useNavigate()

    const[featuredBand, setFeaturedBand] = useState({})

    useEffect(() => {
        const getFeaturedBand = async () => {
            const response = await axios.get()
            setFeaturedBand(response.data)
        }
        getFeaturedBand()
    }, [])

    const bandDetails = (id) => {
        navigate('/banddetails')
    }

    return (
        <div className='container-fluid w-50'>
            <div className="text-center">
                <h1>Featured Band</h1>
            </div>
            <div class="card d-flex align-items-center justify-content-center">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary" onClick={() => bandDetails()}>Show Details</a>
                </div>
            </div>
        </div>
    )
}