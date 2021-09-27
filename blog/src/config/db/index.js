// Using Node.js `require()`
const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('D:\Learn\Learn Back-end\Node & ExpressJS\database', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('okok');
    } catch (error) {
        console.log('fail');
    }
}

module.exports = { connect }