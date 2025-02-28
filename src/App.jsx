import React from 'react'
import RoutePages from './Routes/RoutesPages.jsx'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'


const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar />
      <RoutePages />
      <Footer />
    </div>
  )
}

export default App