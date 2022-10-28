import PropTypes from 'prop-types'
import { NbosDashboard } from '../../organisms/NbosDashboard'

export const NbosDashboardTemplate = ({ cards }) => {
  return <NbosDashboard cards={cards} />
}

NbosDashboardTemplate.propTypes = {
  cards: PropTypes.array,
}

NbosDashboardTemplate.defaultProps = {
  cards: [],
}
