import { createSlice } from "@reduxjs/toolkit"
import { current } from "@reduxjs/toolkit"

const todoReducer = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    inputValue: '',
    toggleAlert: false
  },
  reducers: {
    setAddTodo(state, action) {
      state.todos.push(action.payload)
    },
    setRemoveTodo(state, action) {
      const index = state.todos.findIndex(item => action.payload === item.id)
      state.todos.splice(index, 1)
    },
    setInputValue(state, action) {
      state.inputValue = action.payload
    },
    setToggleAlert(state, action) {
      state.todos.map(todo =>
        todo.id === action.payload ? todo.complete = !todo.complete : null
      )
    }
  }
})

export default todoReducer.reducer
export const { setAddTodo, setInputValue, setRemoveTodo, setToggleAlert } = todoReducer.actions