import './style.css'

import { useAppSelector, useDispatchHook } from '@/hooks/useReduxHooks'

import { NbosText } from 'components/atoms/NbosText'
import { NbosTable } from 'components/molecules/NbosTable'

import { opportunitiesDetailsTable } from 'stories/data/opportunitiesDetailsTable'
import { retrieveOpportunitiesDetailsData } from 'store/opportunitiesDetailsSlice'

import React, { useEffect, useState } from 'react'

export function OpportunitiesDetails() {
  const [isShortened, setisShortened] = useState(true)

  const handleClick = e => {
    setisShortened(!isShortened)
  }

  const dispatch = useDispatchHook()

  const opportunitiesDetailsData = useAppSelector(
    state => state.opportunitiesDetailsData,
  )

  useEffect(() => {
    async function fetchdata() {
      await dispatch(retrieveOpportunitiesDetailsData())
    }
    fetchdata()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Opportunities Details</h1>
      </header>

      <div className="App-line">
        <div
          className="ag-theme-alpine ag-style"
          style={{
            margin: '2rem',
            width: '95%',
          }}
        >
          <div
            style={{
              borderBottom: isShortened ? 'solid 2px #1B6AF8' : '',
              width: '10rem',
              padding: '.5rem',
              marginLeft: '1.2rem',
            }}
          >
            <button onClick={handleClick}>
              <NbosText text="Top 5 Opportunities" size="sm" bold />
            </button>
          </div>

          <NbosTable
            data={opportunitiesDetailsData.opportunitiesDetailsData}
            rowHeight={80}
            isShortened={isShortened}
          />
          <div
            style={{
              textAlign: 'center',
              padding: '2rem',
              borderBottom: 'solid .5px #D3D3D3',
            }}
          >
            <button onClick={handleClick}>
              <NbosText
                text={isShortened ? 'Show Full Pipeline' : 'Shorten Pipeline'}
                size="sm"
                color="#1B6AF8"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
