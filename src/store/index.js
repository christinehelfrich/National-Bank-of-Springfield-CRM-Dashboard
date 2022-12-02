import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/features/counter/counterSlice'
import todosReducer from './todosSlice'
import profileReducer from './profileSlice'
import clientReducer from './clientSlice'
import summary1Reducer from './summary1Slice'
import summary2Reducer from './summary2Slice'
import outcomeMetricsReducer from './outcomeMetricsSlice'
import opportunitiesSummaryReducer from './opportunitiesSummarySlice'
import opportunitiesDetailsReducer from './opportunitiesDetailsSlice'

const reducers = {
  counter: counterReducer,
  todos: todosReducer,
  profileData: profileReducer,
  clientData: clientReducer,
  summary1Data: summary1Reducer,
  summary2Data: summary2Reducer,
  outcomMetricsData: outcomeMetricsReducer,
  opportunitiesSummaryData: opportunitiesSummaryReducer,
  opportunitiesDetailsData: opportunitiesDetailsReducer,
}

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})
