const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const dal = require('./dal');
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

//setting up mustache stuff
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

//setting up express static
app.use(express.static('public'))

// setting up bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//get request for homepage
app.get('/', function (req, res) {
  res.render('index')
})

app.post('/todos', function (req, res) {
  dal.addTodo(req.body)
  res.send()
})



//setting the port
app.set('port', 3000)

//listening at port and console log start
app.listen(app.get('port'), function () {
  console.log('Application has started at port 3000')
})
