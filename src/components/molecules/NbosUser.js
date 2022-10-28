export const NbosUser = ({ user }) => {
  let fullName = 'N/A'
  let teamLeadFullName = 'N/A'

  if (user) {
    const firstName = user.first_name
    const lastName = user.last_name
    fullName = `${firstName} ${lastName}`

    const teamLeadFirstName = user.tl_first_name
    const teamLeadLastName = user.tl_last_name
    teamLeadFullName = `${teamLeadFirstName} ${teamLeadLastName}`
  }

  return (
    <>
      <div>Full Name: {fullName}</div>
      <div>Team Lead Full Name: {teamLeadFullName}</div>
    </>
  )
}
