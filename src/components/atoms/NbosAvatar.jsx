import Avatar from '@mui/material/Avatar'
import PropTypes from 'prop-types'

export const NbosAvatar = ({ variant, url, size }) => {
  return (
    <Avatar src={url} variant={variant} sx={{ width: size, height: size }} />
  )
}

NbosAvatar.propTypes = {
  variant: PropTypes.string,
  url: PropTypes.string,
  size: PropTypes.number,
}

NbosAvatar.defaultProps = {
  variant: 'solid',
  size: 60,
}
