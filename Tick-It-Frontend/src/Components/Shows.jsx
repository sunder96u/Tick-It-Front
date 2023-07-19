import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

export default function Shows() {

    const navigate = useNavigate()

    const showDetails = () => {
        navigate('/showdetails')
    }

    return(
        <div>
            <Nav />
            <div className="container-fluid my-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="fs-1">Shows</h1>
            </div>
            <div className="container text-center w-75">
                <div className="card d-flex justify-content-center align-items-center p-5">
                    <img src="..." className="card-img-top mb-3" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title mb-4">Card title</h5>
                        <p className="card-text mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" onClick={() => showDetails()}>Show Details</a>
                    </div>
                </div>
            </div>
        </div>
    )
}