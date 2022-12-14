import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

import OpportunitiesDetailsDataService from 'services/opportunitiesDetailsData.service'

export const retrieveOpportunitiesDetailsData = createAsyncThunk(
  // check this
  'opportunitiesDetailsDataSlice/retrieveOpportunitiesDetailsData',
  async () => {
    const response = await OpportunitiesDetailsDataService.getAll()
    return response.data
  },
)

const initialState = {
  isError: false,
  isLoading: false,
  opportunitiesDetailsData: [],
  hasBeenFetched: false,
}

export const opportunitiesDetailsSlice = createSlice({
  name: 'opportunitiesDetailsSlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.opportunitiesDetailsData = []
    },
  },

  extraReducers: builder => {
    builder
      .addCase(retrieveOpportunitiesDetailsData.pending, state => {
        state.isLoading = true
        state.isError = false
      })

      .addCase(retrieveOpportunitiesDetailsData.fulfilled, (state, action) => {
        state.opportunitiesDetailsData = action.payload
        state.hasBeenFetched = true
        state.isLoading = false
      })

      .addCase(retrieveOpportunitiesDetailsData.rejected, state => {
        state.isError = true
        state.isLoading = false
      })
  },
})

export const { reset } = opportunitiesDetailsSlice.actions

const { reducer } = opportunitiesDetailsSlice
export default reducer
