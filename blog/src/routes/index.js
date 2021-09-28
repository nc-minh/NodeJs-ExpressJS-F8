const newsRouter = require('./news.route')
const siteRouter = require('./site.route')
const postsRouter = require('./posts.route')

function route(app){
    
    app.use('/news', newsRouter)
    
    app.use('/posts', postsRouter)

    app.use('/', siteRouter)

}

module.exports = route