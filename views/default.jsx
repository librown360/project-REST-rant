// Import React
const React = require('react')

// Default HTML function
function Def (html) {
    <html>
        <head>
            <title>REST Rant</title>
        </head>
        <body>
            {html.children}
        </body>
    </html>
}

// Export default function
module.exports = Def