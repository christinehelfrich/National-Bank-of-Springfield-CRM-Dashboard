import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react' // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS
import { NbosText } from 'components/atoms/NbosText'
import { NbosButton } from 'components/atoms/NbosButton'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'
import { convertNum, convertDate } from 'services/convertNum'

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
  const formattedRows = []
  rdata.rdata.map(item => {
    let row = {
      Relationship: `Relationship ${item.client_id}`,
      ProductType: item.product_type,
      SalesStage: item.sales_stage,
      Revenue: `$ ${convertNum(item.revenue)}`,
      DateClosed: convertDate(item.date_closed),
    }
    formattedRows.push(row)
  })

  const gridRef = useRef()

  const [shortenPipe, setShortenPipe] = useState(true)

  const [rowData] = useState([...formattedRows])

  const [columnDefs] = useState([...rdata.columnNames])

  const gridOptions = {
    suppressMenuHide: true,
    defaultColDef: {
      width: rdata.columnWidth,
      filter: 'number',
      sortable: true,
      //resizable: rdata.resizable,
      cellStyle: () => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }),
      flex: 1,
    },
    enableCharts: true,
    animateRows: true,
    enableRangeSelection: false,
    rowDragManaged: true,
    headerHeight: rdata.headerHeight,
    rowHeight: rdata.rowHeight,
    rowGroupPanelShow: 'always',
    pivotPanelShow: 'always',
    pivotColumnGroupTotals: 'before',
    pivotRowTotals: 'before',
    sideBar: {
      toolPanels: [
        {
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
        },
        {
          id: 'filters',
          labelDefault: 'Filters',
          labelKey: 'filters',
          iconKey: 'filter',
          toolPanel: 'agFiltersToolPanel',
        },
      ],
      defaultToolPanel: 'filters',
    },
    columnDefs,
    rowData,
    enableFillHandle: true,
    paginationPageSize: 5,
    pagination: shortenPipe,
    suppressPaginationPanel: true,
  }

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
    gridRef.current.api.paginationSetPageSize(Number(value))
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
          '--ag-borders': 'none',
          '--ag-borders-row': 'solid 1px',
        }}
      >
        <div
          style={{
            borderBottom: shortenPipe ? '' : 'solid 2px #1B6AF8',
            width: '10rem',
            padding: '.5rem',
            marginLeft: '1.2rem',
          }}
        >
          <button onClick={handleClick}>
            <NbosText text="Top 5 Opportunities" size="sm" bold={true} />
          </button>
        </div>
        <AgGridReact
          ref={gridRef}
          {...gridOptions}
          domLayout={'autoHeight'}
          style={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        ></AgGridReact>
        <div
          style={{
            textAlign: 'center',
            padding: '2rem',
            borderBottom: 'solid .5px #D3D3D3',
          }}
        >
          <button onClick={handleClick}>
            <NbosText
              text={shortenPipe ? 'Shorten Pipeline' : 'Show Full Pipeline'}
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
