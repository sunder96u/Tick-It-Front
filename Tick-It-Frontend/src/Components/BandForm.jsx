import { useState, useEffect } from 'react'

export default function BandForm ({state}) {
    console.log(state)

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
        <form>
            <div className='mb-3'>
                <label htmlFor="name" className='form-label'>Name</label>
                <input type='text' className='form-control' placeholder='Band Name' id='name'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='genre' className='form-label'>Genre</label>
                <input type='text' className='form-control' placeholder='Genre' id='genre'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='logo' className='form-label'>Logo</label>
                <input type='file' className='form-control' placeholder='Band Logo' id='logo'></input>
            </div>
            <div className='mb-3'>
                {button}
            </div>
        </form>
    </div>
    )
}