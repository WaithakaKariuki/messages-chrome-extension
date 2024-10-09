  let badgeCount = 0;

  function addBadge() {
    badgeCount += 1;
    chrome.action.setBadgeText({ text: badgeCount.toString() });
    chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
    console.log("called badge")
  }



// Function to create a Chrome notification
function showNotification(title, message) {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: chrome.runtime.getURL('icon128.png'),  // Icon
    title: title,
    message: message,
    priority: 2
  });
  addBadge()
}

// Function to store the lastMessageId in chrome.storage.local
function saveLastMessageId(messageId) {
  chrome.storage.local.set({ lastMessageId: messageId }, function() {
    console.log('lastMessageId stored:', messageId);
  });
}

// Function to get the lastMessageId from chrome.storage.local
function getLastMessageId(callback) {
  chrome.storage.local.get('lastMessageId', function(result) {
    const lastMessageId = result.lastMessageId || null;
    console.log('lastMessageId retrieved:', lastMessageId);
    callback(lastMessageId);
  });
}

// Function to fetch the latest messages from json-server
async function fetchMessages() {
  try {
    const response = await fetch('http://localhost:3000/messages');
    const messages = await response.json();

    if (messages.length > 0) {
      const latestMessage = messages[messages.length - 1]; // Get the last message

      // Get the lastMessageId stored in Chrome storage
      getLastMessageId((storedLastMessageId) => {
        // Check if there's a new message by comparing the message ID
        if (storedLastMessageId === null || latestMessage.id !== storedLastMessageId) {
          // New message detected, show notification
          showNotification('New Message Received', latestMessage.message);
          
          // Update the stored lastMessageId
          saveLastMessageId(latestMessage.id);
        }
      });
    }
  } catch (error) {
    console.error('Error fetching messages:', error);
  }
}

// Set up polling using chrome.alarms
chrome.alarms.create('pollMessages', { periodInMinutes: 1 });  // Poll every 1 minute

// Listen for the alarm and trigger the polling function
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'pollMessages') {
    fetchMessages();  // Call the fetchMessages function when the alarm is fired
  }
});

// initialize the polling when the extension is installed or started
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create('pollMessages', { periodInMinutes: 1 });  // Set up polling again when installed
});

chrome.runtime.onStartup.addListener(() => {
  chrome.alarms.create('pollMessages', { periodInMinutes: 1 });  // Set up polling again on startup
});
