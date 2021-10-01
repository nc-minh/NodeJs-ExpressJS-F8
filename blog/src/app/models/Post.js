const mongoose = require('mongoose')
const Schema = mongoose.Schema
var slug = require('mongoose-slug-generator')

mongoose.plugin(slug);

  const posts = new Schema({
    name: { type: String, maxlength: 255 },
    description: { type: String },
    image: { type: String },
    slug: {type: String, slug: 'name', unique: true}
  }, {
    timestamps: true,
  })

  module.exports = mongoose.model('BlogPost', posts)