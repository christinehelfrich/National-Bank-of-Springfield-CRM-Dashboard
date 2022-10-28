import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/features/counter/counterSlice'

const reducers = {
  counter: counterReducer,
}

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})
