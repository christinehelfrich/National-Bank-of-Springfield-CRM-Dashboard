import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { action } from '@storybook/addon-actions'
import Summary1DataService from 'services/summary1Data.service'

export const retrieveSummary1Data = createAsyncThunk(
  'summary1Slice/retrieveSummary1Data',
  async () => {
    const response = await Summary1DataService.getAll()
    return response.data
  },
)

const initialState = {
  summary1Data: {},
}

export const summary1Slice = createSlice({
  name: 'summary1Slice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.summary1Data = {}
    },
  },

  extraReducers: builder => {
    builder
      .addCase(retrieveSummary1Data.pending, state => {
        state.isLoading = true
        state.isError = false
      })

      .addCase(retrieveSummary1Data.fulfilled, (state, action) => {
        state.summary1Data = action.payload
        state.isLoading = false
      })

      .addCase(retrieveSummary1Data.rejected, state => {
        state.isError = true
        state.isLoading = false
      })
  },
})

export const { reset } = summary1Slice.actions

const { reducer } = summary1Slice
export default reducer
