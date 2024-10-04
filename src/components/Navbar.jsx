import { Disclosure} from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({messageDispatch, messageState}) {
  console.log(messageState.sort)

  return (
    <Disclosure as="nav" className="sticky top-0 z-40 bg-gray-100 shadow">
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
                  <button
                  value="default"
                  onClick={(e) =>
                    messageDispatch({
                      type: "SORT",
                      payload: e.target.value,
                    })
                  }
                    href="#"
                    className=" inline-flex items-center border-b-2 border-indigo-200 hover:border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    All
                  </button>
                  <button
                  value="unread"
                  onClick={(e) =>
                    messageDispatch({
                      type: "SORT_BY_UNREAD",
                      payload: e.target.value,
                    })
                  }
                    href="#"
                    className=" inline-flex items-center border-b-2 hover:border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    Unread
                  </button>
                  <button
                  value="priority"
                  onClick={(e) =>
                    messageDispatch({
                      type: "SORT_BY_PRIORITY",
                      payload: e.target.value,
                    })
                  }
                    href="#"
                    className="inline-flex items-center border-b-2 hover:border-indigo-500 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Priority
                  </button>
                </div>
              </div>
            </div>
          </div>

        </>
      )}
    </Disclosure>
  )
}