import PropTypes from 'prop-types'
import { NbosCardset } from '../molecules/NbosCardset'

export const NbosDashboard = ({ cards }) => {
  return <NbosCardset cards={cards} />
}

NbosDashboard.propTypes = {
  cards: PropTypes.array,
}

NbosDashboard.defaultProps = {
  cards: [],
}
