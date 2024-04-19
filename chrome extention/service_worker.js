chrome.action.onClicked.addListener(function(tab) {
    chrome.scripting.executeScript({target: {tabId: tab.id}, files: ["turndown_service.js", "readability.js", "extention.js"]})
});