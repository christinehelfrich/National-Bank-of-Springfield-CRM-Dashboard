import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { action } from '@storybook/addon-actions'
import ProfileDataService from 'services/summaryDashboard.service'

export const retrieveClientData = createAsyncThunk(
  'summary-dashboard/retrieveProfileData',
  async () => {
    const response = await ProfileDataService.getAll()
    return response.data
  },
)

const initialState = {
  isError: false,
  isLoading: false,
  clientData: [],
}

export const clientSlice = createSlice({
  name: 'clientSlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.clientData = []
    },
  },

  extraReducers: builder => {
    builder
      .addCase(retrieveClientData.pending, state => {
        state.isLoading = true
        state.isError = false
        console.log(state)
      })

      .addCase(retrieveClientData.fulfilled, (state, action) => {
        state.clientData = action.payload
        state.isLoading = false
        console.log(state)
      })

      .addCase(retrieveClientData.rejected, state => {
        state.isError = true
        state.isLoading = false
        console.log(state)
      })
  },
})

export const { reset } = clientSlice.actions

const { reducer } = clientSlice
export default reducer
