import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar(){
  const { cart } = useCart()
  const qty = cart.reduce((s,i)=>s + i.qty, 0)
  return (
    <header className="bg-white shadow">
      <div className="container-max flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="bg-green-600 text-white font-bold px-3 py-2 rounded">GROCERY</Link>
          <span className="text-gray-700 font-semibold">Online Grocery</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
          <Link to="/cart" className="text-gray-600 hover:text-gray-900">Cart ({qty})</Link>
          <Link to="/profile" className="text-gray-600 hover:text-gray-900">Profile</Link>
        </nav>
      </div>
    </header>
  )
}
