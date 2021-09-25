var path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

//HTTP logger
app.use(morgan('combined'))
//Template engine
app.engine('ming', exphbs({
  extname: '.ming'
}))
app.set('view engine', 'ming')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})