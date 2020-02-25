const express = require('express')
const app = express()
const exhbs = require('express-handlebars')
const generateWords = require('./generator_words')
const port = 3000
const options = require('./options.json')

//setting template engine
app.engine('handlebars', exhbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


//routes setting
app.get('/', (req, res) => {
  res.render('index', { options: options.results })
})


app.listen(port, () => {
  console.log(`The express is running on https://localhost:${{ port }}`)
})