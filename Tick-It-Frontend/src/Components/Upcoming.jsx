import {useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'


export default function Upcoming() {

    const navigate = useNavigate()
    const [upcoming, setUpcoming] = useState([])

    useEffect(() => {
        const getUpcoming = async () => {
            const response = await axios.get(`https://tick-it-back-production.up.railway.app/shows/`)
            setUpcoming(response.data)
        }
        getUpcoming()
    }, [])

    const showDetails = (id) => {
        navigate(`/shows/${id}`)
    }

    if (upcoming.length === 0) {
        return (
            <h1>Wow, This is taking a while!</h1>
        )
    }
    else {
        return(
            <div className='upcoming-container'>
                <div className='row text-center my-4'>
                    <h1>Upcoming Events:</h1>
                </div>
                <div className='row mx-4 my-4'>
                    {upcoming.map((show, index) =>
                        <div className='col d-flex justify-content-center align-items-center border border-2 rounded mx-4 py-2 upcoming-image' key={index}>
                            <img src={show.poster} alt="show.name" className="h-100 w-100"onClick={() => showDetails(show.show_id)} />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}