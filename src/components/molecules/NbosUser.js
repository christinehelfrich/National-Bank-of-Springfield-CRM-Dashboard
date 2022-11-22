import Grid from '@mui/material/Grid'
import { NbosText } from 'components/atoms/NbosText'

export const NbosUser = ({ user }) => {
  let id = 0
  let fullName = 'N/A'
  let teamLeadFullName = 'N/A'

  if (user) {
    const id = user.id
    const firstName = user.first_name
    const lastName = user.last_name
    fullName = `${firstName} ${lastName}`

    const teamLeadFirstName = user.tl_first_name
    const teamLeadLastName = user.tl_last_name
    teamLeadFullName = `${teamLeadFirstName} ${teamLeadLastName}`
  }

  return (
    <>
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
        <Grid key={id} item xs={1} sm={1} md={1} lg={1} xl={1}>
          <div
            style={{ alignItems: 'center', padding: '1rem' }}
            className="tw-grow tw-flex tw-flex-col tw-justify-center tw-items-left"
          >
            <div style={{ margin: '1rem' }}>
              <NbosText size="sm" text="Name" color="grey" />
              <br />
              <NbosText size="lg" text={fullName} />
            </div>

            <div style={{ margin: '1rem' }}>
              <NbosText size="sm" text="Team Lead" color="grey" />
              <br />
              <NbosText size="lg" text={teamLeadFullName} />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}
