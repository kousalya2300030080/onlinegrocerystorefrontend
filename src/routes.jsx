import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import Profile from './pages/Profile'

export default function RoutesList(){
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}
