chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    localStorage['key'] = message.key; //store into extension's local storage
});