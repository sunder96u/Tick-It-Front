import Nav from './Nav'
import { Link } from 'react-router-dom'

export default function ShowDetails() {

    return(
        <div>
            <Nav />
            <div className="container d-flex flex-column align-items-center justify-content-center my-5">
                <h1>Show Title</h1>
                <img src="#" alt="poster" className="my-5"/>
                <div className="container text-center w-50">
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Venue:</h3>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <Link to='/venuedetails' className="link-opacity-50-hover">Venue Info</Link>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Band:</h3>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <Link to='/banddetails' className="link-opacity-50-hover">Band Info</Link>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Time:</h3>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="mb-0">Time Info</p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Starting Price:</h3>                            
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="mb-0">Price Info</p>    
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}