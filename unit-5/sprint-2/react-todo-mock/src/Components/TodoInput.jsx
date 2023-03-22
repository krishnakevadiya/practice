import React from 'react';

function TodoInput({ addTodo }) {
  const [task, setTask] = useState('');

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTodo({ title: task, status: false });
    setTask('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        data-testid="todo-input"
      />
      <button type="submit" data-testid="add-button">
        Add Todo
      </button>
    </form>
  );
}

export default TodoInput;
