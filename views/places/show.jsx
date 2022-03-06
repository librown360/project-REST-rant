// Dependencies
const React = require('react')
const Def = require('../default')
const Com = require('./comments')

// Show place details and comments if they exist along with the rating
function show (data) {
  let comments = (
    <h4 className='inactive'>
      No comments
    </h4>
  )
  let rating = (
    <h3 className='inactive'>
      Not rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className='border col-sm-4'>
          <h2 className='rant'>{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h4><strong>- {c.author ? 'c.author' : 'Anonymous'}</strong></h4>
          <h4>Rating: {c.stars}</h4>
          <form method='POST' action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
            <input type='submit' className='btn btn-danger' value='Delete' />
        </form>
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
                <h4>{rating}</h4>
              </div>
              <div className='col'>
                <img src={data.place.pic} alt={data.place.name}></img>
                <h3>Located in {data.place.city}, {data.place.state}</h3>
              </div>
            </div>
            <div className='row gy-2 gx-4 m-1'>
              <div className='col-2 gx-1'>
                <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>Edit</a>
              </div>
              <div className='col-2 gx-1'>
                <form  method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                  <input type='submit' className='btn btn-danger' value='Delete' />
                </form>
              </div>
            </div>
            <div className='col border-top m-1'>
              <div className='row'>
                <h2>Comments</h2>
                {comments}
              </div>
            </div>
            {/* Display the add comment form and pass it the data for the associated place */}
            <Com id={data.place.id}> </Com>
          </div>
        </main>
      </Def>
  )
}

module.exports = show