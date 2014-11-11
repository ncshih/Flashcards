// this file opens windows when the chrome app starts.

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.app.window.create('preferences.html', {
//   	'bounds': {
//   		'width':400,
//   		'height': 500
//   	}
//   });
// });

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('mainpage.html', {
    'bounds': {
      'width': 400,
      'height': 500
    }
  });
});

//Initialization stuff


var topFolder = new Folder();
var currentDeck = new Deck();
topFolder.addDeck(currentDeck);
var currentFlashcard;
var previewFlashcard;
var FRONT;
var BACK;