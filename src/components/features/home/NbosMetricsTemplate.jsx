import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import { NbosSelector } from 'components/molecules/NbosSelector'
import { NbosBarchart } from 'components/molecules/NbosBarchart'
import { NbosText } from 'components/atoms/NbosText'
import { convertNum } from 'services/convertNum'

export const NbosMetricsTemplate = () => {
  return (
    <Grid
      direction={'row'}
      container
      spacing={{ xs: 3, md: 4 }}
      columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}
      rows={{ xs: 3, sm: 2, md: 2, lg: 2, xl: 2 }}
    >
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        xl={1}
        style={{ paddingTop: '3rem', paddingLeft: '3rem' }}
      >
        <NbosText size="xl" text="Patrick Barnes VS This Time Last Year" />
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosSelector
          bgColor="#1B6AF8"
          labels={['Outcome Metrics', 'Behavior Metrics']}
          onChange={alignment => {
            console.log(alignment)
          }}
        />
      </Grid>
      <Grid item xs={1} sm={2} md={2} lg={2} xl={2}>
        <NbosBarchart
          bgColor="#1B6AF8"
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
      </Grid>
    </Grid>
  )
}

NbosMetricsTemplate.propTypes = {}

NbosMetricsTemplate.defaultProps = {}
