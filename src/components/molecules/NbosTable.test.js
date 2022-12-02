import React from 'react'
import Enzyme, { render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { NbosTable } from './NbosTable'
import { PropaneSharp } from '@mui/icons-material'

Enzyme.configure({ adapter: new Adapter() })

describe('NbosTable', () => {
  it('should render the AG Grid element', () => {
    const wrapper = shallow(<NbosTable>This is my first test</NbosTable>)
    const paragraph = wrapper.find('AgGridReact')
    expect(paragraph).toHaveLength(1)
  })
})
