const mongoose = require('mongoose')
const Schema = mongoose.Schema

  const posts = new Schema({
    name: { type: String, maxlength: 255 },
    description: { type: String },
    image: { type: String },
    slug: {type: String, maxlength: 255}
  }, {
    timestamps: true,
  })

  module.exports = mongoose.model('BlogPost', posts)