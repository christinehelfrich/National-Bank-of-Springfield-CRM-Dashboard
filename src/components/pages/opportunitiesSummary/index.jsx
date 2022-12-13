import './style.css'

import { useAppSelector, useDispatchHook } from '@/hooks/useReduxHooks'

import ClipLoader from 'react-spinners/ClipLoader'
import { NbosColumnChart } from 'components/molecules/NbosColumnChart'

import { retrieveOpportunitiesSummaryData } from 'store/opportunitiesSummarySlice'

import React, { useEffect, useState } from 'react'

export function OpportunitiesSummary() {
  const dispatch = useDispatchHook()

  const opportunitiesSummaryData = useAppSelector(
    state => state.opportunitiesSummaryData,
  )

  const isLoading = useAppSelector(
    state => state.opportunitiesSummaryData.isLoading,
  )

  useEffect(() => {
    async function fetchdata() {
      await dispatch(retrieveOpportunitiesSummaryData())
    }
    fetchdata()
  }, [])

  return (
    <div className="App">
      <div className="App-line">
        <section className="App-Main">
          {isLoading ? (
            <ClipLoader
              color="blue"
              loading={isLoading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
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
          )}
        </section>
      </div>
    </div>
  )
}
