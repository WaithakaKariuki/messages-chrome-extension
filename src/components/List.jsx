import { memo, useState, useEffect, useMemo } from 'react'
import Error from './Error'
import Messages from './Messages'

const List = memo(function List({messageState}) {
  const [messages, setMessages] = useState([])
  const [errors, setErrors] = useState([])

  function handleUpdateMessage(updatedMessage) {
    const updatedMessages = messages.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setMessages(updatedMessages);
  }

  useEffect(() => {
    
    const fetchDataAndStore = async () => {
      try {
        // Check if chrome.storage.local is available
        if (typeof chrome === "undefined" || !chrome.storage || !chrome.storage.local) {
          throw new Error('chrome.storage.local is not available in this context.');
        }

        // Retrieve data from chrome.storage.local
        chrome.storage.local.get("apiData", (result) => {
          setMessages(result.apiData);  // Update React state
        });
  
        // Fetch data from API
        const response = await fetch("http://localhost:3000/messages");
        const data = await response.json();
  
        // Save data to chrome.storage.local
        await chrome.storage.local.set({ "apiData": data });
        console.log('Data saved to chrome.storage:', data);
  
        // Retrieve data from chrome.storage.local
        chrome.storage.local.get("apiData", (result) => {
          const updatedMessages = data.map((message) => ({
            ...message,
            value: result[message.id] || "",  // Use value from storage if available
          }));
          setMessages(updatedMessages);  // Update React state
        });
        // setMessages(data)
      } catch (error) {
        console.error('Error fetching or saving data:', error);
        setErrors(error);
      }
    };
  
    fetchDataAndStore();
  }, []);

  const transformMessages = useMemo(() => 
    ()=>{
    let sortedMessages = messages;
  
    if (messageState.sort === "priority") {
      sortedMessages = sortedMessages.filter((message) => message.priority === "high");
    }

    if (messageState.sort  === "default") {
      sortedMessages = sortedMessages.sort((a, b) => b.id - a.id);
    }

    if (messageState.sort  === "unread") {
      sortedMessages = sortedMessages.filter((message) => message.read === false);
    }
    return sortedMessages
  
  }, [messages,messageState]);

  return (
   
      <div className="overflow-hidden bg-white shadow-lg sm:rounded-md">
      {
        errors.length>=1 &&
        (<Error errors={errors} />)
      }
        <dl className="divide-y divide-gray-200">
            {transformMessages().map((message) => (
          <Messages key={message.id} message={message} onUpdateMessage={handleUpdateMessage} />
        ))}
        </dl>
      </div>
  )
})
export default List


