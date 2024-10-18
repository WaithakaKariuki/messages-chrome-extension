// Listen for messages from background.js
console.log('Content script loaded');
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "playSound") {
        // Play notification sound
        const audio = new Audio(chrome.runtime.getURL('sounds/notification.mp3'));
        audio.play().then(() => {
            console.log('Sound played successfully');
            sendResponse({ success: true });
        }).catch(error => {
            console.error('Error playing sound:', error);
            sendResponse({ success: false, error: error.message });
        });
        // Return true to keep the message port open for sendResponse
        return true;
    }
});