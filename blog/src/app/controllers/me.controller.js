const Posts = require('../models/Post')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const Post = require('../models/Post')
class MeControllers{
    //[GET]: /me/stored/posts
    storedPosts(req, res, next){
        Posts.find({ deletedAt: null })
            .then(posts => res.render('me/stored-posts', {
                posts: mutipleMongooseToObject(posts)
            }))
            .catch(next)
    }
}

module.exports = new MeControllers