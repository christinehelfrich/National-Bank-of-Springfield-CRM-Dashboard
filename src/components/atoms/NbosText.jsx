import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'

const StyledText = styled('span')(props => ({
  color: props.color,
}))

export const NbosText = ({ text, size, uppercase, bold, color }) => {
  let textClass = `tw-text-${size}`
  textClass = bold ? `${textClass} tw-font-bold` : textClass
  textClass = uppercase ? `${textClass} tw-uppercase` : textClass

  return (
    <>
      <span className="tw-hidden tw-text-xs" />
      <span className="tw-hidden tw-text-sm" />
      <span className="tw-hidden tw-text-base" />
      <span className="tw-hidden tw-text-lg" />
      <span className="tw-hidden tw-text-xl" />
      <span className="tw-hidden tw-text-2xl" />
      <span className="tw-hidden tw-text-3xl" />
      <span className="tw-hidden tw-text-4xl" />
      <span className="tw-hidden tw-text-5xl" />
      <span className="tw-hidden tw-text-6xl" />
      <span className="tw-hidden tw-text-7xl" />
      <span className="tw-hidden tw-text-8xl" />
      <span className="tw-hidden tw-text-9xl" />
      <StyledText color={color} className={textClass}>
        {text}
      </StyledText>
    </>
  )
}

NbosText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'base',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
    '8xl',
    '9xl',
  ]),
  uppercase: PropTypes.bool,
  bold: PropTypes.bool,
  color: PropTypes.string,
}

NbosText.defaultProps = {
  text: 'Not Provided',
  size: 'base',
  uppercase: false,
  bold: false,
  color: '#000',
}
