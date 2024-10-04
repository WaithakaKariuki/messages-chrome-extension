/*global chrome*/
import { Disclosure } from '@headlessui/react'
import {  BarsArrowUpIcon, EnvelopeIcon, PlayCircleIcon} from '@heroicons/react/20/solid'
import { CalendarIcon,EnvelopeOpenIcon, BarsArrowDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import Error from './Error'
import Messages from './Messages'


export default function List({messages,errors}) {

  function handleRead(e){
    // console.log(e.target.value)
    fetch("http://localhost:3000/messages",{
      method: "POST",
      headers :{
        'Content-Type':'application/json'
    },
    body: JSON.stringify("messageObj")
    })
  }

  return (
   
      <div className="overflow-hidden bg-white shadow-lg sm:rounded-md">
      {
        errors.length>=1 &&
        (<Error errors={errors} />)
      }
      <Messages messages={messages} />
      </div>
  )
}


