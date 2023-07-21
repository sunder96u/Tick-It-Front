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
        head = <h2>Add New Show</h2>
    } else {
        head = 
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option default>Select A Show</option>
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
                    <label htmlFor='poster' className='form-label'>Poster URL Link</label>
                    <input type='text' className='form-control' placeholder='Show Poster' id='poster'></input>
                </div>
                <div className='mb-3'>
                    {button}
                </div>
            </form>
        </div>

    )
}