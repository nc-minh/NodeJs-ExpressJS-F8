var path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes/index')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded())
app.use(express.json())

//HTTP logger
app.use(morgan('combined'))
//Template engine
// app.engine('ming', exphbs({
//   extname: '.ming'
// }))
// app.set('view engine', 'ming')


//routes init
route(app)

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.set('views', path.join(__dirname, 'resources/views'))



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})