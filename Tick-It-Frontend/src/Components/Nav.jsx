import { Link } from 'react-router-dom'

export default function Nav() {
    return(
        <nav className="navbar navbar-expand bg-primary">
            <div className="container-fluid justify-content-evenly">
                <div className="d-flex">
                    <Link to="/" className="btn btn-dark ms-2">Home</Link>
                </div>
                <Link to="/admin" className="navbar-brand fs-2">Tick-It</Link>
                <form class="d-flex" role="search">
                    <input className="form-control" placeholder="Search" type="search" />
                    <button className="btn btn-dark mx-2" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}