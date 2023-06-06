import PropTypes from 'prop-types';
import { createContext, useContext, useState } from "react";
import { setTodos, getTodos, removeSingleTodo } from "../assets/modules/todosDataHandler"; 


// Custom Hook - Todos State and Update Provider
const TodosContext = createContext();
const TodosUpdateContext = createContext();
function useTodosContext() { return useContext(TodosContext) }
function useTodosContextUpdate() { return useContext(TodosUpdateContext) }


// Provider Component
function TodosProvider({ children }) {
  TodosProvider.propTypes = { children: PropTypes.node };

  const [todos, setTodosState] = useState(getTodos());

  const updateTodos = {
    add: function setTodosStateHandler(todo) {
      setTodos(todo.body, todo.priority);
      setTodosState(getTodos())
    },
    remove: function removeTodosHandler(todo) {
      removeSingleTodo(todo);
      setTodosState(getTodos())
    },
  }

  return (
    <TodosContext.Provider value={todos}>
      <TodosUpdateContext.Provider value={updateTodos}>
        {children}
      </TodosUpdateContext.Provider>
    </TodosContext.Provider>
  )
}

export {TodosProvider, useTodosContext, useTodosContextUpdate }