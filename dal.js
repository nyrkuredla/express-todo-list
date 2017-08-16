let todos = require('./todos')

function getTodos () {
  return todos;
}


function addTodo (input) {
  let newTodo = input;
  newTodo.complete = "false";
  todos.unshift(newTodo)
  console.log(todos)
  return todos
}

function getCompleteTodos () {
  let completeTodos = todos.filter(function (todo, idx, arr) {
    return todo.complete === "true"
  })
  console.log(completeTodos)
}

module.exports = {
  getTodos: getTodos,
  addTodo: addTodo,
  getCompleteTodos: getCompleteTodos
}
