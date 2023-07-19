import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import BandForm from './BandForm'
import ShowForm from './ShowForm'
import VenueForm from './VenueForm'




export default function Admin () {

    const navigate = useNavigate()

    const navband = () => {
        navigate('/bandform')
    }
    const navshow = () => {
        navigate('/showform')
    }

    const navvenue = () => {
        navigate('/venueform')
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <div className='row'>
                        <button type='button' className='btn btn-primary' onClick={() => navband()}>Add Band</button>
                    </div>
                    <div className='row'>
                        <button type='button' className='btn btn-primary' onClick={() => navband()}>Edit Band</button>
                    </div>
                    <div className='row'>
                        <button type='button' className='btn btn-primary' onClick={() => navband()}>Delete Band</button>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='row'>
                        <button type='button' className='btn btn-primary' onClick={() => navshow()}>Add Show</button>
                    </div>
                    <div className='row'>
                        <button type='button' className='btn btn-primary' onClick={() => navshow()}>Edit Show</button>
                    </div>
                    <div className='row'>
                        <button type='button' className='btn btn-primary' onClick={() => navshow()}>Delete Show</button>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='row'>
                        <button type='button' className='btn btn-primary' onClick={() => navvenue()}>Add Venue</button>
                    </div>
                    <div className='row'>
                        <button type='button' className='btn btn-primary' onClick={() => navvenue()}>Edit Venue</button>
                    </div>
                    <div className='row'>
                        <button type='button' className='btn btn-primary' onClick={() => navvenue()}>Delete Venue</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='container'>
                    <Routes>
                        <Route path='/bandform' element={<BandForm />} />
                        <Route path='/showform' element={<ShowForm />} />
                        <Route path='/venueform' element={<VenueForm />} />
                    </Routes>
                </div>
            </div>
        </div>

    )
}