import { useState } from "react";
import { useTodosContext, useTodosContextUpdate } from "./TodosProvider";
import { useFormActiveContext } from "./FormContextProvider"

function TodoInput(callback) {
  const activeForm = useFormActiveContext();

  const [todo, setTodo] = useState({body: '', priority: 'normal'});

  function onSubmitBtn() {
    if (todo.body.length === 0) return null;

    callback.setTodoStateHandler(todo);
    setTodo({body: '', priority: 'normal'});
  }
  
  return (
    <div id="todosFomrWrapper" className={`${activeForm ? 'slideInLeft' : 'slideOutLeft'} slideEffect`}>
      <div className="formGroup">
        <label htmlFor="#bodyTodo">What you need to do?</label>

        <input 
          id="bodyTodo" 
          type="text" 
          value={todo.body} 
          onChange={(event) => setTodo({...todo, body: event.target.value})}
        />
      </div>

      <div className="formGroup">
        <label htmlFor="#priorityTodo">What priority it has?</label>

        <select 
          id="priorityTodo" 
          name="priority" 
          value={todo.priority}
          onChange={(event) => setTodo({...todo, priority: event.target.value})}
        >
          <option value="high">high</option>
          <option value="normal">normal</option>
          <option value="low">low</option>
        </select>
      </div>

      <div className="formGroup">
        <button onClick={onSubmitBtn} disabled={todo.body.trim().length === 0 ? true : false}>Add</button>
      </div>
    </div>
  );
}

export default TodoInput;