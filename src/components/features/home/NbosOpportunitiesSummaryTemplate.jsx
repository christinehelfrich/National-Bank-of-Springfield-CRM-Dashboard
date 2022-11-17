import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import { NbosColumnChart } from 'components/molecules/NbosColumnChart'
import { OpportunitiesSummaryTable } from '../../../stories/data/opportunitiesSummaryTable'

export const NbosOpportunitiesSummaryTemplate = () => {
  return (
    <NbosColumnChart
      data={OpportunitiesSummaryTable}
      bgColor="#1B6AF8"
      title="Current VS Same Time Last Year"
      yTitle="Revenue"
      categories={['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Booked YTD']}
      datasetOneLabel="2021"
      datasetTwoLabel="2020"
    />
  )
}

NbosOpportunitiesSummaryTemplate.propTypes = {}

NbosOpportunitiesSummaryTemplate.defaultProps = {}