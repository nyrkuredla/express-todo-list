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
  const completeTodos = dal.getCompleteTodos()
  const newTodos = dal.getIncompleteTodos();
  res.render('index', { incomplete: newTodos, complete: completeTodos})
})

//posting new todos
app.post('/todos', function (req, res) {
  dal.addTodo(req.body);
  res.redirect('/')
})

//separating complete todos
app.post('/complete', function (req, res) {
  const finishedTodo = req.body;
  res.send(finishedTodo);

})
//setting the port
app.set('port', 3000)

//listening at port and console log start
app.listen(app.get('port'), function () {
  console.log('Application has started at port 3000')
})
