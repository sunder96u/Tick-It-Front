import { Link } from 'react-router-dom'

export default function Nav() {
    return(
        <div className="container-fluid">
            <div className="row align-items-center bg-primary py-3">
                <div className="col-4 d-flex justify-content-evenly">
                    <Link to="/" className="btn btn-dark">Home</Link>
                    <Link to="/shows" className="btn btn-dark">Shows</Link>
                    <Link to="/bands" className="btn btn-dark">Bands</Link>
                    <Link to="/venues" className="btn btn-dark">Venues</Link>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <Link to="/admin" className="navbar-brand fs-2">Tick-It</Link>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <form className="d-flex" role="search">
                        <input className="form-control" placeholder="Search" type="search" />
                        <button className="btn btn-dark mx-2" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}