// Imports
const React = require('react')
const Def = require('./default')

// Error 404 view function
function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <p>Hmmmm, looks like something went wrong. So sorry! Please try again.</p>
                <div>
                    <img src='/images/404_Error.png' alt='404 Error' />
                    <div>
                        Photo by <a href='https://www.pngitem.com/middle/iombmRT_404-error-images-free-png-transparent-png/'>PNGItem</a>
                        <strong> Contributor: </strong> Christiane Nowottny
                    </div>
                </div>
            </main>
        </Def>
    )
}

// Export error view
module.exports = error404