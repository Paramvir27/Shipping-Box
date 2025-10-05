import { Routes, Route } from 'react-router-dom'
import BoxListingPage from '../pages/BoxListing'
import AddBoxPage from '../pages/AddBox'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BoxListingPage />} />
      <Route path="/AddBox" element={<AddBoxPage />} />
    </Routes>
  )
}

export default AppRoutes
