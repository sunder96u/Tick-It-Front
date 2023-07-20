import { useState, useEffect } from 'react'
import axios from 'axios'

export default function BandForm ({state}) {
    console.log(state)
    const BASE_URL = "https://tick-it-back-production.up.railway.app/"

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [logo, setLogo] = useState('')

    const bandData = {
        name,
        genre,
        logo
    }



    const handleSubmitBand = (e) => {
        e.preventDefault()
        axios.post('https://tick-it-back-production.up.railway.app/bands/', bandData)  
        console.log(bandData)
    }

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
        head = <h2>Add New Band</h2>
    } else {
        head = 
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option default>Select A Band</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    }

    return (
    <div >
        {head}
        <form onSubmit={handleSubmitBand}>
            <div className='mb-3'>
                <label htmlFor="name" className='form-label'>Name</label>
                <input type='text' className='form-control' placeholder='Band Name' id='name' onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='genre' className='form-label'>Genre</label>
                <input type='text' className='form-control' placeholder='Genre' id='genre' onChange={(e) => setGenre(e.target.value)}></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='logo' className='form-label'>Logo</label>
                <input type='file' className='form-control' placeholder='Band Logo' id='logo' onChange={(e) => setLogo(e.target.value)}></input>
            </div>
            <div className='mb-3'>
                {button}
            </div>
        </form>
    </div>
    )
}