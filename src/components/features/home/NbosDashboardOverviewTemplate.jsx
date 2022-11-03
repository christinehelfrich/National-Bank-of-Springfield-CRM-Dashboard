import { Nbos1Summary } from 'components/organisms/Nbos1Summary'
import { NbosClientOverview } from 'components/organisms/NbosClientOverview'
import { NbosProfile } from 'components/organisms/NbosProfile'
import { NbosSummary2 } from 'components/organisms/NbosSummary2'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import { client } from 'stories/data/testData-client'
import { summary1, summary2 } from 'stories/data/testData-summary'
import { user } from 'stories/data/testData-user'
import { grid } from '@mui/system'

export const NbosDashboardOverviewTemplate = () => {
  return (
    <Grid
      direction={'row'}
      container
      spacing={{ xs: 3, md: 3 }}
      columns={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}
      rows={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}
    >
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosProfile userData={user} />
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
        <NbosClientOverview pageData={client} />
        <Nbos1Summary pageData={summary1} />
        <NbosSummary2 pageData={summary2} />
      </Grid>
    </Grid>
  )
}

NbosDashboardOverviewTemplate.propTypes = {}

NbosDashboardOverviewTemplate.defaultProps = {}
