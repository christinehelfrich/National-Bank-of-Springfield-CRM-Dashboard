import './style.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useAppSelector, useDispatchHook } from '@/hooks/useReduxHooks'
import { reset, retrieveProfileData } from '@/store/profileSlice'
import { retrieveClientData } from '@/store/clientSlice'
import { retrieveSummaryData } from '@/store/summarySlice'

import React, { useEffect } from 'react'

export function SummaryDashboard() {
  const dispatch = useDispatchHook()

  const profileData = useAppSelector(state => state.profileData.profileData)
  const clientData = useAppSelector(state => state.clientData.clientData)
  // const profileData = useAppSelector(state => state.profileData.profileData)
  console.log(profileData)

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

          <Button onClick={() => dispatch(retrieveClientData())}>
            Retrieve Client Data
          </Button>

          <Button onClick={() => dispatch(retrieveSummaryData())}>
            Retrieve Summary Data
          </Button>
          <br />
          <Button onClick={() => dispatch(reset())}>Reset</Button>
          <br />

          <Link to="/" className="App-link">
            Home
          </Link>

          <p>Profile Data:</p>
          <br />
          <div>
            {clientData.map(item => (
              <p key={item.id}>{item.title}</p>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
