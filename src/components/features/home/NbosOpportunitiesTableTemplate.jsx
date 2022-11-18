import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react' // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS
import { NbosText } from 'components/atoms/NbosText'
import { useEffect } from 'react'
import { useRef } from 'react'
import { convertNum, convertDate } from 'services/convertNum'
import { NbosTable } from 'components/molecules/NbosTable'

export const NbosOpportunitiesTableTemplate = (
  rdata,
  columnNames,
  rowNames,
  chartHeight,
  resizable,
  columnWidth,
  rowHeight,
  headerHeight,
) => {
  const gridRef = useRef()

  const [shortenPipe, setShortenPipe] = useState(true)

  const handleClick = e => {
    //console.log(shortenPipe)
    setShortenPipe(!shortenPipe)
    //console.log(shortenPipe)
    let value
    if (shortenPipe == true) {
      value = 5
    } else {
      value = 100
    }

    //gridRef.current.api.paginationSetPageSize(Number(value))
  }

  useEffect(() => {
    console.log(shortenPipe)
  }, [shortenPipe])

  return (
    <>
      <div
        className="ag-theme-alpine ag-style"
        style={{
          margin: '2rem',
          width: '95%',
        }}
      >
        <div
          style={{
            borderBottom: shortenPipe ? 'solid 2px #1B6AF8' : '',
            width: '10rem',
            padding: '.5rem',
            marginLeft: '1.2rem',
          }}
        >
          <button onClick={handleClick}>
            <NbosText text="Top 5 Opportunities" size="sm" bold={true} />
          </button>
        </div>

        <NbosTable
          data="opportunitiesDetailsTable"
          rowHeight={80}
          shortenPipe={shortenPipe}
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
              text={shortenPipe ? 'Show Full Pipeline' : 'Shorten Pipeline'}
              size="sm"
              color="#1B6AF8"
            />
          </button>
        </div>
      </div>
    </>
  )
}
// --ag-grid-size

NbosOpportunitiesTableTemplate.propTypes = {
  rdata: PropTypes.array,
  columnNames: PropTypes.array,
  rowNames: PropTypes.array,
  chartHeight: PropTypes.number,
  resizable: PropTypes.bool,
  columnWidth: PropTypes.number,
  rowHeight: PropTypes.number,
  headerHeight: PropTypes.number,
}

NbosOpportunitiesTableTemplate.defaultProps = {
  rdata: [{ 'Data Not Provided': 'Data Not Provided' }],
  columnNames: [{ field: 'Data Not Provided' }],
  rowNames: [{ field: 'Data Not Provided' }],
  chartHeight: 1600,
  resizable: false,
  columnWidth: 150,
  rowHeight: 50,
  headerHeight: 50,
}

{
  /* <NbosTable
data="opportunitiesDetailsTable"
rowHeight={80}
shortenPipe={true}
/> */
}
