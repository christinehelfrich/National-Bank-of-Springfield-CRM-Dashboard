import './style.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useAppSelector, useDispatchHook } from '@/hooks/useReduxHooks'
import {
  reset,
  retrieveProfileData,
  completedProfileDataCountSelector,
} from '@/store/profileSlice'

import React, { useEffect } from 'react'

export function SummaryDashboard() {
  const dispatch = useDispatchHook()
  const count = useAppSelector(state => state.profileData.count)
  const completedCount = useAppSelector(state => {
    return completedProfileDataCountSelector(state)
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Summary Dashboard</h1>
      </header>

      <div className="App-line">
        <section className="App-main">
          <Button onClick={() => dispatch(retrieveProfileData())}>
            Retrieve Profile Data
          </Button>

          <Button
            onClick={() => {
              console.log('clicked')
            }}
          >
            Retrieve Client Data
          </Button>

          <Button
            onClick={() => {
              console.log('clicked')
            }}
          >
            Retrieve Summary Data
          </Button>
          <br />

          <Link to="/" className="App-link">
            Home
          </Link>

          <p>Profile Data:</p>
          <br />
          <p>{count}</p>
        </section>
      </div>
    </div>
  )
}
