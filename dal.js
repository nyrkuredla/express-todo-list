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

module.exports = {
  getTodos: getTodos,
  addTodo: addTodo
}
