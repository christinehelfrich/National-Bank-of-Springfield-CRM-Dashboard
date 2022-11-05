import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react' // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS

export const NbosTable = (
  rdata,
  columnNames,
  chartHeight,
  resizable,
  columnWidth,
  rowHeight,
  headerHeight,
) => {
  const [rowData] = useState([...rdata.rdata])

  const [columnDefs] = useState([...rdata.columnNames])

  const gridOptions = {
    suppressMenuHide: true,
    defaultColDef: {
      width: rdata.columnWidth,
      filter: 'number',
      sortable: true,
      resizable: rdata.resizable,
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
    <div
      className="ag-theme-alpine ag-style"
      style={{ height: rdata.chartHeight }}
    >
      <AgGridReact {...gridOptions} style={{ padding: '10px' }}></AgGridReact>
    </div>
  )
}
// --ag-grid-size

NbosTable.propTypes = {
  rdata: PropTypes.array,
  columnNames: PropTypes.array,
  chartHeight: PropTypes.number,
  resizable: PropTypes.bool,
  columnWidth: PropTypes.number,
  rowHeight: PropTypes.number,
  headerHeight: PropTypes.number,
}

NbosTable.defaultProps = {
  rdata: [{ 'Data Not Provided': 'Data Not Provided' }],
  columnNames: [{ field: 'Data Not Provided' }],
  chartHeight: 1600,
  resizable: false,
  columnWidth: 150,
  rowHeight: 50,
  headerHeight: 50,
}
