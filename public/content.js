// Listen for messages from background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "playSound") {
      // Play notification sound
      const audio = new Audio(chrome.runtime.getURL('sounds/notification.mp3'));
      audio.play().catch((error) => {
        console.error("Failed to play sound: ", error);
      });
    }
  });