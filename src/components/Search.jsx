export default function Search({messageDispatch}) {
    return (
        <div className="sticky top-14 z-40 mx-4 mb-2">
            <div className="relative mt-1 flex items-center">
            <input
                onChange={(e) =>
                messageDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                })
                }
                placeholder="search message ..."
                type="text"
                name="search"
                id="search"
                className="block w-full h-7 rounded-md border-2 border-gray-400 pl-4 pr-12 shadow-md focus:border-indigo-500 focus:ring-indigo-500 text-md"
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </div>
            </div>
      </div>
    )
  }
