import React, { useState } from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render, screen } from '@testing-library/react'
import { opportunitiesDetailsTable } from 'stories/data/opportunitiesDetailsTable'

import { NbosTable } from './NbosTable'

Enzyme.configure({ adapter: new Adapter() })

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
  it('should render the AG Grid element', () => {
    const wrapper = shallow(<NbosTable>This is my first test</NbosTable>)
    const paragraph = wrapper.find('AgGridReact')
    expect(paragraph).toHaveLength(1)
  })

  it('should render the data in the table from the dataset', () => {
    renderTable()

    screen.getByText('Relationship 1')
    screen.getByText('$ 9.43 M')
  })
})
