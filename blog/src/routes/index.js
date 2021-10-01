const newsRouter = require('./news.route')
const meRouter = require('./me.route')
const siteRouter = require('./site.route')
const postsRouter = require('./posts.route')

function route(app){
    
    app.use('/news', newsRouter)
    
    app.use('/me', meRouter)

    app.use('/posts', postsRouter)

    app.use('/', siteRouter)

}

module.exports = route