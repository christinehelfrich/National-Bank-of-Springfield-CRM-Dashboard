import './style.css'

import { useAppSelector, useDispatchHook } from '@/hooks/useReduxHooks'

import { NbosText } from 'components/atoms/NbosText'
import { NbosSelector } from 'components/molecules/NbosSelector'
import { NbosBarchart } from 'components/molecules/NbosBarchart'
import { outcomeMetricsTable } from 'stories/data/outcomeMetricsTable'

import { users } from 'stories/data/testData-users'
import { retrieveOutcomeMetricsData } from '@/store/outcomeMetricsSlice'
import { retrieveBehaviorMetricsData } from 'store/behaviorMetricsSlice'

import Grid from '@mui/material/Grid'
import React, { useEffect, useState, useRef } from 'react'

export function MetricsSummary() {
  const dispatch = useDispatchHook()
  const outcomeMetricsData = useAppSelector(
    state => state.outcomeMetricsData.outcomeMetricsData,
  )
  const behaviorMetricsData = useAppSelector(
    state => state.behaviorMetricsData.behaviorMetricsData,
  )
  const [dataDisplayed, setDataDisplayed] = useState('Outcome Metrics')
  const [data, setData] = useState(outcomeMetricsData)
  const [categories, setCategories] = useState([
    'Loan Production',
    'Deposit Growth',
    'TM Growth',
    'New Clients',
  ])

  const clientId = 1

  useEffect(() => {
    async function fetchdata() {
      await dispatch(retrieveOutcomeMetricsData())
      await dispatch(retrieveBehaviorMetricsData())
    }
    fetchdata()
  }, [])

  const handleClick = alignment => {
    setDataDisplayed(alignment)
  }

  useEffect(() => {
    if (dataDisplayed === 'Outcome Metrics') {
      setData(outcomeMetricsData)
      setCategories([
        'Loan Production',
        'Deposit Growth',
        'TM Growth',
        'New Clients',
      ])
    } else if (dataDisplayed === 'Behavior Metrics') {
      setData(behaviorMetricsData)
      setCategories([
        'Avg. Overall RM Satisfaction',
        'Client Calls',
        'Prospect Calls',
        'Strategies Updated',
      ])
    }
  }, [dataDisplayed, outcomeMetricsData])

  return (
    <div className="App boundry">
      <div className="App-line">
        <section className="App-Main">
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
                onChange={alignment => handleClick(alignment)}
              />
            </Grid>
            <Grid item xs={1} sm={2} md={2} lg={2} xl={2}>
              <NbosBarchart
                data={data}
                categories={categories}
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
