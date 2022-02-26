// Dependency
const db = require('../models')

// Look up a place to add a comment
async function seed() {
    let place = await db.Place.findOne({ name: 'Cafe Ole\''})

    // Create a comment for the above place
    let comment = await db.Comment.create({
        author: 'Framished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    // Add the above comment into the comments array
    place.comments.push(comment.id)

    // Save the place now that it has a commnet
    await place.save()

    // Exit the program
    process.exit()
}



seed()