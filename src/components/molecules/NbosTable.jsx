import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react' // the AG Grid React Component
import { convertNum, convertDate, convertCurrency } from 'services/convertNum'
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS

import { useRef } from 'react'

export const NbosTable = ({
  data,
  resizable,
  columnWidth,
  rowHeight,
  headerHeight,
  isShortened,
}) => {
  const [allRowData, setAllRowData] = useState(
    isShortened ? data.slice(0, 5) : data,
  )
  let columnNames
  const formattedRows = []

  const gridRef = useRef()

  const [rowData, setRowData] = useState([...formattedRows])

  columnNames = [
    { field: 'Relationship' },
    { field: 'ProductType' },
    { field: 'SalesStage' },
    { field: 'Revenue', valueFormatter: convertCurrency },
    { field: 'DateClosed', valueFormatter: convertDate },
  ]

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
    animateRows: true,
    enableRangeSelection: false,
    headerHeight: headerHeight,
    rowHeight: rowHeight,
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
    // paginationPageSize: 5,
    // pagination: isShortened,
    // suppressPaginationPanel: true,
  }

  useEffect(() => {
    if (isShortened === true) {
      setAllRowData(data.slice(0, 5))
    }
    if (isShortened === false) {
      setAllRowData(data)
    }
  }, [isShortened])

  useEffect(() => {
    allRowData.map(item => {
      let row = {
        Relationship: `Relationship ${item.client_id}`,
        ProductType: item.product_type,
        SalesStage: item.sales_stage,
        Revenue: item.revenue,
        DateClosed: item.date_closed,
      }
      formattedRows.push(row)

      setRowData([...formattedRows])
    })
  }, [allRowData])

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
  data: PropTypes.array,
  resizable: PropTypes.bool,
  columnWidth: PropTypes.number,
  rowHeight: PropTypes.number,
  headerHeight: PropTypes.number,
  isShortened: PropTypes.bool,
}

NbosTable.defaultProps = {
  data: [
    {
      client_id: 0,
      client_name: 'No Data Provided',
      product_type: 'No Data Provided',
      sales_stage: 'No Data Provided',
      revenue: 0,
      date_closed: '2021-01-26T08:53:59Z',
    },
  ],
  resizable: false,
  columnWidth: 150,
  rowHeight: 50,
  headerHeight: 50,
  isShortened: true,
}
