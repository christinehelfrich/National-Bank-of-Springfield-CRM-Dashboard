import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import OpportunitiesSummaryDataService from 'services/opportunitiesSummaryData.service'

export const retrieveOpportunitiesSummaryData = createAsyncThunk(
  // check this
  'opportunitiesSummaryDataSlice/retrieveOpportunitiesSummaryData',
  async () => {
    const response = await OpportunitiesSummaryDataService.getAll()
    return response.data
  },
)

const initialState = {
  // define each variable inside object individually
  isError: false,
  isLoading: false,
  opportunitiesSummaryData: [],
}

export const opportunitiesSummarySlice = createSlice({
  name: 'opportunitiesSummarySlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.opportunitiesSummaryData = []
    },
  },

  extraReducers: builder => {
    builder
      .addCase(retrieveOpportunitiesSummaryData.pending, state => {
        state.isLoading = true
        state.isError = false
      })

      .addCase(retrieveOpportunitiesSummaryData.fulfilled, (state, action) => {
        state.opportunitiesSummaryData = action.payload

        state.isLoading = false

        // console.log(state.profileData)
      })

      .addCase(retrieveOpportunitiesSummaryData.rejected, state => {
        state.isError = true
        state.isLoading = false
      })
  },
})

export const { reset } = opportunitiesSummarySlice.actions

const { reducer } = opportunitiesSummarySlice
export default reducer
