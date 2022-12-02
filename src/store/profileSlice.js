import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

import ProfileDataService from 'services/profileData.service'

export const retrieveProfileData = createAsyncThunk(
  // check this
  'profileSlice/retrieveProfileData',
  async () => {
    const response = await ProfileDataService.getAll()

    return response.data
  },
)

const initialState = {
  // define each variable inside object individually
  isError: false,
  isLoading: false,
  profileData: {},
}

export const profileSlice = createSlice({
  name: 'profileSlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.profileData = []
    },
  },

  extraReducers: builder => {
    builder
      .addCase(retrieveProfileData.pending, state => {
        state.isLoading = true
        state.isError = false
      })

      .addCase(retrieveProfileData.fulfilled, (state, action) => {
        state.profileData = action.payload

        state.isLoading = false
        // console.log(state.profileData)
      })

      .addCase(retrieveProfileData.rejected, state => {
        state.isError = true
        state.isLoading = false
      })
  },
})

export const { reset } = profileSlice.actions

const { reducer } = profileSlice
export default reducer
