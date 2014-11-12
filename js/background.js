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

var topFolder;
var currentDeck;
var currentFlashcard;
var FRONT;
var BACK;

//Initialization stuff
function init() {
	console.log("initted");
	var localshit = get();
	console.log(localshit);
	// for (obj in localshit) {
	// 	console.log(obj);
	// }

}







