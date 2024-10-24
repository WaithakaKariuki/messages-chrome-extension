export default function ReadAllMessages() {
    return (
      <fieldset className="border-t border-b border-gray-200 px-4 bg-gray-100 bg-gray-200 dark:bg-gray-800 border-t">
        <legend className="sr-only">Mark all messages as read</legend>
        <div className="divide-y divide-gray-200">
          <div className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-lg">
              <label htmlFor="comments" className="font-medium text-gray-900 dark:text-white tracking-tight">
              Mark all messages as read
              </label>
              <p id="comments-description" className="tracking-tighter text-xs text-gray-300">
                This action cannot be undone!
              </p>
            </div>
            <div className="ml-3 flex h-5 items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4.5 w-4.5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </fieldset>
    )
  }