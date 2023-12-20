import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',

  // Les données
  initialState: [
    { id: 1, name: 'Faire les courses', done: false },
    { id: 2, name: 'Travailler', done: true },
    { id: 3, name: 'Surveiller Fiorella', done: true }
  ],

  // Les actions sur ces données
  reducers: {
    addTodo: (state, action) => {
      const id = Math.random()
      const newTodo = { id, name: action.payload, done: false }
      state.push(newTodo)
    },
  },

  // Les sélecteurs permettent de "filtrer" les données
  selectors: {
    allTodos: (state) => state,
    countTodo: (state) => state.length,
    completedTodos: (state) => state.filter(t => t.done)
  }
});

export const { allTodos, countTodo, completedTodos } = todoSlice.selectors
export const { addTodo } = todoSlice.actions

// On va créer le store global
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
});
