import Nav from './Nav'
import Upcoming from './Upcoming'
import FeaturedBand from './FeaturedBand'
import FeaturedVenue from './FeaturedVenue'

export default function Home() {
    return(
        <div>
            <Nav />
            <Upcoming />
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-6">
                        <FeaturedVenue />
                    </div>
                    <div className="col-6">
                        <FeaturedBand />
                    </div>
                </div>
            </div>
        </div>
    )
}