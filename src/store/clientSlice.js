import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import ClientDataService from 'services/clientData.service'

export const retrieveClientData = createAsyncThunk(
  'clientSlice/retrieveClientData',
  async () => {
    const response = await ClientDataService.getAll()
    return response.data
  },
)

const initialState = {
  isError: false,
  isLoading: false,
  clientData: {},
  credit_only_relationships: 0,
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
      })

      .addCase(retrieveClientData.fulfilled, (state, action) => {
        state.clientData = action.payload

        state.isLoading = false
      })

      .addCase(retrieveClientData.rejected, state => {
        state.isError = true
        state.isLoading = false
      })
  },
})

export const { reset } = clientSlice.actions

const { reducer } = clientSlice
export default reducer
