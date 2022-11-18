import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react' // the AG Grid React Component
import { convertNum, convertDate } from 'services/convertNum'
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS

import { useRef } from 'react'
import { opportunitiesDetailsTable } from 'stories/data/opportunitiesDetailsTable'

export const NbosTable = ({
  data,
  resizable,
  columnWidth,
  rowHeight,
  headerHeight,
  shortenPipe,
}) => {
  let allRowsData
  let columnNames
  const formattedRows = []
  if (data == 'opportunitiesDetailsTable') {
    allRowsData = opportunitiesDetailsTable
    columnNames = [
      {
        field: 'Relationship',
      },
      { field: 'ProductType' },
      { field: 'SalesStage' },
      { field: 'Revenue' },
      { field: 'DateClosed' },
    ]
    allRowsData.map(item => {
      let row = {
        Relationship: `Relationship ${item.client_id}`,
        ProductType: item.product_type,
        SalesStage: item.sales_stage,
        Revenue: `$ ${convertNum(item.revenue)}`,
        DateClosed: convertDate(item.date_closed),
      }
      formattedRows.push(row)
    })
  } else {
    columnNames = [{ field: 'Data Not Provided' }]
    console.log('false')
  }

  const gridRef = useRef()

  const [rowData] = useState([...formattedRows])

  const [columnDefs] = useState([...columnNames])

  const gridOptions = {
    suppressMenuHide: true,
    defaultColDef: {
      width: columnWidth,
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
    headerHeight: headerHeight,
    rowHeight: rowHeight,
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

  useEffect(() => {
    console.log(gridOptions)
  }, [shortenPipe])

  return (
    <div
      className="ag-theme-alpine ag-style"
      style={{
        width: '100%',
        '--ag-borders': 'none',
        '--ag-borders-row': 'solid 1px',
      }}
    >
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
    </div>
  )
}
// --ag-grid-size

NbosTable.propTypes = {
  rdata: PropTypes.oneOf(['opportunitiesDetailsTable', '']),
  resizable: PropTypes.bool,
  columnWidth: PropTypes.number,
  rowHeight: PropTypes.number,
  headerHeight: PropTypes.number,
  shortenPipe: PropTypes.bool,
}

NbosTable.defaultProps = {
  rdata: '',
  resizable: false,
  columnWidth: 150,
  rowHeight: 50,
  headerHeight: 50,
  shortenPipe: true,
}
