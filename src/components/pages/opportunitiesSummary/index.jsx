import './style.css'

import { useAppSelector, useDispatchHook } from '@/hooks/useReduxHooks'

import { NbosColumnChart } from 'components/molecules/NbosColumnChart'

import { retrieveOpportunitiesSummaryData } from 'store/opportunitiesSummarySlice'
import { OpportunitiesSummaryTable } from 'stories/data/opportunitiesSummaryTable'

import React, { useEffect, useState } from 'react'

export function OpportunitiesSummary() {
  const dispatch = useDispatchHook()

  const opportunitiesSummaryData = useAppSelector(
    state => state.opportunitiesSummaryData,
  )

  useEffect(() => {
    async function fetchdata() {
      await dispatch(retrieveOpportunitiesSummaryData())
    }
    fetchdata()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Opportunities Summary</h1>
      </header>

      <div className="App-line">
        <section className="App-main">
          <NbosColumnChart
            data={opportunitiesSummaryData.opportunitiesSummaryData}
            categories={[
              'Stage 1',
              'Stage 2',
              'Stage 3',
              'Stage 4',
              'Booked YTD',
            ]}
            yTitle="Revenue"
            bgColor="#1B6AF8"
            title="Current VS Same Time Last Year"
            datasetOneLabel="2021"
            datasetTwoLabel="2020"
          />
        </section>
      </div>
    </div>
  )
}
