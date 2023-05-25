import { useState } from 'react'
import { setTodos, getTodos, removeSingleTodo } from "./assets/modules/todosDataHandler"; 

import TodoItem from './components/TodoItem'
import TodoInput from './components/TodosInput';

function App() {
  const [todos, setTodosState] = useState(getTodos());

  function setTodoStateHandler(todo) {
    setTodos(todo.body, todo.priority);
    setTodosState(getTodos())
  }

  function removeTodoHandler(todo) {
    removeSingleTodo(todo);
    setTodosState(getTodos())
  } 

  return (
    <div id="todoListApp" className='container'>
      <div id="todosForm">
        <TodoInput setTodoStateHandler={setTodoStateHandler} />
      </div>

      <div id="todosList">
        {
          todos.map(todoItem => {
            return (
              <TodoItem 
                key={todoItem.created_at} 
                todoItem={todoItem}
                removeTodoHandler={removeTodoHandler} 
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App
