export default function BandForm () {
    return (
        <form>
            <h3>Add select list here</h3>
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
                <input type='text' className='form-control' placeholder='Band Logo' id='logo'></input>
            </div>
            <div className='mb-3'>
                <button type='submit' className='btn btn-danger'>Submit</button>
            </div>
        </form>
    )
}