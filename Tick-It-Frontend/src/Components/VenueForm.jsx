export default function BandForm () {
    return (
        <form>
            <h1>add select list here</h1>
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
                <input type='text' className='form-control' placeholder='Venue Picture' id='pic'></input>
            </div>
            <div className='mb-3'>
                <button type='submit' className='btn btn-danger'>Submit</button>
            </div>
        </form>
    )
}