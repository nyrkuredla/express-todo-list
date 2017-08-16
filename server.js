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

//posting new todos
app.post('/todos', function (req, res) {
  dal.addTodo(req.body)
  res.render('index')
})

//To do from here (haha): create partials for complete and incomplete; incomplete partials should be populated from addToDo. Incomplete partial needs buttons with onclick function to post to app.post /complete, which will filter array based on complete ones. Complete ones will push to complete partial. Style it out.




//setting the port
app.set('port', 3000)

//listening at port and console log start
app.listen(app.get('port'), function () {
  console.log('Application has started at port 3000')
})
