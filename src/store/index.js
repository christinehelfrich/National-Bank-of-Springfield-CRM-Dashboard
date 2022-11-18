import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/features/counter/counterSlice'
import todosReducer from './todosSlice'

const reducers = {
  counter: counterReducer,
  todos: todosReducer,
}

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})
