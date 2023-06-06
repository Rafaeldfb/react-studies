// import { useState, useContext } from "react"
import { useTodosContext } from "./TodosProvider"
import TodoItem from "./TodoItem"

function TodosList() {
  const todos = useTodosContext();

  return (
    <div id="todosList">
      {
        todos.map(todoItem => {
          return (
            <TodoItem 
              key={todoItem.created_at} 
              todoItem={todoItem}
            />
          )
        })
      }
    </div>
  )
}

export default TodosList;