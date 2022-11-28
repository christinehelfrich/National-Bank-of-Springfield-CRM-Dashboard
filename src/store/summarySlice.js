import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { action } from '@storybook/addon-actions'
import ProfileDataService from 'services/summaryDashboard.service'

export const retrieveSummaryData = createAsyncThunk(
  'summary-dashboard/retrieveProfileData',
  async () => {
    const response = await ProfileDataService.getAll()
    return response.data
  },
)

const initialState = {
  isError: false,
  isLoading: false,
  summaryData: [],
}

export const summarySlice = createSlice({
  name: 'summarySlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.summaryData = []
    },
  },

  extraReducers: builder => {
    builder
      .addCase(retrieveSummaryData.pending, state => {
        state.isLoading = true
        state.isError = false
        console.log(state)
      })

      .addCase(retrieveSummaryData.fulfilled, (state, action) => {
        state.summaryData = action.payload
        state.isLoading = false
        console.log(state)
      })

      .addCase(retrieveSummaryData.rejected, state => {
        state.isError = true
        state.isLoading = false
        console.log(state)
      })
  },
})

export const { reset } = summarySlice.actions

const { reducer } = summarySlice
export default reducer
