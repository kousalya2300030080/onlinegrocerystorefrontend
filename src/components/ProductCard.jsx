import React from 'react'

export default function ProductCard({product, onAdd}){
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded mb-4" />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-500 flex-1">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-lg font-bold">{product.price}</div>
        <button onClick={()=>onAdd(product)} className="px-3 py-1 bg-green-600 text-white rounded">Add</button>
      </div>
    </div>
  )
}
