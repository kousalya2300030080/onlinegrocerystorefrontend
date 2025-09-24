import React from 'react'

export default function CartItem({item, onChangeQty, onRemove}){
  return (
    <div className="flex items-center gap-4 border p-3 rounded">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
      <div className="flex-1">
        <div className="font-semibold">{item.name}</div>
        <div className="text-sm text-gray-500">{item.price}</div>
        <div className="mt-2 flex items-center gap-2">
          <button onClick={()=>onChangeQty(item.id, item.qty - 1)} disabled={item.qty<=1} className="px-2 border rounded">-</button>
          <div>{item.qty}</div>
          <button onClick={()=>onChangeQty(item.id, item.qty + 1)} className="px-2 border rounded">+</button>
        </div>
      </div>
      <div>
        <button onClick={()=>onRemove(item.id)} className="text-red-600">Remove</button>
      </div>
    </div>
  )
}
