import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import { opportunitiesDetailsTable } from 'stories/data/opportunitiesDetailsTable'

import { NbosTable } from './NbosTable'

const TableWrapper = props => {
  const [allRowData, setAllRowData] = useState(
    props.isShortened ? props.data.slice(0, 5) : props.data,
  )
  return (
    <NbosTable
      data={opportunitiesDetailsTable}
      rowHeight={80}
      isShortened={true}
    />
  )
}

const renderTable = props => {
  return render(<TableWrapper {...props} />)
}

describe('NbosTable', () => {
  it('should render correct data in the table from the test dataset', () => {
    renderTable()

    screen.getByText('Relationship 1')
    screen.getByText('$ 9.43 M')
  })
})
