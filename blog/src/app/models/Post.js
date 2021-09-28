const mongoose = require('mongoose')
const Schema = mongoose.Schema

  const posts = new Schema({
    name: { type: String, maxlength: 255 },
    description: { type: String, maxlength: 255 },
    image: { type: String, maxlength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  })

  module.exports = mongoose.model('BlogPost', posts)