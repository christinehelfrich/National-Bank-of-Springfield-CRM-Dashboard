import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { action } from '@storybook/addon-actions'
import ProfileDataService from 'services/summaryDashboard.service'

export const retrieveProfileData = createAsyncThunk(
  'summary-dashboard/retrieveProfileData',
  async () => {
    const response = await ProfileDataService.getAll()
    return response.data
  },
)

const initialState = {
  isError: false,
  isLoading: false,
  count: 0,
  profileData: [],
}

export const profileSlice = createSlice({
  name: 'profileSlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.count = 0
      state.profileData = []
    },
  },

  extraReducers: builder => {
    builder
      .addCase(retrieveProfileData.pending, state => {
        state.isLoading = true
        state.isError = false
        console.log(state)
      })

      .addCase(retrieveProfileData.fulfilled, (state, action) => {
        state.count = action.payload.length
        state.profileData = action.payload
        state.isLoading = false
        console.log(state)
      })

      .addCase(retrieveProfileData.rejected, state => {
        state.isError = true
        state.isLoading = false
        console.log(state)
      })
  },
})

export const { reset } = profileSlice.actions

const selectProfileData = state => state.profileData.profileData

export const completedProfileDataSelector = createSelector(profileData =>
  profileData.filter(profileData => profileData.completed),
)

export const completedProfileDataCountSelector = createSelector(
  [selectProfileData],
  profileData =>
    profileData.filter(profileData => profileData.completed).length,
)

const { reducer } = profileSlice
export default reducer
