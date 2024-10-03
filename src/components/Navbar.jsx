import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-100 shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-sm px-4 sm:px-6 lg:px-8">
            <div className="flex flex-shrink-0 justify-center text-lg font-semibold">
              <h1>My Messages</h1>
            </div>
            <div className="flex h-8 justify-center">
    
              <div className="flex">

                <div className=" sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#"
                    className=" inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    All
                  </a>
                  <a
                    href="#"
                    className=" inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    Unread
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Priority
                  </a>
                </div>
              </div>
            </div>
          </div>

        </>
      )}
    </Disclosure>
  )
}