import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="space-y-6">
      <section className="bg-green-50 rounded p-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Fresh groceries delivered to your door</h1>
          <p className="text-gray-700 mt-2">Quality produce, pantry staples and everyday essentials.</p>
          <Link to='/products' className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded">Shop products</Link>
        </div>
        <img src="/placeholder/hero.jpg" alt="hero" className="w-1/3 object-cover rounded hidden md:block" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Popular items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Products will be on Products page; show a couple of placeholder cards */}
          <div className="border rounded p-4">
            <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">Apple</div>
            <div className="font-semibold">Apples (1kg)</div>
            <div className="text-sm text-gray-500">₹120</div>
          </div>
          <div className="border rounded p-4">
            <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">Milk</div>
            <div className="font-semibold">Milk (1L)</div>
            <div className="text-sm text-gray-500">₹55</div>
          </div>
          <div className="border rounded p-4">
            <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">Bread</div>
            <div className="font-semibold">Bread</div>
            <div className="text-sm text-gray-500">₹40</div>
          </div>
        </div>
      </section>
    </div>
  )
}
