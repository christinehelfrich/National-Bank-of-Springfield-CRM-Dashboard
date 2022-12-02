import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

import OutcomeMetricsDataService from 'services/outcomeMetricsData.service'

export const retrieveOutcomeMetricsData = createAsyncThunk(
  // check this
  'outcomeMetricsSlice/retrieveOutcomeMetricsData',
  async () => {
    const response = await OutcomeMetricsDataService.getAll()

    return response.data
  },
)

const initialState = {
  // define each variable inside object individually
  isError: false,
  isLoading: false,
  outcomeMetricsData: [],
}

export const outcomeMetricsSlice = createSlice({
  name: 'outcomeMetricsSlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.outcomeMetricsData = []
    },
  },

  extraReducers: builder => {
    builder
      .addCase(retrieveOutcomeMetricsData.pending, state => {
        state.isLoading = true
        state.isError = false
      })

      .addCase(retrieveOutcomeMetricsData.fulfilled, (state, action) => {
        state.outcomeMetricsData = action.payload

        state.isLoading = false

        // console.log(state.profileData)
      })

      .addCase(retrieveOutcomeMetricsData.rejected, state => {
        state.isError = true
        state.isLoading = false
      })
  },
})

export const { reset } = outcomeMetricsSlice.actions

const { reducer } = outcomeMetricsSlice
export default reducer
