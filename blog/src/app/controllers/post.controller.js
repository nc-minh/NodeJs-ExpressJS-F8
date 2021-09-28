const posts = require('../models/Post')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class SiteControllers{
    //GET /news
    index(req, res, next){
        // res.render('home')

        posts.find({})
            .then(posts => {

                res.render('home', {
                    posts: mutipleMongooseToObject()
                })
            })
            .catch(next)
    }

    //[GET] /news/:slug
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteControllers