import React from 'react'
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PLaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer'
import LogInPopup from './components/LogInPopup/LogInPopup';
import { useState } from 'react';


const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <LogInPopup setShowLogin={setShowLogin} /> : <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer />
    </>
   
  )
}

export default App