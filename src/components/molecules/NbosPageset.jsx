import PropTypes from 'prop-types'
import { NbosPage } from './NbosPage'
import Grid from '@mui/material/Grid'

export const NbosPageset = ({ pageData }) => {
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
      container
      spacing={{ xs: 0, md: 0 }}
      columns={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}
      style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', margin: '1rem' }}
    >
      {results}
    </Grid>
  )
}

NbosPageset.propTypes = {
  pageData: PropTypes.object,
}

NbosPageset.defaultProps = {
  pageData: {},
}
