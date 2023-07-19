export default function BandForm () {
    return (
        <form>
            <h1>add select list here</h1>
            <div className='mb-3'>
                <label htmlFor="title" className='form-label'>Title</label>
                <input type='text' className='form-control' placeholder='Title' id='title'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='time' className='form-label'>Time</label>
                <input type='text' className='form-control' placeholder='time' id='time'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='startingPrice' className='form-label'>Starting Price</label>
                <input type='text' className='form-control' placeholder='Starting Price' id='startingPrice'></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='poster' className='form-label'>Poster</label>
                <input type='text' className='form-control' placeholder='Show Poster' id='poster'></input>
            </div>
            <div className='mb-3'>
                <button type='submit' className='btn btn-danger'>Submit</button>
            </div>
        </form>
    )
}