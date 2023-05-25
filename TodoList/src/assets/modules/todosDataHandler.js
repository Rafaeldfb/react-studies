// Todos data: object[]

/**
 * Get all todos stored at localStorage
 * @returns {Array<Objects>}
 */
function getTodos() {
  initializerLocalStorageTodos();

  return JSON.parse(localStorage.getItem('todos'));
}

/**
 * Set a todo at localStorage with params this params.
 * @param {String} todoBody the main content of a Todo entry.
 * @param {String} priority the priority of that Todo entry.
 * @returns {Boolean} when all done its return true.
 */
function setTodos(todoBody, priority) {
  initializerLocalStorageTodos(); 
  if (todoBody.length === 0) return false;

  const todo = {
    body: todoBody,
    priority: priority,
    finished: false,
    created_at: Date.now(),
  }
  
  let allTodos = JSON.parse(localStorage.getItem('todos'));
  allTodos.push(todo);
  localStorage.setItem('todos', JSON.stringify(allTodos));

  return true
}

function removeSingleTodo(todo) {
  if (!todo || !todo.created_at) return false;

  const updatedTodos = getTodos().filter(item => item.created_at != todo.created_at)

  localStorage.removeItem('todos')
  localStorage.setItem('todos', JSON.stringify(updatedTodos))

  return true;
}

/**
 * Initialize Todos entry at localStorage as a empty array if it doesn't exists.
 * @returns {Boolean}
 */
function initializerLocalStorageTodos() {
  if (!localStorage.getItem('todos')) localStorage.setItem('todos', '[]');

  return true;
}

export {getTodos, setTodos, removeSingleTodo}