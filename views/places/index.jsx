// Imports
const React = require('react')
const Def = require('../default')

// Places view function
function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className='col-sm-6'>
                <h2>{place.name}</h2>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
                <p className='text-center'>
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p>
                    Photo by <a href={place.credit.source}>{place.credit.source}</a> on 
                    <a href='https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'> Unsplash</a>
                </p>
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