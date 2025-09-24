// API adapter: switch between mock data and real backend by changing `USE_MOCK`.
// To connect to a real backend, set USE_MOCK=false and implement fetch calls accordingly.

const USE_MOCK = true

const MOCK_PRODUCTS = [
  { id: 'p1', name: 'Apples (1kg)', description: 'Fresh red apples', price: '₹120', image: '/placeholder/apple.jpg' },
  { id: 'p2', name: 'Milk (1L)', description: 'Whole milk', price: '₹55', image: '/placeholder/milk.jpg' },
  { id: 'p3', name: 'Bread', description: 'Whole wheat bread', price: '₹40', image: '/placeholder/bread.jpg' },
  { id: 'p4', name: 'Eggs (6)', description: 'Farm fresh eggs', price: '₹70', image: '/placeholder/eggs.jpg' },
  { id: 'p5', name: 'Rice (5kg)', description: 'Basmati rice', price: '₹420', image: '/placeholder/rice.jpg' }
]

export async function fetchProducts(){
  if(USE_MOCK){
    // simulate network latency
    await new Promise(res=>setTimeout(res, 300))
    return MOCK_PRODUCTS
  }
  // Example: replace /api/products with your real endpoint
  const res = await fetch('/api/products')
  if(!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export async function placeOrder(order){
  if(USE_MOCK){
    await new Promise(res=>setTimeout(res, 400))
    return { success: true, orderId: 'MOCK-' + Math.floor(Math.random()*100000) }
  }
  const res = await fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  })
  if(!res.ok) throw new Error('Failed to place order')
  return res.json()
}
