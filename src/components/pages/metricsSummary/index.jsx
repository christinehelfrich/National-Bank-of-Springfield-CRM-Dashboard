import './style.css'

import { useAppSelector, useDispatchHook } from '@/hooks/useReduxHooks'

import { NbosText } from 'components/atoms/NbosText'
import { NbosSelector } from 'components/molecules/NbosSelector'
import { NbosBarchart } from 'components/molecules/NbosBarchart'
import { outcomeMetricsTable } from 'stories/data/outcomeMetricsTable'

import { users } from 'stories/data/testData-users'
import { retrieveOutcomeMetricsData } from '@/store/outcomeMetricsSlice'

import Grid from '@mui/material/Grid'
import React, { useEffect, useState } from 'react'

export function MetricsSummary() {
  const dispatch = useDispatchHook()
  const outcomeMetricsData = useAppSelector(state => state.outcomMetricsData)

  const clientId = 1

  useEffect(() => {
    async function fetchdata() {
      await dispatch(retrieveOutcomeMetricsData())
    }
    fetchdata()
    // ([])
  }, [])

  console.log(outcomeMetricsData.outcomeMetricsData)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Metrics Summary</h1>
      </header>

      <div className="App-line">
        <section className="App-main">
          <Grid
            direction="row"
            container
            spacing={{ xs: 3, md: 4 }}
            columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}
            rows={{ xs: 3, sm: 2, md: 2, lg: 2, xl: 2 }}
          >
            <Grid
              item
              xs={1}
              sm={1}
              md={1}
              lg={1}
              xl={1}
              style={{ paddingTop: '3rem', paddingLeft: '3rem' }}
            >
              <NbosText
                size="xl"
                text={`${users[clientId].tl_first_name} ${users[clientId].tl_last_name} VS This Time Last Year`}
              />
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <NbosSelector
                bgColor="#1B6AF8"
                labels={['Outcome Metrics', 'Behavior Metrics']}
                onChange={alignment => {
                  console.log(alignment)
                }}
              />
            </Grid>
            <Grid item xs={1} sm={2} md={2} lg={2} xl={2}>
              <NbosBarchart
                data={outcomeMetricsData.outcomeMetricsData}
                categories={[
                  'Loan Production',
                  'Deposit Growth',
                  'TM Growth',
                  'New Clients',
                ]}
                clientId={1}
                bgColor="#1B6AF8"
                datasetOneLabel="RM"
                datasetTwoLabel="This Time Last Year"
              />
            </Grid>
          </Grid>
        </section>
      </div>
    </div>
  )
}
