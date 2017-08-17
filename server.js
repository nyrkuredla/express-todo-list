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
  const completeTodos = dal.getCompleteTodos();
  const newTodos = dal.getIncompleteTodos();
  res.render('index', { incomplete: newTodos, complete: completeTodos})
})

//posting new todos
app.post('/todos', function (req, res) {
  dal.addTodo(req.body);
  res.redirect('/')
})

//changing incomplete todos to complete after button press on index
app.post('/complete/:id', function (req, res) {
  dal.finishTodo(req.params.id);
  res.redirect('/');
})

//editing todos
app.get('/edit/:id', function (req, res){
  let chosenItem = dal.getTodo(req.params.id)
  res.render('edititem', chosenItem)
})

app.post('/edit/:id', function(req, res){
  dal.editTodo(req.params.id, req.body)
  res.redirect('/');
})

//setting the port
app.set('port', 3000)

//listening at port and console log start
app.listen(app.get('port'), function () {
  console.log('Application has started at port 3000')
})
