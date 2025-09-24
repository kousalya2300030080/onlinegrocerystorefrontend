import React from 'react'
import RoutesList from './routes.jsx'
import MainLayout from './layouts/MainLayout'
import { CartProvider } from './context/CartContext'

export default function App(){
  return (
    <CartProvider>
      <MainLayout>
        <RoutesList />
      </MainLayout>
    </CartProvider>
  )
}
