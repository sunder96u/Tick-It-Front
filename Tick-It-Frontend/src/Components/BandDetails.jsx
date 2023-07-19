import Nav from './Nav'

export default function BandDetails() {
    return(
        <div>
            <Nav />
            <div className="container d-flex flex-column align-items-center justify-content-center my-5">
                <h1>Band Name</h1>
                <img src="#" alt="logo" className="my-5"/>
                <div className="container text-center w-50">
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <h3 className="mb-0">Genre:</h3>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="mb-0">Genre Info</p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}