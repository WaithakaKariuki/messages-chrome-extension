import { CheckIcon} from "@heroicons/react/24/solid"

export default function ReadAllMessages() {

    return (
        <>
            <fieldset className="border-t border-b border-gray-200 px-4 bg-gray-100 bg-gray-200 dark:bg-gray-800 border-t border-gray-800 dark:border-white">
                <legend className="sr-only">Mark all messages as read</legend>
                <div className="divide-y divide-gray-200">
                <div className="relative flex items-start py-4">
                    <div className="min-w-0 flex-1 text-lg">
                    <label htmlFor="comments" className="font-medium text-gray-900 dark:text-white tracking-tight">
                        Mark all messages as read
                    </label>
                    <p id="comments-description" className="tracking-tighter text-xs text-gray-800 dark:text-gray-200">
                    Once you mark all messages as read,  you cannot undo this action
                    </p>
                    </div>
                    <div className="ml-3 flex h-5 items-center self-center ">
                    <button
                        onClick={() => {
                            setShow(true)
                            }}
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <CheckIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                        Confirm
                    </button>
                    </div>
                </div>
                </div>
            </fieldset>
      </>
    )
  }