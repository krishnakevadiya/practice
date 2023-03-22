import { useState } from 'react';

function useTodos(initialData) {
  const [data, setData] = useState(initialData || ['Task1']);

  function addData(newTodo) {
    setData([...data, newTodo]);
  }

  function clearData() {
    setData([]);
  }

  function removeDataByIndex(index) {
    setData(data.filter((_, i) => i !== index));
  }

  return { data, addData, clearData, removeDataByIndex };
}

export default useTodos;