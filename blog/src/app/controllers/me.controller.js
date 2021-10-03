const Posts = require('../models/Post')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const Post = require('../models/Post')
class MeControllers{
    //[GET]: /me/stored/posts
    storedPosts(req, res, next){
        Posts.find({})
            .then(posts => res.render('me/stored-posts', {
                posts: mutipleMongooseToObject(posts)
            }))
            .catch(next)
    }

    //[GET]: /me/trash/posts
    trashPosts(req, res, next){
        Posts.findDeleted({})
            .then(posts => res.render('me/trash-posts', {
                posts: mutipleMongooseToObject(posts)
            }))
            .catch(next)
    }
}

module.exports = new MeControllers