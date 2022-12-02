import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { action } from '@storybook/addon-actions'
import Summary2DataService from 'services/summary2Data.service'

export const retrieveSummary2Data = createAsyncThunk(
  'summary2Slice/retrieveSummary2Data',
  async () => {
    const response = await Summary2DataService.getAll()
    return response.data
  },
)

const initialState = {
  isError: false,
  isLoading: false,
  summary2Data: {},
}

export const summary2Slice = createSlice({
  name: 'summary2Slice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.summary2Data = {}
    },
  },

  extraReducers: builder => {
    builder
      .addCase(retrieveSummary2Data.pending, state => {
        state.isLoading = true
        state.isError = false
      })

      .addCase(retrieveSummary2Data.fulfilled, (state, action) => {
        state.summary2Data = action.payload
        state.isLoading = false
      })

      .addCase(retrieveSummary2Data.rejected, state => {
        state.isError = true
        state.isLoading = false
      })
  },
})

export const { reset } = summary2Slice.actions

const { reducer } = summary2Slice
export default reducer
