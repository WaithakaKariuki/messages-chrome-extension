import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='grid grid-cols-[auto,1fr] gap-x-4 gap-y-8'>
        <Link
        to="/home"
        type="button"
        className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-3 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
      </Link>     
    </div>
  )
}

export default Navbar
