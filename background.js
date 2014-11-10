chrome.app.runtime.onLaunched.addListener(function() {
  alert("just installed");
});

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 400,
      'height': 500
    }
  });
});