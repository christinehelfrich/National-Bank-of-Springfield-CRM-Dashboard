import { TextField } from '@mui/material'
import Icon from '@mui/material/icon'
import PropTypes from 'prop-types'

export const NbosTextField = ({
  defaultValue,
  label,
  required,
  onChange,
  fullWidth,
  color,
}) => {
  return (
    <TextField
      defaultValue={defaultValue}
      id="outlined-basic"
      label={label}
      variant="outlined"
      style={{ margin: '1rem' }}
      required={required}
      onChange={onChange}
      fullWidth={fullWidth}
      color={color}
    />
  )
}

NbosTextField.propTypes = {
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  color: PropTypes.string,
}

NbosTextField.defaultProps = {
  defaultValue: 'No Default Provided',
  label: 'No Label Provided',
  required: false,
  onChange: e => {
    console.log(e)
  },
  fullWidth: false,
}
