// Imports
const React = require('react')
const Def = require('./default')

// Error 404 view function
function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <p>Hmmmm, looks like something went wrong. So sorry!</p>
            </main>
        </Def>
    )
}

// Export error view
module.exports = error404