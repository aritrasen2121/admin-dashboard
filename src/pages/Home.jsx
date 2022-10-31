import React from 'react'
import Navbar from '../Components/Navbar'
import Dashboard from '../Components/Dashboard'
import ContextProvider from '../context/ContextProvider';

const Home = () => {
  return (
    <>
      <ContextProvider>
        <div className="flex">
          <Navbar />
          <Dashboard />
        </div>
      </ContextProvider>
    </>

  )
}

export default Home