import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import { Man } from 'components/atoms/NbosAvatar.stories'
import { NbosAvatar } from 'components/atoms/NbosAvatar'
import { NbosText } from 'components/atoms/NbosText'
import { convertDateInParams } from 'utilities/convertNum'
import { useEffect } from 'react'
export const NbosProfile = ({ userData }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 0, md: 0 }}
      columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
      style={{
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        textAlign: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <div
        style={{ padding: '1rem' }}
        className="tw-items-center tw-grow tw-flex tw-flex-col tw-justify-center tw-items-left"
      >
        <NbosAvatar
          size={90}
          url="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg"
        />
        <div style={{ margin: '1rem' }}>
          <NbosText size="sm" text="Name" color="grey" />
          <br />
          <NbosText
            size="lg"
            text={`${userData.first_name} ${userData.last_name}`}
          />
        </div>
        <div style={{ margin: '1rem' }}>
          <NbosText size="sm" text="Hire Date" color="grey" />
          <br />
          <NbosText size="lg" text={convertDateInParams(userData.hire_date)} />
        </div>
        <div style={{ margin: '1rem' }}>
          <NbosText size="sm" text="Role" color="grey" />
          <br />
          <NbosText size="lg" text={userData.role} />
        </div>
        <div style={{ margin: '1rem' }}>
          <NbosText size="sm" text="Team Lead" color="grey" />
          <br />
          <NbosText
            size="lg"
            text={`${userData.tl_first_name} ${userData.tl_last_name}`}
          />
        </div>
      </div>
    </Grid>
  )
}

NbosProfile.propTypes = {
  userData: PropTypes.object,
}

NbosProfile.defaultProps = {
  userData: {},
}
