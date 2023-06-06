import AddTodos from "./components/AddTodos"
import TodosList from './components/TodosList';
import { TodosProvider } from './components/TodosProvider';
import { FormContextProvider } from "./components/FormContextProvider";

function App() {
  return (
    <TodosProvider>
      <div id="todoListApp" className='container'>
        <FormContextProvider>
          <AddTodos />
        </FormContextProvider>

        <TodosList />
      </div>
    </TodosProvider>
  )
}

export default App;
