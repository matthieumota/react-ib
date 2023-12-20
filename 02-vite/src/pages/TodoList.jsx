import { useState } from 'react';

const Header = ({ todos }) => <h1>{todos.length} todos</h1>
const Todo = ({ todo }) => <div>{todo.name}</div>
const TodoForm = ({ onAdded }) => {
  const [newTodo, setNewTodo] = useState('');
  const addTodo = () => {
    onAdded(newTodo) // Envoi une info / événement au parent
  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={() => addTodo()}>Ajouter</button>
    </form>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Faire les courses', done: false },
    { id: 2, name: 'Travailler', done: true },
    { id: 3, name: 'Surveiller Fiorella', done: true }
  ]);

  return (
    <>
      <Header todos={todos} />

      {todos.map(todo =>
        <Todo key={todo.id} todo={todo} />
      )}

      <TodoForm onAdded={(e) => setTodos([ ...todos, e ])} />
    </>
  )
}

export default TodoList
