import { Routes, Route } from 'react-router-dom'
import BoxListing from '../views/BoxListing'
import AddBox from '../views/AddBox'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BoxListing />} />
      <Route path="/AddBox" element={<AddBox />} />
    </Routes>
  )
}

export default AppRoutes
