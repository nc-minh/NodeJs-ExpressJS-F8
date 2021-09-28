const newsRouter = require('./news.route')
const siteRouter = require('./site.route')
const postRouter = require('./posts.route')

function route(app){
    
    app.use('/news', newsRouter)
    
    app.use('/posts', postRouter)

    app.use('/', siteRouter)

}

module.exports = route