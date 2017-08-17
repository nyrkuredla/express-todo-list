//todo (hahaha): ids will be used to identify items to be changed to "complete" for sorting functions I already have. add edit function: link on index page next to complete button for each todo leads to a new 'edit' page (app.get('/edit/:id')) specific to the item id, with a form that when submitted has a post request (app.post('/edit/:id')).

//edit item function: by item id, it will change that item in the array. we need both new text and to identify the old text. function editItem (itemId, newText). newText will be set as the new text attribute using map. return todoArr.map(function (item) { if (itemId == item.id) {item.text = newText, return item}, else {return item}. Picking out and changing just one item based on the ID, in other words. Don't forget to export the function.

//back to app.post(edit...): dal.editItem(req.params.id, req.body.editItem) <- for this, see the form; req.body.editItem should identify the text

//also todo: refactor the server page using routes folder like we did in class.

let todos = require('./todos')

function getTodos () {

  return todos;
}


function addTodo (input) {
  let newTodo = input;
  newTodo.complete = false;
  newTodo.id = (todos.length + 1)
  console.log(newTodo.id)
  todos.unshift(newTodo)
  return todos
}

function finishTodo (itemId) {
  return todos.map(function(item){
    if(item.id == itemId){
      item.complete = true
      return item
    } else {
      return item
    }
  })
}


function getCompleteTodos () {
  let completeTodos = todos.filter(function (todo, idx, arr) {
    return todo.complete
  })
  return completeTodos
}

function getIncompleteTodos () {
  let incompleteTodos = todos.filter(function (todo, idx, arr) {
    return !todo.complete
  })
  return incompleteTodos
}

module.exports = {
  getTodos: getTodos,
  addTodo: addTodo,
  finishTodo: finishTodo,
  getCompleteTodos: getCompleteTodos,
  getIncompleteTodos: getIncompleteTodos
}
