import { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'

export default function BandForm ({state}) {
    console.log(state)
    const BASE_URL = "https://tick-it-back-production.up.railway.app/"

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [logo, setLogo] = useState('')
    const [selectedBand, setSelectedBand] = useState('')
    const [bandName, setBandName] = useState('')
    const [bandGenre, setBandGenre] = useState('')
    const [bandLogo, setBandLogo] = useState('')

    const bandData = {
        name,
        genre,
        logo
    }

    const selectListData = []

    const getBandsData = async () => {
        const response = await axios.get(`${BASE_URL}bands/`)
        for (let i = 0; i < response.data.length; i++) {
            let bandName = response.data[i].name
            let bandId = i+1
            const newObj = []
            newObj['value'] = bandId
            newObj['label'] = bandName
            selectListData[i] = newObj
        }
    }


    const handleSubmitBand = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/bands/', bandData)  
        console.log(bandData)
    }

    const handleSave = (e) => {
        e.preventDefault()
        console.log(`handle save hit`)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        console.log(`handle delete hit`)
    }


    let button
    if (state == 'del') {
        button = <button className="btn btn-danger" onClick={() => handleDelete}>Delete</button>
    } else if (state == 'edit'){
        button = <button className="btn btn-primary" onClick={() => handleSave}>Save</button>
    } else {
        button = <button type="submit" className="btn btn-primary">Submit</button>
    }

    let form

    if (selectListData.length == 0) {
        getBandsData()
    }
    if (selectedBand) {
        console.log(selectedBand)
        const getBandInformationBecauseINeedItToBeAsync = async () => {
            const res = await axios.get(`${BASE_URL}bands/${selectedBand}`)
            console.log(res)
            setBandName(res.data.name)
            setBandGenre(res.data.genre)
            setBandLogo(res.data.logo)
        }
        getBandInformationBecauseINeedItToBeAsync()
    }

    let head


    if (state == 'add') {
        head = 
        <h2>Add New Band</h2>
        form = 
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
                <label htmlFor='logo' className='form-label'>Logo URL Link</label>
                <input type='text' className='form-control' placeholder='Band Logo' id='logo' onChange={(e) => setLogo(e.target.value)}></input>
            </div>
            <div className='mb-3'>
                {button}
            </div>
        </form>
    } else {
        head = 
        <Select 
            aria-label="Default select example"
            id="band-select"
            defaultValue={'Select A Band'}
            isSearchable
            options={selectListData}
            onChange={(option) => setSelectedBand(option.value)}
        />
        form = 
        <form>
            <div className='mb-3'>
                <label htmlFor="name" className='form-label'>Name</label>
                <input type='text' className='form-control' placeholder={bandName} id='name' onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='genre' className='form-label'>Genre</label>
                <input type='text' className='form-control' placeholder={bandGenre} id='genre' onChange={(e) => setGenre(e.target.value)}></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='logo' className='form-label'>Logo URL Link</label>
                <input type='text' className='form-control' placeholder={bandLogo} id='logo' onChange={(e) => setLogo(e.target.value)}></input>
            </div>
            <div className='mb-3'>
                {button}
            </div>
        </form>
    }

    console.log(bandName)


    return (
    <div >
        {head}
        {form}
    </div>
    )
}