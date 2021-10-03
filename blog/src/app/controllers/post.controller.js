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
        res.render('posts/create-post')
    }

    //[POST] /posts/store
    store(req, res, next){
        // res.json(req.body)
        const formData = req.body
        
        const post = new Posts(formData)
        post.save()
            .then(() => res.redirect('/'))
    }

    //[GET] /posts/:id/edit
    edit(req, res, next){
        Posts.findById(req.params.id)
            .then(post => res.render('posts/edit-post', {
                post: mongooseToObject(post)
            }))
            .catch(next)
        
    }

    //[PUT] /posts/:id
    update(req, res, next){
       Posts.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/posts'))
        .catch(next)
        
    }

    // [DELETE] /posts:id
    delete(req, res, next){
        Posts.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }


}

module.exports = new PostsControllers