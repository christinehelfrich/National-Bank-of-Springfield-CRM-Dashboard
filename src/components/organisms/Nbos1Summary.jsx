import PropTypes from 'prop-types'
import { NbosPage } from '../molecules/NbosPage'
import Grid from '@mui/material/Grid'

export const Nbos1Summary = ({ pageData }) => {
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
          title={'TTM Avg Loan Balance'}
          count={pageData['ttm_avg_loan_balance']}
        />
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosPage
          className="dbCard"
          bgColor={'white'}
          title={'TTM Avg Credit Commitments'}
          count={pageData['ttm_avg_credit_commitments']}
        />
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosPage
          className="dbCard"
          bgColor={'white'}
          title={'TTM Deposit Balance'}
          count={pageData['ttm_deposit_balance']}
        />
      </Grid>
    </Grid>
  )
}

Nbos1Summary.propTypes = {
  pageData: PropTypes.object,
}

Nbos1Summary.defaultProps = {
  pageData: {},
}
