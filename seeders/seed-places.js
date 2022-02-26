const db = require('../models')

db.Place.create([
{
    name: 'Cafe Ole\'',
    city: 'Rancho Cucamonga',
    state: 'CA',
    cuisines: 'Coffee, Tea, Desserts',
    pic:'/images/Cafe_Ole.jpg',
    founded: 1989
}, 
{
    name: 'Brick Oven Pizza',
    city: 'Alpharetta',
    state: 'GA',
    cuisines: 'Italian',
    pic:'/images/Brick_Oven_Pizza.jpg',
    founded: 2020
}
])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})