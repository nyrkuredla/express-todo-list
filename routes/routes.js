const express = require('express')
const router = express.Router()
const dal = require('../dal')

router
  .route('/')
  .get(function (req, res) {
    const completeTodos = dal.getCompleteTodos();
    const newTodos = dal.getIncompleteTodos();
    res.render('index', { incomplete: newTodos, complete: completeTodos})
  })

router
  .route('/todos')
  .post(function (req, res) {
  dal.addTodo(req.body);
  res.redirect('/')
    })

router
  .route('/complete/:id')
  .post(function (req, res) {
    dal.finishTodo(req.params.id);
    res.redirect('/');
  })

router
  .route('/edit/:id')
  .get(function (req, res){
    let chosenItem = dal.getTodo(req.params.id)
    res.render('edititem', chosenItem)
  })
  .post(function(req, res){
    dal.editTodo(req.params.id, req.body)
    res.redirect('/');
  })

module.exports = router
