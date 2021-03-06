// Dependencies
const React = require('react')
const Def = require('../default')

// View of all places
function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className='col-sm-6'>
                <h2>
                    <a href={`/places/${place.id}`} >
                    {place.name}
                    </a>
                </h2>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
                <p className='text-center'>
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

// Export places index view
module.exports = index