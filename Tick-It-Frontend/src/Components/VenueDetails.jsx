import Nav from './Nav'

export default function VenueDetails() {
    return(
        <div className="container-fluid px-0">
            <Nav />
            <div className="container d-flex flex-column align-items-center justify-content-center my-5">
                <h1>Venue Name</h1>
                <img src="#" alt="venue_photo" className="my-5"/>
                <div className="container text-center w-50">
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Address:</h3>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="mb-0">Address Info</p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Type:</h3>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="mb-0">Type Info</p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Capacity:</h3>                            
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="mb-0">Capacity Info</p>    
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Contact:</h3>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="mb-0">Contact Info</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}