/// background.js
/// https://developer.chrome.com/

// this code will break January 2023 due to the discontinued support of manifest v2

chrome.runtime.onInstalled.addListener(function() {

  // setup user preference storage
  chrome.storage.sync.set({doIt: true}, () => {});

  // setup extension's popup availability
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'canvas.oregonstate.edu'}
      }),
    ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

});
