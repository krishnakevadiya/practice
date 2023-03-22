import TodoInput from "./TodoInput";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch('http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}');
      const data = await response.json();
      setTodos(data);
    }
    fetchTodos();
  }, []);


  return (
    <div>
    <TodoInput/>
    {/* add TodoInput component here */}
    {/* map through the todos array and display the tasks */}

    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
    </div>
  );
};

export default Todos;
