import PropTypes from 'prop-types';
import { useState } from 'react';
import Checkbox from './atoms/Checkbox';

function TodoItem({todoItem, removeTodoHandler}) {
  TodoItem.propTypes = {
    todoItem: PropTypes.object,
    body: PropTypes.string,
    priority: PropTypes.string,
    finished: PropTypes.bool,
    removeTodoHandler: PropTypes.func,
  };

  const [finished, setFinished] = useState(todoItem.finished)

  function remove() {
    removeTodoHandler(todoItem)
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

      <button title="Remove" onClick={remove}> X </button>
    </div>
  );
}

export default TodoItem