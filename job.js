
 function changeColor() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {
            file: 'inject.js'
          });
  });
};


  changeColor();