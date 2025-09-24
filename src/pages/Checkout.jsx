import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { placeOrder } from '../utils/api'
import { useNavigate } from 'react-router-dom'

export default function Checkout(){
  const { cart, clear } = useCart()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name:'', address:'', payment:'COD' })
  const subtotal = cart.reduce((s,i)=>{
    const num = parseFloat(String(i.price).replace(/[^0-9.-]+/g,'')) || 0
    return s + num * i.qty
  },0)

  async function handlePlace(e){
    e.preventDefault()
    setLoading(true)
    try{
      const order = { customer: form, items: cart, total: subtotal }
      const res = await placeOrder(order)
      clear()
      navigate('/', { state: { success: true, orderId: res.orderId } })
    }catch(err){
      alert('Failed to place order')
    }finally{ setLoading(false) }
  }

  if(cart.length === 0) return <div className="text-center py-20">Your cart is empty.</div>

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handlePlace} className="space-y-4">
        <div>
          <label className="block text-sm">Full name</label>
          <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Address</label>
          <textarea required value={form.address} onChange={e=>setForm({...form, address:e.target.value})} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Payment</label>
          <select value={form.payment} onChange={e=>setForm({...form, payment:e.target.value})} className="w-full border rounded px-3 py-2">
            <option>COD</option>
            <option>UPI</option>
            <option>Card</option>
          </select>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Total</div>
          <div className="text-xl font-bold">₹{subtotal.toFixed(2)}</div>
        </div>
        <div>
          <button type="submit" disabled={loading} className="w-full px-4 py-2 bg-green-600 text-white rounded">{loading ? 'Placing...' : 'Place order'}</button>
        </div>
      </form>
    </div>
  )
}
