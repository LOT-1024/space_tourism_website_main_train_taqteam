import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Destination from '../pages/Destination';
import Crew from '../pages/Crew';

const AllRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/destination' element={<Destination />} />
      <Route path='/crew' element={<Crew />} />
    </Routes>
  )
}

export default AllRoutes