import Icon from '@mui/material/icon'
import PropTypes from 'prop-types'

export const NbosIcon = ({ icon, color, fontSize }) => {
  return <Icon sx={{ fontSize: { fontSize }, color: { color } }}>{icon}</Icon>
}

NbosIcon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
}

NbosIcon.defaultProps = {
  icon: 'warning',
  color: '#ff0000',
  fontSize: 48,
}
