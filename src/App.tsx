import React from 'react';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <AllRoutes />
    </div>
  )
}

export default App