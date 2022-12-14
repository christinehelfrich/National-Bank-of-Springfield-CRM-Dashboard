import './style.css'

import { useAppSelector, useDispatchHook } from '@/hooks/useReduxHooks'

import ClipLoader from 'react-spinners/ClipLoader'
import { NbosText } from 'components/atoms/NbosText'
import { NbosTable } from 'components/molecules/NbosTable'

import { retrieveOpportunitiesDetailsData } from 'store/opportunitiesDetailsSlice'

import React, { useEffect, useState } from 'react'

export function OpportunitiesDetails() {
  const [isShortened, setisShortened] = useState(true)

  const handleClick = e => {
    setisShortened(!isShortened)
  }

  const dispatch = useDispatchHook()

  const opportunitiesDetailsData = useAppSelector(
    state => state.opportunitiesDetailsData.opportunitiesDetailsData,
  )

  const isLoading = useAppSelector(
    state => state.opportunitiesDetailsData.isLoading,
  )

  useEffect(() => {
    async function fetchdata() {
      await dispatch(retrieveOpportunitiesDetailsData())
    }
    fetchdata()
  }, [])

  return (
    <div className="App">
      <div className="App-line">
        <div
          className="ag-theme-alpine ag-style"
          style={{
            width: '100%',
          }}
        >
          <section className="App-Main">
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
            {isLoading ? (
              <ClipLoader
                color="blue"
                loading={isLoading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <NbosTable
                data={opportunitiesDetailsData}
                rowHeight={80}
                isShortened={isShortened}
              />
            )}

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
          </section>
        </div>
      </div>
    </div>
  )
}
