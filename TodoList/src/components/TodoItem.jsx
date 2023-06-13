import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTodosContextUpdate } from './TodosProvider';
import Checkbox from './atoms/Checkbox';
import RemoveButton from './atoms/RemoveButton';

function TodoItem({ todoItem }) {
  TodoItem.propTypes = {
    todoItem: PropTypes.object,
    body: PropTypes.string,
    priority: PropTypes.string,
    finished: PropTypes.bool,
    removeTodoHandler: PropTypes.func,
  };

  const [finished, setFinished] = useState(todoItem.finished)
  const todosUpdate = useTodosContextUpdate()

  function remove() {
    todosUpdate.remove(todoItem)
  }

  function setFinishedHandler() {
    setFinished(!finished);
  }

  return (
    <div className={'todoListItem'}>
      <div className={'customCheckbox'}>
        <Checkbox 
          name="finished" 
          setFinishedHandler={setFinishedHandler} 
          checkedState={finished} 
          label={finished ? 'Done' : 'To do'}
          size='auto'
        />
      </div>

      <p className={finished ? 'textLineThrough' : ''}>
        {todoItem.body}
      </p>

      <span className={['todoPriority', todoItem.priority]}>{todoItem.priority}</span>

      {/* <button title="Remove" onClick={remove}> X </button> */}
      <RemoveButton 
        size={'1rem'} 
        colorProperty={'--color__primary_light'} 
        callback={remove}
        title={'Delete this activity'}
      />
    </div>
  );
}

export default TodoItem