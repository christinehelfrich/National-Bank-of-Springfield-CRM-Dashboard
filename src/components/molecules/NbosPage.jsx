import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { NbosText } from '../atoms/NbosText'

const StyledCard = styled('div')(props => ({
  backgroundColor: props.bgcolor,
}))

export const NbosPage = ({ bgColor, title, count, elevation }) => {
  //   let cardAmount
  //   if (elevation === 1) {
  //     cardAmount = '100%'
  //   } else if (elevation === 2) {
  //     cardAmount = '50%'
  //   }
  return (
    <StyledCard
      bgcolor={bgColor}
      className="tw-flex tw-w-[100%] tw-h-[100%]"
      style={{ borderLeft: '.25px solid #eee' }}
    >
      <div
        style={{ padding: '2rem' }}
        className="tw-grow tw-flex tw-flex-col tw-justify-center tw-items-left"
      >
        <NbosText text={count} size="2xl" color="black" bold />
        <NbosText text={title} size="sm" uppercase color="grey" />
      </div>
    </StyledCard>
  )
}

NbosPage.propTypes = {
  bgColor: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number,
  elevation: PropTypes.number,
}

NbosPage.defaultProps = {
  bgColor: '#fff',
  title: 'Not Provided',
  count: 0,
  value: 0,
}
