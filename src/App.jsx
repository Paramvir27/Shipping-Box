import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  )
}

export default App
