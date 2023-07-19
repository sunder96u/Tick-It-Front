import { Link } from 'react-router-dom'

export default function Nav() {
    return(
        <div class="container-fluid">
            <div class="row align-items-center bg-primary py-3">
                <div class="col-3 d-flex justify-content-center">
                    <Link to="/" className="btn btn-dark">Home</Link>
                </div>
                <div class="col-3 d-flex justify-content-end">
                    <Link to="/admin" className="navbar-brand fs-2">Tick-It</Link>
                </div>
                <div class="col-6 d-flex justify-content-end">
                    <form class="d-flex" role="search">
                        <input className="form-control" placeholder="Search" type="search" />
                        <button className="btn btn-dark mx-2" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}