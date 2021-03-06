const Posts = require('../models/Post')
const {
    mutipleMongooseToObject
} = require('../../util/mongoose')
const Post = require('../models/Post')
class MeControllers {
    //[GET]: /me/stored/posts
    storedPosts(req, res, next) {
        let postQuery = Posts.find({})

        // res.json(res.locals._sort)

        if(req.query.hasOwnProperty('_sort')){
            postQuery = postQuery.sort({
                [req.query.column]: req.query.type,
            })
        }

        Promise.all([postQuery, Posts.countDocumentsDeleted()])
            .then(([posts, deletedCount]) =>
                res.render('me/stored-posts', {
                deletedCount: deletedCount,
                posts: mutipleMongooseToObject(posts)
            }))
            .catch(next)
    }

    //[GET]: /me/trash/posts
    trashPosts(req, res, next) {
        Posts.findDeleted({})
            .then(posts => res.render('me/trash-posts', {
                posts: mutipleMongooseToObject(posts)
            }))
            .catch(next)
    }
}

module.exports = new MeControllers