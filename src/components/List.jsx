/*global chrome*/
import { Disclosure } from '@headlessui/react'
import {  BarsArrowUpIcon, EnvelopeIcon, PlayCircleIcon} from '@heroicons/react/20/solid'
import { CalendarIcon,EnvelopeOpenIcon, BarsArrowDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'


export default function List({messages}) {

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
<dl  className="divide-y divide-gray-200">
  {messages.map((message) => (
    <Disclosure  as="div" key={message.id} value={message.id}  onClick={(e)=>handleRead(e)}>
      {({ open }) => (
        <>
        <dt>
          <div className="block hover:bg-gray-50">
            <div className="px-2 py-1.5 sm:px-2">
              <div className="flex items-center justify-between">
                <div className="sm:flex">
                {message.read == "false"?
                  (<p className="animate-pulse flex items-center text-sm text-green-800">
                    <EnvelopeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400 font-semibold" aria-hidden="true" />

                  </p>)
                  :
                  (<p className="flex items-center text-sm text-green-800">
                  </p>)
                } 
                </div>

                <div className="mt-1 flex items-center text-sm text-gray-500 sm:mt-0 border-b">
                  <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-blue-400" aria-hidden="true" />
                  <p>
                    <time dateTime={message.datetime}>{message.timestamp}</time>
                  </p>
                </div>

                <div className="ml-1 flex flex-shrink-0">
                  {message.priority == "high"?
                  (<p className="animate-pulse inline-flex rounded-full bg-green-200 px-2 text-xs font-semibold leading-5 text-green-800">
                  {message.priority}
                </p>)
                :
                (<p className=" inline-flex rounded-full bg-red-50 px-2 text-xs font-semibold leading-5 text-green-800">
                  {message.priority}
                </p>)
                  }
                  
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <p className="text-ellipsis mt-2 truncate text-sm font-medium text-indigo-600" >{(message.content).slice(0,10)}...</p>
                <Disclosure.Button 
                  
                  className="flex items-end justify-end text-sm text-gray-800 sm:mt-0 sm:ml-6 -mb-1">
                  {open ? (
                  <BarsArrowUpIcon className=" mr-1.5 h-5 w-5 flex-shrink-0 text-gray-800 justify-end" aria-hidden="true" />
                  
                  ) : (
                  <BarsArrowDownIcon className="h-6 w-6" aria-hidden="true" />
                  )}
                    
                  </Disclosure.Button>
              </div>
              <div className="mt-2 sm:flex sm:justify-center">
                  <Disclosure.Panel>
                    <p className="text-wrap mt-2 text-sm font-medium text-indigo-600">{message.content}</p>
                  </Disclosure.Panel>
              </div>
              
            </div>
          </div>
        </dt>
      </>
      )}
    </Disclosure>
  ))}
</dl>
</div>
  )
}


