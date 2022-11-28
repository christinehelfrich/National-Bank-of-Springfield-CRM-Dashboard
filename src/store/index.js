import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/features/counter/counterSlice'
import todosReducer from './todosSlice'
import profileReducer from './profileSlice'
import clientReducer from './clientSlice'
import summaryReducer from './summarySlice'

const reducers = {
  counter: counterReducer,
  todos: todosReducer,
  profileData: profileReducer,
  clientData: clientReducer,
  summaryData: summaryReducer,
}

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})
