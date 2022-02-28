// Dependencies
const React = require('react')
const Def = require('../default')
const Com = require('./comments')

// Show place details and comments if they exist
function show (data) {
  let comments = (
    <h4 className='inactive'>
      No comments
    </h4>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className='border'>
          <h2 className='rant'>{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3><strong>- {c.author}</strong></h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
      <Def>
        <main>
          <br></br>
          <h1>{data.place.name}</h1>
          <br></br>
          <div className='container px-4'>
            <div className='row g-5'>
              <div className='col'>
                <h2>Description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <br></br>
                <h4>Serving {data.place.cuisines}</h4>
                <br></br>
                <h2>Rating</h2>
                <h4>Not Rated</h4>
              </div>
              <div className='col'>
                <img src={data.place.pic} alt={data.place.name}></img>
                <h3>Located in {data.place.city}, {data.place.state}</h3>
              </div>
            </div>
            <div className='row gy-2 gx-4 m-1'>
              <div className='col-2 gx-1'>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
              </div>
              <div className='col-2 gx-1'>
                <form action={`/places/${data.id}?_method=DELETE`} method='POST'>
                  <input type='submit' className='btn btn-danger' value='Delete' />
                </form>
              </div>
            </div>
            <div className='row border-top m-1'>
              <div className='col'>
                <h2>Comments</h2>
                {comments}
              </div>
            </div>
            {/* Display the add comment form */}
            <Com></Com>
          </div>
        </main>
      </Def>
  )
}

module.exports = show