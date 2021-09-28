const Posts = require('../models/Post')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class SiteControllers{
    //GET /news
    index(req, res, next){
        // Posts.find({})
        //     .then(posts => {
        //         posts = posts.map(post => post.toObject())
        //         res.render('home', {posts})
        //     })
        //     .catch(next)

        Posts.find({})
        .then(posts => {
            res.render('home', {
                posts: mutipleMongooseToObject(posts)
            })
        })
        .catch(next)

        
        // res.render('home')
    }

    //[GET] /news/:slug
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteControllers