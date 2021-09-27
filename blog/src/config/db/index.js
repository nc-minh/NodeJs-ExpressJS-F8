// Using Node.js `require()`
const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_mhn-bt_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('okok');
    } catch (error) {
        console.log('fail');
    }
}

module.exports = { connect }