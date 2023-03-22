import React, { useState } from 'react';
import useTodos from '../hooks/useTodos';

function Todos1(props) {
  const [newTodo, setNewTodo] = useState('');
  const { data, addData, clearData, removeDataByIndex } = useTodos(props.initialData);

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  function handleAdd() {
    addData(newTodo);
    setNewTodo('');
  }

  return (
    <div data-testid="todos1">
      <h1 data-testid="todos1-label">Todos-1</h1>
      <input data-testid="todos1-input" value={newTodo} onChange={handleChange} />
      <button data-testid="todos1-add" onClick={handleAdd}>Add Task</button>
      {data.map((todo, index) => (
        <div key={index}>
          <div data-testid="todos1-element">{todo}</div>
          <button  data-testid="todos1-delete" onClick={() => removeDataByIndex(index)}>Delete</button>
        </div>
      ))}
      <button data-testid="todos1-clear" onClick={clearData}>Clear Todos</button>
    </div>
  );
}

export default Todos1