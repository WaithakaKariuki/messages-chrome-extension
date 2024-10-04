import { memo,  } from 'react'
import Error from './Error'
import Messages from './Messages'

const List = memo(function List({messages,errors}) {
  return (
   
      <div className="overflow-hidden bg-white shadow-lg sm:rounded-md">
      {
        errors.length>=1 &&
        (<Error errors={errors} />)
      }
      <Messages messages={messages} />
      </div>
  )
})
export default List


