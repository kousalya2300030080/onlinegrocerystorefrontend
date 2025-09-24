import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'
import { Link, useNavigate } from 'react-router-dom'

export default function CartPage(){
  const { cart, updateQty, removeItem, clear } = useCart()
  const navigate = useNavigate()

  const subtotal = cart.reduce((s,i)=>{
    const num = parseFloat(String(i.price).replace(/[^0-9.-]+/g,'')) || 0
    return s + num * i.qty
  },0)

  if(cart.length === 0) return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-semibold">Your cart is empty</h2>
      <Link to="/products" className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded">Shop products</Link>
    </div>
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item=>(
            <CartItem key={item.id} item={item} onChangeQty={updateQty} onRemove={removeItem} />
          ))}
          <div className="flex justify-between items-center mt-4">
            <button onClick={()=>clear()} className="px-3 py-2 border rounded">Clear cart</button>
            <button onClick={()=>navigate('/products')} className="px-3 py-2 border rounded">Continue shopping</button>
          </div>
        </div>
        <aside className="border rounded p-4">
          <div className="text-sm text-gray-500">Subtotal</div>
          <div className="text-2xl font-bold">₹{subtotal.toFixed(2)}</div>
          <button onClick={()=>navigate('/checkout')} className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded">Proceed to checkout</button>
        </aside>
      </div>
    </div>
  )
}
