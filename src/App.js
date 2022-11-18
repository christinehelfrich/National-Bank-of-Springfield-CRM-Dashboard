import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from './components/pages/home'
import { EditPage } from './components/pages/edit'
import { DashboardPage } from './components/pages/dashboard'
import { store } from './store'
import { Provider } from 'react-redux'
import './styles/index.css'
import { Todos } from 'components/pages/todos'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

export default App
