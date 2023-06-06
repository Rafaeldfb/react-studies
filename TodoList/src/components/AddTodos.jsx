import TodoInput from './TodosInput.jsx';
import FloatingButton from './atoms/FloatingButton.jsx';


function AddTodos(setTodoStateHandler) {
  return (
    <div id="addTodos">
      <div id="formTogglerWrapper">
          <FloatingButton />
        </div>

        <div id="todosForm">
          <TodoInput setTodoStateHandler={setTodoStateHandler} />
        </div>
    </div>
  )
}

export default AddTodos;