// Function to create a notification
function createNotification(title, message) {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',  // Your icon here
      title: title,
      message: message,
      priority: 2
    });

    addBadge()
  }
  
  // Listen for completed web requests
  chrome.webRequest.onCompleted.addListener(
    function(details) {
      if (details.method === "POST" && details.url.includes('http://localhost:3000/messages')) {
        createNotification('Network Data Received', 'Data from example.com received successfully.');
      }
    },
    { urls: ["*://http://localhost:3000/messages/*"] }
  );
  
  let badgeCount = 0;

  function addBadge() {
    badgeCount += 1;
    chrome.action.setBadgeText({ text: badgeCount.toString() });
    chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
  }