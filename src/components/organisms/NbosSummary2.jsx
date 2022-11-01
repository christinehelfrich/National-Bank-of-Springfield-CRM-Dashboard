import PropTypes from 'prop-types'
import { NbosPage } from '../molecules/NbosPage'
import Grid from '@mui/material/Grid'

export const NbosSummary2 = ({ pageData }) => {
  const results = []

  Object.keys(pageData).forEach(key => {
    results.push(
      <Grid key={key} item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosPage
          className="dbCard"
          bgColor={'white'}
          title={key}
          count={pageData[key]}
        />
      </Grid>,
    )
  })
  return (
    <Grid
      item
      zeroMinWidth
      container
      justifyContent="flex-end"
      alignItems="center"
      spacing={{ xs: 0, md: 0 }}
      columns={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}
      style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', margin: '1rem' }}
    >
      {/* {results} */}
      <Grid gridRow="span 2" item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosPage
          className="dbCard"
          bgColor={'white'}
          title={'TTM Revenue'}
          count={pageData['ttm_revenue']}
        />
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosPage
          className="dbCard"
          bgColor={'white'}
          title={'TTM Avg RAROC'}
          count={pageData['ttm_avg_raroc']}
        />
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosPage
          className="dbCard"
          bgColor={'white'}
          title={'Fee Equivalent + Card % of Loan Commit'}
          count={pageData['fee_equivalent_card_percent_load_commit']}
        />
      </Grid>
    </Grid>
  )
}

NbosSummary2.propTypes = {
  pageData: PropTypes.object,
}

NbosSummary2.defaultProps = {
  pageData: {},
}
