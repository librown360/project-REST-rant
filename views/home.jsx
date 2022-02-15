// Imports
const React = require('react')
const Def = require('./default')

// Home view function
function home () {
    return (
        <Def>
            <main>
                <h1>Home</h1>
            </main>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </Def>
    )
}

// Export home view
module.exports = home