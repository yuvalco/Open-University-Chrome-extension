chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'sheilta.apps.openu.ac.il/pls/dmyopt2/course_info.courses'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()],
          
    }]);
  });
});