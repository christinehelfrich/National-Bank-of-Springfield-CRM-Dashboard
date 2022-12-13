import './style.css'

import { useAppSelector, useDispatchHook } from '@/hooks/useReduxHooks'

import { retrieveProfileData } from '@/store/profileSlice'
import { retrieveClientData } from '@/store/clientSlice'
import { retrieveSummary1Data } from 'store/summary1Slice'
import { retrieveSummary2Data } from 'store/summary2Slice'

import ClipLoader from 'react-spinners/ClipLoader'
import { NbosSummary1 } from 'components/organisms/NbosSummary1'
import { NbosClientOverview } from 'components/organisms/NbosClientOverview'
import { NbosProfile } from 'components/organisms/NbosProfile'
import { NbosSummary2 } from 'components/organisms/NbosSummary2'

import Grid from '@mui/material/Grid'
import React, { useEffect, useState } from 'react'
import { convertDateInParams } from 'utilities/convertNum'

export function SummaryDashboard() {
  const dispatch = useDispatchHook()

  const profileData = useAppSelector(state => state.profileData.profileData)
  const profileIsLoading = useAppSelector(state => state.profileData.isLoading)
  const clientData = useAppSelector(state => state.clientData.clientData)
  const clientIsLoading = useAppSelector(state => state.clientData.isLoading)
  const summary1Data = useAppSelector(state => state.summary1Data.summary1Data)
  const summary1IsLoading = useAppSelector(
    state => state.summary1Data.isLoading,
  )
  const summary2Data = useAppSelector(state => state.summary2Data.summary2Data)
  const summary2IsLoading = useAppSelector(
    state => state.summary2Data.isLoading,
  )

  const state = useAppSelector(state => state)

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
              {profileIsLoading ? (
                <ClipLoader
                  color="blue"
                  loading={profileIsLoading}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <NbosProfile userData={profileData} />
              )}
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
              {clientIsLoading ? (
                <ClipLoader
                  color="blue"
                  loading={clientIsLoading}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <NbosClientOverview pageData={clientData} />
              )}
              {summary1IsLoading ? (
                <ClipLoader
                  color="blue"
                  loading={summary1IsLoading}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <NbosSummary1 pageData={summary1Data} />
              )}
              {summary2IsLoading ? (
                <ClipLoader
                  color="blue"
                  loading={summary2IsLoading}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <NbosSummary2 pageData={summary2Data} />
              )}
            </Grid>
          </Grid>
        </section>
      </div>
    </div>
  )
}
