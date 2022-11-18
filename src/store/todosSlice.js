import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { action } from '@storybook/addon-actions'
import TodoDataService from '../services/todos.service'
import { createSelector } from '@reduxjs/toolkit'

export const retrieveTodos = createAsyncThunk(
  'todos/retrieveTodos',
  async () => {
    const response = await TodoDataService.getAll()
    return response.data
  },
)

const initialState = {
  isError: false,
  isLoading: false,
  count: 0,
  completedCount: 0,
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todoSlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.count = 0
      state.completedCount = 0
      state.todos = []
    },
  },

  extraReducers: builder => {
    builder
      .addCase(retrieveTodos.pending, state => {
        state.isLoading = true
        state.isError = false
      })

      .addCase(retrieveTodos.fulfilled, (state, action) => {
        state.count = action.payload.length
        state.completedCount = action.payload.filter(
          todo => todo.completed,
        ).length
        state.todos = action.payload
        state.isLoading = false
      })

      .addCase(retrieveTodos.rejected, state => {
        state.isError = true
        state.isLoading = false
      })
  },
})

export const { reset } = todoSlice.actions
const { reducer } = todoSlice
export default reducer
