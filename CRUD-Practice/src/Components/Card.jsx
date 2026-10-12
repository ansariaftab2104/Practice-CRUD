import React from 'react'

const Card = ({user}) => {
  return (
    <div className='w-65 bg-zinc-800 p-3 rounded-md overflow-hidden text-zinc-100 flex flex-col'>
      <div className="image w-full h-50 rounded-md overflow-hidden">
        <img className='w-full h-full object-cover' src={user.image} alt="" />
      </div>
      <div className="details">
        <h2 className='text-lg font-semibold'>{user.name}</h2>
        <h4 className='text-base font-semibold'>{user.email}</h4>
        <h5 className='text-base font-semibold'>{user.phone}</h5>
      </div>
      <div className="buttons flex justify-between cursor-pointer">
        <div className="updateBtn bg-amber-600 rounded px-1 py-1 text-sm font-semibold">Update</div>
        <div className="deletBtn bg-red-700 rounded px-1 py-1 text-sm font-semibold">Delete</div>
      </div>
    </div>
  )
}

export default Card
