// Import React
const React = require('react')

// Default HTML function
function Def (html) {
    return (
        <html>
            <head>
                <title>REST Rant</title>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' />
                <link rel='stylesheet' href='/css/style.css' />
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

// Export default function
module.exports = Def