import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react' // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS
import { NbosText } from 'components/atoms/NbosText'
import { NbosButton } from 'components/atoms/NbosButton'

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
  const [showFullPipe, setShowFullPope] = useState(false)

  const [rowData] = useState([...rdata.rdata])

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
  }

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
            borderBottom: 'solid 2px #1B6AF8',
            width: '10rem',
            padding: '.5rem',
            marginLeft: '1.2rem',
          }}
        >
          <NbosText text="Top 5 Opportunities" size="sm" bold="True" />
        </div>
        <AgGridReact
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
          <NbosText text="Show Full Pipeline" size="sm" color="#1B6AF8" />
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
