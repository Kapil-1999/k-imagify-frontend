import React, { useContext } from 'react'
import RoutePages from './Routes/RoutesPages.jsx'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import Login from './component/Login.jsx'
import { AppContext } from './context/AppContext.jsx'


const App = () => {
  const context = useContext(AppContext);
  if (!context) {
      return <p>Error: Context not found!</p>;
  }  
  const { showLogin } = context;
  return (
    <div className='px-4 sm:px-10 md:px-14  lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar />
      {showLogin && <Login />}
      <RoutePages />
      <Footer />
    </div>
  )
}

export default App