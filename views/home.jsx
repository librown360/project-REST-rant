// Imports
const React = require('react')
const Def = require('./default')

// Home view function
function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src='/images/waffles.jpg' alt='Waffles'  />
                    <div>
                        Photo by <a href='https://unsplash.com/@lindsaymoe'>Lindsay Moe</a> on <a href='https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

// Export home view
module.exports = home