const Posts = require('../models/Post')
const { mongooseToObject } = require('../../util/mongoose')
const Post = require('../models/Post')
class PostsControllers{
    // GET /news
    index(req, res){
        res.render('posts/posts')
    }

    //[GET] /news/:slug
    show(req, res, next){
        // res.send('post neww '+req.params.slug);
        Posts.findOne({slug: req.params.slug})
            .then(posts => {
                res.render('posts/post', {
                    posts: mongooseToObject(posts)
                })
            })
            .catch(next)
    }

    //[GET] /posts/create
    create(req, res, next){
        res.render('posts/createPost')
    }

    //[POST] /posts/store
    store(req, res, next){
        // res.json(req.body)
        const formData = req.body
        
        const post = new Posts(formData)
        post.save()
            .then(() => res.redirect('/'))
    }
}

module.exports = new PostsControllers