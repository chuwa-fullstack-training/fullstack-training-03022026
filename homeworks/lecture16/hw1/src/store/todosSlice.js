import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    checkAll: (state) => {
      state.todos = state.todos.map((todo) => ({ ...todo, checked: true }));
    },
    uncheckAll: (state) => {
      state.todos = state.todos.map((todo) => ({ ...todo, checked: false }));
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo, i) =>
        i === action.payload ? { ...todo, checked: !todo.checked } : todo,
      );
    },
  },
});

export const { addTodo, checkAll, uncheckAll, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
