import React from 'react'

export default function Profile(){
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="border rounded p-4">
        <p className="text-sm text-gray-600">This is a dummy profile page. Integrate authentication/backend to show real user data.</p>
        <div className="mt-4">
          <div className="font-semibold">Name</div>
          <div className="text-gray-700">Guest User</div>
        </div>
      </div>
    </div>
  )
}
