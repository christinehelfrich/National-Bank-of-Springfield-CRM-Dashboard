import PropTypes from 'prop-types'
import { NbosCard } from './NbosCard'
import Grid from '@mui/material/Grid'

export const NbosCardset = ({ cards }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 4, md: 8, lg: 16, xl: 16 }}
    >
      {cards.map(card => (
        <Grid key={card.key} item xs={4} sm={4} md={4} lg={4} xl={4}>
          <NbosCard
            className="dbCard"
            bgColor={card.bgColor}
            title={card.title}
            count={card.count}
            icon={card.icon}
          />
        </Grid>
      ))}
    </Grid>
  )
}

NbosCardset.propTypes = {
  cards: PropTypes.array,
}

NbosCardset.defaultProps = {
  cards: [],
}
