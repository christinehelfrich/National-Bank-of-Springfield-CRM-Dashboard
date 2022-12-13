import './style.css'

import { useAppSelector, useDispatchHook } from '@/hooks/useReduxHooks'

import { retrieveProfileData } from '@/store/profileSlice'
import { retrieveClientData } from '@/store/clientSlice'
import { retrieveSummary1Data } from 'store/summary1Slice'
import { retrieveSummary2Data } from 'store/summary2Slice'

import { NbosSummary1 } from 'components/organisms/NbosSummary1'
import { NbosClientOverview } from 'components/organisms/NbosClientOverview'
import { NbosProfile } from 'components/organisms/NbosProfile'
import { NbosSummary2 } from 'components/organisms/NbosSummary2'

import Grid from '@mui/material/Grid'
import React, { useEffect, useState } from 'react'
import { convertDateInParams } from 'utilities/convertNum'

export function SummaryDashboard() {
  const dispatch = useDispatchHook()

  const profileData = useAppSelector(state => state.profileData)
  const clientData = useAppSelector(state => state.clientData)
  const summary1Data = useAppSelector(state => state.summary1Data)
  const summary2Data = useAppSelector(state => state.summary2Data)

  useEffect(() => {
    async function fetchdata() {
      await dispatch(retrieveProfileData())
      await dispatch(retrieveClientData())
      await dispatch(retrieveSummary1Data())
      await dispatch(retrieveSummary2Data())
    }
    fetchdata()
  }, [])

  return (
    <div className="App">
      <div className="App-line">
        <section className="App-main">
          <Grid
            direction="row"
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 1, sm: 3, md: 4, lg: 4, xl: 4 }}
            rows={{ xs: 4, sm: 3, md: 3, lg: 3, xl: 3 }}
            alignItems="stretch"
          >
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <NbosProfile userData={profileData.profileData} />
            </Grid>
            <Grid
              item
              xs={1}
              sm={2}
              md={3}
              lg={3}
              xl={3}
              sx={{ height: '100%' }}
            >
              <NbosClientOverview pageData={clientData.clientData} />

              <NbosSummary1 pageData={summary1Data.summary1Data} />

              <NbosSummary2 pageData={summary2Data.summary2Data} />
            </Grid>
          </Grid>
        </section>
      </div>
    </div>
  )
}
