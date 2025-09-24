import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }){
  const [cart, setCart] = useState([])

  function addItem(item){
    setCart(prev=>{
      const found = prev.find(p=>p.id===item.id)
      if(found){
        return prev.map(p=>p.id===item.id ? {...p, qty: p.qty + (item.qty||1)} : p)
      }
      return [...prev, {...item, qty: item.qty || 1}]
    })
  }

  function updateQty(id, qty){
    setCart(prev=>prev.map(p=>p.id===id ? {...p, qty: Math.max(1, qty)} : p))
  }

  function removeItem(id){
    setCart(prev=>prev.filter(p=>p.id!==id))
  }

  function clear(){
    setCart([])
  }

  return (
    <CartContext.Provider value={{cart, addItem, updateQty, removeItem, clear}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(){
  const ctx = useContext(CartContext)
  if(!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
