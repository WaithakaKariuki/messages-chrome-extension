import React from 'react'

function Error({errors}) {
  return (
    <div>
        <ol className="pt-6 text-center">
            {errors&&errors.map((error, idx)=>(
                <li key={idx} className="text-sm font-medium text-red-600 dark:text-red-400">{error}</li>
            ))}
        </ol>
    </div>
  )
}

export default Error
