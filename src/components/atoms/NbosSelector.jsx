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

export const NbosSelector = ({
  bgColor,
  size,
  labelOne,
  labelTwo,
  onChange,
  ...props
}) => {
  const ToggleButton = styled(MuiToggleButton)(() => ({
    border: `.25px solid ${bgColor}`,
    color: bgColor,
    uppercase: false,
    padding: '.3rem 3rem .3rem',
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
  const [alignment, setAlignment] = React.useState(labelOne)

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
        <ToggleButton value={labelOne}>
          <NbosText
            style={{ marginTop: 20 }}
            text={labelOne}
            size="xs"
            color={toString(theme.palette.primary)}
          />
        </ToggleButton>
        <ToggleButton value={labelTwo}>
          <NbosText
            style={{ marginTop: 20 }}
            text={labelTwo}
            size="xs"
            color={toString(theme.palette.primary)}
          />
        </ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  )
}

NbosSelector.propTypes = {
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  labelOne: PropTypes.string.isRequired,
  labelTwo: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

NbosSelector.defaultProps = {
  bgColor: 'grey',
  onChange: undefined,
  labelOne: 'Not Provided one',
  labelTwo: 'Not Provided two',
  size: 'medium',
}
