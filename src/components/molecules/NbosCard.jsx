import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { NbosIcon } from '../atoms/NbosIcon'
import { NbosText } from '../atoms/NbosText'

const StyledCard = styled('div')(props => ({
  backgroundColor: props.bgcolor,
}))

export const NbosCard = ({ bgColor, title, count, icon }) => {
  return (
    <StyledCard bgcolor={bgColor} className="tw-flex tw-w-full tw-h-[120px]">
      <div className="tw-min-w-[33%] tw-flex tw-justify-center tw-items-center">
        <NbosIcon icon={icon} color="#fff" bold />
      </div>
      <div className="tw-grow tw-flex tw-felx-col tw-justify-center tw-items-left">
        <NbosText text={count} size="3xl" color="#fff" bold />
        <NbosText
          style={{ marginTop: 20 }}
          text={title}
          size="lg"
          uppercase
          color="#fff"
        />
      </div>
    </StyledCard>
  )
}

NbosCard.propTypes = {
  bgColor: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number,
}

NbosCard.defaultProps = {
  bgColor: '#ff0000',
  title: 'Not Provided',
  value: 0,
}
