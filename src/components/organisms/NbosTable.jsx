import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react' // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS

export const NbosTable = () => {
  const [rowData] = useState([
    {
      Relationship: 'Relationship 1',
      ProductType: 'Loan',
      SalesStage: 'Opportunity',
      Revenue: '4.81',
      DateClosed: '1/1/2021',
    },
    {
      Relationship: 'Relationship 2',
      ProductType: 'Lease',
      SalesStage: 'Proposal',
      Revenue: '5.67',
      DateClosed: '2/1/2021',
    },
    {
      Relationship: 'Relationship 3',
      ProductType: 'Term Loan',
      SalesStage: 'Pending',
      Revenue: '4.18',
      DateClosed: '2/1/2021',
    },
    {
      Relationship: 'Relationship 4',
      ProductType: 'Revolving Credit',
      SalesStage: 'Pending',
      Revenue: '3.78',
      DateClosed: '2/1/2021',
    },
    {
      Relationship: 'Relationship 5',
      ProductType: 'Line of Credit',
      SalesStage: 'Commitment',
      Revenue: '3.78',
      DateClosed: '5/2/2021',
    },
  ])

  const [columnDefs] = useState([
    { field: 'Relationship' },
    { field: 'ProductType' },
    { field: 'SalesStage' },
    { field: 'Revenue' },
    { field: 'DateClosed' },
  ])

  //   const rowStyle = { background: 'black' }

  const getColumnStyle = params => {
    if (params.node.columnIndex % 2 === 0) {
      return { background: 'red' }
    }
  }

  return (
    <div className="ag-theme-alpine ag-style" style={{ height: 1600 }}>
      <AgGridReact
        // rowStyle={rowStyle}
        getColumnStyle={getColumnStyle}
        rowData={rowData}
        columnDefs={columnDefs}
        style={{ padding: '10px' }}
      ></AgGridReact>
    </div>
  )
}
// --ag-grid-size

NbosTable.propTypes = {}

NbosTable.defaultProps = {}
