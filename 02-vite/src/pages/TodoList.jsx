import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, allTodos, countTodo, deleteTodo, toggleTodo } from '../store';

const Header = () => {
  const count = useSelector(countTodo)

  return (
    <h1>{count} todos</h1>
  )
}

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {todo.name}
      <input type="checkbox" checked={todo.done} onChange={() => dispatch(toggleTodo(todo.id))} />
      <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
    </div>
  )
}

const TodoForm = ({ onAdded }) => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');
  const handleTodo = (e) => {
    e.preventDefault()

    // onAdded(newTodo) // Envoi une info / événement au parent
    dispatch(addTodo(newTodo))
  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={(e) => handleTodo(e)}>Ajouter</button>
    </form>
  );
}

function TodoList() {
  const todos = useSelector(allTodos)

  return (
    <>
      <Header />

      {todos.map(todo =>
        <Todo key={todo.id} todo={todo} />
      )}

      <TodoForm onAdded={(e) => setTodos([ ...todos, e ])} />
    </>
  )
}

export default TodoList
