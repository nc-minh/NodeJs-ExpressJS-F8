const Posts = require('../models/Post')
const { mongooseToObject } = require('../../util/mongoose')
class PostsControllers{
    // GET /news
    index(req, res){
        res.render('posts');
    }

    //[GET] /news/:slug
    show(req, res, next){
        // res.send('post neww '+req.params.slug);
        Posts.findOne({slug: req.params.slug})
            .then(posts => {
                res.render('post', {
                    posts: mongooseToObject(posts)
                })
            })
            .catch(next)
    }
}

module.exports = new PostsControllers