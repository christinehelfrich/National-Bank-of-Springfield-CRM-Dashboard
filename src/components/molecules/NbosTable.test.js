import React, { useState } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { opportunitiesDetailsTable } from 'stories/data/opportunitiesDetailsTable'
import { getAllByColumnId, getAllByRowId } from 'utilities/test-utils'
import { NbosTable } from './NbosTable'

const TableWrapper = props => {
  return (
    <NbosTable
      data={opportunitiesDetailsTable}
      rowHeight={80}
      isShortened={false}
    />
  )
}

const renderTable = props => {
  return render(<TableWrapper {...props} />)
}

describe('NbosTable', () => {
  it('should render data from the database', () => {
    renderTable()
    opportunitiesDetailsTable.map(row => {
      expect(screen.getAllByText(row.product_type)).toBeVisible
    })
  })

  it('should sort by revenue on column label click', () => {
    const { container } = renderTable()
    const rev_button = screen.getByText('Revenue')
    fireEvent.click(rev_button)
    const firstRow = getAllByRowId(container, 2)
    const revenueRow = within(firstRow[1]).getAllByText('$ 49.30 K')
    expect(revenueRow).toBeVisible
  })

  it('should render only 5 rows when shortened', () => {
    const { container } = render(
      <NbosTable
        data={opportunitiesDetailsTable}
        rowHeight={80}
        isShortened={true}
      />,
    )
    const testColumn = getAllByColumnId(container, 2)
    expect(testColumn.length).toBe(6)
  })
})

// get requirements from acceptance criteria ******

// ** test driven development

// good unit tests test things available ot user and not only to the developer > getbytext is better than testid BECAUSE text is seen by user, not testid

// look up Kent C Dodds - react testing library creator and maintainer

// be cautious of wrappers, dont make too complicated. dont want to test outside scope of component

// create wrapper of global provider

// control everything in a great test. no side effects, etc

// using this setup might not hydrate in the redux store ** wrap in redux context

// lookout for bleeding. use the correct setup

// setup > assertion > tear down*

// should be cleaning up *** assert this ***

// stick to what they do in the docs, trying to be clever braeks things

// each test should be its own isolated block of code

// only need to render once

// react clurs the line between component tests and unit tests

// pure unit testing would be testing utilities testing
