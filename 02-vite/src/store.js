import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const todoSlice = createSlice({
  name: 'todo',

  // Les données
  initialState: {
    items: [
      { id: 1, name: 'Faire les courses', done: false },
      { id: 2, name: 'Travailler', done: true },
      { id: 3, name: 'Surveiller Fiorella', done: true }
    ],
    loading: false,
  },

  // Les actions sur ces données
  reducers: {
    addTodo: (state, action) => {
      const id = Math.random()
      const newTodo = { id, name: action.payload, done: false }
      state.items.push(newTodo)
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        items: state.items.filter(t => t.id !== action.payload)
      };
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(t => t.id === action.payload);
      todo.done = !todo.done;
    }
  },

  // 
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.loading = true
    }),
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        items: action.payload.map(todo => ({
          ...todo,
          name: todo.title,
          done: todo.completed
        }))
      }
    })
  },

  // Les sélecteurs permettent de "filtrer" les données
  selectors: {
    allTodos: (state) => state.items,
    countTodo: (state) => state.items.length,
    completedTodos: (state) => state.items.filter(t => t.done),
    pending: (state) => state.loading
  }
});

export const { allTodos, countTodo, completedTodos, pending } = todoSlice.selectors
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions

// Pour la partie API (pas obligatoire et peut être dans le composant)
export const fetchTodos = createAsyncThunk(
  'todo/fetchAll',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  }
);

// On va créer le store global
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
});
