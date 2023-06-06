import TodoInput from './TodosInput.jsx';
import FloatingButton from './atoms/FloatingButton.jsx';


function AddTodos() {
  return (
    <div id="addTodos">
      <div id="formTogglerWrapper">
          <FloatingButton />
        </div>

        <div id="todosForm">
          <TodoInput />
        </div>
    </div>
  )
}

export default AddTodos;