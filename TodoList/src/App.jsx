import { useState } from 'react'
// import { setTodos, getTodos, removeSingleTodo } from "./assets/modules/todosDataHandler"; 

import TodoItem from './components/TodoItem'
import AddTodos from "./components/AddTodos"
import { TodosProvider } from './components/TodosProvider';
import { FormContextProvider } from "./components/FormContextProvider";

function App() {
  return (
    <TodosProvider>
      <div id="todoListApp" className='container'>
        <FormContextProvider>
          <AddTodos setTodoStateHandler={setTodoStateHandler} />
        </FormContextProvider>

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
    </TodosProvider>
  )

  // const [todos, setTodosState] = useState(getTodos());

  // function setTodoStateHandler(todo) {
  //   setTodos(todo.body, todo.priority);
  //   setTodosState(getTodos())
  // }

  // function removeTodoHandler(todo) {
  //   removeSingleTodo(todo);
  //   setTodosState(getTodos())
  // } 

  // return (
  //   <div id="todoListApp" className='container'>
  //     <FormContextProvider>
  //       <AddTodos setTodoStateHandler={setTodoStateHandler} />
  //     </FormContextProvider>

  //     <div id="todosList">
  //       {
  //         todos.map(todoItem => {
  //           return (
  //             <TodoItem 
  //               key={todoItem.created_at} 
  //               todoItem={todoItem}
  //               removeTodoHandler={removeTodoHandler} 
  //             />
  //           )
  //         })
  //       }
  //     </div>
  //   </div>
  // )
}

export default App;
