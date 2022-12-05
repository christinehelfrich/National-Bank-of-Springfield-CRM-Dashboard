import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

import BehaviorMetricsDataService from 'services/behaviorMetricsData.service'

export const retrieveBehaviorMetricsData = createAsyncThunk(
  // check this
  'behaviorMetricsSlice/retrieveBehaviorMetricsData',
  async () => {
    const response = await BehaviorMetricsDataService.getAll()

    return response.data
  },
)

const initialState = {
  // define each variable inside object individually
  isError: false,
  isLoading: false,
  behaviorMetricsData: [],
}

export const behaviorMetricsSlice = createSlice({
  name: 'behaviorMetricsSlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.behaviorMetricsData = []
    },
  },

  extraReducers: builder => {
    builder
      .addCase(retrieveBehaviorMetricsData.pending, state => {
        state.isLoading = true
        state.isError = false
      })

      .addCase(retrieveBehaviorMetricsData.fulfilled, (state, action) => {
        state.behaviorMetricsData = action.payload

        state.isLoading = false

        // console.log(state.profileData)
      })

      .addCase(retrieveBehaviorMetricsData.rejected, state => {
        state.isError = true
        state.isLoading = false
      })
  },
})

export const { reset } = behaviorMetricsSlice.actions

const { reducer } = behaviorMetricsSlice
export default reducer
