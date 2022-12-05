import logo from './logo.svg'
import { Counter } from '../../features/counter/Counter'
import { NbosHighcharts } from '../../molecules/NbosHighcharts'
import './style.css'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { SummaryDashboard } from '../summaryDashboard'
import { MetricsSummary } from '../metricsSummary'
import { OpportunitiesSummary } from '../opportunitiesSummary'
import { OpportunitiesDetails } from '../opportunitiesDetails'

export function HomePage() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              National Bank of Springfield
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <main className="tw-mt-8">
        <div className="tw-flex tw-px-[20px]">
          <aside className="tw-min-w-[5%]">
            <div className="tw-bg-slate-200 tw-h-screen" />
          </aside>
          <section className="tw-grow">
            <SummaryDashboard />
            <MetricsSummary />
            <OpportunitiesSummary />
            <OpportunitiesDetails />
          </section>
        </div>
      </main>
    </>
  )
}
