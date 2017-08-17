let todos = require('./todos')

function getTodos () {

  return todos;
}


function addTodo (input) {
  let newTodo = input;
  newTodo.complete = "false";
  todos.unshift(newTodo)
  return todos
}

function getCompleteTodos () {
  let completeTodos = todos.filter(function (todo, idx, arr) {
    return todo.complete === "true"
  })
  return completeTodos
}

function getIncompleteTodos () {
  let incompleteTodos = todos.filter(function (todo, idx, arr) {
    return todo.complete !== "true"
  })
  return incompleteTodos
}

module.exports = {
  getTodos: getTodos,
  addTodo: addTodo,
  getCompleteTodos: getCompleteTodos,
  getIncompleteTodos: getIncompleteTodos
}
