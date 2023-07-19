import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import BandForm from './BandForm'
import ShowForm from './ShowForm'
import VenueForm from './VenueForm'




export default function Admin () {

    const navigate = useNavigate()
    const [state, setState] = useState('add')

    const navband = () => {
        navigate('/bandform')
    }
    const navshow = () => {
        navigate('/showform')
    }

    const navvenue = () => {
        navigate('/venueform')
    }

    const setAdd = () => {
        setState('add')
    }

    const setDel = () => {
        setState('del')
    }

    const setEdit = () => {
        setState('edit')
    }



    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <div className='row'>
                        <button type='button' className='btn btn-primary' onClick={() => {navband(); setAdd()}}>Add Band</button>
                    </div>
                    <div className='row'>
                        <button type='button' className='btn btn-warning' onClick={() => {navband(); setEdit()}}>Edit Band</button>
                    </div>
                    <div className='row'>
                        <button type='button' className='btn btn-danger' onClick={() => {navband(); setDel()}}>Delete Band</button>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='row'>
                        <button type='button' className='btn btn-primary'  onClick={() => {navshow(); setAdd()}}>Add Show</button>
                    </div>
                    <div className='row'>
                        <button type='button' className='btn btn-warning' onClick={() => {navshow(); setEdit()}}>Edit Show</button>
                    </div>
                    <div className='row'>
                        <button type='button' className='btn btn-danger' onClick={() => {navshow(); setDel()}}>Delete Show</button>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='row'>
                        <button type='button' className='btn btn-primary' onClick={() => {navvenue(); setAdd()}}>Add Venue</button>
                    </div>
                    <div className='row'>
                        <button type='button' className='btn btn-warning' onClick={() => {navvenue(); setEdit()}}>Edit Venue</button>
                    </div>
                    <div className='row'>
                        <button type='button' className='btn btn-danger' onClick={() => {navvenue(); setDel()}}>Delete Venue</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='container'>
                    <Routes>
                        <Route path='/bandform' element={<BandForm state={state}/>} />
                        <Route path='/showform' element={<ShowForm state={state}/>} />
                        <Route path='/venueform' element={<VenueForm state={state}/>} />
                    </Routes>
                </div>
            </div>
        </div>

    )
}