const newsRouter = require('./news.route')

function route(app){

    app.get('/', (req, res) => {
        res.render('home');
    })
    
    app.use('/news', newsRouter)
    
    app.get('/search', (req, res) => {
        console.log(req.query.q);
        res.render('search');
    })
      
}

module.exports = route