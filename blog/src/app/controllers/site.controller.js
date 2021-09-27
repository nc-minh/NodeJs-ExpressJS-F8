const posts = require('../models/Post')
class SiteControllers{
    //GET /news
    index(req, res){
        // res.render('home');

        posts.find({}, function(err, posts){
            res.json(posts)
            // if(!err){
            //     res.json(posts)
            // }else{
            //     res.status(400).json({error: 'ERROR!!!'})
            // }
        })
        // res.json({
        //     name: 'test'
        // })


    }

    //[GET] /news/:slug
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteControllers