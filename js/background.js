chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('preferences.html', {
  	'bounds': {
  		'width':400,
  		'height': 500
  	}
  });
});

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('mainpage.html', {
    'bounds': {
      'width': 400,
      'height': 500
    }
  });
});