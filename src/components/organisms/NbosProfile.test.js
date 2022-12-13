import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import { user } from 'stories/data/testData-user'
import { NbosProfile } from './NbosProfile'
import { convertDateInParams } from 'utilities/convertNum'

const ProfileWrapper = props => {
  return <NbosProfile userData={user} />
}

const renderProfile = props => {
  return render(<ProfileWrapper {...props} />)
}

describe('NbosProfile', () => {
  it('should display avatar', () => {
    renderProfile()
    const avatar = screen.getByAltText('avatar image')
    expect(avatar).toBeVisible
  })

  it('should display Name', () => {
    renderProfile()
    const name = String(
      screen.getByText(`${user.first_name} ${user.last_name}`).textContent,
    )
    expect(name).toBe('Bone Maides')
  })

  it('should display hire date in correct format', () => {
    renderProfile()
    const convertedDate = convertDateInParams(user.hire_date)
    const date = String(screen.getByText(convertedDate).textContent)
    expect(date).toBe('10/9/2017')
  })

  it('should display role', () => {
    renderProfile()
    const role = String(screen.getByText(user.role).textContent)
    expect(role).toBe('Commercial RM V')
  })

  it('should display team lead', () => {
    renderProfile()
    const tl = String(
      screen.getByText(`${user.tl_first_name} ${user.tl_last_name}`)
        .textContent,
    )
    expect(tl).toBe('Ferdinand Sifleet')
  })
})
