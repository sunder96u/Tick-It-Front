import axios from 'axios'


export default function BandForm ({state}) {
    console.log(state)

    const getVenues = async () => {
        const venues = await axios.get('https://tick-it-back-production.up.railway.app/venues/')
        console.log(venues)
    }

    getVenues()


    let button
    if (state == 'del') {
        button = <button type="submit" className="btn btn-danger">Delete</button>
    } else if (state == 'edit'){
        button = <button type="submit" className="btn btn-primary">Save</button>
    } else {
        button = <button type="submit" className="btn btn-primary">Submit</button>
    }

    let head
    if (state == 'add') {
        head = <h2>Add New Show</h2>
    } else {
        head = 
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option default>Select a Venue</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    }


    return (
        <div>
            {head}
            <form>
                <div className='mb-3'>
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input type='text' className='form-control' placeholder='Venue Name' id='name'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='address' className='form-label'>Address</label>
                    <input type='text' className='form-control' placeholder='address' id='address'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='capacity' className='form-label'>Capacity</label>
                    <input type='text' className='form-control' placeholder='Seating Capacity' id='capacity'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='type' className='form-label'>Venue Type</label>
                    <input type='text' className='form-control' placeholder='Indoor/Outdoor/Stadium' id='type'></input>
                </div>
                <div className='contact'>
                    <label htmlFor='capacity' className='form-label'>Contact Information</label>
                    <input type='text' className='form-control' placeholder='Phone number or email' id='contact'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='pic' className='form-label'>Venue Picture</label>
                    <input type='file' className='form-control' placeholder='Venue Picture' id='pic'></input>
                </div>
                <div className='mb-3'>
                    {button}
                </div>
            </form>
        </div>

    )
}