import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import { Man } from 'components/atoms/NbosAvatar.stories'
import { NbosAvatar } from 'components/atoms/NbosAvatar'
import { NbosText } from 'components/atoms/NbosText'

export const NbosProfile = ({ userData }) => {
  const results = []

  Object.keys(userData).forEach(key => {
    results.push(
      <Grid key={key} item xs={1} sm={1} md={1} lg={1} xl={1}>
        <h1>{key}</h1>
        <h1>{userData[key]}</h1>
      </Grid>,
    )
  })
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 0, md: 0 }}
      columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
      style={{
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        margin: '1rem',
        textAlign: 'center',
        height: '95.5%',
      }}
    >
      <Grid key={userData['id']} item xs={1} sm={1} md={1} lg={1} xl={1}>
        <div
          style={{ alignItems: 'center', padding: '1rem' }}
          className="tw-grow tw-flex tw-flex-col tw-justify-center tw-items-left"
        >
          <NbosAvatar
            size={90}
            url="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg"
          />
          <div style={{ margin: '1rem' }}>
            <NbosText size="sm" text={'Name'} color="grey" />
            <br />
            <NbosText
              size="lg"
              text={userData['first_name'] + ' ' + userData['last_name']}
            />
          </div>
          <div style={{ margin: '1rem' }}>
            <NbosText size="sm" text={'Hire Date'} color="grey" />
            <br />
            <NbosText size="lg" text={userData['hire_date']} />
          </div>
          <div style={{ margin: '1rem' }}>
            <NbosText size="sm" text={'Role'} color="grey" />
            <br />
            <NbosText size="lg" text={userData['role']} />
          </div>
          <div style={{ margin: '1rem' }}>
            <NbosText size="sm" text={'Team Lead'} color="grey" />
            <br />
            <NbosText
              size="lg"
              text={userData['tl_first_name'] + ' ' + userData['tl_last_name']}
            />
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

NbosProfile.propTypes = {
  userData: PropTypes.object,
}

NbosProfile.defaultProps = {
  userData: {},
}
