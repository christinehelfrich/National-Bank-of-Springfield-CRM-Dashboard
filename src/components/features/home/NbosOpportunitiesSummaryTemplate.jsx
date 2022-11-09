import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import { NbosSelector } from 'components/molecules/NbosSelector'
import { NbosBarchart } from 'components/molecules/NbosBarchart'
import { NbosText } from 'components/atoms/NbosText'
import { convertNum } from 'services/convertNum'
import { NbosColumnChart } from 'components/molecules/NbosColumnChart'

export const NbosOpportunitiesSummaryTemplate = () => {
  return (
    <NbosColumnChart
      bgColor="#1B6AF8"
      title="Patrick Barnes VS This Time Last Year"
      categories={[
        'Avg. Overall RM Satisfaction',
        'Client Calls',
        'Prospect Calls',
        'Strategies Updated',
      ]}
      datasetOne={[4.2, 54, 2, 6]}
      datasetOneLabel="RM"
      datasetTwo={[5, 84, 11, 4]}
      datasetTwoLabel="This Time Last Year"
    />
  )
}

NbosOpportunitiesSummaryTemplate.propTypes = {}

NbosOpportunitiesSummaryTemplate.defaultProps = {}
