//import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import PropTypes from 'prop-types'
import { useState } from 'react'
import './button.css'
import { NbosText } from './NbosText'
import * as React from 'react'
import MuiToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import { useEffect } from 'react'

export const NbosLargeSelector = ({
  bgColor,
  size,
  labels,
  onChange,
  ...props
}) => {
  const ToggleButton = styled(MuiToggleButton)(({ selectedcolor }) => ({
    border: `.25px solid ${bgColor}`,
    color: bgColor,
    uppercase: false,
    padding: '.3rem 1.5rem .3rem',
    borderRadius: '16px',
    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'white',
      backgroundColor: bgColor,
    },
  }))

  const theme = createTheme({
    palette: {
      text: {
        primary: bgColor,
      },
    },
  })
  const [alignment, setAlignment] = React.useState('')

  function handleAlignment(event, newAlignment) {
    setAlignment(newAlignment)
  }

  useEffect(() => {
    onChange(alignment)
  }, [alignment])

  return (
    <ThemeProvider theme={theme}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        className={[`storybook-button--${size}`].join(' ')}
      >
        {labels.map(label => (
          <ToggleButton key={label} value={label}>
            <NbosText
              style={{ marginTop: 10 }}
              text={label}
              size="xs"
              color={toString(theme.palette.primary)}
            />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ThemeProvider>
  )
}

NbosLargeSelector.propTypes = {
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  labels: PropTypes.array.isRequired,
  onChange: PropTypes.func,
}

NbosLargeSelector.defaultProps = {
  bgColor: 'grey',
  onChange: undefined,
  labels: ['Not Provided'],
  size: 'medium',
}
