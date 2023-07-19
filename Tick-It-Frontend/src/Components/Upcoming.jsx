import {useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'


export default function Upcoming() {

    const navigate = useNavigate()
    const [upcoming, setUpcoming] = useState([])

    useEffect(() => {
        const getUpcoming = async () => {
            const response = await axios.get()
            setUpcoming(response.data)
        }
        getUpcoming()
    }, [])

    const showDetails = (id) => {
        navigate(`/showdetails/{id}`)
    }

    if (upcoming.length === 0) {
        return (
            <h1>Wow, This is taking a while!</h1>
        )
    }
    else {
        return(
            <div className='upcoming-container'>
                <div className='row'>
                    <h1>Upcoming Events:</h1>
                </div>
                <div className='row'>
                    {shows.map((show, index) =>
                        <div className='col' key={index}>
                            <img src={show.poster.url} alt="show.name" onClick={() => showDetails(show.id)} />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}