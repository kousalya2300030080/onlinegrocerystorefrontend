import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../utils/api'
import { useCart } from '../context/CartContext'

export default function Products(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { addItem } = useCart()

  useEffect(()=>{
    let mounted = true
    fetchProducts().then(data=>{
      if(mounted) setProducts(data)
    }).catch(()=>{}).finally(()=>mounted && setLoading(false))
    return ()=> mounted = false
  },[])

  if(loading) return <div>Loading products...</div>

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p=>(
          <ProductCard key={p.id} product={p} onAdd={(prod)=>addItem({...prod, qty:1})} />
        ))}
      </div>
    </div>
  )
}
