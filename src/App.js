import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from './components/pages/home'
import { EditPage } from './components/pages/edit'
import { DashboardPage } from './components/pages/dashboard'
import { store } from './store'
import { Provider } from 'react-redux'
import './styles/index.css'
import { Todos } from 'components/pages/todos'
import { SummaryDashboard } from 'components/pages/summaryDashboard'
import { MetricsSummary } from 'components/pages/metricsSummary'
import { OpportunitiesSummary } from 'components/pages/opportunitiesSummary'
import { OpportunitiesDetails } from 'components/pages/opportunitiesDetails'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/summary-dashboard" element={<SummaryDashboard />} />
        <Route path="/metrics-summary" element={<MetricsSummary />} />
        <Route
          path="/opportunities-summary"
          element={<OpportunitiesSummary />}
        />
        <Route
          path="/opportunities-details"
          element={<OpportunitiesDetails />}
        />
      </Routes>
    </BrowserRouter>
  </Provider>
)

export default App
