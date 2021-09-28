class PostsControllers{
    //GET /news
    index(req, res){
        res.render('posts');
    }

    //[GET] /news/:slug
    show(req, res){
        res.send('post neww');
    }
}

module.exports = new PostsControllers