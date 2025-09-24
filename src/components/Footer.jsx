import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-max py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Online Grocery — Built with ❤️
      </div>
    </footer>
  )
}
